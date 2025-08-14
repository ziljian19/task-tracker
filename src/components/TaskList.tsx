import React from 'react';
import type { Task } from '../types/TaskType';



// Javascript practice
// const people = [
//   { first: 'Ada', last: 'Lovelace' },
//   { first: 'Grace', last: 'Hopper' }
// ];
// const wholeName = people.map( peop => peop.first + " " + peop.last );
// console.log(wholeName); 
// const fullNames = people.map(person => `${person.first} ${person.last}`);
// console.log(fullNames);


// const nums = [1, 2, 3, 4, 5, 6];
// const evenNumbers = nums.filter( num => num % 2 === 0 );
// console.log(evenNumbers);


// const words = ['cat', 'giraffe', 'dog', 'elephant', 'bee'];
// const longWord = words.filter( word => word.length >= 4 );
// console.log(longWord);

// const words = ['cat', 'giraffe', 'dog', 'elephant', 'bee'];
// const longWord = words.filter( word => word.length > 3 );
// console.log(longWord);



// const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 17 },
//   { name: 'Charlie', age: 30 },
//   { name: 'Daisy', age: 15 }
// ];
// const ofAge = people.filter( peop => peop.age >= 18);
// console.log(ofAge);


// const users = [
//   { name: 'Alice', email: 'alice@example.com', active: true },
//   { name: 'Bob', email: 'bob@example.com', active: false },
//   { name: 'Charlie', email: 'charlie@example.com', active: true },
//   { name: 'Daisy', email: 'daisy@example.com', active: false }
// ];
// const truthy = users.filter(user => user.active === true);
// const emails = truthy.map(email => email.email);
// console.log(emails);




const users = [
  { name: 'Alice', overdue: true },
  { name: 'Bob', overdue: false },
  { name: 'Charlie', overdue: true },
  { name: 'Daisy', overdue: false }
];

const activeOverdue = users.filter(user => user.overdue);

activeOverdue.forEach(user => {
  console.log('Reminder sent to ' + user.name);
});































// Step 2: Define props for our component
type TaskListProps = {
  tasks: Task[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

// Step 3: Functional component
const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle, onDelete }) => {

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
            />

            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.title}
            </span>
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
