import React, {
  ChangeEvent,
  KeyboardEvent,
  useState
} from 'react';
import {FilterValueType} from "./App";
import {useAutoAnimate} from "@formkit/auto-animate/react";
import {Button} from "./components/Button";

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
  children?: React.ReactNode;
  changeTaskStatus: (taskId: string, isDone: boolean) => void;
  filter: FilterValueType;
}

export const Todolist: React.FC<PropsType> = ({children, ...props}) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [error, setError] = useState<string | null>(null);
  const onNewTitleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(event.currentTarget.value)
  };
  const [listRef] = useAutoAnimate<HTMLUListElement>();
  const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    setError(null);
    if (event.charCode === 13) {
      props.addTask(newTaskTitle);
      setNewTaskTitle('');
    }
  };

  const addTask = () => {
    if (newTaskTitle.trim() !== '') {
      props.addTask(newTaskTitle.trim());
      setNewTaskTitle('');
    } else {
      setError('Field is required')
    }
    ;
  };
  // const onAddTaskHandler = () => {
  //   if (newTaskTitle.trim() !== '') {
  //     props.addTask(newTaskTitle.trim());
  //     setNewTaskTitle('');
  //   } else {
  //     setError('Field is required')
  //   };
  // }

  const onAllClickHandler = () => props.changeFilter('all');
  const onActiveClickHandler = () => props.changeFilter('active');
  const onCompletedClickHandler = () => props.changeFilter('completed');
  const onFirstThreeTasksClickHandler = () => props.changeFilter('three');
  // const onClickFilterHandler = (value: FilterValueType) => {
  //   props.changeFilter(value);
  // };

  const onDeleteAllTasksClickHandler = () => props.deleteAllTask();
  const onRemoveTaskHandler = (taskId: string) => {
    props.removeTask(taskId);
  };


  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input value={newTaskTitle}
               onChange={onNewTitleChangeHandler}
               onKeyPress={onKeyPressHandler}
               className={error ? 'error' : ''}
        />

        <button onClick={addTask}>+</button>
        {/*<Button name={'+'} onClick={onAddTaskHandler}/>*/}
        {error && <div className='error-message'>{error}</div>}

      </div>
      <ul ref={listRef}>
        {props.tasks.map((task: TaskType) => {
          const onRemoveTaskHandler = () => props.removeTask(task.id);
          const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
            props.changeTaskStatus(task.id, event.currentTarget.checked);
          };

          return (
            <li key={task.id} className={task.isDone ? 'is-done' : ''}>
              <input type="checkbox"
                     checked={task.isDone}
                     onChange={onChangeHandler}
              />
              <span>{task.title}</span>
              <button onClick={onRemoveTaskHandler}>✖️</button>
              {/*<Button name={'✖️'} onClick={() => onRemoveTaskHandler(task.id)}/>*/}

            </li>
          )
        })}

      </ul>
      <div>
        <button className={props.filter === 'all' ? 'active-filter' : ''}
                onClick={onAllClickHandler}>All
        </button>
        <button className={props.filter === 'active' ? 'active-filter' : ''}
                onClick={onActiveClickHandler}>Active
        </button>
        <button className={props.filter === 'completed' ? 'active-filter' : ''}
                onClick={onCompletedClickHandler}>Completed
        </button>
        <button className={props.filter === 'three' ? 'active-filter' : ''}
                onClick={onFirstThreeTasksClickHandler}>Give 3 first tasks
        </button>
        <button onClick={onDeleteAllTasksClickHandler}>Delete all</button>

        {/*<Button name={'All'} onClick={() => onClickFilterHandler('all')}/>*/}
        {/*<Button name={'Active'} onClick={() => onClickFilterHandler('active')}/>*/}
        {/*<Button name={'Completed'}*/}
        {/*        onClick={() => onClickFilterHandler('completed')}/>*/}
        {/*<Button name={'Give 3 first tasks'}*/}
        {/*        onClick={() => onClickFilterHandler('three')}/>*/}

      </div>
      {children}
    </div>
  )
}
