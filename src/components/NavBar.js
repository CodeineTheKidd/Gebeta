import React, {useState} from "react";
import { Signup } from './Signup';
import { Login } from './Login';
import Logo from "../assets/images/logowithtext.png";

const NavBar = () => {
  const [currentForm, setCurrentForm] = useState(null);
  const toggleForm = (formName) => setCurrentForm(formName);
  
  return (
    <nav className="flex flex-1 justify-start gap-5">
      <img src={Logo} alt="Logo" />
      <span color="white"></span>
      <div className="flex flex-1 justify-end gap-3">
        {currentForm === "Login" ? <Login onFormSwitch={toggleForm} /> :
          <Signup onFormSwitch={toggleForm} />}
        <button className="btn-primary" onClick={() => toggleForm('Signup')}>Sign up</button>
        <button onClick={() => toggleForm('Login')}>Sign in</button>
      </div>
    </nav>
  );
}

export default NavBar;