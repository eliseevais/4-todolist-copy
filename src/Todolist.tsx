import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';

export type TaskType = {
  id: string
  title: string
  isDone: boolean
}

export type TodoListPropsType = {
  todolistId: string
  title: string
  tasks: Array<TaskType>
  removeTask: (todolistId: string, taskId: string) => void
  changeFilter: (todolistId: string, value: FilterValuesType) => void
  addTask: (todolistId: string, title: string) => void
  changeTaskStatus: (todolistId: string, id: string, isDone: boolean) => void
  filter: FilterValuesType
}

export function Todolist(props: TodoListPropsType) {

  let [title, setTitle] = useState('');
  let [error, setError] = useState<string | null>(null);

  const addTask = () => {
    if (title.trim() !== '') {
      props.addTask(props.todolistId, title.trim());
      setTitle('');
    } else {
      setError('Title is required')
    }
  }

  const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    setError(null)
    if (e.charCode === 13) {
      addTask();
    }
  }

  const onAllClickHandler = () => props.changeFilter(props.todolistId, "all");
  const onActiveClickHandler = () => props.changeFilter(props.todolistId, "active");
  const onCompletedClickHandler = () => props.changeFilter(props.todolistId, "completed");

  return <div>
    <h3>{props.title}</h3>
    <div>
      <input value={title}
             onChange={onNewTitleChangeHandler}
             onKeyPress={onKeyPressHandler}
      />
      <button onClick={addTask}>+</button>
      {error && <div className='error-message'>{error}</div>}
    </div>
    <ul>
      {
        props.tasks.map(t => {

          const onClickHandler = () => props.removeTask(props.todolistId, t.id)
          const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
            props.changeTaskStatus(props.todolistId, t.id, event.currentTarget.checked);
          };

          return <li key={t.id}>
            <input type="checkbox"
                   checked={t.isDone}
                   onChange={onChangeHandler}
            />
            <span>{t.title}</span>
            <button onClick={onClickHandler}>x</button>
          </li>
        })
      }
    </ul>
    <div>
      <button className={props.filter === 'all' ? 'active-filter' : ''}
              onClick={onAllClickHandler}>All
      </button>
      <button className={props.filter === 'active' ? 'active-filter' : ''}
              onClick={onActiveClickHandler}>Active
      </button>
      <button className={props.filter === 'all' ? 'completed' : ''}
              onClick={onCompletedClickHandler}>Completed
      </button>
    </div>
  </div>
}
