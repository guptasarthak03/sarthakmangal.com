import Link from 'next/link';

const BlogCard = ({ date, desc, imgPath, tag, title, url }) => {
  return (
    <div className="blog-card">
      <div className="blog-img">
        <img src={imgPath} alt="blog image"></img>
      </div>
      <div className="blog-body">
        <div className="blog-meta">
          <span className="blog-date">
            {date} / {tag}
          </span>
        </div>
        <Link href={url}>
          <a className="blog-title">{title}</a>
        </Link>
        <p className="blog-text">{desc}</p>
        <Link href={url}>
          <a className="read-more">Read More</a>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
