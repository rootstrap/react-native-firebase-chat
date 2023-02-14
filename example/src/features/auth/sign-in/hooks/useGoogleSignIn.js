import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { GlobalStore } from 'storage/stores';

const useGoogleSignIn = () => {
    GoogleSignin.configure({ 
        webClientId: '141653317717-3uhdbcir01cp4cg1ifu4l9c66ru90onl.apps.googleusercontent.com',
    });

    const onGoogleButtonPress = async () => {
        // Check if your device supports Google Play
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
    
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    
        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
    }

    const handleGoogleSignIn = ({user: {
        displayName: name, 
        email,
        photoURL,
        uid
    }}) => {
        GlobalStore.user.setValue({
            name, 
            email,
            photoURL,
            uid
        });
    }

    const handleSignOut = () => {
        GlobalStore.user.delete();
    }
    
    return { handleGoogleSignIn, handleSignOut, onGoogleButtonPress }
}

export default useGoogleSignIn
