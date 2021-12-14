import Baby from "./Baby";


const Child = (props) => {
    const {name, age} = props;
    return(
        <div>
            <h2>This is in the Child</h2>
            <p>{name}</p>
            <p>{age}</p>
            <Baby {...props} />
        </div>
    )

}

export default Child;