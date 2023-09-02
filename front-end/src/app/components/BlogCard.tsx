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
  onDeleteClick?: () => void;
}
  
const BlogCard: React.FC<IBlogCardProps> = ({ id, title, content, author, isEditable, onEditClick, onDeleteClick }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{ content.length > 30 ?`${content.slice(0, 30)}...` : content}</p>
        <p className="card-text">By {`${author.firstName} ${author.lastName}`}</p>
        {isEditable && (
          <>
            <button className="btn btn-warning mx-2 my-2" onClick={onEditClick}>
              Edit
            </button>
            <button className="btn btn-danger mx-2 my-2" onClick={onDeleteClick}>
              Delete
            </button>
          </>
        )}
        <Link className="btn btn-primary mx-2 my-2" href={`/blogs/${id}`}>
          Read More
        </Link>
      </div>
    </div>
  );
};
  
  export default BlogCard;