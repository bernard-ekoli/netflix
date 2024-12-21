import React from 'react'
import './css/footer.css'
import { useState, useEffect } from 'react';
const Footer = () => {
  const [location, setLocation] = useState('Loading location...');
  useEffect(() => {
    fetch('http://ip-api.com/json')
      .then(response => response.json())
      .then(data => {
        const { country } = data;
        setLocation(`${country}`);
      })
      .catch(error => {
        console.error('Error fetching location:', error);
        setLocation('Location could not be determined');
      });
  }, []);
  return (
    <div id='footer'>
      <div id="ques">Questions? Contact us.</div>
      <div id="spans">
        <span>FAQ</span>
        <span>Help Center</span>
        <span>Account</span>
        <span>Media Center</span>
        <span>Investor Relations</span>
        <span>Jobs</span>
        <span>Ways to Watch</span>
        <span>Terms of Use</span>
        <span>Privacy</span>
        <span>Cookie Preferences</span>
        <span>Corperate Information</span>
        <span>Contact Us</span>
        <span>Speed Test</span>
        <span>Legal Notices</span>
        <span>Only on Netflix</span>
      </div>
      <div id="Language"></div>
      <span className='countre'>Netflix {location}</span>
    </div>
  )
}

export default Footer
