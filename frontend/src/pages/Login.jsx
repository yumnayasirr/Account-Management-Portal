import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .matches(/[0-9]/, 'Password must contain at least one digit')
        .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
        .required('Required'),
    }),
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <div className='login-container'>
      <h1 className='title'>SOFTOO Account Management System</h1>
      <div className="login-form-container">
        <div className="login-left">
          <h2 className="title">Login to your account!</h2>
          <form className='login-form' onSubmit={formik.handleSubmit}>
            <div className="form-entry">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="text"
                placeholder='abcd@gmail.com'
                {...formik.getFieldProps('email')}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="form-entry">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder='password'
                {...formik.getFieldProps('password')}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="error">{formik.errors.password}</div>
              ) : null}
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="login-center"></div>
        <div className="login-right">
          {/* <img src="" alt="" className="login-img" /> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
