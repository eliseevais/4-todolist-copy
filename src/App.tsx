// import React, {useState} from 'react';
// import './App.css';
// import {TaskType, Todolist} from './Todolist';
// import {v1} from 'uuid';
// import {
//   SuperButton
// } from "./components/Igor_Yudintcev_2023_11_30/button/SuperButton";
// import {
//   SuperTodoList
// } from "./components/Igor_Yudintcev_2023_11_30/superTodoList/SuperTodoList";
//
// export type FilterValuesType = "all" | "active" | "completed";
//
// function App() {
//
//   let [tasks, setTasks] = useState([
//     {id: v1(), title: "HTML&CSS", isDone: true},
//     {id: v1(), title: "JS", isDone: true},
//     {id: v1(), title: "ReactJS", isDone: false},
//     {id: v1(), title: "Rest API", isDone: false},
//     {id: v1(), title: "GraphQL", isDone: false},
//   ]);
//
//   function removeTask(id: string) {
//     let filteredTasks = tasks.filter(t => t.id != id);
//     setTasks(filteredTasks);
//   }
//
//   function addTask(title: string) {
//     let task = {id: v1(), title: title, isDone: false};
//     let newTasks = [task, ...tasks];
//     setTasks(newTasks);
//   }
//
//   let [filter, setFilter] = useState<FilterValuesType>("all");
//
//   let filteredTasks = () => {
//     let tasksForTodolist = tasks;
//     switch (filter) {
//       case "active": {
//         return tasksForTodolist = tasks.filter(t => !t.isDone);
//       }
//         ;
//       case "completed": {
//         return tasksForTodolist = tasks.filter(t => t.isDone);
//       }
//         ;
//       default:
//         return tasksForTodolist
//     }
//   }
//
//
//   function changeFilter(value: FilterValuesType) {
//     setFilter(value);
//   }
//
//   function changeTaskStatus(id: string, isDone: boolean) {
//     let task = tasks.find(t => t.id === id)
//     if (task) {
//       task.isDone = isDone;
//       setTasks([...tasks])
//     }
//   }
//
//   function ButtonOnClick() {
//     console.log('hello')
//   }
//
//   return (
//     <div className="App">
//       {/*<Todolist title="What to learn"*/}
//       {/*          tasks={filteredTasks()}*/}
//       {/*          removeTask={removeTask}*/}
//       {/*          changeFilter={changeFilter}*/}
//       {/*          addTask={addTask}*/}
//       {/*          changeTaskStatus={changeTaskStatus}*/}
//       {/*          filter={filter}*/}
//       {/*/>*/}
//
//       --------------------------------------------------------------
//       <SuperButton onClick={ButtonOnClick}
//                    color={'red'}
//       >Red button</SuperButton>
//
//       <SuperButton onClick={ButtonOnClick}
//                    color={'secondary'}
//                    disabled={true}
//       >Secondary disabled button</SuperButton>
//
//       <SuperButton onClick={ButtonOnClick}
//       >Default button</SuperButton>
//
//       <SuperButton onClick={ButtonOnClick}
//                    color={'secondary'}
//       >Secondary button</SuperButton>
//
//       --------------------------------------------------------------
//       <SuperTodoList tasks={tasks}>
//         <SuperButton onClick={ButtonOnClick}
//                      color={'red'}
//         >Red button</SuperButton>
//
//         <SuperButton onClick={ButtonOnClick}
//                      color={'secondary'}
//                      disabled={true}
//         >Secondary disabled button</SuperButton>
//
//         <SuperButton onClick={ButtonOnClick}
//         >Default button</SuperButton>
//         <p>lfsdfsdfsdfsdfsssssssssdssssssssssssssssss</p>
//         <p>lfsdfsdfsdfsdfsssssssssdssssssssssssssssss</p>
//         <input type={'text'}/>
//         <input type={'text'}/>
//       </SuperTodoList>
//
//       --------------------------------------------------------------
//       <SuperTodoList tasks={tasks}>
//         <SuperButton onClick={ButtonOnClick}
//                      color={'red'}
//         >Red button</SuperButton>
//
//         <SuperButton onClick={ButtonOnClick}
//                      color={'secondary'}
//                      disabled={true}
//         >Secondary disabled button</SuperButton>
//
//         <p>lfsdfsdfsdfsdfsssssssssdssssssssssssssssss</p>
//         <p>lfsdfsdfsdfsdfsssssssssdssssssssssssssssss</p>
//         <p>lfsdfsdfsdfsdfsssssssssdssssssssssssssssss</p>
//         <p>lfsdfsdfsdfsdfsssssssssdssssssssssssssssss</p>
//         <p>lfsdfsdfsdfsdfsssssssssdssssssssssssssssss</p>
//         <p>lfsdfsdfsdfsdfsssssssssdssssssssssssssssss</p>
//         <p>lfsdfsdfsdfsdfsssssssssdssssssssssssssssss</p>
//         <input type={'text'}/>
//       </SuperTodoList>
//
//       --------------------------------------------------------------
//       <SuperTodoList tasks={tasks}>
//         <SuperButton onClick={ButtonOnClick}
//                      color={'red'}
//         >Red button</SuperButton>
//         <SuperButton onClick={ButtonOnClick}
//                      color={'red'}
//         >Red button</SuperButton>
//         <SuperButton onClick={ButtonOnClick}
//                      color={'red'}
//         >Red button</SuperButton>
//         <SuperButton onClick={ButtonOnClick}
//                      color={'red'}
//         >Red button</SuperButton>
//
//         <SuperButton onClick={ButtonOnClick}
//                      color={'secondary'}
//                      disabled={true}
//         >Secondary disabled button</SuperButton>
//
//         <p>lfsdfsdfsdfsdfsssssssssdssssssssssssssssss</p>
//
//       </SuperTodoList>
//
//     </div>
//   );
// }
//
// export default App;


/// 2024-12-24

import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

export type todolistsType = {
  id: string;
  title: string;
  filter: FilterValuesType;
}

function App() {

  // let [tasks, setTasks] = useState([
  //     {id: v1(), title: "HTML&CSS", isDone: true},
  //     {id: v1(), title: "JS", isDone: true},
  //     {id: v1(), title: "ReactJS", isDone: false},
  //     {id: v1(), title: "Rest API", isDone: false},
  //     {id: v1(), title: "GraphQL", isDone: false},
  // ]);
  // let [filter, setFilter] = useState<FilterValuesType>("all");

  let todolistID1 = v1();
  let todolistID2 = v1();

  let [todolists, setTodolists] = useState<Array<todolistsType>>([
    {id: todolistID1, title: 'What to learn', filter: 'all'},
    {id: todolistID2, title: 'What to buy', filter: 'all'},
  ])

  let [tasks, setTasks] = useState({
    [todolistID1]: [
      {id: v1(), title: "HTML&CSS", isDone: true},
      {id: v1(), title: "JS", isDone: true},
      {id: v1(), title: "ReactJS", isDone: false},
      {id: v1(), title: "Rest API", isDone: false},
      {id: v1(), title: "GraphQL", isDone: false},
    ],
    [todolistID2]: [
      {id: v1(), title: "HTML&CSS2", isDone: true},
      {id: v1(), title: "JS2", isDone: true},
      {id: v1(), title: "ReactJS2", isDone: false},
      {id: v1(), title: "Rest API2", isDone: false},
      {id: v1(), title: "GraphQL2", isDone: false},
    ]
  });


  function removeTask(todolistId: string, id: string) {
    setTasks({...tasks, [todolistId]: tasks[todolistId].filter(t => t.id != id)})
  }

  function addTask(todolistId: string, title: string) {
    let newTask = {id: v1(), title: title, isDone: false};
    setTasks({...tasks, [todolistId]: [newTask, ...tasks[todolistId]]})
  }

  function changeStatus(todolistId: string, taskId: string, isDone: boolean) {
    setTasks({...tasks, [todolistId]: tasks[todolistId].map(t => t.id === taskId ? {...t, isDone} : t)})
    let task = tasks[todolistId].find(t => t.id === taskId);
    if (task) {
      task.isDone = isDone;
    }

    setTasks({...tasks});
  }

  function changeFilter(todolistId: string, value: FilterValuesType) {
    setTodolists(todolists.map(tlFiltered => tlFiltered.id === todolistId
      ? {...tlFiltered, filter: value}
      : tlFiltered));
  }

  return (
    <div className="App">
      {todolists.map((tl) => {
        let tasksForTodolist = tasks[tl.id];
        if (tl.filter === "active") {
          tasksForTodolist = tasks[tl.id].filter(t => t.isDone === false);
        }
        if (tl.filter === "completed") {
          tasksForTodolist = tasks[tl.id].filter(t => t.isDone === true);
        }
        return (
          <Todolist key={tl.id}
                    todolistId={tl.id}
                    title={tl.title}
                    tasks={tasksForTodolist}
                    removeTask={removeTask}
                    changeFilter={changeFilter}
                    addTask={addTask}
                    changeTaskStatus={changeStatus}
                    filter={tl.filter}
          />
        )
      })}
    </div>
  );
}

export default App;

