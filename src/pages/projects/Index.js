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
        <div style={{ minHeight: '100vh', width:'vw-100', textAlign:"left", position:'relative', backgroundImage:"url(/images/20241204222810_1.jpg)" }}>      
            <div style={{paddingTop:'50px', display:'flex', flexDirection:'column', maxWidth:'180px'}}>
            <FilterProjects setSearchTerm={setSearchTerm} setSelectedCategory={setSelectedCategory} />
            </div>  
            <Grid templateColumns="repeat(2, 1fr)" gap="6" justifyItems="center" mt="4">
                {projectCards}
            </Grid>
        </div>
        
    );

};

export default Index;