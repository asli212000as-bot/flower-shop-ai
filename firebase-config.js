// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyAO--4dCSS14Y0lVQazuxEPpeLqCRqyom4",
  authDomain: "flower-shop-ai-639f1.firebaseapp.com",
  projectId: "flower-shop-ai-639f1",
storageBucket: "flower-shop-ai-639f1.appspot.com",

  messagingSenderId: "437901732734",
  appId: "1:437901732734:web:4bd8f7bd1b68e7892d212f"
};
if (typeof firebase !== 'undefined' && firebase.apps && !firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
