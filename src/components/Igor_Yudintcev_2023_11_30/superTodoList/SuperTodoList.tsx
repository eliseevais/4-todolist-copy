import React from "react";

type TasksPropsType = {
  tasks: TaskPropsType[];
  children: React.ReactNode;
}

type TaskPropsType = {
  id: string;
  title: string;
  isDone: boolean;
}

export const SuperTodoList: React.FC<TasksPropsType> = ({tasks, children}) => {

  return (
    <div>
      <ul>
        {tasks.map(el => {
          return (
            <li key={el.id}>
              <span>{el.title}</span>
              <input type='checkbox' checked={el.isDone}/>
            </li>
          )
        })}
      </ul>
      {children}
    </div>
  )
}