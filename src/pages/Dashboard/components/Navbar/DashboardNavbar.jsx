

// import "./DashboardNavbar.css";
// import searchIcon from "../../../../assets/SearchICon.png"; // your search icon
// import notificationIcon from "../../../../assets/Notifications.png"; // notification icon
// import calIcon from "../../../../assets/Cal.png"; // calendar icon

// function DashboardNavbar() {
//   const today = new Date();
//   const dayName = today.toLocaleDateString("en-US", { weekday: "long" });
//   const dateStr = today.toLocaleDateString("en-GB"); // dd/mm/yyyy format

//   return (
//     <div className="dashboard-navbar-outer">
//       <div className="dashboard-navbar-inner">
//         {/* Left: Dashboard text */}
//         <div className="navbar-left">
//           <h2>Dash<span>board</span></h2>
//         </div>

//         {/* Center: Search */}
//         <div className="navbar-center">
//           <div className="search-box">
//             <input type="text" placeholder="Search your task here..." />
//             <img src={searchIcon} alt="search" className="search-icon" />
//           </div>
//         </div>

//         {/* Right: Icons + Date */}
//         <div className="navbar-right">
//           <div className="icons">
//             <img src={notificationIcon} alt="notification" className="icon" />
//             <img src={calIcon} alt="calendar" className="icon" />
//           </div>
//           <div className="date">
//             <span className="day">{dayName}</span>
//             <span className="full-date">{dateStr}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DashboardNavbar;





import { useState, useEffect, useRef } from "react";
import "./DashboardNavbar.css";
import searchIcon from "../../../../assets/SearchICon.png";
import notificationIcon from "../../../../assets/Notifications.png";
import calIcon from "../../../../assets/Cal.png";

function DashboardNavbar({ onTaskSelect }) {
  const today = new Date();
  const dayName = today.toLocaleDateString("en-US", { weekday: "long" });
  const dateStr = today.toLocaleDateString("en-GB");

  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // 🔹 Load tasks from localStorage
  const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
  const tasks = storedUser.todos || [];

  // 🔹 Handle search
  useEffect(() => {
    if (query.trim() === "") {
      setFiltered([]);
      setShowDropdown(false);
    } else {
      const results = tasks.filter((task) =>
        task.title.toLowerCase().includes(query.toLowerCase())
      );
      setFiltered(results);
      setShowDropdown(true);
    }
  }, [query]);

  // 🔹 Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="dashboard-navbar-outer" ref={dropdownRef}>
      <div className="dashboard-navbar-inner">
        {/* Left: Dashboard text */}
        <div className="navbar-left">
          <h2>
            Dash<span>board</span>
          </h2>
        </div>

        {/* Center: Search */}
        <div className="navbar-center">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search your task here..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => query && setShowDropdown(true)}
            />
            <img src={searchIcon} alt="search" className="search-icon" />

            {/* 🔹 Dropdown */}
            {showDropdown && filtered.length > 0 && (
              <div className="search-dropdown">
                {filtered.map((task) => (
                  <div
                    key={task.id}
                    className="search-item"
                    onClick={() => {
                      onTaskSelect(task); // send task back to DashboardHome
                      setShowDropdown(false);
                      setQuery(""); // clear input
                    }}
                  >
                    <span>{task.title}</span>
                  </div>
                ))}
              </div>
            )}
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
