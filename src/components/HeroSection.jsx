import '../styles/HeroSection.css'; // for styling
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/Designs');
  };

  return (
    <section className="hero">
      <h1> HennaBloom Studio</h1>
      <p>Tradition meets elegance. Book your story in bloom.</p>
    <button className="cta-button" onClick={handleExploreClick}>
  Explore Styles
</button>

    </section>
  );
};

export default HeroSection;