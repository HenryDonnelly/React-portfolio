import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import projectsJSON from '../../data/projects.json';
import Navbar from '../../components/Navbar';
import { Button, Grid, GridItem, Flex, Heading, Text, Box } from "@chakra-ui/react";

const Show = () => {
  const [projectsList] = useState(projectsJSON);
  const [project, setProject] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const found = projectsList.find((project) => project.slug === slug);
    setProject(found);
  }, [projectsList, slug]);

  if (project === null) return <h2>Loading...</h2>;
  if (project === undefined) return <Navigate to={`/project/${slug}`} />;

  return (
    <Grid
      templateColumns="1fr 1fr"
      h="100vh"
      bg="#111"
      color="white"
    >
        <Navbar />
      {/* LEFT SIDE */}
      <GridItem>
        <Flex
          direction="column"
          justify="center"
          align="flex-start"
          h="100%"
          px={10}
        >
          

          <Heading size="6xl" mb="10vh">
            {project.title}
            </Heading>

          <Text fontSize="xl">{project.description2}</Text>

          <Text marginTop="5vh">Created with:</Text>
          {project.technologies.map((tech, i) => (
            <Text key={i}>{tech}</Text>
          ))}

          {project.links?.[0]?.url && (
            <Button
            as="a"
            href={project.links[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="paint-button"
            bg="rgba(0,0,0,0.3)"
            marginTop="4vh"
            >
            View website
            </Button>
          )}
        </Flex>
      </GridItem>

      {/* RIGHT SIDE (empty for now) */}
      <GridItem>
  <Flex justify="center" align="center" h="100%" paddingLeft="0">
    
    {/* VIDEO */}
    {project.ytvideo && (
      <Box w="100%" maxW="800px" aspectRatio="16 / 9">
        <iframe
          src={project.ytvideo}
          title={project.title}
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          style={{ borderRadius: "12px" }}
        />
      </Box>
    )}

    {/* IMAGE (fallback if no video) */}
    {!project.ytvideo && project.showImage && (
      <Box maxW="800px">
        <img
          src={project.showImage}
          alt={project.title}
          style={{
            width: "100%",
            borderRadius: "12px",
            objectFit: "cover"
          }}
        />
      </Box>
    )}

  </Flex>
</GridItem>
    </Grid>
  );
};

export default Show;