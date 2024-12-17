import { useState } from 'react';
import projectsJSON from '../data/hostedProjects.json';
import ProjectCard from '../components/ProjectCardHome';
import { Badge, Box, Card, HStack, Image, Container, Text, Button, Select,  } from "@chakra-ui/react"
import { IconButton } from "@chakra-ui/react"
import { LuSearch } from "react-icons/lu"
import useMouse from "@react-hook/mouse-position";
import "../assets/css/index.css"
import Navbar from '../components/Navbar';
import FilterProjectsHome from '../components/FilterProjectsHome';





const Home = () => {
    const mouse=useMouse();
    const [projectsList, setProjectsList] = useState(projectsJSON)
    const [selectedTitle, setSelectedTitle] = useState("All");

    const selectedProject = projectsList.find((project) => project.title === selectedTitle);

    return (
        <>
        {/* have to explicitly use position relative to keep adjusted text to each div */}
        <div style={{ height:'vh-100', width:'vw-100', textAlign:"left", position:'relative'}}>      
        <Navbar />              
            <Image style={{width: "100%", height: "100%", objectFit: "cover"}}src="/images/20241204224453_1.jpg"/>
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

        <div className="interactive-section" style={{ height:'vh-100', width:'vw-100', textAlign:"left", position:'relative'}}> 
            <div>
            <Image src="/images/20241204012545_1.jpg"/>
            <Box pos="absolute" top="50%" left="25%" transform="translate(-50%, -50%)" color="white" zIndex="10" textAlign="left">
            <FilterProjectsHome setSelectedTitle={setSelectedTitle} projects={projectsList} />
            {selectedProject ? (
                        <ProjectCard key={selectedProject.id} project={selectedProject} />
                    ) : (
                        <p>These are my hosted react apps, feel free to check out my other <br /> apps with the projects link.</p>
                    )}
            </Box>
            </div>
        </div>
        </>
)};

export default Home;