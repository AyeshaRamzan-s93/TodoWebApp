
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignUp from "./pages/Auth/SignUp/SignUp";
import SignIn from "./pages/Auth/SignIn/SignIn";
import Dashboard from "./pages/Dashboard/Dashboard";
import Settings from "./pages/Dashboard/Settings/Settings";
import DashboardHome from "./pages/Dashboard/DashboardHome/DashboardHome";

import MyTasks from "./pages/Dashboard/MyTasks/MyTasks"

import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";
  
//  Dummy components
function VitalTask() {
  return <div style={{ paddingLeft: "380px" }}> Vital Task Page</div>;
}

function Categories() {
  return <div style={{ paddingLeft: "380px" }}>Categories Page</div>;
}
function Help() {
  return <div style={{ paddingLeft: "380px" }}>Help Page</div>;
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <PublicRoute>
              <SignIn />
            </PublicRoute>
          }
        />

        {/* Dashboard routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          {/* default dashboard page */}
          <Route index element={<DashboardHome />} />

          {/* nested pages */}
          <Route path="vital-task" element={<VitalTask />} />
          <Route path="my-task" element={<MyTasks />} />
          <Route path="categories" element={<Categories />} />
          <Route path="settings" element={<Settings />} />
          <Route path="help" element={<Help />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
