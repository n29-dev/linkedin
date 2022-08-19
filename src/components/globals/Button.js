import React from "react";

function Button({ link, classes, text, secondText, Icon }) {
  return (
    <a href={link || "#"} className={`button ${classes ? classes : ''}`}>
      {Icon ? (
        <>
          <span className="button__icon">{<Icon/>}</span>
          <div>
            <span className="button__title">{text}</span>
            {secondText && <span className="button__title__second">{secondText}</span>}
          </div>
        </>
      ) :
      (<div>
        <span className="button__title">{text}</span>
        {secondText && <span className="button__title__second">{secondText}</span>}
      </div>)}
    </a>
  );
}

export default Button;
