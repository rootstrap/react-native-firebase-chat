export const listenToMessages = (firestore) =>
  firestore().collection("generalMessages").orderBy("createdAt");

export const createMessage = (firestore, user, message) =>
  firestore()
    .collection("generalMessages")
    .add({
      message,
      createdAt: new Date().getTime(),
      user: {
        _id: user.uid,
        name: user.name,
        photoURL: user.photoURL,
      },
    });
