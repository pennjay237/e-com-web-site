import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useApp } from "../../context/AppContext";
import loginPageData from "../../data/loginpageData.json";
import "./Login.css";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Email or Phone Number is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

function Login() {
  const { dispatch } = useApp();
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Login attempt:", values);

    setTimeout(() => {
      dispatch({
        type: "LOGIN",
        payload: {
          id: 1,
          name: "Md Rimel",
          email: values.email,
        },
      });
      navigate("/");
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-image">
          <img src={loginPageData.images.main} alt="Shopping Cart" />
        </div>

        <div className="login-form-container">
          <div className="login-form-content">
            <h1>{loginPageData.title}</h1>
            <p>{loginPageData.subtitle}</p>

            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={loginSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="login-form">
                  <div className="form-group">
                    <Field
                      type="text"
                      name="email"
                      placeholder={loginPageData.fields.email.placeholder}
                      className="form-input"
                    />
                    <ErrorMessage name="email" component="div" className="error-message" />
                  </div>

                  <div className="form-group">
                    <Field
                      type="password"
                      name="password"
                      placeholder={loginPageData.fields.password.placeholder}
                      className="form-input"
                    />
                    <ErrorMessage name="password" component="div" className="error-message" />
                  </div>

                  <div className="form-actions">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary login-btn"
                    >
                      {isSubmitting ? loginPageData.buttons.loggingIn : loginPageData.buttons.login}
                    </button>
                    <Link to={loginPageData.links.forgotPassword.to} className="forgot-link">
                      {loginPageData.links.forgotPassword.text}
                    </Link>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
