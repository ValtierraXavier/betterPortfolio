import './CommentSort.css'

export default function CommentSort({ setSortBy, projects }) {    

    const sortingBy = async (e) => {
        setSortBy(prev => prev = e.target.value)
    }

    return(
        <div className = 'CommentSort'>
            <label htmlFor = 'sortOptions'>Sort:</label>

            <select onChange = {sortingBy} id = 'sortOptions' name = 'sortOptions' >
                <option className ="option all" >All</option>
                {projects.map((element, index)=>(
                    <option className = "option mapped" key = {`Opt${index}`} >{element.projectName}</option>
                ))}
            </select>
        </div>
    )
}