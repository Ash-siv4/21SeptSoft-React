import Child from "./Child"


const Parent =()=>{
return(
    <div>
        <h1>Parent</h1>
        <Child
        name="Mickey"
        age={12}
        />
    </div>
)
}
export default Parent;
