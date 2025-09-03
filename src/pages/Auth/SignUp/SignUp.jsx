



// src/pages/Auth/SignUp.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./SignUp.css";

import bgImg from "../../../assets/authbg.png";
import sideImg from "../../../assets/SignUp.png";

import firstName from "../../../assets/firstName.png";
import lastName from "../../../assets/lastName.png";
import userName from "../../../assets/username.png";
import email from "../../../assets/email.png";
import password from "../../../assets/Password.png";
import confirmPassword from "../../../assets/confirmPass.png";

function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  // handle input
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // form validation
  const validate = () => {
    let newErrors = {};

    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.username) newErrors.username = "Username is required";

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.agree) newErrors.agree = "You must accept the terms";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      // fetch all users
      const res = await fetch("http://localhost:5000/users");
      const existingUsers = await res.json();

      // check username uniqueness
      const usernameExists = existingUsers.some(
        (user) => user.username === formData.username
      );
      if (usernameExists) {
        setErrors({ username: "Username already taken" });
        return;
      }

      // check email uniqueness
      const emailExists = existingUsers.some(
        (user) => user.email === formData.email
      );
      if (emailExists) {
        setErrors({ email: "Email already registered" });
        return;
      }

      // create new user object with unique id
      const newUser = {
        id: Date.now(), // unique id for linking data later
        firstName: formData.firstName,
        lastName: formData.lastName,
        username: formData.username,
        email: formData.email,
        password: formData.password, 
      };

      // save in json-server
      await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      // save in localStorage
      localStorage.setItem("user", JSON.stringify(newUser));

      navigate("/dashboard");
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <div
      className="signup-container"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="signup-box">
        {/* Left image */}
        <div className="signup-left">
          <img src={sideImg} alt="side" />
        </div>

        {/* Right form */}
        <div className="signup-right">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <img src={firstName} alt="icon" className="input-icon" />
              <input
                type="text"
                name="firstName"
                placeholder="Enter First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            {errors.firstName && <p className="error">{errors.firstName}</p>}

            <div className="input-group">
              <img src={lastName} alt="icon" className="input-icon" />
              <input
                type="text"
                name="lastName"
                placeholder="Enter Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            {errors.lastName && <p className="error">{errors.lastName}</p>}

            <div className="input-group">
              <img src={userName} alt="icon" className="input-icon" />
              <input
                type="text"
                name="username"
                placeholder="Enter Username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            {errors.username && <p className="error">{errors.username}</p>}

            <div className="input-group">
              <img src={email} alt="icon" className="input-icon" />
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            {errors.email && <p className="error">{errors.email}</p>}

            <div className="input-group">
              <img src={password} alt="icon" className="input-icon" />
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            {errors.password && <p className="error">{errors.password}</p>}

            <div className="input-group">
              <img src={confirmPassword} alt="icon" className="input-icon" />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Enter Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
            {errors.confirmPassword && (
              <p className="error">{errors.confirmPassword}</p>
            )}

            <div className="checkbox-group">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
              />
              <label>I agree to the terms & conditions</label>
            </div>
            {errors.agree && <p className="error">{errors.agree}</p>}

            <button type="submit" className="register-btn">
              Register
            </button>

            <p className="signin-text">
              Already have an account? <Link to="/SignIn">Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
