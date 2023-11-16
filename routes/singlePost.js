//get a single post
const express = require("express");
const router = express.Router();
//initialize firebase database
const firestore = require("firebase/firestore");
//Create a reference to the database
const db = firestore.getFirestore();

router.get("/:postID", (req, res)=>{
    const postID = req.params.postID;
    const postQuery = firestore.getDoc(firestore.doc(db, "posts", post))

    postQuery
        .then((response)=>{
            res.send(response.data());
        })
        .catch((error)=>{
            res.send(error);
        });
});
 
module.exports = router;