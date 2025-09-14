import { Badge, Box, Card, HStack, Image } from "@chakra-ui/react"
import { Button } from "./ui/button"

import { Link } from 'react-router-dom';

const ProjectCard = ({project}) => {
    // let project = props.project;

    let techBadges = project.technologies.map((technology, i) => {
        return <Badge key={i}>{technology}</Badge>
    });

    return(

        <Card.Root flexDirection="row" overflow="hidden" maxW="xl"  variant={"unstyled"} style={{backgroundColor:'transparent', color:'white'}}>
        <Image
          objectFit="cover"
          width="200px"
          height="200px"
          src={`/images/${project.images[0].url}`}
          alt={project.images[0].caption}
        />
        <Box>
          <Card.Body>
            <Card.Title mb="2">{project.title}</Card.Title>
            <Card.Description style={{color:'white'}}>
              {project.description}
            </Card.Description>
            <HStack mt="4"> 
              {techBadges}
            </HStack>
          </Card.Body>
          <Card.Footer>
          <Link to={`/projects/${project.slug}`} className="paint-button">
            View
          </Link>
          </Card.Footer>
        </Box>
      </Card.Root>
    );
};

export default ProjectCard;