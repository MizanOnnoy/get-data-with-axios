import { useEffect, useState } from 'react';


function GetData() {
    const [Data, setData] = useState([])

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(error => console.error(error));
}, []);

return (

    <div className='container'>
        <ul className=" m-2">
       {Data.map((item) => <ListItem title={item.title} key={item.id} txt={item.body}/>)}
        </ul>
        </div>
  )
}

const ListItem = (props) => (
    <li className="m-2 align-item-center">
        <h1 className='m-auto'>{props.title}</h1>
        <p className='bg-light'>{props.body}</p>
    </li>
)
export default GetData