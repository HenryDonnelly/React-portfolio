import projectsList from '../data/hostedProjects.json';

const FilterProjectsHome = ({ setSearchTerm, setSelectedTitle }) => {
    // Make sure to map through all the projects and extract the titles
    const projectTitles = projectsList.map((project) => project.title);

    return (
        <>
            <select 
                onChange={(e) => setSelectedTitle(e.target.value)} 
                name="title" 
                style={{ marginBottom: '30px', color: 'white', backgroundColor: 'black' }}
            >
                <option value={"All"}>Select</option>
                {projectTitles.map((title, index) => (
                    <option key={index} value={title}>{title}</option>
                ))}
            </select>
        </>
    );
};

export default FilterProjectsHome;
