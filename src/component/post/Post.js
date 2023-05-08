import { User } from '../../dummyData'
import './post.css'
import {useState} from 'react'

export default function Post({post}) {
    const [Like,setLike] = useState(post.like)
    const [isLike,setisLike] = useState(false)

    const likeHendlet = ()=>{
        setLike(isLike ? Like-1 : Like+1)
        setisLike(isLike? false: true)
    }
    return (
        <div className='post'>  
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className='postProfileImg' src={User.filter((u) => u.id === post.userId)[0].profilePicture} alt="" />
                        <span className="postUsername">{User.filter((u) => u.id === post.userId)[0].username}</span>
                        <span className="postDate">{post?.date}</span>
                    </div>
                    <div className="postTopRight">
                        <span className="material-icons">
                            more_vert
                        </span>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className='postImg' src={post?.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='likeIcone' src="/assets/like.png" onClick={likeHendlet} alt="" />
                        <img className='likeIcone' src="/assets/heart.png" onClick={likeHendlet} alt="" />
                        <span className="postLikeCounter">{Like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post?.comment} Comment</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
