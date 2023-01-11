import React from "react";
import InputMask from 'react-input-mask';
import styles from "../Styles/Input.module.css";

const InputBlock = ({ label, htmlfor, type, value, onChange}) => {
  let inputElement;

  if (type === 'tel') {
    inputElement = (
      <InputMask
        mask="(999) 99999-9999"
        value={value}
        onChange={onChange}
      />
    );
  } else if(type === 'number') {
    inputElement = (
      <InputMask
        mask="999.999.999-99"
        value={value}
        onChange={onChange}
      />
    );
  } else {
    inputElement = (
      <input type={type} value={value} onChange={onChange}/>
    );
  }

  return (
    <div className={styles.input_block}>
      <label htmlFor={htmlfor}>{label} </label>
      {inputElement}
    </div>
  );
};

export default InputBlock;
