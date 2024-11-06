import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./Signup.css";
export default function Signup() {
  const formik = useFormik({
    initialValues: {
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .matches(/^[a-zA-Z]+[0-9]{2,}$/, "Username must end with at least two numbers")
        .required("Username is required"),
      first_name: Yup.string()
        .matches(/^[a-zA-Z]+$/, "First name can only contain letters")
        .required("First name is required"),
      last_name: Yup.string()
        .matches(/^[a-zA-Z]+$/, "Last name can only contain letters")
        .required("Last name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
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
      try {
        const response = await axios.post("http://localhost:4000/auth/signup", values);
        console.log("Signup successful:", response.data);
      } catch (error) {
        if (error.response) {
          console.error("Error:", error.response.data);
        } else {
          console.error("Error:", error.message);
        }
      }
    },
  });
  
  return (
    <div className="main-signup-section">
      <div className="main-signup-section-one">
        <form onSubmit={formik.handleSubmit}>
          <div className="signup-title">NodeTkasser</div>
          <h5 className="allfields-req">* all fields are required</h5>
          <div>
            <input
              type="text"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Username"
              className={formik.errors.username && formik.touched.username ? "error" : ""}
            />
          </div>
          
          <div>
            <input
              type="text"
              name="first_name"
              value={formik.values.first_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="First Name"
              className={formik.errors.first_name && formik.touched.first_name ? "error" : ""}
            />
          </div>
          
          <div>
            <input
              type="text"
              name="last_name"
              value={formik.values.last_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Last Name"
              className={formik.errors.last_name && formik.touched.last_name ? "error" : ""}
            />
          </div>
          
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
            <h5 className="password-rules">8 characters minimum</h5>
          </div>
          
          <div>
            <input
              type="password"
              name="passwordConfirmation"
              value={formik.values.passwordConfirmation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Password confirmation"
              className={formik.errors.passwordConfirmation && formik.touched.passwordConfirmation ? "error" : ""}
            />
          </div>
          <div className="main-signup-section-one-button-signup">
            <button type="submit">Sign up</button>
          </div>
          <h5>Already have an account?</h5>
          <div className="main-signup-section-one-button-login">
            <button type="button">Log in</button>
          </div>
        </form>
      </div>
    </div>
  );
}


