import SocialHandle from '../../container/SocialHandle';

const Hero = ({ children, page = 'home' }) => {
  let imgConfig;

  switch (true) {
    case page == 'projects':
      imgConfig = {
        flexBasis: '42%',
        marginTop: '-20px',
      };
      break;
    case page == 'blogs':
      imgConfig = {
        flexBasis: '42%',
      };
      break;
    default:
      imgConfig = {};
  }

  return (
    <>
      <div className="hero">
        <div className="hero-heading">{children}</div>
        <div className="hero-img" style={imgConfig}>
          <img src={`/images/hero-${page}.svg`} alt="hero image" />
        </div>
      </div>
      <SocialHandle onHoverPrimary={true}>
        <div className="email-handle">sarthakMangal.com</div>
      </SocialHandle>
    </>
  );
};

export default Hero;
