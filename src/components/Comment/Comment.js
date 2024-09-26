import { useState } from 'react';
import './Comment.css';
import { BiLike } from 'react-icons/bi';
import { RiReplyLine } from 'react-icons/ri';
import { Users } from '../../db';

const Comment = ({ comment }) => {

    const [likes, setLikes] = useState(comment.likes);
    const [isLiked, setIsLiked] = useState(false);
    const [isDisplayed, setIsDisplayed] = useState(false);

    const likeHandler = () => {
        setLikes(!isLiked ? likes +1 : likes -1);
        setIsLiked(!isLiked);
    }

    const commentDisplayHandler = () => {
        setIsDisplayed(!isDisplayed);
    }

    

    return (
        <div className='comment'>
           <div className='commentHeader'>
                <div className='commentHeaderLeftSide'>
                    <img alt="user" src={process.env.PUBLIC_URL + Users.filter(u => u.id === comment.userId)[0].profilePicture} className='userprofileImage'/>
                    <div className='commentInfo'>
                        <p className='userName'>{Users.filter(u => u.id === comment.userId)[0].username}</p>
                        <p className='userTitle'>{Users.filter(u => u.id === comment.userId)[0].jobRole}<span> · </span><span className='postTimeStamp'>5 days ago</span></p>
                    </div>
                </div>
            </div>
            <div className='commentBody'>
                <p className='commentBodyText'>{comment.body}</p>
            </div>
            <div className='commentFooter'>
                <div className='commentfooterLeftSide'>
                    <div className='commentLikes' onClick={likeHandler}>
                        <BiLike className={`likeIcon ${isLiked ? 'liked' : ''}`} size='1.2rem'/>
                        <p className={`likeCounter ${isLiked ? 'liked' : ''}`}>{likes}</p>
                    </div>
                    <div className='commentReply' onClick={commentDisplayHandler}>
                        <RiReplyLine className='replyIcon' size='1.2rem'/>
                        <p>Reply</p>
                    </div>
                </div>
            </div>
            <div className={`commentReplies ${!isDisplayed ? 'noDisplay' : ''}`}>
                <div className='postAReply'>
                    <img src={process.env.PUBLIC_URL + '/assets/profileImage.png'} alt='' className='profileImage' />
                    <textarea name='reply'  id='reply' placeholder='Write something...'></textarea>
                    <input className='postAReplyBtn' type='submit' value='Reply'/>
                </div>
            </div>
        </div>
    )
}

export default Comment;
