import React, { useState } from "react";
import Modal from "react-modal";
import { Signup } from './Signup';
import { Login } from './Login';
import Logo from "../assets/images/logowithtext.png";

Modal.setAppElement("#root");

const Navbar = () => {
  const [currentForm, setCurrentForm] = useState(null);
  
  const toggleForm = (formName) => setCurrentForm(formName);
  const closeModal = () => setCurrentForm(null);
  
  return (
    <nav className="flex flex-1 justify-start gap-5">
      <img src={Logo} alt="Logo" />
      <span color="white"></span>
      <div className="flex flex-1 justify-end gap-3">
        <button className="btn-primary" onClick={() => toggleForm('Signup')}>Sign up</button>
        <button onClick={() => toggleForm('Login')}>Sign in</button>

        {/* Signup Modal */}
        <Modal className="flex justify-center max-w-fit mx-auto mt-20" isOpen={currentForm === "Signup"} onRequestClose={closeModal}>
          <Signup onFormSwitch={toggleForm} />
        </Modal>
        
        {/* Login Modal */}
        <Modal className="flex justify-center max-w-fit mx-auto mt-20" isOpen={currentForm === "Login"} onRequestClose={closeModal}>
          <Login onFormSwitch={toggleForm} />
        </Modal>
      </div>
    </nav>
  );
}

export default Navbar;
