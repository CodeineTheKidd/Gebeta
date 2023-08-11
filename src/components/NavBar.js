import Logo from "../assets/images/logowithtext.png";
const NavBar = () => {
  return (
    <nav className="flex flex-1 justify-start gap-5">
      <img src={Logo} alt="Logo" />
      <span color="white"></span>
      <div className="flex flex-1 justify-end gap-3">
        <button className="btn-primary">Sign up</button>
        <button>Sign in</button>
      </div>
    </nav>
  );
}

export default NavBar;