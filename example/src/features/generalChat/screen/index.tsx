import styles from "./styles";
import type { GeneralChatPropTypes } from "./types";
import firestore from "@react-native-firebase/firestore";
import React from "react";
import { View, Text } from "react-native";
import { GeneralChat as GeneralFirebaseChat } from "react-native-firebase-chat";
import { GlobalStore } from "storage/stores";

const GeneralChat: React.FunctionComponent<GeneralChatPropTypes> = () => {
  const [user] = GlobalStore.user.useValueListener();

  return (
    <View style={styles.container}>
      <GeneralFirebaseChat firestore={firestore} user={user} />
    </View>
  );
};

export default GeneralChat;
