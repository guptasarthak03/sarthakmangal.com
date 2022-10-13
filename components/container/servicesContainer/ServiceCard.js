const ServiceCard = ({ title, name, description }) => {
  return (
    <div className="service">
      <img src={`/images/${name}.svg`} alt={name} />
      <p className="service-heading">{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
