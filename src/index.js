import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR30Ixo8XhQ4GkXaq4DbH4SYG9CsA7Ico",
  authDomain: "reactdfranco.firebaseapp.com",
  projectId: "reactdfranco",
  storageBucket: "reactdfranco.appspot.com",
  messagingSenderId: "1000378653487",
  appId: "1:1000378653487:web:c8816d9d3d44ed2a4c1fda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
