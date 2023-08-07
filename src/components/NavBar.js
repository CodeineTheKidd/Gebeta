import Logo from "../assets/images/logowithtext.png";
const NavBar = () => {
  return (
    <header>
      <nav className="gap-8">
        <img src={Logo} alt="Logo"/>
        <div className="flex justify-end gap-5">
          <button>Sign up</button>
          <button>Sign in</button>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;