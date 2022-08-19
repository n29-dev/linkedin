import { Avatar,  } from '@mui/material';
import {Add} from '@mui/icons-material';
import React from 'react'
import Button from '../globals/Button';
import '../../styles/rightSidebar.css';
import Banner from '../../assets/images/hiring.png'

function RightSidebar() {
  return (
    <div className='rightSidebar__container'>
      <div className="rightSidebar__top">
        <div className='rightSidebar__recommendations'>
          <h3>Add to your Feed</h3>
          <div className='rightSidebar__recommendations__inner'>
            <div className="recommeded">
              <Button Icon={Avatar} text={"Ettafah Iftia Annana"} secondText={'President at Generation Z'} classes={'account__button'}/>
              <Button Icon={Add} text={'Follow'} classes={'follow__button'}/>
            </div>
            <div className="recommeded">
              <Button Icon={Avatar} text={"Amirito Mondol"} secondText={'Job Consultant a Npark'} classes={'account__button'}/>
              <Button Icon={Add} text={'Follow'} classes={'follow__button'}/>
            </div>
            <div className="recommeded">
              <Button Icon={Avatar} text={"Shiko"} secondText={'E learning community'} classes={'account__button'}/>
              <Button Icon={Add} text={'Follow'} classes={'follow__button'}/>
            </div>
          </div>
          <a href="#" className='allRecommendations__link'>See All Recommendations</a>
        </div>
      </div>
      <div className="rightSidbar__bottom">
        <img src={Banner} alt="" />
        <h3><a href='#'>See who is hiring</a></h3>
      </div>
    </div>
  )
}

export default RightSidebar