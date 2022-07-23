import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption.js' ;
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';


const Header=() => {
  return (
    <div className="header">

    <div className="header__left">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiizhc0IgwwNNy4HBZZb
        jOtaJtu90y0Jlq-Q&usqp=CAU" alt=""/>

        <div className="header__search">
            < SearchIcon />
            <input type="text" placeholder='Search'/>
        </div>
    </div>

    <div className="header__right">
      <HeaderOption Icon={HomeIcon} title="Home" />
      <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/> 
      <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
      <HeaderOption Icon={ChatIcon} title="Messaging"/>
      <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
      <HeaderOption
       avatar=" https://media-exp1.licdn.com/dms/image/C5603AQGbaaasSQ1WpA/profile-displayphoto-shrink_800_800/0/1626836601958?e=1663804800&v=beta&t=3L1fas5F0W6NdeaIm9SATeEeb1n3Z0FzVDusGT6rwNQ" title="Me" />
    </div>

    </div>
  );
}

export default Header;
 