import React from 'react';
import {FilterValueType} from "./App";

type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
}

type PropsType = {
  title: string;
  tasks: Array<TaskType>;
  removeTask: (taskId: number) => void;
  deleteAllTask: () => void;
  changeFilter: (value: FilterValueType) => void;
}

export function Todolist(props: PropsType) {
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input/>
        <button>+</button>
      </div>
      <ul>
        {props.tasks.map((task: TaskType) => {
          return (
            <li key={task.id}>
              <input type="checkbox" checked={task.isDone}/>
              <span>{task.title}</span>
              <button onClick={() => props.removeTask(task.id)}>
                ✖️
              </button>
            </li>
          )
        })}

      </ul>
      <div>
        <button onClick={() => {
          props.deleteAllTask()
        }}>
          DELETE ALL TASKS
        </button>
        <button onClick={() => {
          props.changeFilter('all')
        }}>
          All
        </button>
        <button onClick={() => {
          props.changeFilter('active')
        }}>
          Active
        </button>
        <button onClick={() => {
          props.changeFilter('completed')
        }}>
          Completed
        </button>
        <button onClick={() => {
          props.changeFilter('three')
        }}>
          Give me the first three
        </button>
      </div>
    </div>
  )
}
