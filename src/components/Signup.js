import React, { useState } from "react"

export const Signup = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setname] = useState('');
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  return (
    <div className="form-container bg-form bg-no-repeat">

      <form className="Signup-form" onSubmit={handlesubmit}>
        <label htmlFor="name"> Company name </label>
        <input value={name} onChange={(e) => setname(e.target.value)} name="name" id="name" placeholder="Company name" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email"
          name="email"
        />
        <label htmlFor="email">email</label>

        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********"
          id="password"
          name="password"
        />
        <label htmlFor="email">email</label>
        <button type="submit">Log In </button>
      </form>
      <button className="link" onClick={() => props.onFormSwitch('Login')}> Already have an account? Login</button>
    </div>
  )
}