import React, { useState }from "react"



export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass,setPass] = useState('');

  const handlesubmit = (e) => {
     e.preventDefault();
    console.log (email);
  }
  return(
 <div className= "form-container bg-form"> 
  
   <form className= "Login-form" onSubmit={handlesubmit}>
      <input value= {email} onChange={(e) => setEmail (e.target.value)}type="email"placeholder="youremail@gmail.com" id="email"
      name= "email"
          />
        <label htmlfor="email">email</label>
   
        <input value= {pass} onChange={(e) => setPass(e.target.value)}type="password"placeholder="********"
        id="password"
       name= "password"
          />
        <label htmlfor="email">email</label>
          <button typer= "submit">Log In </button>
    </form>
  <button className= "link-btn" onClick={() => props.onFormSwitch('Signup')}> Don't have an account? Sign Up</button>
       <div/>
 </div>
  )
} 