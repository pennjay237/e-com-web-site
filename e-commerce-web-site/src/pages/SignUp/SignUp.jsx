import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useApp } from "../../context/AppContext";
import signupPageData from "../../data/signuppageData.json";
import "./SignUp.css";

const signUpSchema = Yup.object().shape({
  name: Yup.string().min(2, "Name must be at least 2 characters").required("Name is required"),
  email: Yup.string().email("Invalid email address").required("Email or Phone Number is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

function SignUp() {
  const { dispatch } = useApp();
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Sign up attempt:", values);

    setTimeout(() => {
      dispatch({
        type: "LOGIN",
        payload: {
          id: 1,
          name: values.name,
          email: values.email,
        },
      });
      navigate("/");
      setSubmitting(false);
    }, 1000);
  };

  const handleGoogleSignUp = () => {
    console.log("Google sign up clicked");
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-image">
          <img src={signupPageData.images.main} alt="Shopping Cart" />
        </div>

        <div className="signup-form-container">
          <div className="signup-form-content">
            <h1>{signupPageData.title}</h1>
            <p>{signupPageData.subtitle}</p>

            <Formik
              initialValues={{ name: "", email: "", password: "" }}
              validationSchema={signUpSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="signup-form">
                  <div className="form-group">
                    <Field
                      type="text"
                      name="name"
                      placeholder={signupPageData.fields.name.placeholder}
                      className="form-input"
                    />
                    <ErrorMessage name="name" component="div" className="error-message" />
                  </div>

                  <div className="form-group">
                    <Field
                      type="text"
                      name="email"
                      placeholder={signupPageData.fields.email.placeholder}
                      className="form-input"
                    />
                    <ErrorMessage name="email" component="div" className="error-message" />
                  </div>

                  <div className="form-group">
                    <Field
                      type="password"
                      name="password"
                      placeholder={signupPageData.fields.password.placeholder}
                      className="form-input"
                    />
                    <ErrorMessage name="password" component="div" className="error-message" />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary create-btn"
                  >
                    {isSubmitting
                      ? signupPageData.buttons.creatingAccount
                      : signupPageData.buttons.createAccount}
                  </button>

                  <button
                    type="button"
                    onClick={handleGoogleSignUp}
                    className="btn btn-secondary google-btn"
                  >
                    <img src={signupPageData.images.googleIcon} alt="Google" />
                    {signupPageData.buttons.googleSignUp}
                  </button>

                  <div className="login-link">
                    <span>{signupPageData.loginLink.text}</span>
                    <Link to={signupPageData.loginLink.to}>{signupPageData.loginLink.linkText}</Link>
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

export default SignUp;
