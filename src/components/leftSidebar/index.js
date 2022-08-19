import { Avatar } from "@mui/material";
import Button from "../globals/Button";
import React from "react";
import '../../styles/leftSidebar.css';
import { Tag, TurnedIn } from "@mui/icons-material";


function LeftSidebar() {
  return (
    <aside className="leftSidebar">
      <div className="leftSidebar__top">
        <div className="personal__info__card">
          <div className="user__cover__photo">
            <img
              src="https://media-exp1.licdn.com/dms/image/C5616AQGVUOdQ9TjhQg/profile-displaybackgroundimage-shrink_200_800/0/1614864033952?e=1666224000&v=beta&t=PRW6Uqg7PXnsOPz23Ue55dHqm2k5l1hT7CMHAvQ4YIA"
              alt=""
            />
          </div>
          <div className="user__avatar">
            <span className="user__avatar__icon">
              <Avatar />
            </span>
          </div>
          <div className="user__name__desg__wrap">
            <h3>Nazib Absar Talukdar</h3>
            <p>Frontend Developer</p>
          </div>
          <div className="personal__info__card__button__group">
            <a href="#" className="user__connections__link">
              <span>Connections</span>
              <span>Grow your Network</span>
            </a>
            <a href="#" className="user__viewedProfile__link">
              <span>Who viewed your profile</span>
            </a>
          </div>
          <div className="personal__info__card__button__group">
            <a href="#" className="leftSidebar__getPremium_link">
              <span>Access exclusive tools & insights</span>
              <span>Try Premium for free</span>
            </a>
            <Button text={'My Items'} Icon={TurnedIn} classes={'button__inline__icon'} />
          </div>
        </div>
      </div>
      <div className="leftSidebar__bottom">
        <div>
          <h3>Recents</h3>
          <div className="leftSidebar__tag_container">
            <Button Icon={Tag} classes={'button__inline__icon'} text={'socialmedia'} />
            <Button Icon={Tag} classes={'button__inline__icon'} text={'facebook'} />
            <Button Icon={Tag} classes={'button__inline__icon'} text={'leadership'} />
            <Button Icon={Tag} classes={'button__inline__icon'} text={'entrepreneurship'} />
            <Button Icon={Tag} classes={'button__inline__icon'} text={'marketing'} />
          </div>
        </div>
        <h3 className="catagory__link"><a href="#">Groups</a></h3>
        <h3 className="catagory__link"><a href="#">Events</a></h3>
        <div>
          <h3 className="catagory__link"><a href="#">Followed Hashtag</a></h3>
          <div className="leftSidebar__tag_container">
            <Button Icon={Tag} classes={'button__inline__icon'} text={'socialmedia'} />
            <Button Icon={Tag} classes={'button__inline__icon'} text={'facebook'} />
            <Button Icon={Tag} classes={'button__inline__icon'} text={'leadership'} />
            <Button Icon={Tag} classes={'button__inline__icon'} text={'entrepreneurship'} />
            <Button Icon={Tag} classes={'button__inline__icon'} text={'marketing'} />
            <Button Icon={Tag} classes={'button__inline__icon'} text={'technology'} />
            <a href="#" className="seeAll__link">See All</a>
          </div>
        </div>
        <a href="#" className="discoverMore__button">Discover More</a>
      </div>
    </aside>
  );
}

export default LeftSidebar;
