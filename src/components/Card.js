const Card = ({image, title, description}) => {
  return (
    <div className="flex gap-2 items-center m-20">
      <div className="Card border-solid border-2 leading-none rounded">
        <img width={400} height={150} className="object-cover" src={image} alt="Placeholder" />
        <p className="mx-1">{title}</p>
      </div>
      <div className="">
        <p>{description}</p>
        <a className="btn" href="/documentation#directionEP">Documentation</a>
      </div>
    </div>
  );
}

export default Card;