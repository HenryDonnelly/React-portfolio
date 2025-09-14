import categoriesList from '../data/categories.json';

const FilterProjects = ({ setSearchTerm, setSelectedCategory }) => {

    let categoryOptions = categoriesList.map((category, index) => {
        return <option key={index} value={category.value}>{category.label}</option>
    });

    return (
        <>
    <div style={{display: 'flex',flexDirection: 'column',alignItems: 'center', justifyContent: 'center', width: '100vw', gap: '16px',}}>
    <label className="input input-bordered flex items-center gap-2" style={{display:'flex', flexDirection:'column', maxWidth:'180px'}}>
            <input onChange={(e) => setSearchTerm(e.target.value)} type="text" className="grow" placeholder="Search" />
            </label>
            
            <select onChange={(e) => setSelectedCategory(e.target.value)} name="category">
                <option value={"All"}>All</option>
                {categoryOptions}
            </select>
            </div>
        </>
    );
};

export default FilterProjects;