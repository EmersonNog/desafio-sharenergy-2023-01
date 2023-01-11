import React from "react";
import styles from "../Styles/Button.module.css";

const ButtonSubmit = ({ type, value, id }) => (

  <>
    <input type={type} value={value} id={id} className={styles.button}/>
  </>

);

export default ButtonSubmit;