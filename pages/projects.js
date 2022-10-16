import Footer from '../components/layout/footer';
import Hero from '../components/layout/hero';
import Navbar from '../components/layout/navbar';

const ProjectsPage = () => {
  return (
    <div>
      <div className="container">
        <Navbar active="projects" />
        <div className="main projects-main">
          <header>
            <Hero page="projects">
              <div className="hero-projects">
                <p className="quote">
                  "The Web as I envisaged it, we have not seen it yet. The
                  future is still so much bigger than the past."
                </p>
                <p className="author primary">
                  -Tim Berners Lee, Inventor of the World Wide Web.
                </p>
              </div>
            </Hero>
          </header>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ProjectsPage;

// .”
//
// Innovation is serendipity, so you don't know what people will make.
