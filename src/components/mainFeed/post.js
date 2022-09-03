import React from 'react';
import { Avatar } from '@mui/material';
import { InsertComment, Public, Send, Shortcut, ThumbUpOffAlt } from '@mui/icons-material';
import Button from '../globals/Button';

function Post({message, userName, userDesignation, timestamp}) {
  return (
    <div>
        <div className='postMeta'>
            <div className="user__avatar">
                <Avatar/>
            </div>
            <div className='user__name__desg__time__wrap'>
                <h4>{userName}</h4>
                <p>{userDesignation}</p>
                <div className='timestamp__wrap'>
                    <span>{timestamp}</span>
                    <Public/>
                </div>
            </div>
        </div>
        <div className='postContent'>
            <p>{message}</p>
        </div>
        <div className="post__interact__options">
            <Button Icon={ThumbUpOffAlt} text={'Like'} classes={'post__interact__button'}/>
            <Button Icon={InsertComment} text={'Comment'} classes={'post__interact__button'}/>
            <Button Icon={Shortcut} text={'Share'} classes={'post__interact__button'}/>
            <Button Icon={Send} text={'Send'} classes={'post__interact__button'}/>
        </div>
    </div>
  )
}

export default Post
