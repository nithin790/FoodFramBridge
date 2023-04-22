import React from 'react';
import Logo from '../Logo';
import './styles.css';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
  
  return (
    <footer>
      <p>
      <a href="https://www.facebook.com"><FaFacebookSquare size={32} /></a>
      <a href="https://www.twitter.com"><FaTwitterSquare size={32} /></a>
      <a href="https://www.instagram.com"><FaInstagramSquare size={32} /></a>
      </p>
      <Logo />
    </footer>
  );
};

export default Footer;
