import React from "react";
import { Image, Text, View } from "react-native";

import styles from "./styles";

const Messages = ({ messages, user }) => (
  <View style={styles.messagesContainer}>
    {messages?.map(
      ({ message, user: { _id: userId, name, photoURL }, _id }) => {
        const isMyComment = user.uid === userId;

        return (
          <View style={styles.rowContainer({ isMyComment })}>
            {!isMyComment && (
              <Image source={{ uri: photoURL }} style={styles.userPhoto} />
            )}
            <View key={_id} style={styles.messageContainer({ isMyComment })}>
              <Text>{message}</Text>
              <Text>{name}</Text>
            </View>
          </View>
        );
      }
    )}
  </View>
);

export default Messages;
