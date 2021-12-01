const Second =()=>{

    const name = 'Eeyore'
    const date=  new Date();
    const fName = 'Mickey'
    const sName = 'Mouse'

    console.log(date)

    return(
        <>
            <h1>Lets try and use some JS in this file</h1>
            <p>{name}</p>
            <p>{date.toLocaleDateString()}</p>
            <p>{date.toLocaleTimeString()}</p>
            <h2>Hello {fName} {sName}, it's nice to meet you!</h2>
            <h2> {`${fName} ${sName}` }</h2>

        </>
    )
}

export default Second;