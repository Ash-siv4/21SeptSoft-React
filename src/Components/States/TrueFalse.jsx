import { useState } from "react";


const TrueFalse=()=>{
const [edit,setEdit] =useState(false);
console.log(edit);
return(
    <div>
        <p>the current value of edit is </p>

        {
        // <condiion>? if its true:if its false</condiion>
        edit?<p>TRUE</p>:<p>FALSE</p>
        }
        <button onClick={()=>setEdit(c=>!c)}>Update</button>
        
    </div>
)

}

export default TrueFalse;