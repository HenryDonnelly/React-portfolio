import { Link } from 'react-router-dom'; 
import { Button } from '@chakra-ui/react';
import {Link as ChakraLink} from '@chakra-ui/react'

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
           <Link to='/projects'>Projects</Link> |
           <ChakraLink 
               href="https://www.linkedin.com/in/henry-donnelly-679742296/" 
               target="_blank"
               color="white"
               textDecoration="none"
               _hover={{
                   textDecoration: 'underline',
                   color: 'blue.500',
               }}
           >
               LinkedIn
           </ChakraLink>
        </div>
    );
};

export default Navbar;