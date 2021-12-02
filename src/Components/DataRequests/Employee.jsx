
//get the data and print it to the screen
const Employee = (props) => {
const {person}=props;
console.log(person);

return(
    //destructuring the object with the data into indidvidual components
    <>
    <td>{person.id}</td>
    <td>{person.email}</td>
    <td>{person.first_name}</td>
    <td>{person.last_name}</td>
    {/*need an image tag here to actually view the image rather than its URL  */}
    <td><img src={person.avatar}/></td>
    </>
)

}
export default Employee;