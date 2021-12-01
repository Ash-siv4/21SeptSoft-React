import data from "./Todo.json"
import Search from "./Search";
import List from "./List";
import { useState } from "react";

//parent
const SearchableList = () => {

    const [q, setQ] = useState("");
    const [completed, setCompleted] = useState(false);

    const qHandler = (e) =>{
        setQ(e.target.value);
        // console.log(q);
    }

    const handleCompleted = (e) => {
        setCompleted(c=>!c);
        // console.log(completed);
    }

    return (
        <>
        <Search query={q} queryFunction={qHandler} completed={completed} completedFunction={handleCompleted}/>
        <List list={data} query={q} completed={completed}/>
        </>
    )


}

export default SearchableList;