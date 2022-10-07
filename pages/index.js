import Navbar from '../components/Navbar';
import SocialAccount from '../components/common/SocialAccount';

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="main">
        <header>
          <div className="hero">
            <div className="hero-heading">
              <div className="primary hero-greet">Hello</div>
              <div>
                I'm <strong>Sarthak Mangal</strong>,
              </div>
              <div className="primary identity">A Web Developer</div>
            </div>
            <div class="hero-img">
              <img src="/images/welcome.svg" alt="hero image" />
            </div>
          </div>
          <div className="social-handle">
            <SocialAccount
              source="https://www.linkedin.com/in/sarthak-gupta-b64480102/"
              platform="linkedin"
            />
            <SocialAccount
              source="https://github.com/guptasarthak03"
              platform="github"
            />
            <SocialAccount
              source="https://twitter.com/developermangal"
              platform="twitter"
            />
            <SocialAccount
              source="https://www.instagram.com/sarthak_mangal/"
              platform="insta"
            />
            <div className="email-handle">sarthakMangal.com</div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Home;
