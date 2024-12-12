import { useState, useEffect } from 'react';
import ProjectCard from '../../components/ProjectCard';
import projectsJSON from '../../data/projects.json';
import FilterProjects from '../../components/FilterProjects';
import { Grid } from "@chakra-ui/react"


const Index = () => {
    const [projectsList, setProjectsList] = useState(projectsJSON);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredList, setFilteredList] = useState(projectsJSON);
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        console.log(searchTerm);

        if(searchTerm === ""){
            setFilteredList(projectsList);
        }
        else if(searchTerm.length <= 1){
            return;
        }
        else {
            let result = projectsList.filter((project) => {
                return project.title.toLowerCase().includes(searchTerm.toLowerCase());
            });
    
            setFilteredList(result);
        }

    }, [searchTerm]);

    useEffect(() => {

        if(selectedCategory === "All"){
            setFilteredList(projectsList);
        }
        else {
            let result = projectsList.filter((project) => {
                return project.categories.includes(selectedCategory);
            });

            setFilteredList(result);
        }

    }, [selectedCategory]);

    const projectCards = filteredList.map((project, index) => {
        return <ProjectCard key={index} project={project} />;
    });

    return (
        <>
            <h1>Projects</h1>
            <FilterProjects setSearchTerm={setSearchTerm} setSelectedCategory={setSelectedCategory} />
            <Grid templateColumns="repeat(2, 1fr)" gap="6">
                {projectCards}
            </Grid>

        </>
    );

};

export default Index;