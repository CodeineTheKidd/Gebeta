const Header = () => {
  return (
    <header className="">
      <h1>GebetaMaps</h1>
      <h1>Routing, Direction</h1>
      <h1>and Map API Service</h1>
      <p className="mb-9 uppercase">Let us find your way</p>
      <a href="/#docpreview">Learn More</a>
      <button>Get Started</button>
      <div className="flex items-center ">
        <iframe width="300" height="150" src="https://www.youtube.com/embed/pTD69UWcH5Q" title="Introducing Gebeta Maps" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
        <p className="px-2">Geo-Coding, Matrix Endpoint Direction Endpoint, One-to-many Endpoints Preview</p>
      </div>
    </header>
  );
}

export default Header;