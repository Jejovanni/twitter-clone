import React from 'react';
import { Avatar } from '@mui/material';
import './Post.css';
import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat, VerifiedUserRounded } from '@mui/icons-material';

function Post({
    displaName,
    username,
    verified,
    text,
    image,
    avatar
}) {
    return (
        <div className='post'>
            <div className='post_avatar'>
                <Avatar src='https://www.daysoftheyear.com/wp-content/uploads/rubber-duckie-day-1.jpg' />
            </div>
            <div className='post_body'>
                <div className='post_header'>
                    <div className='post_headerText'>
                        <h3>
                            Jejovanni{" "}
                            <span className='post_headerSpecial'>
                                <VerifiedUserRounded className='post_badge' /> @duckdev
                            </span>
                        </h3>
                    </div>
                    <div className='post_headerDescription'>
                        <p>Having a blast on vacation rn. Idk if I want to go back to work.</p>
                    </div>
                </div>
                {/* <img src='https://media.tenor.com/KEwMALPQKg4AAAAC/giant-rubber-ducky-omg.gif'
                    alt='' /> */}
                <div className='post_footer'>
                    <ChatBubbleOutline fontSize='small' />
                    <Repeat fontSize='small' />
                    <FavoriteBorder fontSize='small' />
                    <Publish fontSize='small' />
                </div>
            </div>
        </div>
    );
}

export default Post;