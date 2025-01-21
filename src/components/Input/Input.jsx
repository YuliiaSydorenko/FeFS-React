// components/Input/Input.jsx
import React from 'react';
import './styles.css';

function Input({ name, type = "text", placeholder, label }) {
  return (
    <div className="input-wrapper">
      <label>{label}</label>
      <input name={name} 
      type={type} 
      placeholder={placeholder} 
      className="input" />
      
    </div>
  );
}

export default Input;
