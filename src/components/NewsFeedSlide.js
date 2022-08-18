import React from 'react';
import Button from './Button';

function NewsFeedSlide({Banner, paragraph, buttonText}) {
  return (
    <div className='newsFeedSlide__container'>
        <div className='slide__banner'>
            <img src={Banner} alt="slide-banner" />
        </div>
        <p>{paragraph}</p>
        <Button text={buttonText}/>
    </div>
  )
}

export default NewsFeedSlide;