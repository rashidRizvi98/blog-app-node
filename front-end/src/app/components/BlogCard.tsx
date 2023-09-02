import Link from "next/link";
import { IBlog } from "../models/blog";

  
const BlogCard: React.FC<IBlog> = ({ id, title, content, author }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <p className="card-text">By {`${author.firstName} ${author.lastName}`}</p>
        <Link className="btn btn-primary" href={`/blogs/${id}`}>
          Read More
        </Link>
      </div>
    </div>
  );
};
  
  export default BlogCard;