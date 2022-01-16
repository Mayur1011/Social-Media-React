import React from "react";
import { MoreVert } from "@material-ui/icons";
import "./post.css";
const Post = () => {
  return (
    <div>
      <div className="post">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img
                className="postProfileImg"
                src="/assests/person/1.jpeg"
                alt="RandomImage"
              />
              <span className="postUserName">Mayur Pokharkar</span>
              <span className="postDate">5 mins ago</span>
            </div>
            <div className="postTopRight">
              <MoreVert></MoreVert>
            </div>
          </div>
          <div className="postCenter">
            <span className="postText">Hey, It's Me!!</span>
            <img
              className="postImg"
              src="assests/post/1.jpeg"
              alt=""
              srcset=""
            />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <img className="likeIcon" src="assests/heart.png" alt="" />
              <img className="likeIcon" src="assests/like.png" alt="" />
              <span className="postLikeCounter">32 people liked it</span>
            </div>
            <div className="postBottomRight">
              <span className="postCommentText">9 comments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
