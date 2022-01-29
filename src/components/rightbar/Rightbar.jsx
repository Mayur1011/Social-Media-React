import React from "react";
import "./rightbar.css";
import { Users } from "./../../dummyData";
import Online from "../onlineFriends/Online";
// import Home from "../../pages/home/Home";

const Rightbar = ({ profile }) => {
  // Inner React Components
  const HomeRightBar = () => {
    return (
      <>
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
      </>
    );
  };
  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Country : </span>
            <span className="rightbarInfoValue">India </span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City : </span>
            <span className="rightbarInfoValue">Pune </span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship : </span>
            <span className="rightbarInfoValue">Single </span>
          </div>
        </div>
        {/*  */}
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assests/person/1.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName"> Sundar Pichai </span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assests/person/2.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName"> Sundar Pichai </span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assests/person/3.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName"> Sundar Pichai </span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assests/person/4.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName"> Sundar Pichai </span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assests/person/5.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName"> Sundar Pichai </span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assests/person/6.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName"> Sundar Pichai </span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {/* <ProfileRightBar /> */}
        {/* <HomeRightBar /> */}
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
};

export default Rightbar;
