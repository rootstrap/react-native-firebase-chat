export const listenToMessages = (firestore) =>
  firestore().collection("generalMessages").orderBy("createdAt");

export const createMessage = (firestore, user, message) =>
  console.log("user: ", user) ||
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
