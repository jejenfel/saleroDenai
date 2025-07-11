import React, { useEffect, useState } from "react";
import axios from "axios";
import makanan from '../assets/makanan.JPEG';

const Investasi = () => {
  const [investment, setInvestment] = React.useState("");
  const [percentage, setPercentage] = React.useState("");
  const [duration, setDuration] = React.useState("");
  const [roi, setRoi] = React.useState(null);
  const [data, setData] = useState(null);
  
    useEffect(() => {
      axios.get("http://localhost:5000/api/peluang-investasi")
        .then(res => setData(res.data))
        .catch(err => console.error(err));
    }, []);
  
    if (!data) return <p>Loading...</p>;

  const calculateROI = () => {
    const inv = parseFloat(investment);
    const pct = parseFloat(percentage);
    const dur = parseFloat(duration);

    if (!inv || !pct || !dur) {
      alert("Mohon isi semua kolom!");
      return;
    }

    const monthlyReturn = inv * (pct / 100);
    const totalROI = monthlyReturn * dur;
    setRoi(totalROI);
  };
  
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Peluang Investasi</h2>

      {/* Alasan Berinvestasi */}
      <section style={styles.section}>
        <h3 style={styles.subtitle}>Mengapa Berinvestasi di Salero Denai?</h3>
        <div style={styles.boxContainer}>
        {data.alasan.map((alasan, index) => (
          <div key={index} style={styles.box}>
            <img src={alasan.imageUrl} alt="investasi" style={styles.alasanImage}/>
            <p>{alasan.deskripsi}</p>
          </div>
        ))}
      </div>
      </section>

      <section style={styles.subSection}>    
      <div className="left-section" style={styles.leftSection}>
        <img src={makanan} alt="Makanan" className="image-bg" style={styles.imageBg}/>
        <div style={styles.overlay}>
        <h2 className="judul" style={styles.judulModel}>Model Investasi yang Ditawarkan</h2>
        </div>
      </div>

      <div className="right-section" style={styles.rightSection}>
        {data.modelInvestasi.map((item) => (
          <div key={item.id} className="box" style={styles.boxModel}>
            <h3 style={styles.boxModelh3}>{item.judul}</h3>
            <p style={styles.boxModelp}>{item.deskripsi}</p>
          </div>
        ))}
      </div>
      </section>

      {/* Statistik */}
      <section style={styles.section}>
        <h3 style={styles.subtitleKalkulator}>Coba Simulasikan Investasi Anda!</h3>
        {data.statistik.map((stat, index) => (
        <div key={index}>
        <div style={styles.grid}> 
          <div style={styles.containerCard}>
          <h4 style={styles.judulCard}>Rata-rata ROI Tahunan</h4>
          <div style={styles.card}>
            <p style={styles.isiCard}>{stat.roi}</p>
          </div>
          </div>
          <div style={styles.containerCard}>
          <h4 style={styles.judulCard}>Total Outlet Aktif</h4>
          <div style={styles.card}>
            <p style={styles.isiCard}>{stat.cabang} Outlet</p>
          </div>
          </div>
          <div style={styles.containerCard}>
          <h4 style={styles.judulCard}>Jumlah Investor</h4>
          <div style={styles.card}>
            <p style={styles.isiCard}>{stat.investor} Orang</p>
          </div>
          </div>
          <div style={styles.containerCard}>
          <h4 style={styles.judulCard}>Pertumbuhan Pendapatan</h4>
          <div style={styles.card}>
            <p style={styles.isiCard}>{stat.pertumbuhan}/ tahun</p>
          </div>
          </div>  
        </div>
      </div>
      ))}
      </section>

      {/* Kalkulator ROI */}
      <section style={styles.section}>
        <form onSubmit={(e) => e.preventDefault()} style={styles.grid}>
          <div style={styles.formContainer}>
            <label style={styles.label}>Jumlah Investasi (Rp):</label><br />
            <input
              type="number"
              value={investment}
              onChange={(e) => setInvestment(e.target.value)}
              style={styles.form}
              placeholder="contoh: 50000000"
            />
          </div>
          <div style={styles.formContainer}>
            <label style={styles.label}>Persentase Bagi</label><br />
            <label style={styles.label}>Hasil per Bulan (%): </label><br />
            <input
              type="number"
              value={percentage}
              onChange={(e) => setPercentage(e.target.value)}
              style={styles.form}
              placeholder="contoh: 5"
            />
          </div>
          <div style={styles.formContainer}>
            <label style={styles.label}>Durasi Investasi (bulan): </label><br />
            <input
              type="number"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              style={styles.form}
              placeholder="contoh: 12"
            />
          </div>
        </form>
        <div style={styles.buttonContainer}>
        <div style={{ display: "flex", padding: "20px" }}>
        <button onClick={calculateROI} style={styles.button}>SIMULASIKAN</button>
        </div>
          {roi && (
            <p style={{ marginTop: 15, fontWeight: "bold", fontSize:"24px", textAlign:"center" }}>
              Perkiraan ROI: Rp {roi.toLocaleString("id-ID")}
            </p>
          )}
        </div>
      </section>

      {/* Testimoni */}
      <section style={styles.section}>
        <h3 style={styles.subtitle}>Testimoni Investor</h3>
        {data.testimoni.map((testimoni, index) => (
        <div key={index}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "20px", alignItems: "center", }}>
          <div style={styles.boxTestimoni}>
          <p style={styles.text}>
            {testimoni.isi}  
            <br /><em>— {testimoni.nama}</em>
          </p>
          </div>
        </div>
        </div>
         ))}
      </section>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#FAC400",
    padding: "40px 80px",
    fontFamily: "'Quicksand', sans-serif",
    minHeight: "100vh",
  },
  title: {
    fontFamily:"'Merriweather', serif",
    textAlign: "center",
    fontStyle: "italic",
    fontSize: 40,
    marginBottom: 20,
  },
  subtitle: {
    fontFamily:"'Merriweather', serif",
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 50,
  },
  section: {
    marginBottom: 50,
  },
  text: {
    fontSize: 16,
    lineHeight: "1.6",
    marginBottom: 12,
  },
  list: {
    paddingLeft: 20,
    lineHeight: "1.8",
  },
  boxContainer: {
    display: "flex",
    justifyContent: 'center',
    gap: "50px",
    alignItems: "center",
    // width: "100px"
    //padding: "100px"
  },
  box: {
    backgroundColor: "#E41D20",
    width:"100px",
    heigth:"100px",
    color: "white",
    padding: "10px",
    borderRadius: 8,
    flex: "1",
    textAlign: "center",
    fontWeight: "bold",
    //alignItems: "center",
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '50px',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
  },
  containerCard:{
    display:"flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  card: {
    padding: '10px',
    borderRadius: '15px',
    textAlign: "center",
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    width: '250px',
    backgroundColor: "#fff3b0",
  },
  judulCard:{
    textAlign:"center",
    fontSize:"24px",
  },
  isiCard:{
    fontSize:"32px",
    color: "#c02942",
    fontWeight:"bold"
  },
  label:{
    fontSize:"24px",
  },
  subSection: {
    display: "flex",
    marginBottom:"50px",
  }, 

  leftSection: {
    flex: 1,
    position: "relative",
    overflow: "hidden",
    width: '100vw',
    marginLeft: 'calc(-50vw + 50%)',
  },
  imageBg: {
    width: "750px",
    height: "750px",
    objectFit: "cover",
    filter: "brightness(0.75)",
    opacity:"0.20"
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '90%',
    width: '90%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  judulModel: {
    position: "absolute",
    fontSize: "24px",
    fontWeight: "bold",
    textAlign:"center",
    maxWidth:"80%",
    padding:"0px 25px"
  },
  rightSection: {
    flex: 1,
    padding: "40px 75px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "30px"
  },
  boxModel: {
    backgroundColor: "#fff3b0",
    borderRadius: "30px",
    padding: "20px 30px",
    boxShadow: "2px 4px 4px #E41D20",
  },
  boxModelh3: {
    margin: 0,
    color: "#c02942",
    fontWeight: "bold",
    fontFamily:"'Merriweather', serif",
    fontSize: "32px",
    textAlign:"center"
  },

  boxModelp: {
    marginTop: "8px", 
    fontSize: "24px",
    textAlign:"center"
  }, 
  subtitleKalkulator:{
    textAlign:"right",
    fontFamily:"'Merriweather', serif",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 25,
  },
  formContainer: {
    textAlign: "center",
    width: '300px',
    alignItems:"center"
    
  }, 
  form:{
    padding: "10px",
    border: "1.5px solid #ccc",
    borderRadius: "10px",
    fontFamily: "'Quicksand', sans-serif",
    width: "75%",
    height: "25px",
    marginBottom: "15px",
    gap:"100px"
  },
  buttonContainer:{
    display:"flex",
    alignItems:"center",
    gap:"150px",
    padding:"0px 200px"
  },
  button:{
    padding: "10px",
    backgroundColor: "#063900",
    border: "1.5px solid #063900",
    borderRadius: "10px",
    fontFamily: "'Quicksand', sans-serif",
    width: "225px",
    marginBottom: "15px",
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: "24px",
  },

  boxTestimoni:{
    backgroundColor: "#fff3b0",
    borderRadius: "30px",
    padding: "20px 30px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
    width: "75%",
    marginBottom: "20px",
  },
  alasanImage: { 
    width:"100px", 
    // height: "", 
    objectFit: "cover", 
    borderRadius: "8px" 
  },

}

export default Investasi