import { useState, useEffect, lazy, Suspense } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import projectsJSON from '../../data/projects.json';
// import 'bootstrap/dist/css/bootstrap.min.css'

const Show = () => {
    const [projectsList, setProjectsList] = useState(projectsJSON);
    const [project, setProject] = useState(null);
    const { slug } = useParams();

    const Demo = lazy(() => import(`./demos/${project.demo}/App`));

    useEffect(() => {

        const found = projectsList.find((project) => {
            return project.slug === slug;
        });

        setProject(found);

    }, []);

    if(project === null) return <h2>Loading...</h2>

    if(project === undefined) return <Navigate to={`/project/${slug}`} />

    return (
        <>
            <h2>Title: {project.title}</h2>
            <p>{project.description}</p>
            <p>{project.technologies}</p>

            {
                (project.demo) ? (
                    <Suspense fallback={<span className="loading loading-ring loading-lg"></span>}>
                        <>
                            <h2 className='font-bold underline'>Demo</h2>
                            <Demo />
                        </>
                    </Suspense>
                ) : ("")
            }
            
        </>
    );

};

export default Show;