import React from 'react';
import '../App.css'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Card from '../components/Card';
import DEP from '../assets/images/docs/direction.png';
import GCEP from '../assets/images/docs/geocoding.jpg';
import ROEP from '../assets/images/docs/route.png';
import MEP from '../assets/images/docs/matrix.png';


const HomePage = () => {
  const cardData = [
    { key: 1, image: DEP, title: 'Direction Endpoint', description: 'You can find directions to your destination using the Gebeta Directions API. Using the Directions API, you can determine the best route to take.' },
    { key: 2, image: GCEP, title: 'GeoCoding Endpoint', description: 'You can forward geocode using the Gebeta Geocoding API, which converts text queries like "Bole Edna Mall" into longitude and latitude coordinates.' },
    { key: 3, image: ROEP, title: 'Route Optimization Endpoint', description: 'The Gebeta Optimization API returns a path between the input coordinates that is optimized. Planning the route for delivery in a city is a common use case for the Optimization API.' },
    { key: 4, image: MEP, title: 'Matrix Endpoint', description: 'By using the Gebeta Matrix API, you may choose the most efficient path between several places.' }
  ];
  return (
    <div className="homepage">
      <NavBar />
      <main>
        <Header />
        <div className="content-center container m-auto">
          {cardData.map((card) => (
            <Card key={card.id} image={card.image} title={card.title} description={card.description} />
          ))}
        </div>
        {/* <section>
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
        </section> */}
        <Footer />
      </main>

    </div>
  );
}

export default HomePage;
