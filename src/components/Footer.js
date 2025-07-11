import React from 'react';
import logo from '../assets/logo-salero-denai.png';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#003300', color: '#fff', padding: '30px 20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <div>
          <img src={logo} alt="Logo" style={{ height: '180px' }} />
        </div>
        <div>
          <p style={{ marginBottom: '5px' }}>Contact Us:</p>
          <p style={{ margin: 0 }}>📧 salerodenai@gmail.com</p>
          <p style={{ margin: 0 }}>📞 @salerodenai</p>
          <p style={{ margin: 0 }}>📷 @salerodenai</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
