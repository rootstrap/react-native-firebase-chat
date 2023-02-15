import React from 'react'
import { SafeAreaView, Text } from 'react-native';

import styles from './styles'
import type { GeneralChatPropTypes } from './types';

const GeneralChat: React.FunctionComponent<GeneralChatPropTypes> = () => (
    <SafeAreaView style={styles.container}>
        <Text accessibilityRole={'text'}>General Chat Screen</Text>
    </SafeAreaView>
);

export default GeneralChat;
