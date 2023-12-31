import React from 'react'
import { userType } from '../user/usertype';
import User from '../user/user'
import { useRef } from 'react';
import { Routes } from 'react-router';
import { Outlet } from 'react-router';
import Form from '../form/form';
import { formType } from '../../redux/formslice';
import { Route } from 'react-router';
import { logout } from '../../redux/authslice';
import { useLocation } from 'react-router-dom'
import styles from './userlist.module.css'
import { useParams } from 'react-router';
import { openForm } from '../../redux/formslice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import UserListButton from '../ui/userlistbutton';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import useFetch from '../../hooks/useFetch';
import { useProtectedRoute } from '../../hooks/useProtectedRoute';
type UserListProps = {
  userArray: userType[];
}
function UserList() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [users, setUsers] = useState<userType[]>([])
  const { userId } = useParams()
  const send = useFetch()
  const getUsers = async () => {
    const response = await send(
      'users/',
      'GET',
    )

    setUsers(response)
    setResultingArray(response)
  }
  useEffect(() => {
    getUsers()
    console.log('process.envREACT_APP_TEST_ASSIGNMENT_API',process.env.REACT_APP_TEST_ASSIGNMENT_API  )
  }, [])

  const [resultingArray, setResultingArray] = useState<userType[]>(users)
  const filter = () => { setResultingArray(filterArray(users, filterRef?.current?.value)) }
  const sortAsc = () => {
    setResultingArray(
      users.slice().sort((a, b) => {
        return a.id - b.id
      }));
    console.log('results123', resultingArray)

  }

  const redirectForm = (payload:formType) => {
    dispatch(openForm(payload))
    console.log('formuser',payload.currentUser)
    navigate(`/form/${String(payload.currentUser.id)}`)
  }
  const sortDesc = () => {

    setResultingArray(users.slice().sort((a, b) => {
      return b.id - a.id
    }));
    console.log('result', resultingArray)
  }
  const filterRef = useRef<HTMLInputElement>(null)
  const filterArray = (userArray: userType[], name?: string) => {
    const filteredArray = userArray.filter((user) => user.first_name === name);
    return filteredArray
  }

  return (
  <div className={styles.userlist}>
    <div className={styles.userlist__operations}>
     
    <UserListButton onClick={() => { setResultingArray(users) }}>Сбросить</UserListButton>
    <div className={styles.soring}>
    <div>Сортировка по ID</div>
    <div className={styles.sorting__types}>
    <UserListButton onClick={sortAsc}>По возрастанию</UserListButton>
          <UserListButton onClick={sortDesc}>По убыванию</UserListButton>
          </div>
          </div>
          <div className={styles.userlist__filterbtn}>Фильтрация</div>

    <input type="text"className={styles.filterInput} ref={filterRef} />
    <UserListButton onClick={filter}>Применить фильтрацию</UserListButton>

    </div>
    <div className={styles.userlist__array}>
    {
      
      resultingArray?.map(user => {
        return (<div className = {styles.userlist__item}>
          <User user={user} />
          <UserListButton onClick={() => { redirectForm({currentUser:user,formType:'edit',formOpen:true}) }}>Изменить</UserListButton>

        </div>
        )
      })
   } </div>
  </div>);
}

export default UserList;