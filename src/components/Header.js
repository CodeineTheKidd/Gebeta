import runner from "../assets/images/running.png";
const Header = () => {
  return (
    <header className="flex justify-center w-full">
      <div className="min-w-1/2">
        <div className="gebeta">
          <h1>GebetaMaps</h1>
          <h1>Routing, Direction</h1>
          <h1>and Map API Service</h1>
          <p className="uppercase">Let us find your way</p>
        </div>
        <div className="flex my-5 gap-2">
          <a href="/#docpreview">Learn More</a>
          <button>Get Started</button>
        </div>
        <div className="flex flex-wrap items-center my-3">
          <iframe width="300" height="150" src="https://www.youtube.com/embed/pTD69UWcH5Q" title="Introducing Gebeta Maps" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
          <p className="flex-1 px-2">Geo-Coding, Matrix Endpoint Direction Endpoint, One-to-many Endpoints Preview</p>
        </div>
      </div>
      <img className="justify-end min-w-1/2" src={runner} alt="" />
    </header>
  );
}

export default Header;