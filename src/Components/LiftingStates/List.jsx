
const List = ({list}) => {
  return(
    <>
    {
      list.map((tempVal)=>(
        <div key={tempVal.id}>
          <h3>{tempVal.title}</h3>
          <input type="checkbox" checked={tempVal.completed} />
        </div>
      ))
    }
    </>
  )
 
}

export default List;