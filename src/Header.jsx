function Header({ name, lastName }) {
    const items = ['Home', 'About', 'Contact'];
    
    const headerStyle = {
      backgroundColor: 'black',
      color: 'white',
      padding: '16px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    };
  
    const navListStyle = {
      display: 'flex',
      listStyleType: 'none',
      padding: '0',
      margin: '0',
    };
  
    const navItemStyle = {
      marginRight: '24px', // Adds space between items
      cursor: 'pointer',
      transition: 'color 0.3s',
    };
  
    const navItemHoverStyle = {
      textDecoration: 'underline',
    };
  
    const welcomeStyle = {
      fontWeight: '600',
    };
  
    return (
      <header style={headerStyle}>
        <nav>
          <ul style={navListStyle}>
            {items.map((item, index) => (
              <li 
                key={index} 
                style={navItemStyle} 
                onMouseEnter={(e) => e.target.style.textDecoration = 'underline'} 
                onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
        <p style={welcomeStyle}>Welcome, {name} {lastName}</p>
      </header>
    );
  }
  
  export default Header;