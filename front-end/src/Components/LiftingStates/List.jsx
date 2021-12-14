
//another child
const List = ({ list, query, completed, notCompleted }) => {
  // console.log("The query is:",query);


  console.log(completed);
  
  // const complete = (completed) => {
  //   (list) => {
  //     list.completed === completed;
  //   }
  // }

  let complete = function complete(completed){
    return function (list){
      return list.completed === completed;
    }
  }

  let incomplete = function complete(notCompleted){
    return function (list){
      return list.completed !== notCompleted;
    }
  }

  const filterQuery = (query) => (list) => list.title.includes(query);
  // console.log(filterQuery);

  // let filteredList = list.filter(filterQuery(query));
  // console.log(filteredList);

  let filteredList = [];

  if (completed) {
    filteredList = list.filter(complete(completed)).filter(filterQuery(query))
  }
  else if(notCompleted) {
    filteredList = list.filter(incomplete(notCompleted)).filter(filterQuery(query))
  }
  else{
    filteredList = list.filter(filterQuery(query))
  }



  return (
    <>
      {
        filteredList.map((tempVal) => (
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