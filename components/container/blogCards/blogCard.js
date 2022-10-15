import Link from 'next/link';

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="blog-img">
        <img src="/images/blog-tools.jpg" alt="blog image"></img>
      </div>
      <div className="blog-body">
        <div className="blog-meta">
          <span className="blog-date">July 18, 2022 / Corporate Life</span>
        </div>
        <Link href="/">
          <a className="blog-title">
            Is a dev project in a Service Based IT Company still a dream ?
          </a>
        </Link>
        <p className="blog-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, quidem
          expedita. Perspiciatis commodi quisquam, excepturi magnam, corrupti.
        </p>
        <Link href="/">
          <a className="read-more">Read More</a>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
