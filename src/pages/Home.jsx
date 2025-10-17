

import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/HomeSection.css"; // for styling

const Home = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/Designs");
  };

  return (
    <>
      <Navbar />
      <section className="hero">
        <h1> HennaBloom Studio</h1>
        <p>Tradition meets elegance. Book your story in bloom.</p>
        <button className="cta-button" onClick={handleExploreClick}>
          Explore Styles
        </button>
      </section>
    </>
  );
};

export default Home;





