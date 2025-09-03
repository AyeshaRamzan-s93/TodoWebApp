
// // src/pages/Dashboard/Dashboard.jsx

// import { Outlet } from "react-router-dom";
// import Navbar from "./components/Navbar/DashboardNavbar";
// import Sidebar from "./components/Sidebar/Sidebar";

// function Dashboard() {
//   return (
//     <div className="dashboard-container" style={{ display: "flex" }}>
//       {/* Sidebar on the left */}
//       <Sidebar />

//       {/* Main content */}
//       <div className="dashboard-main" style={{ flex: 1 }}>
//         <Navbar />
//         <div className="dashboard-content">
//           <Outlet /> {/* renders the current screen */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;


// import Navbar from "./components/Navbar/DashboardNavbar";
// import Sidebar from "./components/Sidebar/Sidebar";
// import { Outlet } from "react-router-dom";

// function Dashboard() {
//   const NAVBAR_HEIGHT = 56; // height of your navbar in px

//   return (
//     <div
//       className="dashboard-container"
//       style={{ display: "flex", flexDirection: "column", minHeight: "100vh", width: "100%" }}
//     >
//       {/* Navbar at the top */}
//       <Navbar />

//       {/* Body: Sidebar + Main Content */}
//       <div
//         className="dashboard-body"
//         style={{ display: "flex", flex: 1, width: "100%" }}
//       >
//         {/* Sidebar on the left */}
//         <div style={{ width: 344, height: `calc(100vh - ${NAVBAR_HEIGHT}px)` }}>
//           <Sidebar />
//         </div>

//         {/* Main content area */}
//         <div
//           className="dashboard-content"
//           style={{
//             flex: 1,
//             minHeight: "calc(100vh - 56px)",
//             backgroundColor: "#f5f5f5",
//             padding: "20px",
//           }}
//         >
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;


// import { Outlet } from "react-router-dom";
// import Sidebar from "./components/Sidebar/Sidebar";
// import DashboardNavbar from "./components/Navbar/DashboardNavbar";
// import "./Dashboard.css";

// function Dashboard() {
//   return (
//     <div className="dashboard-layout">
//       <Sidebar />
//       <div className="dashboard-main">
//         <DashboardNavbar />
//         <div className="dashboard-content">
//           <Outlet /> {/* Child screens will render here */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;



// import { Outlet } from "react-router-dom";
// import Sidebar from "./components/Sidebar/Sidebar";
// import DashboardNavbar from "./components/Navbar/DashboardNavbar";
// import "./Dashboard.css";

// function Dashboard() {
//   return (
//     <div className="dashboard-layout">
//       <DashboardNavbar />
//       <div className="dashboard-body">
//         <Sidebar />
//         <main className="dashboard-main">
//           <Outlet /> {/* child routes show here */}
//         </main>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;



import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import DashboardNavbar from "./components/Navbar/DashboardNavbar";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-layout">
      <DashboardNavbar />
      <div className="dashboard-body">
        <Sidebar />
        <main className="dashboard-main">
          <Outlet /> 
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
