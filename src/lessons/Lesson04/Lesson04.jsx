import "./styles.css";
import React from 'react';
import Button from "../../components/Button/Button";

// Определяем функцию showCustomMessage
const showCustomMessage = (name) => {
  alert(`Function outer click - ${name}`);
};

function Lesson04() {
  return (
    <div className="lesson04-wrapper">
      <div className="buttons-container">
        {/* Пример 1 - создание функции внутри вызова кнопки (анонимная функция) */}
        <Button
          name="Button with inner func"
          type="button"
          onClick={() => {
            alert("Func inner");
          }}
        />
        {/* Пример 2 - создание функции вне кнопки и передача названия функции в prop */}
        <Button
          name="Button with outer func"
          type="button"
          onClick={() => showCustomMessage("Button with outer func")}
        />
        {/* Пример 3 - создание функции с параметрами вне кнопки */}
        <Button
          name="Button with parameters"
          type="button"
          onClick={() => {
            showCustomMessage("Bob");
          }}
        />
      </div>
    </div>
  );
}

export default Lesson04;
