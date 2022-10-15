import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/layout/navbar';
import ServicesContainer from '../components/container/servicesContainer';
import SkillListContainer from '../components/container/skillListContainer';
import ProjectsContainer from '../components/container/projectsContainer';
import Footer from '../components/layout/footer';
import BlogCards from '../components/container/BlogCards';
import SocialHandle from '../components/container/SocialHandle';
import {
  projectCardList,
  blogCardList,
} from '../components/constants/homepage';

const Home = () => {
  const [workHeader, setWorkHeader] = useState('blog');

  return (
    <div>
      <div className="container">
        <Navbar active="home" />
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
            <SocialHandle onHoverPrimary={true}>
              <div className="email-handle">sarthakMangal.com</div>
            </SocialHandle>
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
                  My Projects
                </button>
                <button
                  className={workHeader == 'blog' ? 'work-header-active' : ''}
                  onClick={() => setWorkHeader('blog')}
                >
                  My Blogs
                </button>
              </div>
              <div className="work-body">
                {workHeader == 'portfolio' ? (
                  <div className="my-projects">
                    <ProjectsContainer projectCardList={projectCardList} />
                  </div>
                ) : (
                  <div className="my-blogs">
                    <BlogCards blogCardList={blogCardList} />
                  </div>
                )}
              </div>
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
