import React from 'react'
import styles from './userlistbutton.module.css'
export default function UserListButton(props:{onClick:() => void;children:string}) {
  return (
    <div onClick = {props.onClick}className = {styles.userlistButton}>{props.children}</div>
  )
}
