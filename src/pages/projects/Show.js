import { useState, useEffect, lazy, Suspense } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import projectsJSON from '../../data/projects.json';
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
        <div style={{ minHeight: '100vh', width:'vw-100',display:'flex', justifyContent:"center", textAlign:"center", flexDirection:"column", alignItems:"center", position:'relative', backgroundImage:"url(/images/20241204010240_1.jpg)", color:"white" }}>      
            <h2>Title: {project.title}</h2>
            <p>{project.description}</p>
            <p>Created with:</p>
            <p>{project.technologies[0]}</p>
            <p>{project.technologies[1]}</p>
            <p>{project.technologies[2]}</p>
            <p>{project.technologies[3]}</p>
        </div>
    );

};

export default Show;