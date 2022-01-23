import React from "react";
import "./rightbar.css";
import { Users } from "./../../dummyData";
import Online from "../onlineFriends/Online";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assests/gift.png" alt="" />
          <span className="birthdayText">
            <b>Lisa Manoban</b> and <b>3 other</b> friends have a birthday
            today.
          </span>
        </div>
        <img src="/assests/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online</h4>
        <ul className="rightbarFriendList">
          {Users.map((_user) => (
            <Online key={_user.id} user={_user} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
