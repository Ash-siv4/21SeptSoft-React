import { useEffect, useState } from "react";


const Clock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [click, setClick] = useState(false);

    useEffect(() => {
        // setTimeout(tick,1000)
        tick();
        setClick(c=>!c)
        console.log("running")
    },[click])

    const tick = () => {
        setTime(new Date().toLocaleTimeString())
    }

    return (
        <div>
            <h1>{time}</h1>
            <h1>{click ? <h1>true</h1> : <h1>false</h1>}</h1>
            <button onClick={() => setClick(c => !c)}>Click</button>
        </div>
    )

}

export default Clock;