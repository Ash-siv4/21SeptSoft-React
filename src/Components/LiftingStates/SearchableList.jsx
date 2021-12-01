import data from "./Todo.json"
import Search from "./Search";
import List from "./List";


const SearchableList = () => {
    return (
        <>
        <Search />
        <List list={data}/>
        </>
    )


}

export default SearchableList;