function Footer() {
    const footerStyle = {
      backgroundColor: '#2d3748', // Dark Gray background color
      color: 'white',
      padding: '16px',
      textAlign: 'center',
      marginTop: '32px',
    };
  
    const socialLinksContainerStyle = {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '8px',
    };
  
    const socialLinkStyle = {
      marginRight: '16px', // Adds space between the links
      textDecoration: 'none',
      color: 'white',
      transition: 'color 0.3s',
    };
  
    return (
      <footer style={footerStyle}>
        <p>&copy; 2025 Mon Site. Tous droits réservés.</p>
        <div style={socialLinksContainerStyle}>
          <a 
            href="#" 
            style={socialLinkStyle} 
            onMouseEnter={(e) => e.target.style.color = '#3182ce'} 
            onMouseLeave={(e) => e.target.style.color = 'white'}
          >
            Facebook
          </a>
          <a 
            href="#" 
            style={socialLinkStyle} 
            onMouseEnter={(e) => e.target.style.color = '#3182ce'} 
            onMouseLeave={(e) => e.target.style.color = 'white'}
          >
            Twitter
          </a>
          <a 
            href="#" 
            style={socialLinkStyle} 
            onMouseEnter={(e) => e.target.style.color = '#3182ce'} 
            onMouseLeave={(e) => e.target.style.color = 'white'}
          >
            Instagram
          </a>
        </div>
      </footer>
    );
  }
  
  export default Footer;