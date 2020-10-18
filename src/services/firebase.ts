import * as firebase from "firebase/app";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

firebase.initializeApp(config);

const auth = firebase.auth;
const firestore = firebase.firestore;
export default firebase;

export { auth, firestore };

export const generateUserDocument = async (
  user: firebase.User | null,
  additionalData: {}
) => {
  if (!user) return;
  const userRef = firestore().doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    const userType = "client";
    try {
      await userRef.set({
        displayName,
        email,
        userType,
        ...additionalData,
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
};
