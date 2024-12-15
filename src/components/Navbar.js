import { Link } from 'react-router-dom'; 

const Navbar = () => {
    return (
        <div style={{position: 'absolute',top: 0,width: '100%',zIndex: 3,
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0))',
        padding: '10px 20px',
        color: 'white',
        display: 'flex',
        justifyContent: 'left',
        gap: '15px',
      }}
    >
           <Link to={"/"}>Home</Link> |
           <Link to={"/about"}>About</Link> |
           <Link to='/contact'>Contact</Link> |
           <Link to='/projects'>Projects</Link>
        </div>
    );
};

export default Navbar;