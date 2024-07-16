import React from 'react'
import { useState } from 'react';
const Login = () => {
  const [users, setUsers] = useState({
    Useremail: '',
    Password: ''
  })

  const [Allusers, setAllusers] = useState([]);
  const [errors, setErrors] = useState({
    mailError: '',
    passError: ''
  });
  const HandleClick = (e) => {
    e.preventDefault()
    const email = users.Useremail;
    const passwd = users.Password;
    validateForm(email, passwd);
  }
  const validateForm = (email, passwd) => {
    const mail = email.trim();
    const pass = passwd.trim();
    if (!mail && !pass) {
      setErrors({ mailError: "Email is invalid", passError: "Password is invalid" });
    }
    else if (!mail) {
      setErrors({  mailError: "Email is invalid" });
    }
    else if (!pass) {
      setErrors({  passError: "password is invalid" });
    }
      
    // else if (!mail.includes("@")) {
    //   setErrors({  mailError: "mail must contain @" })
    // }
    //var re = /\S+@\S+\.\S+/;
    //const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      
    // else if (! /\S+@\S+\.\S+/.test(mail)) {
    //   // console.log(mail)
    //   setErrors({ mailError: "Email is invalid format (examp@gmail.com)"})
    // }
    // else if (pass.length < 8 || pass.length > 15) {
    //   setErrors({  passError: "password must be 8 to 15 characters" })
    // }
    // else if (! /[A-Z]/.test(pass)) {
    //   setErrors({ passError: "password contains atleast one uppercase" });
    // }
    // else if (! /[a-z]/.test(pass)) {
    //   setErrors({ passError: "password contains atleast one lowercase" });
    // }
    // else if (! /[0-9]/.test(pass)) {
    //   setErrors({ passError: "password contains atleast one number 0 to 9" });
    // }
    // else if (! /[A-Z]/.test( pass.charAt(0)) ) {
    //   setErrors({ passError: "first letter will be uppercase"})
    // }
    // else if (! /[-'"/`~!#*$@_%\+=\.,^&(){}[\]|;:<>?\\]/.test(pass)) {
    //   // console.log("special not")
    //   setErrors({ passError: "password must contain atleast one special character"})
    // }
    else {
      checkData(mail,pass)
    }

    // else if (!pass || pass == '')
    //   setErrors({ ...errors, });

  }
  const checkData = (mail, pass) => {
    console.log(window.localStorage.getItem(mail));
    if (window.localStorage.getItem(mail) && pass == window.localStorage.getItem(mail) || pass == window.sessionStorage.getItem(mail))
    {
      alert("logged in")
    }
    else if (window.localStorage.getItem(mail) && (pass != window.localStorage.getItem(mail) || pass != window.sessionStorage.getItem(mail)) ) {
      setErrors({passError: "your password is incorrect"})
      // alert("your password is incorrect..")
    }
    else if(! window.localStorage.getItem(mail)){
      alert("You are not a register user...")
    }
  }
  const HandleChange = (e) => {
    setErrors({
      mailError: '',
      passError: ''
    })
    const { name, value } = e.target;
    setUsers(
      {
        ...users,
        [name]: value 
      });
    // console.log( users)
  }
  return (
    <>
      <form className='mx-5' onSubmit={HandleClick}>
        <h1> Login</h1>
        <div className="mb-3">
            <label className="form-label">Email address</label>
          <input type="email" className="form-control w-25" name='Useremail' onChange={HandleChange} autoComplete='off' />
            {users.Useremail}
            <p className='text-red'>{errors.mailError}</p>
        </div>
        <div className="mb-3">
            <label className="form-label">Password</label>
          <input type="password" className="form-control w-25" name='Password' onChange={HandleChange} autoComplete='off'/>
            <p className='text-red'>{errors.passError}</p>
        </div>
        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input"/>
            <label className="form-check-label">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </>
  )
}

export default Login
