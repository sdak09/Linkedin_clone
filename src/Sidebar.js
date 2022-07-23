import { Avatar } from '@material-ui/core';
import React from 'react'
import './Sidebar.css';

function Sidebar() {
    const recentItem = (topic) => (
        <div className='Sidebar__recentItem'>
            <span className='Sidebar__hash'> #</span>
            <p> {topic} </p>
        </div>
    );
  return ( 
  <div className="Sidebar">
    <div className='Sidebar__top'>
         <img src="https://marketplace.canva.com/EAENvp21inc/1/0/1600w/canva-simple-work-linkedin-banner-qt_TMRJF4m0.jpg " alt=" "/> 
        <Avatar />
        <h2>Dakshita Sharma </h2>
        <h4> sharmadakshita808@gmail.com </h4>
    </div>

    <div className='Sidebar__stats'>
        <div className='Sidebar__stat'>
            <p>Who viewed your profile </p>
            <p className='Sidebar__statNumber'>2,458 </p>
        </div>
        <div className='Sidebar__stat'>
        <p>Views on post </p>
            <p className='Sidebar__statNumber'>7,260 </p>
        </div>
    </div> 

    <div className='Sidebar__bottom'>
        <p> Recent </p>
        {recentItem('Web Developer')}
        {recentItem('Programming')}
        {recentItem('Software Engineering')}
        {recentItem('ReactJs')}
        {recentItem('Design')}

     </div>

  </div>
  );

}

export default Sidebar