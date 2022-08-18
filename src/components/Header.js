import React from "react";
import "../styles/header.css";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../assets//icons/linkedin.png";
import HeaderOption from "./HeaderOption";
import {
  Home,
  SupervisorAccount,
  BusinessCenter,
  Chat,
  Notifications,
  Dialpad,
} from "@mui/icons-material";
import HeaderDropdown from "./HeaderDropdown";
import RightMenuBar from "./RightMenuBar";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="app__header">
          <div className="header__left">
            <div className="logo">
              <img src={Logo} alt="" />
            </div>
            <div className="header__search">
              <SearchIcon />
              <input type="search" placeholder="Search" />
            </div>
          </div>
          <div className="header__right">
            <div className="header__right__first">
              <HeaderOption Icon={Home} title={"Home"} />
              <HeaderOption
                Icon={SupervisorAccount}
                title={"My Network"}
              />
              <HeaderOption Icon={BusinessCenter} title={"Jobs"} />
              <HeaderOption Icon={Chat} title={"Messagging"} />
              <HeaderOption
                Icon={Notifications}
                title={"Notifications"}
              />
              <HeaderOption
                avatar={
                  "https://lh3.googleusercontent.com/ogw/AOh-ky1ObGa86oks6xQaIpcmoB52hUOOdv0K_70AQZdF=s32-c-mo"
                }
                title={"Nazib"}
                dropdown
                Content={HeaderDropdown}
                toggleClass="dropdown__open"
              />
            </div>
            <div className="header__right__second">
              <HeaderOption Icon={Dialpad} title={"Work"} dropdown Content={RightMenuBar} toggleClass="right__menubar__open" classes="offcanvas__sidebar"/>
              <p>
                <a href="#">
                Try Linkedin Premium for <br />
                Free
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
