const express = require('express');
const app = express();
const firebase = require("firebase/app");

//port
const port = 4000;


//our configuration information for firebase
const firebaseConfig = {
    apiKey: "AIzaSyBTqZPlz8IQ5E19Hdk95vDnsRCoFtPj0oE",
    authDomain: "exercise-five-37d0e.firebaseapp.com",
    projectId: "exercise-five-37d0e",
    storageBucket: "exercise-five-37d0e.appspot.com",
    messagingSenderId: "1014885374230",
    appId: "1:1014885374230:web:39d86f2bebbbaeed7a9837"
  };


  //initialize Firebase
firebase.initializeApp(firebaseConfig);

const indexRoute = require('./routes/index');
const singlePostRoute = require('./routes/singlePost');
const createPostRoute = require('./routes/createPost');

app.use("/",indexRoute);
app.use("/post", singlePostRoute);
app.use("/create", createPostRoute);


app.listen(port, () => {
    console.log(`Exercise Five on port ${port}`)
  });

