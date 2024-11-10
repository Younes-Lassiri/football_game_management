import React, { useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import axios from 'axios';

const ProtectedRoute = ({ element }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const resetPasswordToken = queryParams.get('reset-password_token');
  const email = queryParams.get('email');
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    let isMounted = true;
    if (resetPasswordToken && email) {
      axios
        .post('http://localhost:8000/api/auth/check-reset-token', { resetPasswordToken, email })
        .then((response) => {
          if (isMounted) {
            setIsValid(response.data.isValid);
          }
        })
        .catch((error) => {
          console.error("Token validation failed", error);
          if (isMounted) {
            setIsValid(false);
          }
        });
    } else {
      setIsValid(false);
    }

    return () => {
      isMounted = false;
    };
  }, [resetPasswordToken, email]);

  if (isValid === null) {
    return <div>Loading...</div>;
  }

  if (!isValid) {
    return <Navigate to="/users/login" 
    state={{ message: 'Invalid or expired reset token. Please request a new one.' }}
    />;
  }

  return element;
};

export default ProtectedRoute;
