import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import SocialAccount from '../components/common/SocialAccount';
import ServicesContainer from '../components/container/servicesContainer';
import SkillListContainer from '../components/container/skillListContainer';
import ProjectsContainer from '../components/container/projectsContainer';
import Footer from '../components/container/footer';
import { projectCardList } from '../components/constants/homepage';

const Home = () => {
  const [workHeader, setWorkHeader] = useState('portfolio');

  return (
    <div>
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
                    workHeader == 'blog'
                      ? { left: '130px', width: '128px' }
                      : {}
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
              {workHeader == 'portfolio' ? (
                <div className="my-projects">
                  <ProjectsContainer projectCardList={projectCardList} />
                </div>
              ) : (
                <div className="my-blogs" />
              )}
              <div className="view-more">
                <Link href="/">
                  <a>View All</a>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
