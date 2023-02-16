import React from "react";
import { View } from "react-native";

import Messages from "./Messages";
import SendMessage from "./SendMessage";
import styles from "./styles";
import useFirebaseMessages from "../hooks/useFirebaseMessages";

const GeneralChat = ({ firestore, user }) => {
  const { messages, newMessage, changeNewMessage, handleOnSendMessage } =
    useFirebaseMessages({ firestore, user });

  return (
    <View style={styles.generalChatContainer}>
      <Messages messages={messages} user={user} />
      <SendMessage
        value={newMessage}
        handleOnChangeValue={changeNewMessage}
        handleOnSendMessage={handleOnSendMessage}
        disabled={!newMessage}
      />
    </View>
  );
};

export default GeneralChat;
