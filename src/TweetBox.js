import React from 'react';
import './TweetBox.css';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

function TweetBox() {
    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox_input'>
                    <Avatar src='https://m.economictimes.com/thumb/msid-63556448,width-1200,height-900,
                    resizemode-4,imgsize-181909/there-is-nothing-pleasant-about-the-cute-yellow-rubber-duck.jpg' />
                    <input placeholder="What's happening?" type='text' />
                </div>
                <input className='tweetBox_imageInput'
                    placeholder="Optional: Enter image URL" type='text' />

                <Button className='tweetBox_tweetButton'>Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;