const Header = () => {
  return (
    <header style={{ backgroundPositionX: '111%' }} className="mx-3 bg-header bg-no-repeat">
      <div className="gebeta pt-20">
        <h1>GebetaMaps</h1>
        <h1>Routing, Direction</h1>
        <h1>and Map API Service</h1>
        <p className="-mt-3 uppercase">Let us find your way</p>
      </div>
      <div className="flex my-5 gap-2">
        <a href="/#docpreview">Learn More</a>
        <button className="btn-primary">Get Started</button>
      </div>
      <div className="flex flex-wrap items-center my-3">
      <iframe width="300" height="200" src="https://www.youtube.com/embed/pTD69UWcH5Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <p className="flex-1 px-2">Geo-Coding, Matrix Endpoint Direction Endpoint, One-to-many Endpoints Preview</p>
      </div>
    </header>
  );
}

export default Header;