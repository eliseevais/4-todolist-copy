import React from "react";
import s from './SuperButton.module.css'

type SuperButtonPropsType = {
  name?: string;
  onClick: () => void;
  children?: React.ReactNode;
  color?: string;
  disabled?: boolean;
}

export const SuperButton:React.FC<SuperButtonPropsType> = (props) => {

  const {name,
    onClick,
    children,
    color,
    disabled,
    ...restProps} = props;

  const onclickHandler = () => {
    onClick();
  }

  // const finalClassName = s.button
  //   + (disabled
  //     ? ' ' + s.disabled
  //     : color === 'red'
  //       ? ' ' + s.red
  //       : color === 'secondary'
  //         ? ' ' + s.secondary
  //         : ' ' + s.default)
  //   + (className ? ' ' + className : '')

  // const finalClassName = s.button + ' ' + s.red

  // const finalClassName = `${s.button} ${s.red}`

  // const finalClassName = `
  //   ${s.button}
  //   ${color === 'red' ? s.red : s.default}
  //   ${disabled ? s.disabled : ''}
  // `

  const finalClassName = `
    ${s.button} 
    ${color === 'red' ? s.red : color === 'secondary' ? s.secondary : s.default}
    ${disabled ? s.disabled : ''}
  `

  return (
    <button className={finalClassName} onClick={onclickHandler}>{children}</button>
  )
}

// // ---------------------------------------------------------
// import React from "react";
//
// type SuperButtonPropsType = {
//   name: string;
//   onClick: () => void;
// }
//
// export const SuperButton:React.FC<SuperButtonPropsType> = ({name, onClick}) => {
//
//   const onclickHandler = () => {
//     onClick();
//   }
//
//   return (
//     <button onClick={onclickHandler}>{name}</button>
//   )
// }

