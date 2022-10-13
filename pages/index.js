import Navbar from '../components/Navbar';
import SocialAccount from '../components/common/SocialAccount';
import ServiceContainer from '../components/container/serviceContainer';
import SkillListContainer from '../components/container/skillListContainer';

const Home = () => {
  const serviceCardsList = [
    {
      name: 'ui-ux',
      title: 'UI & UX Design',
      desc: 'I enjoy creating eye-pleasing, user centeric UI with an essence of minimalistic design.',
    },
    {
      name: 'web-development',
      title: 'Web Development',
      desc: 'I am a front-end developer who writes clean and optimized code with mobile-first approach in mind.',
    },
    {
      name: 'performance-seo',
      title: 'Performance & SEO',
      desc: 'Proven experience in improving speed & metrics of websites, making it stand out from the crowd.',
    },
  ];

  // custom inline style for icon
  const projectIconStyleConfig = {
    width: '2.3rem',
    border: '1px solid rgba(0,0,0,0.3)',
    borderRadius: '5px',
  };

  const projectIconHoverConfig = {
    filter:
      'invert(41%) sepia(54%) saturate(5853%) hue-rotate(179deg) brightness(94%) contrast(98%)',
  };

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
            <div className="hero-img">
              <img src="/images/welcome.svg" alt="hero image" />
            </div>
          </div>
          <div className="social-handle">
            <SocialAccount
              source="https://www.linkedin.com/in/sarthak-gupta-b64480102/"
              name="linkedin"
            />
            <SocialAccount
              source="https://github.com/guptasarthak03"
              name="github"
            />
            <SocialAccount
              source="https://twitter.com/developermangal"
              name="twitter"
            />
            <SocialAccount
              source="https://www.instagram.com/sarthak_mangal/"
              name="insta"
            />
            <div className="email-handle">sarthakMangal.com</div>
          </div>
        </header>
        <section className="section-services">
          <p className="section-header">What I Do ?</p>
          <div className="my-services">
            {serviceCardsList.map(card => {
              return (
                <ServiceContainer
                  title={card.title}
                  name={card.name}
                  description={card.desc}
                />
              );
            })}
          </div>
        </section>
        <section className="section-skills">
          <p className="section-header">What I Know ?</p>
          <SkillListContainer partition={1} />
          <div className="divider-hr" />
          <SkillListContainer partition={2} />
        </section>
        <section className="section-projects">
          <p className="section-header">What I've been up to ?</p>
          <div className="projects-items">
            <div
              className="projects-item"
              style={{ backgroundImage: `url(/images/project-1.jpg)` }}
            >
              <div className="content">
                <p className="heading">Banana Language</p>
                <p className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  eveniet provident.
                </p>
                <div className="projects-cta">
                  <SocialAccount
                    source="https://www.linkedin.com/in/sarthak-gupta-b64480102/"
                    name="code"
                    isWhite={true}
                    styleConfig={projectIconStyleConfig}
                    hoverConfig={projectIconHoverConfig}
                  />
                  <SocialAccount
                    source="https://www.linkedin.com/in/sarthak-gupta-b64480102/"
                    name="preview"
                    isWhite={true}
                    styleConfig={projectIconStyleConfig}
                    hoverConfig={projectIconHoverConfig}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-blogs">
          <p className="section-header">My Blogs</p>
          <div className="blog-items">
            <div className="blog-item">
              <div className="card-top"></div>
              <div className="card-bottom">
                <p className="blog-heading">Banana Language Translator</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;

// My Work & My Thoughts
