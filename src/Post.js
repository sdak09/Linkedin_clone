import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';
import InputOption from './inputOption';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';

function Post({ name , description , message , photoUrl}) {
  return (
    <div className='post'> 
        <div className='post__header'>
            <Avatar />
        

            <div className='post__info'>
                <h2> Dakshita Sharma </h2>
                <p> Description</p>
            </div>
        </div>

            <div className='post__body'>
                <p> Message goes here</p> 
            </div>

        <div className='post__button'>
        <InputOption Icon={ThumbUpIcon} title ='Like'  color ='gray' />
        <InputOption Icon={CommentIcon} title ='Comment'  color ='gray' />
        <InputOption Icon={ShareIcon} title ='Share'  color ='gray' />
        <InputOption Icon={SendIcon} title ='Share'  color ='gray' />
        </div>

  
    



    </div>
  );
}

export default Post