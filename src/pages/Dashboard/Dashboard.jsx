

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
