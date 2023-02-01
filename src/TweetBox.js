import React, { useState } from 'react';
import './TweetBox.css';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import db from './firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Jejovanni',
            username: 'jerman_sher',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 'https://m.economictimes.com/thumb/msid-63556448,width-1200,height-900,resizemode-4,imgsize-181909/there-is-nothing-pleasant-about-the-cute-yellow-rubber-duck.jpg'
        });

        setTweetMessage(''); 
        setTweetImage('');
    };

    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox_input'>
                    <Avatar src='https://m.economictimes.com/thumb/msid-63556448,width-1200,height-900,
                    resizemode-4,imgsize-181909/there-is-nothing-pleasant-about-the-cute-yellow-rubber-duck.jpg' />
                    <input
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's happening?"
                        type='text' />
                </div>
                <input
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    className='tweetBox_imageInput'
                    placeholder="Optional: Enter image URL" 
                    type='text' />

                <Button onClick={sendTweet} className='tweetBox_tweetButton'>Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;