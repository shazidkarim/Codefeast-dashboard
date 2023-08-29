import React from 'react';
import { Link } from 'react-router-dom';
import { FaBookOpen, FaWallet } from 'react-icons/fa';
import './DashBoard.css'


const DashBoard = () => {
    return (
        <div className="dashboard-container">
        <div className="side-navigation">
          <h2 className="dashboard-heading">Dashboard</h2>
          <ul className="menu">
            <li>
              <Link to="/">
                <FaWallet className="menu-icon" /> Enroll Courses
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaBookOpen className="menu-icon" /> All Courses
              </Link>
            </li>
          </ul>

          
        </div>
        <div className="main-content">
            <h1>all courses</h1>
        </div>
      </div>
    );
};

export default DashBoard;