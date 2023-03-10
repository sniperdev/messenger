import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
	apiKey: "AIzaSyArD2AxHz_SnfTrCe6MxyT9yZR6wUgUG2A",
	authDomain: "messenger-app-a87bd.firebaseapp.com",
	projectId: "messenger-app-a87bd",
	storageBucket: "messenger-app-a87bd.appspot.com",
	messagingSenderId: "84435416925",
	appId: "1:84435416925:web:4168d80359ab4324bcdab4",
};
export const app = initializeApp(firebaseConfig);

export const google = new GoogleAuthProvider();
export const facebook = new FacebookAuthProvider();
export const github= new GithubAuthProvider();
export const auth = getAuth();