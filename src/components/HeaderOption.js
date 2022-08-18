import React, { useEffect, useRef, useState } from "react";
import "../styles//headerOption.css";
import { ArrowDropDown } from "@mui/icons-material";
import useClickOutside from "../hooks/useClickOutside";

function HeaderOption({ Icon, title, avatar, dropdown, Content, toggleClass = '', classes = ''}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useClickOutside(() => setShowDropdown(false));

  useEffect(() => {
    if(showDropdown){
      dropdownRef.current?.classList.add(toggleClass)
     }else{
      dropdownRef.current?.classList.remove(toggleClass)
     }
})

  return (
    <div
      className={`headerOption ${classes}`}
      onClick={() => {setShowDropdown(true)}}
      ref={dropdown ? dropdownRef : null}
    >
      {avatar && <img className="headerOption__icon" src={avatar} />}
      {Icon && <span className="headerOption__icon">{<Icon />}</span>}
      {dropdown || <h4 className="headerOption__title">{title}</h4>}
      {dropdown && (
        <>
          <div>
            <span className="headerOption__title">{title}</span>
            <span className="headerOption__dropdownIcon">
              <ArrowDropDown />
            </span>
          </div>
          <div className="headerOption__dropdownContainer">
            <Content />
          </div>
        </>
      )}
    </div>
  );
}

export default HeaderOption;
