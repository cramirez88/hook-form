import React, { useState } from 'react'


const Form = props => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')


  // Unable to get form information to stay on page after refreshing

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
    <div>
    <form onSubmit= {createUser}>
      <div>
        <label>First Name</label>
        <input type='text' onChange = {e => setFirstName(e.target.value)} value={firstName} ></input>
        {firstName.length < 2 && firstName.length > 0 ? <p>First Name must be at least two characters long!</p>: ''}
      </div>
      <div>
        <label>Last Name</label>
        <input type='text' onChange = {e => setLastName(e.target.value)} value={lastName} ></input>
        {lastName.length < 2 && lastName.length > 0? <p>Last Name must be at least two characters long!</p>: ''}
      </div>
      <div>
        <label>Email</label>
        <input type='text' onChange = {e => setEmail(e.target.value)} value={email} ></input>
        {email.length < 5 && email.length > 0? <p>Email must be at least 5 characters long!</p>: ''}
      </div>
      <div>
        <label>Password</label>
        <input type='text' onChange = {e => setPassword(e.target.value)} value={password} ></input>
        {password.length < 8 && password.length > 0? <p>Password must be at least 8 characters long!</p>: ''}
      </div>
      <div>
        <label>Confirm Password</label>
        <input type='text' onChange = {e => setConfirmPassword(e.target.value)} value={confirmPassword} ></input>
        {confirmPassword !== password? <p>Passwords do not match!</p>: ''}
      </div>
      <button>Create User</button>
    </form>

    <div>
      <h2>Your Form Data</h2>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <p>Confirm: {confirmPassword}</p>
    </div>
    </div>
  )

}


export default Form;

