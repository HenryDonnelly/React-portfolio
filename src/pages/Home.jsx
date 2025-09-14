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
    import { useEffect } from 'react';
    import FilterProjects from '../components/FilterProjects';
    import { Grid } from "@chakra-ui/react"
    import ProjectGlowCard from '../components/ProjectGlowCard';
    import Slider from "react-slick";
    import { useRef } from "react";
    import { motion, useInView  } from 'framer-motion';

    const MotionBox = motion(Box);

    const Home = () => {
        const [projectsList] = useState(projectsJSON);

        const FadeInCard = ({ delay = 0, children }) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, margin: "-50px" });

            return (
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, x:-50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay }}
                  style={{ marginBottom: "0rem" }}
                >
                  {children}
                </motion.div>
              );
            };


        //     const AnimatedProjectCard = ({ project, index }) => {
        //         const ref = useRef(null);
        //         const isInView = useInView(ref, { once: true, margin: "-50px" });
        
        //     return (
        //       <MotionBox
        //         ref={ref}
        //         initial={{ opacity: 0, y: 20 }}
        //         animate={isInView ? { opacity: 1, y: 0 } : {}}
        //         transition={{ delay: index * 0.8, duration: 1 }}
        //         style={{ marginBottom: "3rem" }}
        //       >
        //         <ProjectGlowCard>
        //           <ProjectCard project={project} />
        //         </ProjectGlowCard>
        //       </MotionBox>
        //     );
        //   };

        return (
            <>
            <Box
        height="100vh"
        overflowY="scroll"
        scrollSnapType="y mandatory"
        css={{ scrollBehavior: 'smooth' }}
      >
        {/* Section 1 */}
        <Box height="100vh" position="relative" scrollSnapAlign="start">
          <Navbar />
          <Image
            src="/images/wow.png"
            width="100%"
            height="100%"
            objectFit="cover"
            position="absolute"
          />
          <Box
            pos="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            color="white"
            fontSize="5xl"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            zIndex={2}
          >
            <Text className="fade-in-up">Hi, I'm Henry</Text>
            <Text fontSize="2xl" className="fade-in-up-delay">
              Welcome to my portfolio website
            </Text>
          </Box>

          

          <svg className="arrows">
            <path className="a1" d="M0 0 L30 32 L60 0" />
            <path className="a2" d="M0 20 L30 52 L60 20" />
            <path className="a3" d="M0 40 L30 72 L60 40" />
          </svg>
        </Box>

<Box height="100vh" position="relative" scrollSnapAlign="start">
  <Image
    src="/images/wow9.jpg"
    style={{ width: "100%", height: "100%", objectFit: "cover" }}
  />

  {/* Grid container for two columns */}
  <Grid
    templateColumns="1fr 1fr"
    position="absolute"
    top="50%"
    left="0"
    width="100%"
    px={20}       // horizontal padding to not hug edges
    transform="translateY(-50%)"
    color="white"
    zIndex={2}
    gap={10}
  >
    {/* Left column: text */}
    <Box display="flex" flexDirection="column" justifyContent="flex-end" marginBottom="8vw">
      <Text fontSize="3xl" mb={4}>
        These are my currently hosted projects
      </Text>
      <Text fontSize="md">
        Feel free to check out my smaller projects with the navbar
      </Text>
    </Box>

 {/* projectglowcard for border  */}

    {/* Right column: card */}
    <Box display="flex" flexDirection="column" gap={6}>
    <FadeInCard delay={0}>
      <Card.Root flexDirection="row" overflow="hidden" maxW="xl" maxH="30vh" bg="rgba(0,0,0,0.4)" p={4} border="none">
        <Image
          objectFit="cover"
          maxW="200px"
          src="./images/bookiebook2.png"
          alt="Caffe Latte"
          borderRadius="md"
          border="none"
        />
        <Box ml={0} color="white">
          <Card.Body marginLeft="1vw">
            <Card.Title mb="2">Bookie</Card.Title>
            <Card.Description display={{ base: "none", xl: "block" }}  color="grey">
              This was the final project for my third year. I wrote the back-end using Laravel. 
            </Card.Description>
            <HStack mt="4">
              <Badge>Laravel</Badge>
              <Badge>React</Badge>
              <Badge>PostgreSQL</Badge>
            </HStack>
          </Card.Body>
          <Card.Footer>
            <Button as="a" href="https://bookie-862d1.web.app" className="paint-button" marginLeft="1vw">View website</Button>
          </Card.Footer>
        </Box>
      </Card.Root>
      </FadeInCard>
      <FadeInCard delay={0.7}>
      <Card.Root flexDirection="row" overflow="hidden" maxW="xl" maxH="30vh" bg="rgba(0,0,0,0.4)" borderRadius="md" p={4}  border="none">
        <Image
          objectFit="cover"
          maxW="200px"
          src="./images/cross1.png"
          alt="Caffe Latte"
          borderRadius="md"
        />
        <Box ml={4} color="white">
          <Card.Body>
            <Card.Title mb="2">Medical center</Card.Title>
            <Card.Description display={{ base: "none", xl: "block" }} color="grey">
              This was another third year project. I wrote the front-end for this site.
            </Card.Description >
            <HStack mt="4">
              <Badge>React</Badge>
              <Badge>Mantine</Badge>
            </HStack>
          </Card.Body>
          <Card.Footer>
            <Button as="a" href="http://medical-clinic-27bac.web.app" className="paint-button">View website</Button>
          </Card.Footer>
        </Box>
      </Card.Root>
      </FadeInCard>
      <FadeInCard delay={1.4}>
      <Card.Root flexDirection="row" overflow="hidden" maxW="xl" maxH="30vh" bg="rgba(0,0,0,0.4)" borderRadius="md" p={4}  border="none">
        <Image
          objectFit="cover"
          maxW="200px"
          src="./images/world.png"
          alt="Caffe Latte"
          borderRadius="md"
        />
        <Box ml={4} color="white">
          <Card.Body>
            <Card.Title mb="2">Country info</Card.Title>
            <Card.Description display={{ base: "none", xl: "block" }} color="grey">
              This was my first attempt at working with react.
            </Card.Description>
            <HStack mt="4">
              <Badge>React</Badge>
            </HStack>
          </Card.Body>
          <Card.Footer>
            <Button as="a" href="https://henry-s-portfol.web.app/" className="paint-button">View website</Button>
          </Card.Footer>
        </Box>
      </Card.Root>
      </FadeInCard>
    </Box>
  </Grid>
  </Box>
  <Box height="100vh" position="relative" scrollSnapAlign="start">
  <Image
    src="/images/wow0.jpg"
    style={{ width: "100%", height: "100%", objectFit: "cover" }}
  />
      <Box
            pos="absolute"
            top="50%"
            left="40%"
            transform="translate(-50%, -50%)"
            color="white"
            fontSize="5xl"
            display="flex"
            flexDirection="column"
            zIndex={2}
          >
            <Text>Currently working on a full-stack website for clothing and adding to my portfolio site</Text>
          </Box>
  </Box>
  </Box> 


  

 
    </>
    );
    };

    export default Home;