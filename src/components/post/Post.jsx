import React from "react";
import { MoreVert } from "@material-ui/icons";
import { useState } from "react";
import { Users } from "../../dummyData";
import "./post.css";

const Post = (props) => {
  const [like, setLike] = useState(props.post.like);
  const [liked, setLiked] = useState(false);
  const likeHandler = () => {
    setLike(liked ? like - 1 : like + 1);
    setLiked(liked ? false : true);
  };
  const user = Users.filter((_user) => _user.id === props.post.userId);
  return (
    <div>
      <div className="post">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img
                className="postProfileImg"
                src={user[0].profilePicture}
                alt="RandomImage"
              />
              <span className="postUserName">{user[0].username}</span>
              <span className="postDate">{props.post.date}</span>
            </div>
            <div className="postTopRight">
              <MoreVert></MoreVert>
            </div>
          </div>
          <div className="postCenter">
            <span className="postText">{props.post?.desc}</span>
            <img className="postImg" src={props.post.photo} alt="" />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <img
                className="likeIcon"
                src="assests/heart.png"
                onClick={likeHandler}
                alt=""
              />
              <img
                className="likeIcon"
                src="assests/like2.png"
                onClick={likeHandler}
                alt=""
              />
              <span className="postLikeCounter">{like} people liked it</span>
            </div>
            <div className="postBottomRight">
              <span className="postCommentText">
                {props.post.comment} comments
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
