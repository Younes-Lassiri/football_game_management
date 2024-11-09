import React, { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
export default function Login() {
    const { isAuthenticated, login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    useEffect(() => {
        if (isAuthenticated) {
        navigate('/user/dashboard');
        }
    }, [isAuthenticated, navigate]);
    const formik = useFormik({
        initialValues: {
        email: "",
        password: "",
        },
        validationSchema: Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string().min(8, "Password must be at least 8 characters").required("Required"),
        }),
        onSubmit: async (values) => {
            const result = await login(values);
            if (result.success) {
                setErrorMessage("");
            } else {
                setErrorMessage(result.message);
            }
        },
    });

  return (
    <div className="main-signup-section">
      <div className="main-signup-section-one">
        <form onSubmit={formik.handleSubmit}>
          <div className="signup-title">NodeTkasser</div>

          <div>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Email"
              className={formik.errors.email && formik.touched.email ? "error" : ""}
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Password"
              className={formik.errors.password && formik.touched.password ? "error" : ""}
            />
          </div>

          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <div className="main-signup-section-one-button-signup">
            <button type="submit">Log in</button>
          </div>

          <h5>Do not have an account?</h5>
          <div className="main-signup-section-one-button-login">
            <Link to='/users/sign_up'><button type="button">Sign up</button></Link>
          </div>
        </form>
      </div>
    </div>
  );
}
