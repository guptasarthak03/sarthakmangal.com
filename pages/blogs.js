import Footer from '../components/layout/footer';
import BlogsContainer from '../components/container/BlogsContainer';
import Hero from '../components/layout/hero';
import Navbar from '../components/layout/navbar';
import { blogCardList } from '../components/constants/homepage';

const BlogsPage = () => {
  return (
    <div>
      <div className="container">
        <Navbar active="blogs" />
        <div className="main projects-main">
          <header>
            <Hero page="blogs">
              <div className="hero-projects">
                <p className="quote">
                  &quot;The first draft is just you, telling yourself the
                  story.&quot;
                </p>
                <p className="author primary">-Terry Pratchett</p>
              </div>
            </Hero>
          </header>
          <section>
            <p className="section-header">My Blogs</p>
            <p className="section-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse eos
              sit deleniti quidem ut doloremque ea omnis reiciendis.
            </p>
            <div className="my-blogs">
              <BlogsContainer blogCardList={blogCardList} />
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

export default BlogsPage;
