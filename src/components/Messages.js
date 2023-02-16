import React from "react";
import { Image, Text, View } from "react-native";

import styles from "./styles";

const Messages = ({ messages, user }) => {
  const renderMessages = () => {
    let currentUser = "";

    return messages?.map(
      ({ message, user: { _id: userId, name, photoURL }, _id }) => {
        let isSameUser = currentUser === userId;
        if (!isSameUser) {
          currentUser = userId;
        }

        const isMyComment = user.uid === userId;
        const showUserInfo = !isSameUser && !isMyComment;

        return (
          <View style={styles.rowContainer({ isMyComment })}>
            {showUserInfo && (
              <Image source={{ uri: photoURL }} style={styles.userPhoto} />
            )}
            <View
              key={_id}
              style={styles.messageContainer({
                addMargin: !showUserInfo && !isMyComment,
                isMyComment,
                isSameUser,
              })}
            >
              {showUserInfo && <Text style={styles.userName}>{name}</Text>}
              <Text style={styles.message}>{message}</Text>
            </View>
          </View>
        );
      }
    );
  };

  return <View style={styles.messagesContainer}>{renderMessages()}</View>;
};

export default Messages;
