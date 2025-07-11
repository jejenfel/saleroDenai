import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div style={sectionStyle}>
      <div style={welcome}>
      <h1 style={{ color: '#000', textAlign: "left", marginBottom:'5px'}}>SELAMAT DATANG</h1>
      <h1 style={{ color: '#000', textAlign: "left", marginTop:'5px' }}>DI SALERO DENAI</h1>
      <p style={{ marginBottom: '40px', textAlign: "justify" }}>
        Rumah bagi cita rasa autentik Minangkabau. Temukan cerita kami, peluang menarik untuk berkembang bersama, layanan istimewa, dan berbagai outlet kami yang tersebar di berbagai lokasi.
      </p>
      </div>
      <div style={gridStyle}>
        <div style={sectionBox}>
          <h3>Tentang Kami</h3>
          <p>
            Kenali lebih dekat Nasi Kapau Salero Denai, restoran Padang khas Kapau yang berdiri sejak 2010 dan menghadirkan pengalaman dan rasa autentik Minangkabau.
          </p>
          <button onClick={() => navigate('/tentang')} style={buttonStyle}>Selengkapnya</button>
        </div>

        <div style={sectionBox}>
          <h3>Peluang Investasi</h3>
          <p>
            Berbagunglah dalam pertumbuhan Salero Denai! Investasi yang fleksibel, menguntungkan, dan didukung oleh pengalaman serta strategi pemasaran matang.
          </p>
          <button onClick={() => navigate('/investasi')} style={buttonStyle}>Selengkapnya</button>
        </div>

        <div style={sectionBox}>
          <h3>Layanan</h3>
          <p>
            Salero Denai hadir untuk kebutuhan Anda – mulai dari layanan dine-in, delivery, catering, hingga event besar dengan cita rasa istimewa.
          </p>
          <button onClick={() => navigate('/layanan')} style={buttonStyle}>Selengkapnya</button>
        </div>

        <div style={sectionBox}>
          <h3>Outlet</h3>
          <p>
            Dengan lokasi strategis di berbagai titik kota, Salero Denai memudahkan Anda menemukan outlet favorit dengan rasa otentik dan suasana hangat.
          </p>
          <button onClick={() => navigate('/outlet')} style={buttonStyle}>Selengkapnya</button>
        </div>
      </div>
    </div>
  )
}

    const sectionStyle = {
        backgroundColor: '#FAC400',
        padding: '10px 100px',
        
    };

    const welcome = {
        fontFamily: "'Merriweather', sans-serif",
        width:"900px",
        fontSize:'40px'
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto'
    };

    const sectionBox = {
        backgroundColor: '#FAC400',
        border: '1px solid transparent'
    };

    const buttonStyle = {
        backgroundColor: '#c62828',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        marginTop: '10px',
        cursor: 'pointer'
    };


export default Dashboard