import React, { useEffect, useState } from "react";
import axios from "axios";

// const outlets = [
//   {
//     name: "Outlet Pamulang 2",
//     address: "Jl. Benda Raya Pamulang 2, Tangerang Selatan",
//     image: require("../assets/outlet1.jpeg"),
//     mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.52305039034!2d106.7088385!3d-6.326194800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e568fe3e123d%3A0x8a199161ffa0e50a!2sNasi%20kapau%20salero%20denai%20100%20%25%20minang%20asli!5e0!3m2!1sen!2sid!4v1751367602979!5m2!1sen!2sid", // ganti sesuai link map outlet
//   },
//   {
//     name: "Outlet Bintaro",
//     address: "Jl. Putera Raya Blok ED no. 41/42 sektor 5, Bintaro",
//     image: require("../assets/outlet2.jpg"),
//     mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.947196679963!2d106.72954700000001!3d-6.270674700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f184cd32ddcb%3A0x41bf66fa1894e762!2sNasi%20Kapau%20Salero%20Denai%20Bintaro!5e0!3m2!1sen!2sid!4v1751369390478!5m2!1sen!2sid" 
//   },
//   // Tambahkan outlet lainnya sesuai kebutuhan
// ];

const Outlet = () => {
  const [data, setData] = useState(null);
  
    useEffect(() => {
      axios.get("http://localhost:5000/api/outlet")
        .then(res => setData(res.data))
        .catch(err => console.error(err));
    }, []);
  
    if (!data) return <p>Loading...</p>;

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Outlet Salero Denai</h2>
      <p style={styles.subtitle}>Temukan lokasi outlet kami yang tersebar di berbagai titik strategis.</p>
      <div style={styles.grid}>
        {data.outlet.map((outlet, index) => (
          <div key={index} style={styles.card}>
            <img src={outlet.imageUrl} alt={outlet.nama} style={styles.image} />
            <h3 style={styles.name}>{outlet.nama}</h3>
            <p style={styles.address}>{outlet.alamat}</p>
            <iframe
              title={outlet.nama}
              src={outlet.mapUrl}
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: "10px", marginTop: "10px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "30px",
    backgroundColor: "#FAC400",
    fontFamily: "'Quicksand', sans-serif",
    minHeight: "100vh",
  },
  title: {
    textAlign: "center",
    fontSize: "40px",
    fontStyle: "italic",
    marginBottom: "10px",
    fontFamily:"'Merriweather', serif"
  },
  subtitle: {
    textAlign: "center",
    fontSize: "24px",
    marginBottom: "30px",
    fontWeight:"bold"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(300px, 1fr))",
    gap: "30px",
    padding:"40px 200px",

  },
  card: {
    backgroundColor: "#E41D20",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    width:"300px",
    textAlign:"center",
    transition: "transform 0.3s ease",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  name: {
    marginTop: "10px",
    fontWeight: "bold",
    fontSize: "20px",
  },
  address: {
    margin: "5px 0 10px 0",
    color: "#fff",
  }
};

export default Outlet