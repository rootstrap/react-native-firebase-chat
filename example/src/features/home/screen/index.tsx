import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import Button from 'common/Button';
import useGoogleSignIn from 'features/auth/sign-in/hooks/useGoogleSignIn';

import styles from './styles';
import type { HomePropTypes } from './types';


const HomeScreen: React.FunctionComponent<HomePropTypes> = () => {
  const { handleSignOut } = useGoogleSignIn();
  
  return (
  <SafeAreaView style={styles.container}>
    <Text accessibilityRole={'text'}>Home Screen</Text>
    <Button
      title="Sign Out"
      onPress={handleSignOut}
    />
  </SafeAreaView>
)};

export default HomeScreen;
