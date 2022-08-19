import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import MainFeedSlide from './MainFeedSlide';
import Banner1 from '../assets/images/banner_1.png'
import Banner3 from '../assets/images/banner_3.png'
import Banner4 from '../assets/images/banner_4.png'
import Banner5 from '../assets/images/banner_5.png'

function MainFeedSlider() {
  return (
    <div className="mainFeed__slider__container">
    <h2>Prepare for your job search</h2>
    <div className="slider__container__inner">
      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <MainFeedSlide Banner={Banner1} paragraph={'Get notified when new jobs match your preferred title and location.'} buttonText={'Create Job Alert'} />
        </SwiperSlide>
        <SwiperSlide>
          <MainFeedSlide Banner={Banner5} paragraph={'Get notified instantly when recruiters contact you or when new jobs are posted.'} buttonText={'Get the App'} />
        </SwiperSlide>
        <SwiperSlide>
          <MainFeedSlide Banner={Banner3} paragraph={'Add more job preferences and choose who sees them to get more opportunities.'} buttonText={'Customize Prferences'} />
        </SwiperSlide>
        <SwiperSlide>
          <MainFeedSlide Banner={Banner4} paragraph={'Add more job preferences and choose who sees them to get more opportunities.'} buttonText={'Customize Prferences'} />
        </SwiperSlide>
        <SwiperSlide>
          <MainFeedSlide Banner={Banner1} paragraph={'Get notified when new jobs match your preferred title and location.'} buttonText={'Create Job Alert'} />
        </SwiperSlide>
        <SwiperSlide>
          <MainFeedSlide Banner={Banner5} paragraph={'Get notified instantly when recruiters contact you or when new jobs are posted.'} buttonText={'Get the App'} />
        </SwiperSlide>
        <SwiperSlide>
          <MainFeedSlide Banner={Banner3} paragraph={'Add more job preferences and choose who sees them to get more opportunities.'} buttonText={'Customize Prferences'} />
        </SwiperSlide>
        <SwiperSlide>
          <MainFeedSlide Banner={Banner4} paragraph={'Add more job preferences and choose who sees them to get more opportunities.'} buttonText={'Customize Prferences'} />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
  )
}

export default MainFeedSlider