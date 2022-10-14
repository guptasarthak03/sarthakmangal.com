import Navbar from '../components/Navbar';
import SocialAccount from '../components/common/SocialAccount';
import ServicesContainer from '../components/container/servicesContainer';
import SkillListContainer from '../components/container/skillListContainer';
import { useState } from 'react';
import Link from 'next/link';

const Home = () => {
  const [workHeader, setWorkHeader] = useState('portfolio');

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
          <ServicesContainer />
        </section>
        <section className="section-skills">
          <p className="section-header">What I Know ?</p>
          <div className="my-skills">
            <SkillListContainer partition={1} />
            <div className="divider-hr" />
            <SkillListContainer partition={2} />
          </div>
        </section>
        <section className="section-projects-blogs">
          <p className="section-header">What I've been up to ?</p>
          <div className="my-work">
            <div className="header-tab">
              <div
                className="button-active"
                style={
                  workHeader == 'blog' ? { left: '130px', width: '128px' } : {}
                }
              ></div>
              <button
                className={
                  workHeader == 'portfolio' ? 'work-header-active' : ''
                }
                onClick={() => setWorkHeader('portfolio')}
              >
                My Portfolio
              </button>
              <button
                className={workHeader == 'blog' ? 'work-header-active' : ''}
                onClick={() => setWorkHeader('blog')}
              >
                My Blogs
              </button>
            </div>
            <div className="my-projects">
              <div className="projects-items">
                <div
                  className="projects-item"
                  style={{ backgroundImage: `url(/images/project-1.jpg)` }}
                >
                  <div className="content">
                    <p className="heading">Banana Language</p>
                    <p className="description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Minus eveniet provident.
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
            </div>
            <div className="my-blogs"></div>
            <div className="view-more">
              <Link href="/">
                <a>View More</a>
              </Link>
            </div>
          </div>
        </section>

        <section></section>
      </div>
    </div>
  );
};

export default Home;

// My Work & My Thoughts
{
  /* <section className="section-blogs">
          <p className="section-header">My Blogs</p>
          <div className="blog-items">
            <div className="blog-item">
              <div className="card-top"></div>
              <div className="card-bottom">
                <p className="blog-heading">Banana Language Translator</p>
              </div>
            </div>
          </div>
        </section> */
}
