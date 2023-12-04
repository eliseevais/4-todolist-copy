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

  function changeTaskStatus(taskId: string, isDone: boolean) {
    let task = tasks.find(task => task.id === taskId);
    if (task) {
      task.isDone = isDone;
    };
    setTasks([...tasks]);
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
                changeTaskStatus={changeTaskStatus}
                filter={filter}
      >
        <div>
          <div> Many intresting information</div>
        </div>
      </Todolist>
    </div>
  );
}

export default App;
