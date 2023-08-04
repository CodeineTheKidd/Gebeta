import React from 'react';
import '../App.css'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="homepage">
      <NavBar />
      <main>
        <section>
          <h1>GEBETAMAPS</h1>
          <h2>ROUTING, DIRECTION AND MAP API SERVICE</h2>
          <p>Let us find your way</p>
          <a href="/#docpreview">Learn More</a>
          <button>Get Started</button>
          <h3>Geo-Coding, Matrix Endpoint Direction Endpoint, One-to-many Endpoint</h3>
          <button>Watch Preview</button>
        </section>

        <section>
          <h2>DIRECTION ENDPOINT</h2>
          <p>You can find directions to your destination using the Gebeta Directions API. Using the Directions API, you can determine the best route to take. </p>
          <a href="/documentation#directionEP">Documentation</a>
        </section>

        <section>
          <h2>GEOCODING ENDPOINT</h2>
          <p>You can forward geocode using the Gebeta Geocoding API, which converts text queries like "Bole Edna Mall" into longitude and latitude coordinates.</p>
          <a href="/documentation#geoEP">Documentation</a>
        </section>

        <section>
          <h2>ROUTE OPTIMIZATION ENDPOINT</h2>
          <p>The Gebeta Optimization API returns a path between the input coordinates that is optimized. Planning the route for delivery in a city is a common use case for the Optimization API.</p>
          <a href="/documentation#routeEP">Documentation</a>
        </section>

        <section>
          <h2>MATRIX ENDPOINT</h2>
          <p>By using the Gebeta Matrix API, you may choose the most efficient path between several places.</p>
          <a href="/documentation#matrixEP">Documentation</a>
        </section>
        <Footer />
      </main>

    </div>
  );
}

export default HomePage;
