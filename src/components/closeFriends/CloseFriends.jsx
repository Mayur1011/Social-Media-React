import React from "react";
import "./closeFriends.css";

const CloseFriends = (props) => {
  return (
    <li className="siderbarFriend">
      <img
        src={props.user.profilePicture}
        alt=""
        className="sidebarFriendImg"
      />
      <span className="sidebarFriendName">{props.user.username}</span>
    </li>
  );
};
export default CloseFriends;
