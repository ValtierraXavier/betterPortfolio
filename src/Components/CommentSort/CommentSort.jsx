import './CommentSort.css'

export default function CommentSort({ sortBy, setSortBy, sortByRef, sortedBy, setSortedBy, projects, comments, setComments }) {    


    const sortingBy = async (e) => {
        setSortBy(prev => prev = e.target.value)
    }


    return(
        <div className = 'CommentsSort'>
            <label htmlFor = 'sortOptions'>Sort: </label>

            <select onChange = {sortingBy} name = 'sortOptions' >
                <option >All</option>
                {projects.map((element)=>(
                    <option key = {element.projectName} >{element.projectName}</option>
                ))}
            </select>
        </div>
    )
}