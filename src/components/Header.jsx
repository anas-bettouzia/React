import { Link, NavLink } from "react-router-dom";

function Header(){
  return (
    <>
    <ul className="d-flex justify-content-center align-items-center mt-5">
      <li className="mx-3"> 
        {""}
        <NavLink to="/events" className={({ isActive }) => (isActive ? 'active' : '')}> Events </NavLink>
       {/* <Link to="/events"> Events </Link>  */}
       </li>
      <li className="mx-3">
      <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : '')}> Login </NavLink>
       {/* <Link to="/login"> Login </Link> */}</li>
      <li className="mx-3"> <Link to="/AjouterEvent"> Ajouter evenements </Link> </li>
      </ul>

    </>
  );
}
export default Header;

// function Header({ name, lastName }) {
//     const items = ['Home', 'About', 'Contact'];
    
//     const headerStyle = {
//       backgroundColor: 'black',
//       color: 'white',
//       padding: '16px',
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//     };
  
//     const navListStyle = {
//       display: 'flex',
//       listStyleType: 'none',
//       padding: '0',
//       margin: '0',
//     };
  
//     const navItemStyle = {
//       marginRight: '24px', // Adds space between items
//       cursor: 'pointer',
//       transition: 'color 0.3s',
//     };
  
//     const navItemHoverStyle = {
//       textDecoration: 'underline',
//     };
  
//     const welcomeStyle = {
//       fontWeight: '600',
//     };
  
//     return (
//       <header style={headerStyle}>
//         <nav>
//           <ul style={navListStyle}>
//             {items.map((item, index) => (
//               <li 
//                 key={index} 
//                 style={navItemStyle} 
//                 onMouseEnter={(e) => e.target.style.textDecoration = 'underline'} 
//                 onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
//               >
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </nav>
//         <p style={welcomeStyle}>Welcome, {name} {lastName}</p>
//       </header>
//     );
//   }
  
//   export default Header;