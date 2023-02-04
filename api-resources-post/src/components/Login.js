import React, {  useState } from 'react'
import { auth } from './Firebase'

const Login = () => {

const [data , setData] = useState({
  email : "",
  password : ""
})

const signUp = e => {
  e.preventDefault()
  auth.createUserWithEmailAndPassword(email,password).then(
    user => console.log(user)
  ).catch(err => console.log(err))
}
const signIn = e => {
  e.preventDefault()
  auth.signInWithEmailAndPassword(email,password).then(
    user => alert("SignIn successfull")
  ).catch(() => alert("You have entered wrong Email/password! please signin"))
}
 
const { email , password} = data;
  return (
    <div className='container-body'>
      <div className='login'>
      <center>
      <h1>User Login</h1>
        <form >
          <input type='email' className='input' value={email} name='eamil' onChange={e => {setData({...data, email:e.target.value})}} placeholder='Enter email'/><br></br>
          <input type='password' className='input' value={password} name='password' onChange={e => {setData({...data, password:e.target.value})}} placeholder='Enter password'/> <br></br>
          <button className='button1' onClick={signIn}>signin</button><br></br>
          <p >Don't have account?
          <button className='button2' onClick={signUp}>signup</button> </p>
         
        </form>
      </center>
      </div>
    </div>
  )
}

export default Login
