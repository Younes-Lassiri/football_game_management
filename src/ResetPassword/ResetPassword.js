import React, { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
export default function ResetPassword() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const { resetPassword } = useContext(AuthContext);
    const formik = useFormik({
        initialValues: {
          email: "",
        },
        validationSchema: Yup.object({
          email: Yup.string().email("Invalid email address").required("Required"),
        }),
        onSubmit: async (values) => {
          const result = await resetPassword(values.email);
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
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <div className="main-signup-section-one-button-login">
            <button type="submit">Send me reset password instructions</button>
          </div>
          <h5>Already have an account?</h5>
          <div className="main-signup-section-one-button-login">
          <Link to='/users/login'><button>Log in</button></Link>
          </div>
          <h5>Do not have an account?</h5>
          <div className="main-signup-section-one-button-login">
            <Link to='/users/sign_up'><button>Sign up</button></Link>
          </div>
          <h5>Other Options</h5>
          <div className="main-signup-section-one-options">
            <Link to='/'>Didn't receive confirmation instructions?</Link>
          </div>
          <div className="main-signup-section-one-span">
          By signing up for Footy Addicts, you agree to the Terms of Service<br></br> View our Privacy Policy
          </div>
        </form>
      </div>
    </div>
  );
}
