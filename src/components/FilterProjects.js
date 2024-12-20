import categoriesList from '../data/categories.json';

const FilterProjects = ({ setSearchTerm, setSelectedCategory }) => {

    let categoryOptions = categoriesList.map((category, index) => {
        return <option key={index} value={category.value}>{category.label}</option>
    });

    return (
        <>
            <label className="input input-bordered flex items-center gap-2">
            <input onChange={(e) => setSearchTerm(e.target.value)} type="text" className="grow" placeholder="Search" />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                style={{width:'30'}}>
                <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd" />
            </svg>
            </label>
            <select onChange={(e) => setSelectedCategory(e.target.value)} name="category">
                <option value={"All"}>All</option>
                {categoryOptions}
            </select>
        </>
    );
};

export default FilterProjects;