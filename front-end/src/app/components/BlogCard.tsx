import Link from "next/link";
import { IBlog } from "../models/blog";
import { IUser } from "../models/user";

interface IBlogCardProps {
  id: string;
  title: string;
  content: string;
  author: IUser;
  isEditable?: boolean;
  onEditClick?: () => void;
}
  
const BlogCard: React.FC<IBlogCardProps> = ({ id, title, content, author, isEditable, onEditClick }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <p className="card-text">By {`${author.firstName} ${author.lastName}`}</p>
        {isEditable && (
          <button className="btn btn-warning" onClick={onEditClick}>
            Edit
          </button>
        )}
        <Link className="btn btn-primary" href={`/blogs/${id}`}>
          Read More
        </Link>
      </div>
    </div>
  );
};
  
  export default BlogCard;