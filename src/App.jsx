import './App.css';
import logo from './assets/logo-white.png';
import { Route, Routes } from 'react-router-dom';
import MenuBar from './constants/MenuBar';
import Home from './pages/HomeFolder/Home';
import Posts from './pages/PostFolder/Posts';
import PostToevoegen from './pages/PostToevoegenFolder/PostToevoegen';
import Foutpagina from './pages/FoutpaginaFolder/FoutPagina';
import BlogPost from './pages/BlogPostFolder/BlogPost';

function App() {
  return (
    <div className="page-container">
      <MenuBar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/posts" element={<PostToevoegen />} /> 
        <Route path="/new-post" element={<Posts/>} /> 
        <Route path="/*" element={<Foutpagina />} />
        <Route path="/blogpost/:id" element={<BlogPost/>}/>
      </Routes>
    </div>
  );
}

export default App;
