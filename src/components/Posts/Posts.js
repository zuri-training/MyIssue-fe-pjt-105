import Post from '../Post/Post';
import './Posts.css';
import { posts } from '../../db';

const Posts = () => {


    return (
        <div className='posts'>

            {posts.map((p) => {
               return <Post key={p.id} post={p} />
            })}

        </div>
    )
}

export default Posts;
