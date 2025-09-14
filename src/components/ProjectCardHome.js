import { Badge, Box, HStack, Image, Card } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ProjectCardHome = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  const techBadges = project.technologies.map((technology, i) => (
    <Badge key={i} fontSize="xs" px={2} py={1}>
      {technology}
    </Badge>
  ));

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      transition="width 0.4s ease"
      width={isHovered ? "40vw" : "10vw"}
      height="20vh"
      overflow="hidden"
      borderRadius="md"
      background="transparent"
    >
      <Card.Root
        display="flex"
        flexDirection="row"
        height="100%"
        variant="unstyled"
        style={{ backgroundColor: 'transparent', color: 'white' }}
      >
        <Image
          objectFit="cover"
          height="100%"
          width="10vw"
          src={`/images/${project.images[0].url}`}
          alt={project.images[0].caption}
          flexShrink={0}
        />

        <Box
          px={4}
          py={2}
          opacity={isHovered ? 1 : 0}
          transition="opacity 0.3s ease"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          width="30vw"
        >
          <Card.Body pt={2}>
            <Card.Title mb={2}>{project.title}</Card.Title>
            <Card.Description fontSize="sm" style={{ color: 'white' }}>
              {project.description}
            </Card.Description>
            <HStack mt={2} spacing={2} wrap="wrap">
              {techBadges}
            </HStack>
          </Card.Body>
          <Card.Footer mt={2}>
            <Link to={`/projects/${project.slug}`} className="paint-button">
              View
            </Link>
          </Card.Footer>
        </Box>
      </Card.Root>
    </Box>
  );
};

export default ProjectCardHome;
