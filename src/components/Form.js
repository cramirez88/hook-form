import React, { useState } from 'react'


const Form = props => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const createUser = e => {
    e.preventDefault()
    const user = {
      firstName: firstName,
      lastName:lastName, 
      email:email, 
      password: email, 
      confirmPassword: confirmPassword 
    }
  }


  return (
    <form onSubmit= {createUser}>
      <div>
        <label>First Name</label>
        <input type='text' onChange = {e => setFirstName(e.target.value)} value={firstName} ></input>
      </div>
      <div>
        <label>Last Name</label>
        <input type='text' onChange = {e => setLastName(e.target.value)} value={lastName} ></input>
      </div>
      <div>
        <label>Email</label>
        <input type='email' onChange = {e => setEmail(e.target.value)} value={email} ></input>
      </div>
      <div>
        <label>Password</label>
        <input type='password' onChange = {e => setPassword(e.target.value)} value={password} ></input>
      </div>
      <div>
        <label>Confirm Password</label>
        <input type='password' onChange = {e => setConfirmPassword(e.target.value)} value={confirmPassword} ></input>
      </div>
    </form>
  )

}


export default Form;
