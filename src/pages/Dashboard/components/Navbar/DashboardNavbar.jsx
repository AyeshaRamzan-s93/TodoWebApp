
import React from "react";
import "./DashboardNavbar.css";
import searchIcon from "../../../../assets/SearchICon.png"; // your search icon
import notificationIcon from "../../../../assets/Notifications.png"; // notification icon
import calIcon from "../../../../assets/Cal.png"; // calendar icon

function DashboardNavbar() {
  const today = new Date();
  const dayName = today.toLocaleDateString("en-US", { weekday: "long" });
  const dateStr = today.toLocaleDateString("en-GB"); // dd/mm/yyyy format

  return (
    <div className="dashboard-navbar-outer">
      <div className="dashboard-navbar-inner">
        {/* Left: Dashboard text */}
        <div className="navbar-left">
          <h2>Dash<span>board</span></h2>
        </div>

        {/* Center: Search */}
        <div className="navbar-center">
          <div className="search-box">
            <input type="text" placeholder="Search your task here..." />
            <img src={searchIcon} alt="search" className="search-icon" />
          </div>
        </div>

        {/* Right: Icons + Date */}
        <div className="navbar-right">
          <div className="icons">
            <img src={notificationIcon} alt="notification" className="icon" />
            <img src={calIcon} alt="calendar" className="icon" />
          </div>
          <div className="date">
            <span className="day">{dayName}</span>
            <span className="full-date">{dateStr}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardNavbar;
