import { useState } from 'react';
import './Post.css'
import { GrClose } from "react-icons/gr"
import { FiMessageSquare } from 'react-icons/fi';
import { BiLike, BiBookmark } from 'react-icons/bi';
import Comments from '../Comments/Comments';
import { Users } from '../../db';

const Post = ({ post, comments, onPostCommentsToggle }) => {

    const [likes, setLikes] = useState(post.likes);
    const [isLiked, setIsLiked] = useState(false);
    const [isDisplayed, setIsDisplayed] = useState(false);
    const [isSaved, setIsSaved] = useState(false)



    const likeHandler = () => {
        setLikes(!isLiked ? likes +1 : likes -1);
        setIsLiked(!isLiked);
    }

    const commentDisplayHandler = () => {
        setIsDisplayed(!isDisplayed);
    }

    const savePost = () => {
        setIsSaved(!isSaved);
    }

    

    return (
        <div className='post'>
            <div className='postMain'>
                <div className='postHeader'>
                    <div className='postHeaderLeftSide'>
                        <img alt="profile caption" src={process.env.PUBLIC_URL + Users.filter(u => u.id === post.userId)[0].profilePicture} className='userprofileImage'/>
                        <div className='postInfo'>
                            <p><span className='userName'>{Users.filter(u => u.id === post.userId)[0].username}</span><span> · </span><span className='followBtn'>Follow</span></p>
                            <p className='userTitle'><span>{Users.filter(u => u.id === post.userId)[0].jobRole}</span><span> · </span><span className='postTimeStamp'> {post.timeStamp}</span></p>
                        </div>
                    </div>
                    <div className='postHeaderRightSide'>
                        <GrClose className='closeIcon'/>
                    </div>
                </div>
                <div className='postBody'>
                    <p className='postTitleText'>{post.title}</p>
                    <p className='postBodyText'>{post?.body}</p>
                    {/* <div className='postReadMore'><span className='postReadMoreBtn'>Read more</span></div> */}
                </div>
            </div>
            <div className={`postFooter ${isDisplayed ? 'noBorderRadius' : '' }`}>
                <div className='footerLeftSide'>
                    <div className='postCommentIconHolder' id={post.id} onClick={commentDisplayHandler}>
                        <FiMessageSquare className='commentIcon' size='1.2rem'/>
                        <p>{post.comments.length}</p>
                    </div>
                    <div className='postLikes' onClick={likeHandler}>
                        <BiLike className={`likeIcon ${isLiked ? 'liked' : ''}`} size='1.2rem'/>
                        <p className={`likeCounter ${isLiked ? 'liked' : ''}`}>{likes}</p>
                    </div>
                </div>
                <div className='footerRightSide'>
                    <div className='postSave' onClick={savePost}>
                        <BiBookmark className={`saveIcon ${isSaved ? 'saved' : ''}`} size='1.2rem'/>
                    </div>
                </div>
            </div>
            <div className={`postComments ${!isDisplayed ? 'noDisplay' : ''}`}>
                <div className='postAComment'>
                    <img src={process.env.PUBLIC_URL + '/assets/profileImage.png'} alt='' className='profileImage' />
                    <textarea name='comment'  id='comment' placeholder='Write something...'></textarea>
                    <input className='postACommentBtn' type='submit' value='Post Comment'/>
                </div>
                <Comments comments={post.comments}/>
            </div>
        </div>
    )
}

export default Post;
