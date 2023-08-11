import Card from '../components/Card';

const CardList = () => {
  const cardData = [
    { id: 1, image: 'path/to/placeholder-image1.jpg', description: 'Description for Card 1' },
    { id: 2, image: 'path/to/placeholder-image2.jpg', description: 'Description for Card 2' },
    // Add more card data as needed
  ];

  return (
    <div className="card-list">
      {cardData.map((card) => (
        <Card key={card.id} image={card.image} description={card.description} />
      ))}
    </div>
  );
};

export default CardList;
