const Hero = ({ children, page = 'home' }) => {
  const imgConfig =
    page == 'projects'
      ? {
          flexBasis: '40%',
        }
      : {};

  return (
    <div className="hero">
      <div className="hero-heading">{children}</div>
      <div className="hero-img" style={imgConfig}>
        <img src={`/images/hero-${page}.svg`} alt="hero image" />
      </div>
    </div>
  );
};

export default Hero;
