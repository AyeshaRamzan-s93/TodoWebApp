
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Settings.css";

// function Settings() {
//   const navigate = useNavigate();
//   const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     username: "",
//     email: "",
//   });

//   useEffect(() => {
//   setFormData({
//     firstName: storedUser.firstName || "",
//     lastName: storedUser.lastName || "",
//     username: storedUser.username || "",
//     email: storedUser.email || "",
//   });
// }, []); 


//   // handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // update user info
//  const handleUpdate = async (e) => {
//   e.preventDefault(); // prevent form refresh
//   try {
//     console.log("Updating user:", storedUser.id, formData);

//     const response = await fetch(`http://localhost:5000/users/${storedUser.id}`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });

//     if (!response.ok) {
//       const text = await response.text();
//       throw new Error(`Failed to update: ${response.status} ${text}`);
//     }

//     // update localStorage
//     localStorage.setItem("user", JSON.stringify({ ...storedUser, ...formData }));

//     alert("User info updated successfully!");
//   } catch (err) {
//     console.error("Update failed:", err);
//     alert("Update failed. Check console for details.");
//   }
// };

// console.log("User ID for update:", storedUser.id);
// console.log("Type of storedUser.id:", typeof storedUser.id);



//   return (
//     <div className="settings-container">
//       <div className="settings-box">
//         {/* Header */}
//         <div className="settings-header">
//           <h2>Account Information</h2>
//           <button className="go-back" onClick={() => navigate("/dashboard")}>
//             Go Back
//           </button>
//         </div>
//         <hr className="settings-underline" />

//         {/* User Info Text */}
//         <div className="settings-user-info">
//           <p className="firstName">
//             {storedUser.firstName} {storedUser.lastName}
//           </p>
//           <p>{storedUser.email}</p>
//         </div>

//         {/* Form */}
//         <div className="settings-form-box">
//           <form>
//             <div className="form-group">
//               <label>First Name</label>
//               <input
//                 type="text"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="form-group">
//               <label>Last Name</label>
//               <input
//                 type="text"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="form-group">
//               <label>Username</label>
//               <input
//                 type="text"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="form-group">
//               <label>Email Address</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="settings-buttons">
//             <button className="update-btn" onClick={handleUpdate}>
//               Update Info
//             </button>
//             <button className="password-btn">Change Password</button>
//           </div>
//           </form>

//           {/* Buttons */}
          
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Settings;




import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Settings.css";

function Settings() {
  const navigate = useNavigate();
  const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

  // State for user info and password forms
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
  });

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // State to toggle between forms
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);

  useEffect(() => {
    setFormData({
      firstName: storedUser.firstName || "",
      lastName: storedUser.lastName || "",
      username: storedUser.username || "",
      email: storedUser.email || "",
    });
  }, []);

  // Handle input changes for the main form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle input changes for the password form
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordForm((prev) => ({ ...prev, [name]: value }));
  };

  // Update user info
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      console.log("Updating user:", storedUser.id, formData);

      const response = await fetch(`http://localhost:5000/users/${storedUser.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Failed to update: ${response.status} ${text}`);
      }

      // Update localStorage
      localStorage.setItem("user", JSON.stringify({ ...storedUser, ...formData }));
      alert("User info updated successfully!");
    } catch (err) {
      console.error("Update failed:", err);
      alert("Update failed. Check console for details.");
    }
  };

  // Update password logic
  const handlePasswordUpdate = async (e) => {
    e.preventDefault();

    const { currentPassword, newPassword, confirmPassword } = passwordForm;

    if (currentPassword !== storedUser.password) {
      alert("Current password does not match.");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match.");
      return;
    }

    try {
      // You should send a request to your API to update the password in the database
      const response = await fetch(`http://localhost:5000/users/${storedUser.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: newPassword }),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Failed to update password: ${response.status} ${text}`);
      }

      // Update password in localStorage
      localStorage.setItem("user", JSON.stringify({ ...storedUser, password: newPassword }));
      alert("Password updated successfully!");

      // Reset password form and switch back to user info view
      setPasswordForm({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      setIsUpdatingPassword(false);
    } catch (err) {
      console.error("Password update failed:", err);
      alert("Password update failed. Check console for details.");
    }
  };

  return (
    <div className="settings-container">
      <div className="settings-box">
        <div className="settings-header">
          <h2>{isUpdatingPassword ? "Change Password" : "Account Information"}</h2>
          <button className="go-back" onClick={() => navigate("/dashboard")}>
            Go Back
          </button>
        </div>
        <hr className="settings-underline" />

        {!isUpdatingPassword && (
          <>
            <div className="settings-user-info">
              <p className="firstName">
                {storedUser.firstName} {storedUser.lastName}
              </p>
              <p>{storedUser.email}</p>
            </div>
            <div className="settings-form-box">
              <form onSubmit={handleUpdate}>
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="settings-buttons">
                  <button className="update-btn" type="submit">
                    Update Info
                  </button>
                  <button
                    className="password-btn"
                    onClick={() => setIsUpdatingPassword(true)}
                  >
                    Change Password
                  </button>
                </div>
              </form>
            </div>
          </>
        )}

        {isUpdatingPassword && (
          <div className="settings-form-box">
            <form onSubmit={handlePasswordUpdate}>
              <div className="form-group">
                <label>Current Password</label>
                <input
                  type="password"
                  name="currentPassword"
                  value={passwordForm.currentPassword}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="form-group">
                <label>New Password</label>
                <input
                  type="password"
                  name="newPassword"
                  value={passwordForm.newPassword}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={passwordForm.confirmPassword}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="settings-buttons">
                <button className="update-btn" type="submit">
                  Update Password
                </button>
                <button
                  className="password-btn"
                  onClick={() => setIsUpdatingPassword(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Settings;