import ServiceCard from './ServiceCard';
import { serviceCardList } from '../../constants/homepage';
import CarouselContainer from '../../common/carousel/CarouselContainer';

const ServicesContainer = () => {
  return (
    <CarouselContainer>
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
    </CarouselContainer>
  );
};

export default ServicesContainer;
