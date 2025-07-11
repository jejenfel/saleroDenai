import React, { useEffect, useState } from "react";
import axios from "axios";

const Layanan = () => {
  const [data, setData] = useState(null);
  
    useEffect(() => {
      axios.get("http://localhost:5000/api/layanan")
        .then(res => setData(res.data))
        .catch(err => console.error(err));
    }, []);
  
    if (!data) return <p>Loading...</p>;

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Layanan Salero Denai</h2>
      <p style={styles.subtitle}>
        Kami hadir untuk memenuhi berbagai kebutuhan kuliner Anda, mulai dari santap di tempat hingga kebutuhan acara besar.
      </p>
      <div style={styles.grid}>
        {data.layanan.map((layanan, index) => (
          <div key={index} style={styles.card}>
            <img src={layanan.icon} alt="investasi" style={styles.icon}/>
            <h3 style={styles.cardTitle}>{layanan.judul}</h3>
            <p style={styles.description}>{layanan.deskripsi}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#FAC400",
    padding: "40px 20px",
    fontFamily: "'Quicksand', sans-serif",
    minHeight: "100vh",
  },
  title: {
    fontFamily:"'Merriweather', serif",
    fontSize: "40px",
    textAlign: "center",
    fontStyle: "italic",
    marginBottom: "10px",
  },
  subtitle: {
    textAlign: "center",
    fontSize: "24px",
    marginBottom: "30px",
    maxWidth: "800px",
    marginLeft: "auto",
    marginRight: "auto",
    fontWeight:"bold"
  },
  grid: {
    display: "flex",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px",
    justifyContent:"center"
  },
  card: {
    backgroundColor: "#E41D20",
    padding: "25px",
    borderRadius: "20px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    width:"250px",
    textAlign:"center",
    transition: "transform 0.3s ease",
  },
  icon: {
    fontSize: "36px",
    justifyContent:"center",
    marginBottom: "10px",
  },
  cardTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "10px",
  },
  description: {
    fontSize: "14px",
    textAlign: "center",
    color: "#fff",
  },
};

export default Layanan;
