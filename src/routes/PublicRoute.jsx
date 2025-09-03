// import { Navigate } from "react-router-dom";

// // Redirect logged-in user away from auth pages
// const PublicRoute = ({ children }) => {
//   const isLoggedIn = localStorage.getItem("user");
//   return !isLoggedIn ? children : <Navigate to="/" />;
// };

// export default PublicRoute;



import { Navigate } from "react-router-dom";

// Redirect logged-in users away from auth pages
const PublicRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("user"); // check login
  return !isLoggedIn ? children : <Navigate to="/dashboard" />; // ✅ redirect to dashboard
};

export default PublicRoute;
