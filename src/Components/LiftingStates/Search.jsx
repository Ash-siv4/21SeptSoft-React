
// a child
const Search = ({ query, queryFunction, completed, completedFunction, notCompleted, notCompletedFunction }) => {



    return (
        <>
            <lable>Search:</lable>
            <input
                type="text"
                name="q"
                id="q"
                value={query}
                //to get the value from the search box:
                onChange={queryFunction}
            />
            <br />
            <br />
            <lable>Completed:</lable>
            <input
                type="checkbox"
                value={completed}
                onChange={completedFunction}
            />
            <br />
            <br />
            <lable>Pending:</lable>
            <input
                type="checkbox"
                value={notCompleted}
                onChange={notCompletedFunction}
            />
            <br />
            <br />
            <br />
        </>
    )
}

export default Search;