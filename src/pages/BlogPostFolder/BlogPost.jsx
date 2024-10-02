import React from 'react';
import './BlogPost.css'; 
import { useParams } from 'react-router-dom';
import data from '../../constants/data.json'; 
import { Link } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams(); 
  const post = data.find((p) => p.id === parseInt(id)); 

 
  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <div className="blog-post-container">
      <div className='blog-post-title-div'>
      <h1 className="blog-post-title">{post.title}</h1>
      <h2 className="blog-post-subtitle">{post.subtitle}</h2>
      </div>
      

      <div className="blog-post-metadata">
        Geschreven door {post.author} op {post.created}
        <span className="blog-post-read-time"> <br/>{post.readTime} minuten lezen </span>
      </div>
      <p className="blog-post-content">{post.content}</p>
      <div className="blog-post-interactions">
        <span className="blog-post-comments">{post.comments} reacties</span>
        <span className="blog-post-shares">• {post.shares} keer gedeeld</span>
      </div>
      <Link to='/posts'>Terug naar de overzichtspagina</Link>
      <footer className="blog-post-footer">
        Blogventure © 2023 • ontwikkeld voor NOVI Hogeschool
      </footer>
    </div>
  );
};

export default BlogPost;
