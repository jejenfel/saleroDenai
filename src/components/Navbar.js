import React from "react";
import logo from "../assets/logo-salero-denai.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
     <div style={styles.navGroup}>
        <Link to="/tentang" style={styles.link}>Tentang Kami</Link>
        <Link to="/investasi" style={styles.link}>Peluang Investasi</Link>
     </div>

     <div className="nav-logo" style={styles.logoContainer}>
        <Link to="/"> 
         <img src={logo} alt="Logo Salero Denai" style={styles.logo}/>
        </Link>
     </div>

     <div style={styles.navGroup}>
         <Link to="/layanan" style={styles.link}>Layanan</Link>
         <Link to="/outlet" style={styles.link}>Outlet</Link>
     </div>
    </nav>
  );
};

  const styles = {
    navbar: {
      backgroundColor: "#FAC400",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 100px",
      fontFamily: "'Quiksans', serif",
      position: "sticky",
      textAlign: "center",
      gap:"100px"
    },
    navGroup: {
      display: "flex",
      gap: "50px",
      flex: 1,
      textAlign: "center",
      justifyContent: "space-between",
    },
    link: {
      color: "black",
      textDecoration: "none",
      fontWeight: "1000",
      fontFamily: "'Quicksand', sans-serif",
      width: "50px",
      textAlign: "center"
    },
    logo: {
      height: "150px",
      objectFit: "contain",
      // marginLeft: "100px",
      // marginRight: "100px",
    },
  };

export default Navbar;
