import { useState } from "react";
import ChildCounter from "./ChildCounter";

const Counter = () => {

    //count - stateful value
    //setCount - a function to update "count" value

    //Hooks -> new feature in version 16 onwards, allows you to split uo components into smaller functions
    const [count, setCount] = useState(0);
    // const [num, setNum] = useState(10);

    let step = 10;

    const increment = () => {
        console.log("count up");
        setCount((c) => c + step);//0+10=10

        console.log(count);
    };

    return (
        <div>
            <ChildCounter count={count} />
            <p>The current value of the PARENT counter is {count}</p>
            <button onClick={increment}>++</button>
            <br/>
            <button onClick={()=>setCount((c)=>c-step)}>--</button>
        </div>
    );


}

export default Counter;