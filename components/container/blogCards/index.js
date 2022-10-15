import BlogCard from './blogCard';

const BlogCards = ({ blogCardList }) => {
  return (
    <div className="blog-cards">
      {blogCardList.map(blog => {
        return (
          <BlogCard
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
