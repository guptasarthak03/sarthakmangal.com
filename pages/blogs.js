import BlogCards from '../components/container/BlogCards';
import Footer from '../components/layout/footer';
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
                  "The first draft is just you, telling yourself the story."
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
              <BlogCards blogCardList={blogCardList} />
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
