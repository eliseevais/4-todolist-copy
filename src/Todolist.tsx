import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValueType} from "./App";
import {useAutoAnimate} from "@formkit/auto-animate/react";


type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
}

type PropsType = {
  title: string;
  tasks: Array<TaskType>;
  removeTask: (taskId: string) => void;
  deleteAllTask: () => void;
  changeFilter: (value: FilterValueType) => void;
  addTask: (title: string) => void;
  children?:React.ReactNode;
}

export const Todolist: React.FC<PropsType> = ({children, ...props}) => {

  const [newTaskTitle, setNewTaskTitle] = useState("");

  const onNewTitleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(event.currentTarget.value)
  };

  const [listRef] = useAutoAnimate<HTMLUListElement>();

  const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.charCode === 13) {
      props.addTask(newTaskTitle);
      setNewTaskTitle('');
    }
  };

    const addTask = () => {
    props.addTask(newTaskTitle);
    setNewTaskTitle('')
  };

  const onAllClickHandler = () => props.changeFilter('all');
  const onDeleteAllTasksClickHandler = () => props.deleteAllTask();
  const onActiveClickHandler = () => props.changeFilter('active');
  const onCompletedClickHandler = () => props.changeFilter('completed');
  const onFirstThreeTasksClickHandler = () => props.changeFilter('three');

  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input value={newTaskTitle}
               onChange={onNewTitleChangeHandler}
               onKeyPress={onKeyPressHandler}/>
        <button onClick={addTask}>+</button>
      </div>
      <ul ref={listRef}>
        {props.tasks.map((task: TaskType) => {
          const onRemoveHandler = () => props.removeTask(task.id);
          return (
            <li key={task.id}>
              <input type="checkbox" checked={task.isDone}/>
              <span>{task.title}</span>
              <button onClick={onRemoveHandler}>✖️</button>
            </li>
          )
        })}

      </ul>
      <div>
        <button onClick={onAllClickHandler}>All</button>
        <button onClick={onActiveClickHandler}>Active</button>
        <button onClick={onCompletedClickHandler}>Completed</button>
        <button onClick={onDeleteAllTasksClickHandler}>Delete all</button>
        <button onClick={onFirstThreeTasksClickHandler}>Give 3 first tasks</button>
      </div>
      {children}
    </div>
  )
}
