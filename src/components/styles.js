import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  generalChatContainer: {
    flex: 1,
    backgroundColor: "#caf8fc",
    width: "100%",
  },

  messagesContainer: {
    margin: 20,
  },

  rowContainer: ({ isMyComment }) => ({
    alignItems: "center",
    flexDirection: "row",
    justifyContent: isMyComment ? "flex-end" : "flex-start",
  }),

  messageContainer: ({ isMyComment }) => ({
    backgroundColor: isMyComment ? "#4b849c" : "skyblue",
    borderRadius: 10,
    margin: 10,
    padding: 15,
    width: "80%",
  }),

  userPhoto: {
    borderRadius: 15,
    height: 30,
    width: 30,
  },

  sendMessageContainer: {
    backgroundColor: "skyblue",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },

  messageInput: {
    borderColor: "blue",
    borderRadius: 10,
    borderWidth: 2,
    flex: 1,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },

  iconContainer: ({ pressed }) => ({
    backgroundColor: pressed ? "#485a5c" : "transparent",
    borderRadius: 25,
    marginRight: 10,
    padding: 10,
  }),

  sendMessageIcon: ({ disabled }) => ({
    tintColor: disabled ? "#485a5c" : "blue",
    height: 30,
    width: 30,
  }),
});

export default styles;
