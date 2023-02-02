import React, { forwardRef } from 'react';
import { Avatar } from '@mui/material';
import './Post.css';
import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat, VerifiedUserRounded } from '@mui/icons-material';

const Post = forwardRef(({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}, ref) => {
    return (
        <div className='post' ref={ref}>
            <div className='post_avatar'>
                <Avatar src={avatar} />
            </div>
            <div className='post_body'>
                <div className='post_header'>
                    <div className='post_headerText'>
                        <h3>
                            {displayName}{" "}
                            <span className='post_headerSpecial'>
                                {verified && <VerifiedUserRounded className='post_badge' />} @{username}
                            </span>
                        </h3>
                    </div>
                    <div className='post_headerDescription'>
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image}
                    alt='' />
                <div className='post_footer'>
                    <ChatBubbleOutline fontSize='small' />
                    <Repeat fontSize='small' />
                    <FavoriteBorder fontSize='small' />
                    <Publish fontSize='small' />
                </div>
            </div>
        </div>
    );
});

export default Post;