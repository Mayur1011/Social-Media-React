import React from "react";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import "./share.css";
const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="assests/person/1.jpeg" alt="" />
          <input placeholder="Write Something Here!!" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia className="shareIcon" htmlColor="lightgreen" />
              <span className="shareOptionText">Photo/Vedio</span>
            </div>
            <div className="shareOption">
              <Label className="shareIcon" htmlColor="red" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room className="shareIcon" htmlColor="blue" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions className="shareIcon" htmlColor="goldenrod" />
              <span className="shareOptionText">Emoji</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
};
export default Share;
