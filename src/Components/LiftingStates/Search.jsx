
//{query,queryFunction,completed,completedFunction}
const Search = () => {

    
return(
    <>
    <lable>Search:</lable>
    <input 
    type="text"
    name="q"
    id="q"
    value ={query}
    //to get the value from the search box:
    onChange={queryFunction}
    />

    {/* <lable>Show completed:</lable>
    <input 
    type="checkbox"
    value ={completed}
    onChange={completedFunction}
    /> */}

    </>
)
}

export default Search;