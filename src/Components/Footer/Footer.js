import React from 'react';
<<<<<<< HEAD
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
=======
import FacebookIcon from '@mui/icons-material/FacebookOutlined';
>>>>>>> 60532ba24a34c5bc77fc3e3e7f2d9aced3a10c4b
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_contents">
<<<<<<< HEAD
        <div className="footer_column">
         <div > <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon /></div>
          <div className="footer_columns">
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
            <p>Service Code</p>
            <div className="copy_write">
          &copy; 1997-2024 Netflix, Inc.
        </div>
         </div>
        </div>
        
          
          <div className="footer_column">
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div className="footer_column">
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div className="footer_column">
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
     
       
      
    
  );
};

export default Footer;
=======
        <div className="footer_social">
          <FacebookIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className="footer_column">
          <ul>
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Legal Notice</li>
          </ul>
        </div>
        <div className="footer_column">
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
          </ul>
        </div>
        <div className="footer_column">
          <ul>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="service_code">Service Code</div>
        <div className="copy_write">&copy; 1997-2024 Netflix, Inc.</div>
      </div>
    </div>
  );
};

export default Footer;
>>>>>>> 60532ba24a34c5bc77fc3e3e7f2d9aced3a10c4b
