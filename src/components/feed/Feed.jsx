import React from "react";
import "./feed.css";
import Share from "./../share/Share";
import Post from "./../post/Post";
import { Posts } from "./../../dummyData.js";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((_post) => (
          <Post key={_post.id} post={_post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Feed;
