

import { Navigate } from "react-router-dom";

// Only renders children if user is logged in
const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("user"); // assuming you store logged-in user
  return isLoggedIn ? children : <Navigate to="/SignIn" />;
};

export default ProtectedRoute;
