const Header = () => {
  return (
    <div className="header">
      <section>
        <h1>GEBETAMAPS</h1>
        <h2>ROUTING, DIRECTION AND MAP API SERVICE</h2>
        <p>Let us find your way</p>
        <a href="/#docpreview">Learn More</a>
        <button>Get Started</button>
        <div className="preview flex flex-wrap items-center ">
          <iframe width="300" height="150" src="https://www.youtube.com/embed/pTD69UWcH5Q" title="Introducing Gebeta Maps" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen/>
          <h4 className="p-2">Geo-Coding, Matrix Endpoint Direction Endpoint, One-to-many Endpoints Preview</h4>
        </div>
      </section>
    </div>
  );
}

export default Header;