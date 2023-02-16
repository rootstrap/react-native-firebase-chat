import { StyleSheet } from "react-native";
import {
  BLUE,
  METALIC_BLUE,
  SKY_BLUE,
  SKY_BLUE_LIGHT,
} from "../constants/colors";

const styles = StyleSheet.create({
  generalChatContainer: {
    flex: 1,
    backgroundColor: SKY_BLUE_LIGHT,
    paddingBottom: 80,
    width: "100%",
  },

  messagesContainer: {
    margin: 15,
  },

  rowContainer: ({ isMyComment }) => ({
    alignItems: "center",
    flexDirection: "row",
    justifyContent: isMyComment ? "flex-end" : "flex-start",
  }),

  messageContainer: ({ addMargin, isMyComment, isSameUser }) => ({
    backgroundColor: isMyComment ? METALIC_BLUE : SKY_BLUE,
    borderRadius: 10,
    marginHorizontal: addMargin ? 40 : 10,
    marginTop: isSameUser ? 5 : 20,
    padding: 15,
    width: "70%",
  }),

  userPhoto: {
    borderRadius: 15,
    height: 30,
    width: 30,
  },

  userName: {
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 10,
  },

  message: {
    fontSize: 14,
    fontWeight: "400",
  },

  sendMessageContainer: {
    backgroundColor: SKY_BLUE,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },

  messageInput: {
    backgroundColor: SKY_BLUE_LIGHT,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },

  iconContainer: ({ pressed }) => ({
    backgroundColor: pressed ? METALIC_BLUE : "transparent",
    borderRadius: 25,
    marginRight: 10,
    padding: 10,
  }),

  sendMessageIcon: ({ disabled }) => ({
    tintColor: disabled ? METALIC_BLUE : BLUE,
    height: 30,
    width: 30,
  }),
});

export default styles;
