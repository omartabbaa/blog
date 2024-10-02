import './Home.css';
import logo from '../../assets/logo-white.png'; 

function Home() {
  return (
    <div className="page-container">
      <h1>Bij Blogventure geloven we in de kracht van woorden</h1> {/* Corrected typo */}
      <img src={logo} alt="Company Logo" />
    </div>
  );
}

export default Home;
