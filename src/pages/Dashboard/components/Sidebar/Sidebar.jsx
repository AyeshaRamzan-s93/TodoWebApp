

// import { NavLink } from "react-router-dom";
// import dashboardIcon from "../../../../assets/dashboard.png";
// import vitalTaskIcon from "../../../../assets/vital-task.png";
// import myTaskIcon from "../../../../assets/my task.png";
// import categoriesIcon from "../../../../assets/Task Categories.png";
// import settingsIcon from "../../../../assets/Settings.png";
// import helpIcon from "../../../../assets/help.png";
// import logoutIcon from "../../../../assets/logout.png";

// import "./Sidebar.css"
// function Sidebar() {
//   // Safely get user from localStorage
//   const user = JSON.parse(localStorage.getItem("user") || "{}");

//   const firstName = user.firstName || "John"; 
//   const lastName = user.lastName || "Doe";    
//   const email = user.email || "john@example.com";

//   const menuItems = [
//     { name: "Dashboard", icon: dashboardIcon, path: "/dashboard", exact: true },
//     { name: "Vital Task", icon: vitalTaskIcon, path: "/dashboard/vital-task" },
//     { name: "My Task", icon: myTaskIcon, path: "/dashboard/my-task" },
//     { name: "Task Categories", icon: categoriesIcon, path: "/dashboard/categories" },
//     { name: "Settings", icon: settingsIcon, path: "/dashboard/settings" },
//     { name: "Help", icon: helpIcon, path: "/dashboard/help" },
//   ];

  

//   return (
//     <div className="sidebar">
//       {/* User Info */}
//       <div className="sidebar-user">
//         <h3>{firstName} {lastName}</h3>
//         <p>{email}</p>
//       </div>

//       {/* Menu Items */}
//   <div className="sidebar-menu">
//         {menuItems.map((item) => (
//           <NavLink
//   key={item.name}
//   to={item.path}
//   end={item.exact}   
//   className={({ isActive }) =>
//     isActive ? "sidebar-item active" : "sidebar-item"
//   }
// >
//   <img src={item.icon} alt={item.name} />
//   <span>{item.name}</span>
// </NavLink>

//         ))}
//       </div>

//       {/* Logout at bottom */}
//       <div className="sidebar-logout">
//         <button>
//           <img src={logoutIcon} alt="Logout"/>
//           <span>Logout</span>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;




import { NavLink, useNavigate } from "react-router-dom";
import dashboardIcon from "../../../../assets/dashboard.png";
import vitalTaskIcon from "../../../../assets/vital-task.png";
import myTaskIcon from "../../../../assets/my task.png";
import categoriesIcon from "../../../../assets/Task Categories.png";
import settingsIcon from "../../../../assets/Settings.png";
import helpIcon from "../../../../assets/help.png";
import logoutIcon from "../../../../assets/logout.png";

import "./Sidebar.css";

function Sidebar() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Safely get user from localStorage
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const firstName = user.firstName || "John";
  const lastName = user.lastName || "Doe";
  const email = user.email || "john@example.com";

  const menuItems = [
    { name: "Dashboard", icon: dashboardIcon, path: "/dashboard", exact: true },
    { name: "Vital Task", icon: vitalTaskIcon, path: "/dashboard/vital-task" },
    { name: "My Task", icon: myTaskIcon, path: "/dashboard/my-task" },
    { name: "Task Categories", icon: categoriesIcon, path: "/dashboard/categories" },
    { name: "Settings", icon: settingsIcon, path: "/dashboard/settings" },
    { name: "Help", icon: helpIcon, path: "/dashboard/help" },
  ];

  // Function to handle the logout logic
  const handleLogout = () => {
    // 1. Remove the user data from localStorage
    localStorage.removeItem("user");

    // 2. Navigate the user back to the home page (or login page)
    navigate("/");
  };

  return (
    <div className="sidebar">
      {/* User Info */}
      <div className="sidebar-user">
        <h3>{firstName} {lastName}</h3>
        <p>{email}</p>
      </div>

      {/* Menu Items */}
      <div className="sidebar-menu">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.exact}
            className={({ isActive }) =>
              isActive ? "sidebar-item active" : "sidebar-item"
            }
          >
            <img src={item.icon} alt={item.name} />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </div>

      {/* Logout button with onClick handler */}
      <div className="sidebar-logout">
        <button onClick={handleLogout}>
          <img src={logoutIcon} alt="Logout" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;