import axios from "axios";// the import for axios so we can do requests
import { useEffect, useState } from "react";
import { Container, Spinner, Table } from "reactstrap";
import Employee from "./Employee";


//will retrieve the data
const Tesco = () => {

    //state to store the data somewhere in case it changes
    const [data, setData] = useState([])
    //state to check if the data has loaded
    const [isLoaded, setIsLoaded] = useState(false)
    //state to check for error
    const [error, setError] = useState(null)//don't know if there will be an error, we set it as null

    // const getData = () => {
    //     //get request to get the URL from
    //     axios.get("https://reqres.in/api/users")
    //         //.then -> once the data is received, do something
    //         .then((response) => {
    //             //use the setData to update the empty array
    //             setData(response.data.data)
    //             //the do something is to log the response to the console
    //             console.log(response.data.data);
    //             //in case things don't go according to plan, need too catch the error and deal with it
    //         }).catch((error) => {
    //             console.error(error);
    //         })
    // }

    useEffect(() => {
        setTimeout(() => {
            //get request to get the URL from
            axios.get("https://reqres.in/api/users")
                //.then -> once the data is received, do something
                .then((response) => {
                    setIsLoaded(true);
                    //use the setData to update the empty array
                    setData(response.data.data);
                    //the do something is to log the response to the console
                    // console.log(response.data.data);
                    //in case things don't go according to plan, need too catch the error and deal with it
                }).catch((error) => {
                    setError(error);
                    setIsLoaded(true);
                    // console.error(error);
                });

        }, 5000)
    }, [])//square brackets means run it once

    //need to call the function in order to run it
    // getData();//this line causes the error of an infinite loop so use a useEffect
    console.log(data);

    if (error) {
        return <h1>Oops, something went wrong {error.message}</h1>
    } else if (!isLoaded) {
        return (
            <>
                <p>Loading data...</p>
                <Spinner type="grow" colour="primary" />
            </>
        )

    } else {
        return (
            //<> -> a fragment, can use <div> instead
            <>
                <Container>
                    <h1>Welcome to Tesco</h1>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>email</th>
                                <th>first name</th>
                                <th>last name</th>
                                <th>Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                //to display the data on the page, we need to map over it
                                data.map((emp) => (
                                    <tr>
                                        <Employee person={emp} />
                                    </tr>
                                ))}

                        </tbody>
                    </Table>

                </Container>
            </>
        );

    };
}
export default Tesco;