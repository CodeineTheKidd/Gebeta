const Card = ({image, title, description}) => {
  return (
    <div className="flex gap-2">
      <div className="Card">
        <img className="object-cover" src={image} alt="Placeholder" />
        <p>{title}</p>
      </div>
      <div className="flex-1">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;