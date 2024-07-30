import React from 'react'

const Login = () => {

  const onsubmit =(e) =>{
    e.preventDefault();
  }

  return (
    <div className='login-container'>
      <h1 className='title'>SOFTOO Account Management System</h1>
      <div className="login-form-container">
      <div className="login-left">
        <h2 className="title">Login to your account!</h2>
        <form className='login-form' onSubmit={onsubmit}>
          <div className="form-entry">
            <label htmlFor="">Email</label>
            <input type="text" placeholder='abcd@gmail.com' />
          </div>
          <div className="form-entry">
            <label htmlFor="">Password</label>
            <input type="password" placeholder='password' />
          </div>
        </form>
      </div>
      <div className="login-center"></div>
      <div className="login-right">
        {/* <img src="" alt="" className="login-img" /> */}
      </div>
      </div>

    </div>
  )
}

export default Login