import React, { useState } from 'react';
import './Header.css'
import logo from '../logo_final.svg'

const Header = () => {
    const [optionsVisible, setOptionsVisible] = useState(false);
    return (
             <div className="dashboardHeader">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="studentProfile">
        <img
          src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
          alt=""
          onClick={() => setOptionsVisible(!optionsVisible)}
        />
        <div className='options-container'>
        {optionsVisible && (
          <div className="options">
            <span>My Profile</span> <hr />
            <span>LogOut</span>
          </div>
          
        )}
      </div>
      </div>
    </div>
    );
};

export default Header;