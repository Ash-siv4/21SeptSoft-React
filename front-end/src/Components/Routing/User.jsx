import { useParams } from "react-router";

const User =()=>{

    const {id,name} =useParams();
return(
    <h1>Welcome user the value from the url is ?{id} and name is {name}</h1>
)
}
export default User;