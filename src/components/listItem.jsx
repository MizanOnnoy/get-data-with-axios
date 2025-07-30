
const taskList = [
    {
        id: 1,
        text: "title 1",
        checked: false,
    },
    {
        id: 2,
        text: "title 2",
        checked: false,
    },
    {
        id: 3,
        text: "title 3",
        checked: true,
    },
    {
        id: 4,
        text: "title 4",
        checked: false,
    },
    {
        id: 5,
        text: "title 5",
        checked: true,
    }
    ,{
        id: 6,
        text: "title 6",
        checked: false,
    }

];

// const List = taskList.map((item) => {
//     const li = document.createElement('li');
//     li.innerHTML = item.text;
//   return li;
// });

// console.log(List);


function ListGroup() {
    
  return (

    <div className='container'>
        <ul className=" m-2">
       {taskList.map((item) => <ListItem title={item.text} key={item.id} checked={item.checked}/>)}
        </ul>
        </div>
  )
}


const ListItem = (props) => (
    <li className="m-2 d-flex align-item-center">
        <input type="checkbox" checked={props.checked}/>
        <p>{props.title}</p>
        <button className='btn btn-warning p-2 ml-auto'>Delete</button>
    </li>
)


export default ListGroup
