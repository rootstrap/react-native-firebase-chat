import React from 'react';
import { View } from 'react-native';

import Button from 'common/Button';

import Logo from '../components/Logo';
import useGoogleSignIn from '../hooks/useGoogleSignIn';
import styles from './styles';
import { SignInPropTypes } from './types';


const SignInScreen: React.FunctionComponent<SignInPropTypes> = () => {
  const { handleGoogleSignIn, onGoogleButtonPress } = useGoogleSignIn();

  return (
  <View style={styles.container}>
    <Logo />
    <Button
      title="Google Sign-In"
      onPress={() => onGoogleButtonPress().then(handleGoogleSignIn)}
    />
  </View>
)};

export default SignInScreen;
