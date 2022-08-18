import { Avatar } from '@mui/material'
import Button from './Button'
import '../styles/mainFeed.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { CalendarMonth, InsertPhoto, PostAdd, SmartDisplay } from '@mui/icons-material'
import 'swiper/css';
import 'swiper/css/navigation';
import NewsFeedSlide from './NewsFeedSlide';
import Banner1 from '../assets/images/banner_1.png'
import Banner3 from '../assets/images/banner_3.png'
import Banner4 from '../assets/images/banner_4.png'
import Banner5 from '../assets/images/banner_5.png'


function MainFeed() {
  return (
    <div className='mainFeed__container'>
      <div className="addPost__container">
        <div className="addPost__input__avatar__container">
          <div className='addPost__avatar__container'>
            <Avatar />
          </div>
          <div className='addPost__inputBox__container'>
            <input type="text" placeholder='Start a post' />
          </div>
        </div>
        <div className='addPost__options__container'>
          <Button Icon={InsertPhoto} text={'Photo'} />
          <Button Icon={SmartDisplay} text={'Video'} />
          <Button Icon={CalendarMonth} text={'Event'} />
          <Button Icon={PostAdd} text={'Write Article'} />
        </div>
      </div>
      <div className="mainFeed__slider__container">
        <h2>Prepare for your job search</h2>
        <div className="slider__container__inner">
          <Swiper
            modules={[Navigation, Scrollbar]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <NewsFeedSlide Banner={Banner1} paragraph={'Get notified when new jobs match your preferred title and location.'} buttonText={'Create Job Alert'} />
            </SwiperSlide>
            <SwiperSlide>
              <NewsFeedSlide Banner={Banner5} paragraph={'Get notified instantly when recruiters contact you or when new jobs are posted.'} buttonText={'Get the App'} />
            </SwiperSlide>
            <SwiperSlide>
              <NewsFeedSlide Banner={Banner3} paragraph={'Add more job preferences and choose who sees them to get more opportunities.'} buttonText={'Customize Prferences'} />
            </SwiperSlide>
            <SwiperSlide>
              <NewsFeedSlide Banner={Banner4} paragraph={'Add more job preferences and choose who sees them to get more opportunities.'} buttonText={'Customize Prferences'} />
            </SwiperSlide>
            <SwiperSlide>
              <NewsFeedSlide Banner={Banner1} paragraph={'Get notified when new jobs match your preferred title and location.'} buttonText={'Create Job Alert'} />
            </SwiperSlide>
            <SwiperSlide>
              <NewsFeedSlide Banner={Banner5} paragraph={'Get notified instantly when recruiters contact you or when new jobs are posted.'} buttonText={'Get the App'} />
            </SwiperSlide>
            <SwiperSlide>
              <NewsFeedSlide Banner={Banner3} paragraph={'Add more job preferences and choose who sees them to get more opportunities.'} buttonText={'Customize Prferences'} />
            </SwiperSlide>
            <SwiperSlide>
              <NewsFeedSlide Banner={Banner4} paragraph={'Add more job preferences and choose who sees them to get more opportunities.'} buttonText={'Customize Prferences'} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default MainFeed;