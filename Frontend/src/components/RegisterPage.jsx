import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setRegister((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch("http://localhost:8768/user/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        userName: register.userName,
        email: register.email,
        password: register.password,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (data) {
      navigate("/login");
    } else {
      alert(data.message);
    }
  };
  return (
    <div>
      <h1>Welcome To FriendsBook</h1>
      <div id="project-container">
        <form onSubmit={handleSubmit}>
          <div className="form_input">
            <label htmlFor="userName">Enter your Name:</label>
            <input
              type="text"
              id="name"
              name="userName"
              value={register.userName}
              onChange={handleChange}
            />
          </div>

          <div className="form_input">
            <label htmlFor="email">Enter your Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              value={register.email}
            />
          </div>
          <div className="form_input">
            <label htmlFor="password">Enter your password:</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              value={register.password}
            />
          </div>

          <input type="submit" value="Register" id="submit" />
          <p>
            Already Registered ? <Link to="/login">Login Now</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
