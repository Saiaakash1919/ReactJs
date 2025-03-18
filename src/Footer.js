
import React from 'react';
import './App.css'; // Assuming you have your styles in App.css or a separate CSS file

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Your Truewear</p>
        <p>
          <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
        </p>
        <div className="social-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />

          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="https://sweetwaternow.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2024/01/Depositphotos_676194222_XL-scaled.jpg" alt="Twitter" />


          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="Instagram" />

          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
