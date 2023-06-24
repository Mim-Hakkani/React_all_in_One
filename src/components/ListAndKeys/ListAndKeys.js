import React from 'react';
import List from './List';


const todos = [
  {
    id: 1,
    text: "Buy flowers",
    status: "todo",
  },
  {
    id: 2,
    text: "Go to the dentist",
    status: "done",
  },
];

const listItems = todos.map((todo) => (
  <li key={todo.id}>   
    {todo.text} - {todo.status}
  </li>
));


const ListAndKeys = () => {
    return (
        <div>

            <h4>Show List and Keys in React usign normal map function</h4>
              <ul>{listItems}</ul>

              <h4>Using a separate component for the list </h4>
               {
                todos.map(item=><List key={item.id} item={item} />)
               }
        </div>
    );
};

export default ListAndKeys;