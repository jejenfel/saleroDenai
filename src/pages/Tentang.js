import React, { useEffect, useState } from "react";
import axios from "axios";
import makanan from '../assets/makanan-kiri.jpeg';


const Tentang = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/tentang-kami")
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Tentang Salero Denai</h2>
      <p style={styles.slogan}> {data.slogan}</p>
      {data.sejarah.map((item, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h4 style={styles.textQuotes}>{item.quotes}</h4>
          <div style={styles.oleh}>
          <h4 style={styles.olehSejarah}>By {item.oleh}</h4>
          <h4 style={styles.tahunSejarah}>{item.tahun}</h4>
          </div>
          <div style={styles.sectionSejarah}>
            <img src={makanan} alt="Makanan" className="image-bg" style={styles.imageBg}/>
            <div style={styles.overlay}>
            <h4 style={styles.textSejarah}>{item.Sejarah}</h4>
            </div>
          </div>
        </div>
      ))}

      <div style={styles.visimisi}>
        <div style={styles.visiSection}>
          <h4 style={styles.titleVisi}>VISI</h4>  
          <p style={styles.textVisi}>{data.visi}</p>
        </div>
        <div style={styles.misiSection}>
          <h4 style={styles.titleMisi}>MISI</h4>
          <ul>
            {data.misi.map((item, i) => (
            <li key={i} style={styles.textMisi}>{item}</li>
            ))}
          </ul>
        </div>
      </div>


      <h3 style={styles.subtitle}>Menu Andalan Kami</h3>
      <div style={styles.menuGrid}>
        {data.menuAndalan.map((menu, index) => (
          <div key={index} style={styles.menuCard}>
            <img src={menu.imageUrl} alt={menu.name} style={styles.menuImage} />
            <p style={styles.menuName}>{menu.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: { padding: "40px 80px", backgroundColor: "#FAC400", fontFamily: "'Quicksand', sans-serif", minHeight: "100vh", },
  title: { fontFamily:"'Merriweather', serif",fontSize: "40px", fontStyle: "italic", marginBottom: "50px", textAlign:"center", textShadow: "40px 40px 40px #E41D20)" },
  slogan: {fontFamily:"'Merriweather', serif", fontWeight: "bold", fontSize:"32px", textAlign:"center", marginTop:"50px", marginBottom:"10px"},
  textQuotes: { fontSize: "20px", marginBottom: "5px", lineHeight: "1.6", fontWeight:"bold", textAlign:"center", padding:"0px 175px", marginTop:"10px" },
  olehSejarah:{fontSize:"24px", fontWeight:"bold", color:"#E41D20", textAlign:"right", padding:"0px 175px", marginBottom:"2px", marginTop:"20px"},
  tahunSejarah: {fontSize:"20px", textAlign:"right", padding:"0px 175px", marginTop:"2px", marginBottom:"50px"},
  sectionSejarah:{
    display:"flex",
    flex: 1,
    position: "relative",
    overflow: "hidden",
    alignItems:"center",
    width: '100vw',
    marginLeft: 'calc(-50vw + 50%)',
    marginBottom:"10px"
  },
  imageBg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "brightness(1)",
    color:"#FAC400",
    opacity:"0.15"
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  textSejarah:{
    position: "absolute",
    // top: "30px",
    // left: "30px",
    fontSize: "24px",
    fontWeight: "bold",
    textAlign:"center",
    maxWidth:"80%",
    padding:"0px 300px"
  },
  visimisi:{
    display:"flex",
    alignItems:"flex-start"
  }, 
  visiSection: {
    flex: 1,
    padding: "0px 100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  titleVisi:{
    fontFamily:"'Merriweather', serif",
    fontSize:"32px",
    fontWeight:"bold"
  },
  textVisi:{
    fontSize:"24",
    fontWeight:"bold",
    textAlign:"justify"
  },
  misiSection: {
    flex: 1,
    padding: "0px 100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
   titleMisi:{
    fontFamily:"'Merriweather', serif",
    fontSize:"32px",
    fontWeight:"bold",
    textAlign:"right"
  },
  textMisi:{
    fontSize:"24",
    fontWeight:"bold",
    textAlign:"justify"
  },
  subtitle: { fontSize: "24px", margin: "30px 0 20px 0", fontWeight: "bold" },
  menuGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "20px" },
  menuCard: { textAlign: "center" },
  menuImage: { width:"100%", height: "325px", objectFit: "cover", borderRadius: "8px" },
  menuName: { marginTop: "10px", fontWeight: "bold" },
};

export default Tentang;
