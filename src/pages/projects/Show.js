import { useState, useEffect, lazy, Suspense } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import projectsJSON from '../../data/projects.json';
import Navbar from '../../components/Navbar';
import {Button} from "@chakra-ui/react"

// import 'bootstrap/dist/css/bootstrap.min.css'

const Show = () => {
    const [projectsList, setProjectsList] = useState(projectsJSON);
    const [project, setProject] = useState(null);
    const { slug } = useParams();

    useEffect(() => {

        const found = projectsList.find((project) => {
            return project.slug === slug;
        });

        setProject(found);

    }, []);

    if(project === null) return <h2>Loading...</h2>

    if(project === undefined) return <Navigate to={`/project/${slug}`} />

    return (  
        <div style={{ minHeight: '100vh', width:'vw-100',display:'flex', justifyContent:"center", textAlign:"center", flexDirection:"column", alignItems:"center", position:'relative', backgroundColor: '#111', color:"white" }}>      
            <Navbar/>   
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>Created with:</p>
            <p>{project.technologies[0]}</p>
            <p>{project.technologies[1]}</p>
            <p>{project.technologies[2]}</p>
            <p>{project.technologies[3]}</p>
            {project.links?.[0]?.url && (
  <Button
    as="a"
    href={project.links[0].url}
    target="_blank"
    rel="noopener noreferrer"
    className="paint-button"
    bg="rgba(0,0,0,0.3)"
  >
    View website
  </Button>
)}
        </div>
    );

};

export default Show;