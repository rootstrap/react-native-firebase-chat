import React from 'react'
import { SafeAreaView, Text } from 'react-native';
import { Test } from 'react-native-firebase-chat';

import styles from './styles'
import type { GeneralChatPropTypes } from './types';

const GeneralChat: React.FunctionComponent<GeneralChatPropTypes> = () => (
    <SafeAreaView style={styles.container}>
        <Text accessibilityRole={'text'}>General Chat Screen</Text>
        <Test />
    </SafeAreaView>
);

export default GeneralChat;
