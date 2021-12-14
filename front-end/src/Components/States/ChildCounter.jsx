const ChildCounter = ({count})=>{
    const date = new Date();
    return(
        <div>
            <h1> Child count is {count}</h1>
            <p>{date.toLocaleTimeString()}</p>
        </div>

    );

};
export default ChildCounter;