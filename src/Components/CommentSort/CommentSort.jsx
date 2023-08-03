import './CommentSort.css'

export default function CommentSort({ sortBy, setSortBy, sortByRef, sortedBy, setSortedBy, projects, comments, setComments }) {    


    const sortingBy = async (e) => {
        setSortBy(prev => prev = e.target.value)
    }


    return(
        <div className = 'CommentsSort'>
            <label htmlFor = 'sortOptions'>Sort:</label>

            <select onChange = {sortingBy} id = 'sortOptions' name = 'sortOptions' >
                <option >All</option>
                {projects.map((element, index)=>(
                    <option key = {index} >{element.projectName}</option>
                ))}
            </select>
        </div>
    )
}