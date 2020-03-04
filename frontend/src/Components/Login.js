import React from "react";
import { Formik } from "formik";
//import * as usernameValidator from "username-validator";
import * as Yup from "yup";
import {Link} from "react-router-dom";
const Login = () => (
  <Formik
    initialValues={{ username: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
    //********Handling validation messages yourself*******/
    // validate={values => {
    //   let errors = {};
    //   if (!values.username) {
    //     errors.username = "Required";
    //   } else if (!usernameValidator.validate(values.username)) {
    //     errors.username = "Invalid username address";
    //   }

    //   const passwordRegex = /(?=.*[0-9])/;
    //   if (!values.password) {
    //     errors.password = "Required";
    //   } else if (values.password.length < 8) {
    //     errors.password = "Password must be 8 characters long.";
    //   } else if (!passwordRegex.test(values.password)) {
    //     errors.password = "Invalida password. Must contain one number";
    //   }

    //   return errors;
    // }}
    //********Using Yum for validation********/

    validationSchema={Yup.object().shape({
      username: Yup.string()
        .required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number.")
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        
      } = props;
      // validateButton(){
      //   if (username && password == nul)
      // }
      return (
        <div className="middle">

        <form >
          <label htmlFor="username"><h4><b>Username:</b></h4></label>
          <input
            name="username"
            type="text"
            placeholder="Enter your Username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.username && touched.username && "error"}
          />
          {errors.username && touched.username && (
            <div className="input-feedback">{errors.username}</div>
          )}
          <br/>
          <br/>
          <label htmlFor="username"><h4><b>Password:</b></h4></label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && "error"}
          />
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}
          <br/>
          <br/>
          <Link to="/leaddash"><button class="btn btn-success" type="submit">submit</button>  </Link>
        
        </form>
        </div>
      );
    }}
  </Formik>
);

export default Login;