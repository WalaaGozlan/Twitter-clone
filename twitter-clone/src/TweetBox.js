import React, { useState } from "react"
import "./TweetBox.css"
import { Avatar, Button } from "@material-ui/core";
import WalaaPic from "./walaaPic.jpg"
import db from "./firebase"

function TweetBox (){
  const[tweetMessage, setTweetMessage] = useState('');
  const[tweetImage, setTweetImage] = useState('');

  const sendTweet = e =>{
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Walaaoo Gozlan",
      userName:"wloo",
      verified:true,
      text: tweetMessage,
      avatar:  "https://previews.123rf.com/images/lukpedclub/lukpedclub1912/lukpedclub191200298/136302135-muslim-avatar-vector-illustration-muslim-people-flat-icon.jpg",
      image: tweetImage
    });
    setTweetMessage("");
    setTweetImage("");
  };

  
    return (
        <div className="tweetBox">
          <form>
              <div className="tweetBox__input">
                <Avatar src={WalaaPic} />
                <input 
                onChange={(e) => setTweetMessage(e.target.value)}
                value={tweetMessage} 
                placeholder="What's happening?" 
                type="text"></input>
              </div>
              <input 
              onChange={(e) => setTweetImage(e.target.value)}
              value={tweetImage}
              className="tweetBox__imageInput"
              placeholder="Optional: Enter image URL"
              type="text"></input>
              <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
          </form>
        </div>
    )
}

export default TweetBox;