import React from 'react'
import { useDispatch } from 'react-redux'
import styles from './logoutbtn.module.css'
import { logout } from '../../redux/authslice'
import UserListButton from '../ui/userlistbutton'
export default function LogoutBtn(){
    const dispatch = useDispatch()
  return (
    <div onClick = {()=>{dispatch(logout())}}className = {styles.logoutbtn}>Выйти</div>
  )
  }