import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from "uuid";

export type FilterValueType = 'all' | 'active' | 'completed' | 'three';

function App() {

  let [tasks, setTasks] = useState([
    {id: v1(), title: "HTML&CSS", isDone: true},
    {id: v1(), title: "JS", isDone: true},
    {id: v1(), title: "ReactJS", isDone: false},
    {id: v1(), title: "SomethingNew", isDone: false},
  ]);
  console.log(tasks);

  function deleteAllTask() {
    setTasks([])
  };

  function removeTask(id: string) {
    let filteredTasks = tasks.filter(task => task.id !== id)
    setTasks(filteredTasks);
  };

  function changeFilter(value: FilterValueType) {
    setFilter(value);
  };

  function addTask(title: string) {
    let newTask = {
      id: v1(),
      title: title,
      isDone: false
    };
    let newTasks = [newTask, ...tasks];
    setTasks(newTasks);
  };

  let [filter, setFilter] = useState<FilterValueType>('all');

  let tasksForToDoList = tasks;
  if (filter === 'active') {
    tasksForToDoList = tasks.filter(task => task.isDone === false)
  }
  if (filter === 'completed') {
    tasksForToDoList = tasks.filter(task => task.isDone === true)
  }
  if (filter === 'three') {
    tasksForToDoList = tasks.slice(0, 3);
  }
  ;

  return (
    <div className="App">
      <Todolist title="What to learn"
                tasks={tasksForToDoList}
                removeTask={removeTask}
                deleteAllTask={deleteAllTask}
                changeFilter={changeFilter}
                addTask={addTask}
      />
    </div>
  );
}

export default App;
