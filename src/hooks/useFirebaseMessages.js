import { useEffect, useState } from "react";
import { listenToMessages, createMessage } from "../firebase";

const useFirebaseMessages = ({ firestore, user }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const unsubscribe = listenToMessages(firestore).onSnapshot(
      (querySnapshot) => {
        const formattedMessages = querySnapshot.docs.map((doc) => {
          return {
            _id: doc.id,
            message: "",
            createdAt: new Date().getTime(),
            user: {},
            ...doc.data(),
          };
        });

        setMessages(formattedMessages);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  const changeNewMessage = (newValue) => setNewMessage(newValue);

  const handleOnSendMessage = () => {
    createMessage(firestore, user, newMessage);
    setNewMessage("");
  };

  return { messages, newMessage, changeNewMessage, handleOnSendMessage };
};

export default useFirebaseMessages;
