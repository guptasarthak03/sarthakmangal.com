import BlogCard from './BlogCard';

const BlogCards = ({ blogCardList }) => {
  return (
    <div className="blog-cards">
      {blogCardList.map(blog => {
        return (
          <BlogCard
            key={blog.title}
            date={blog.date}
            desc={blog.desc}
            imgPath={blog.imgPath}
            tag={blog.tag}
            title={blog.title}
            url={blog.url}
          />
        );
      })}
    </div>
  );
};

export default BlogCards;
