import Logo from "../assets/images/logowithtext.png";
const NavBar = () => {
  return (
    <nav className="gap-8">
      <img src={Logo} alt="Logo" />
      <span color="white"></span>
      <div className="flex justify-end gap-5">
        <button>Sign up</button>
        <button>Sign in</button>
      </div>
    </nav>
  );
}

export default NavBar;