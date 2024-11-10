import React, { useContext, useEffect, useState } from "react";
import "./Dashboard.css";
import { AuthContext } from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
function Dashboard() {
    const { user, isAuthenticated, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const message = location.state?.message;
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/users/login');
        }
    }, [isAuthenticated, navigate]);
  return (
    <div className="main-dashboard-section">
    {message && <div className="" style={{color: 'green'}}>{message}</div>}
    Hello { user ? user.username: null }<br></br>
    <button style={{background: 'gray', padding: '5px 10px'}} onClick={logout}>Log out</button>
    </div>
  );
}
export default Dashboard;
