import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/layout/navbar';
import ServicesContainer from '../components/container/servicesContainer';
import SkillListContainer from '../components/container/skillListContainer';
import ProjectsContainer from '../components/container/projectsContainer';
import BlogCards from '../components/container/BlogCards';
import Hero from '../components/layout/hero';
import Footer from '../components/layout/footer';
import {
  projectCardList,
  blogCardList,
} from '../components/constants/homepage';
import { projectDataList } from '../components/constants/pageData';

const Home = () => {
  const [workHeader, setWorkHeader] = useState('blog');

  return (
    <div>
      <div className="container">
        <Navbar active="home" />
        <div className="main">
          <header>
            <Hero page="home">
              <div className="hero-home">
                <p className="primary hero-greet">Hello</p>
                <p className="hero-intro">I'm Sarthak Mangal,</p>
                <p className="primary hero-identity">A Web Developer</p>
              </div>
            </Hero>
          </header>
          <section className="section-services">
            <p className="section-header">What I Do ?</p>
            <ServicesContainer />
          </section>
          <section className="section-skills">
            <p className="section-header">Stuff I'm good at</p>
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
                    <ProjectsContainer
                      projectCardList={projectDataList.slice(-3).reverse()}
                    />
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
