import Navbar from '../components/Navbar';
import SocialAccount from '../components/common/SocialAccount';

const Home = () => {
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
            <div class="hero-img">
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
            <div className="service">
              <img src="/images/ui-ux.svg" alt="UI-UX" />
              <p class="service-heading">UI & UX Design</p>
              <p>
                I enjoy creating eye-pleasing, user centeric UI with an essence
                of minimalistic design.
              </p>
            </div>
            <div className="service">
              <img src="/images/web-development.svg" alt="Web Development" />
              <p class="service-heading">Web Development</p>
              <p>
                I am a front-end developer who writes clean and optimized code
                with mobile-first approach in mind.
              </p>
            </div>
            <div className="service">
              <img src="/images/performance-seo.svg" alt="Performance & SEO" />
              <p class="service-heading">Performance & SEO</p>
              <p>
                Proven experience in improving speed & metrics of websites,
                making it stand out from the crowd.
              </p>
            </div>
          </div>
        </section>
        <section className="section-skills">
          <p className="section-header">What I Know ?</p>
          <div className="skill-items">
            <div className="skill-item">
              <img src="/images/nextjs-icon.svg" alt="next-js" />
              <p>Next.JS</p>
            </div>
            <div class="skill-item">
              <img src="/images/react-icon.svg" alt="react-js" />
              <p>React.JS</p>
            </div>
            <div class="skill-item">
              <img src="/images/redux.svg" alt="redux" />
              <p>Redux</p>
            </div>
            <div class="skill-item">
              <img src="/images/html5.svg" alt="next-js" />
              <p>HTML</p>
            </div>
            <div class="skill-item">
              <img src="/images/css3.svg" alt="css3" />
              <p>CSS</p>
            </div>
          </div>
          <div class="divider-hr"></div>
          <div class="skill-items">
            <div class="skill-item">
              <img src="/images/version-control.svg" alt="version-control" />
              <p>Version Control</p>
            </div>
            <div class="skill-item">
              <img src="/images/agile.svg" alt="Agile" />
              <p>Agile Methodology</p>
            </div>
          </div>
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
