import "./PostToevoegen.css";
import data from '../../constants/data.json';
import { Link } from "react-router-dom";

function PostToevoegen() {
  return (
    <div className="page-container">
      <h1>Bekijk alle posts op het platform</h1>
      {data.map((post, index) => (
        <Link to={`/blogpost/${post.id}`} className="postContainer" key={index}>
          <div className="posts">
            <div className="TitleName">
              <h2>{post.title}</h2>
              <span>{post.author}</span> {/* Replace <a> with <span> */}
            </div>
            <span>Reacties: {post.comments}</span>
            <span>Bekeken: {post.readTime}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default PostToevoegen;
