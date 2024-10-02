import './Post.css';
import { useState } from 'react';

function Posts() {
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    name: '',
    content: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    // You can add further actions here, like sending data to an API
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData)
  };

  return (
    <div className="page-container">
      <h1>Post toevoegen</h1>
      <form onSubmit={handleSubmit} className='form'>
        <div className="form_divs">
          <label htmlFor="title">Titel</label>
          <input
            id="title"
            name="title"
            className="form_input"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div className="form_divs">
          <label htmlFor="subtitle">Subtitle</label>
          <input
            id="subtitle"
            name="subtitle"
            className="form_input"
            value={formData.subtitle}
            onChange={handleChange}
          />
        </div>

        <div className="form_divs">
          <label htmlFor="name">Naam en achternaam</label>
          <input
            id="name"
            name="name"
            className="form_input"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form_divs">
          <label htmlFor="content">Blogpost</label>
          <textarea
            id="content"
            name="content"
            className='form_textarea'
            value={formData.content}
            onChange={handleChange}
          />
        </div>

        <div className='form_divs'>
          <button type="submit" className='button'>Toevoegen</button>
        </div>
      </form>
    </div>
  );
}


export default Posts;
