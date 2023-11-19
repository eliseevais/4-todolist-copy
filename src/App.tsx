import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

export type FilterValueType = 'all' | 'active' | 'completed' | 'three';

function App() {

  let [tasks, setTasks] = useState([
    {id: 1, title: "HTML&CSS", isDone: true},
    {id: 2, title: "JS", isDone: true},
    {id: 3, title: "ReactJS", isDone: false},
    {id: 4, title: "SomethingNew", isDone: false}
  ]);

  function deleteAllTask() {
    setTasks([])
  };

  function removeTask(id: number) {
    let filteredTasks = tasks.filter(task => task.id !== id)
    setTasks(filteredTasks);
  }

  let [filter, setFilter] = useState<FilterValueType>('all');

  let tasksForToDoList = tasks;
  if (filter === 'active') {
    tasksForToDoList = tasks.filter(task => task.isDone === false)
  }
  if (filter === 'completed') {
    tasksForToDoList = tasks.filter(task => task.isDone === true)
  }
  if (filter === 'three') {
    tasksForToDoList = tasks.filter(task => task.id < 4);
  }

  function changeFilter(value: FilterValueType) {
    setFilter(value);
  }

  return (
    <div className="App">
      <Todolist title="What to learn"
                tasks={tasksForToDoList}
                removeTask={removeTask}
                deleteAllTask={deleteAllTask}
                changeFilter={changeFilter}
      />
    </div>
  );
}

export default App;
