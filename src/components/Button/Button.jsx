import "./styles.css";
import React from 'react';

// объект props передаётся как параметр в круглые скобки, при создании компонента
// const props = {
//    name: <значение свойства будет передано при вызове компонента>
//    array: []
// }

// деструктуризация - 2 вариант ()
function Button({ name = "SEND", type = "button", onClick }) { 
  // const buttonType = "submit";
  // console.log(props.name);

  // деструктуризация 1 вариант
  // const {name} = props;

  return (
    <button className="main-button" type={type} onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;
