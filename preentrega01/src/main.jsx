import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJM6AxHwfGjE89Ro0PCJxj9hxlMNsTHh0",
  authDomain: "coderhouse-react-snavarro.firebaseapp.com",
  projectId: "coderhouse-react-snavarro",
  storageBucket: "coderhouse-react-snavarro.appspot.com",
  messagingSenderId: "1098155854055",
  appId: "1:1098155854055:web:ecf6f716995959ec147a42"
};

// Initialize Firebase
initializeApp(firebaseConfig);
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
