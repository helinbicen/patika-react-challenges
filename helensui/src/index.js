import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}


export const Button = ({type,text}) => {
  return <button className={`${styles.button} ${styles[type]}` }>{text}</button>
}