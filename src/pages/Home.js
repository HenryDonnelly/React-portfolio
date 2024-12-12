import { Badge, Box, Card, HStack, Image, Container, Text, Button } from "@chakra-ui/react"
import { IconButton } from "@chakra-ui/react"
import { LuSearch } from "react-icons/lu"
import "../assets/css/index.css"


const Home = () => {
    return (
        <>
        <div style={{ height:'vh-100', width:'vw-100', textAlign:"left"}}>                    
            <Image src="/images/20241204224453_1.jpg"/>
            <Box pos="absolute" top="75%" left="20%" color="white" transform="translate(-50%,-50%)" fontSize='5xl'>
            <Text>
                 Hi, I'm Henry
            </Text>
            <Text fontSize="2xl">
                 This is my react front-end portfolio
            </Text>
            </Box>
            {/* https://unused-css.com/blog/animated-down-arrow/ */}
            <svg class="arrows">
              <path class="a1" d="M0 0 L30 32 L60 0"></path>
              <path class="a2" d="M0 20 L30 52 L60 20"></path>
              <path class="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
        </div>
        </>
    );
};

export default Home;