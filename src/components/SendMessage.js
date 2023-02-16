import React from "react";
import { Image, Pressable, TextInput, View } from "react-native";

import styles from "./styles";

const SEND_ICON = require("../assets/icons/SendIcon.png");

const SendMessage = ({
  value,
  handleOnChangeValue,
  handleOnSendMessage,
  disabled,
}) => (
  <View style={styles.sendMessageContainer}>
    <TextInput
      placeholder="type your message..."
      style={styles.messageInput}
      value={value}
      onChangeText={handleOnChangeValue}
    />
    <Pressable
      onPress={handleOnSendMessage}
      style={styles.iconContainer}
      disabled={disabled}
    >
      <Image source={SEND_ICON} style={styles.sendMessageIcon({ disabled })} />
    </Pressable>
  </View>
);

export default SendMessage;
