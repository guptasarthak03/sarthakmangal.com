import { useEffect } from 'react';

const ServiceContainer = ({ title, name, description }) => {
  useEffect(() => {
    console.log(title, name, description, 'ss');
  });

  return (
    <div className="service">
      <img src={`/images/${name}.svg`} alt={name} />
      <p className="service-heading">{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default ServiceContainer;
