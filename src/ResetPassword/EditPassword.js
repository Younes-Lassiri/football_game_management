import React, { useContext, useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function EditPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const [errorMessage, setErrorMessage] = useState("");
  const { updatePassword } = useContext(AuthContext);
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("reset-password_token");
  const email = queryParams.get("email");
  useEffect(() => {
    if (!email || !token) {
      navigate("/users/login");
    }
  }, [email, token, navigate]);

  const formik = useFormik({
    initialValues: {
      password: "",
      passwordConfirmation: ""
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .matches(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          "Password must be at least 8 characters, include at least one uppercase letter, one number, and one special character"
        )
        .required("Password is required"),
      passwordConfirmation: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Password confirmation is required"),
    }),
    onSubmit: async (values) => {
      const result = await updatePassword(email, token, values.password);
      if (result.success) {
        setErrorMessage("");
        navigate("/users/login");
      } else {
        setErrorMessage(result.message);
      }
    }
  });

  return (
    <div className="main-signup-section">
      <div className="main-signup-section-one">
        <form onSubmit={formik.handleSubmit}>
          <div className="signup-title">NodeTkasser</div>
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
          <div>
            <input
              type="password"
              name="passwordConfirmation"
              value={formik.values.passwordConfirmation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Repeat Password"
              className={formik.errors.passwordConfirmation && formik.touched.passwordConfirmation ? "error" : ""}
            />
          </div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <div className="main-signup-section-one-button-login">
            <button type="submit">Change my password</button>
          </div>
          <h5>Already have an account?</h5>
          <div className="main-signup-section-one-button-login">
            <Link to='/users/login'><button>Log in</button></Link>
          </div>
          <h5>Do not have an account?</h5>
          <div className="main-signup-section-one-button-login">
            <Link to='/users/sign_up'><button>Sign up</button></Link>
          </div>
        </form>
      </div>
    </div>
  );
}
