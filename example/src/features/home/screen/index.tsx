import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import Button from 'common/Button';
import useGoogleSignIn from 'features/auth/sign-in/hooks/useGoogleSignIn';

import styles from './styles';
import type { HomePropTypes } from './types';


const HomeScreen: React.FunctionComponent<HomePropTypes> = ({ navigation: { navigate } }) => {
  const { handleSignOut } = useGoogleSignIn();
  const goToGeneralChat = () => navigate('GeneralChat');
  
  return (
  <SafeAreaView style={styles.container}>
    <Text accessibilityRole={'text'}>Home Screen</Text>
    <Button
      title="General Chat"
      onPress={goToGeneralChat}
    />
    <Button
      title="Sign Out"
      onPress={handleSignOut}
    />
  </SafeAreaView>
)};

export default HomeScreen;
