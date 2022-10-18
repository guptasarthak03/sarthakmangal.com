import ServiceCard from './ServiceCard';
import { serviceCardList } from '../../constants/homepage';

const ServicesContainer = () => {
  return (
    <div className="my-services">
      {serviceCardList.map(card => {
        return (
          <ServiceCard
            key={card.name}
            title={card.title}
            name={card.name}
            description={card.desc}
          />
        );
      })}
    </div>
  );
};

export default ServicesContainer;
