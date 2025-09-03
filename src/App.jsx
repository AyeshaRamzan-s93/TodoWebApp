



// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home/Home";
// import SignUp from "./pages/Auth/SignUp/SignUp";
// import SignIn from "./pages/Auth/SignIn/SignIn";
// import Dashboard from "./pages/Dashboard/Dashboard";



// import ProtectedRoute from "./routes/ProtectedRoute";
// import PublicRoute from "./routes/PublicRoute";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Public routes */}
//         <Route path="/" element={<Home />} />
//         <Route
//           path="/signup"
//           element={
//             <PublicRoute>
//               <SignUp />
//             </PublicRoute>
//           }
//         />
//         <Route
//           path="/signin"
//           element={
//             <PublicRoute>
//               <SignIn />
//             </PublicRoute>
//           }
//         />

//         {/* Dashboard routes - protected */}
//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute>
//               <Dashboard />
//             </ProtectedRoute>
//           }
//         >
       
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home/Home";
// import SignUp from "./pages/Auth/SignUp/SignUp";
// import SignIn from "./pages/Auth/SignIn/SignIn";
// import Dashboard from "./pages/Dashboard/Dashboard";
// import Settings from "./pages/Dashboard/Settings/Settings";   // 👈 import Settings

// import ProtectedRoute from "./routes/ProtectedRoute";
// import PublicRoute from "./routes/PublicRoute";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Public routes */}
//         <Route path="/" element={<Home />} />
//         <Route
//           path="/signup"
//           element={
//             <PublicRoute>
//               <SignUp />
//             </PublicRoute>
//           }
//         />
//         <Route
//           path="/signin"
//           element={
//             <PublicRoute>
//               <SignIn />
//             </PublicRoute>
//           }
//         />

//         {/* Dashboard routes - protected */}
//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute>
//               <Dashboard />
//             </ProtectedRoute>
//           }
//         >
//           {/* nested dashboard routes */}
//           <Route path="settings" element={<Settings />} /> 
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;




// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home/Home";
// import SignUp from "./pages/Auth/SignUp/SignUp";
// import SignIn from "./pages/Auth/SignIn/SignIn";
// import Dashboard from "./pages/Dashboard/Dashboard";
// import Settings from "./pages/Dashboard/Settings/Settings";

// import ProtectedRoute from "./routes/ProtectedRoute";
// import PublicRoute from "./routes/PublicRoute";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Public */}
//         <Route path="/" element={<Home />} />
//         <Route path="/signup" element={<PublicRoute><SignUp /></PublicRoute>} />
//         <Route path="/signin" element={<PublicRoute><SignIn /></PublicRoute>} />

//         {/* Dashboard (Protected) */}
//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute>
//               <Dashboard />
//             </ProtectedRoute>
//           }
//         >
//           {/* 👇 Default blank dashboard screen */}
//           <Route index element={<div></div>} />

//           {/* Settings */}
//           <Route path="settings" element={<Settings />} />

//           {/* Add other pages here */}
//           {/* <Route path="vital-task" element={<VitalTask />} /> */}
//           {/* <Route path="my-task" element={<MyTask />} /> */}
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignUp from "./pages/Auth/SignUp/SignUp";
import SignIn from "./pages/Auth/SignIn/SignIn";
import Dashboard from "./pages/Dashboard/Dashboard";
import Settings from "./pages/Dashboard/Settings/Settings";
import DashboardHome from "./pages/Dashboard/DashboardHome/DashboardHome";

import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";

//  Dummy components
function VitalTask() {
  return <div style={{ paddingLeft: "380px" }}> Vital Task Page</div>;
}
function MyTask() {
  return <div style={{ paddingLeft: "380px" }}>My Task Page</div>;
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
          <Route path="my-task" element={<MyTask />} />
          <Route path="categories" element={<Categories />} />
          <Route path="settings" element={<Settings />} />
          <Route path="help" element={<Help />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
