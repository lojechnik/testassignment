import React from 'react'
import { userType } from '../user/usertype';
import User from '../user/user'
import { useRef } from 'react';
import styles from './userlist.module.css'
import { useState } from 'react';
import UserListButton from '../ui/userlistbutton';
import { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
type UserListProps = {
  userArray: userType[];
}
function UserList() {
  const [users, setUsers] = useState<userType[]>([])

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
  }, [])

  const [resultingArray, setResultingArray] = useState<userType[]>(users)
  const filter = () => { setResultingArray(filterArray(users, filterRef?.current?.value)) }
  const sortAsc = () => {
    setResultingArray(
      users.slice().sort((a, b) => {
        return a.id - b.id
      }));
      console.log('results123',resultingArray)

  }
  const sortDesc = () => {

    setResultingArray(users.slice().sort((a, b) => {
      return b.id - a.id
    }));
console.log('result',resultingArray)
  }
  const filterRef = useRef<HTMLInputElement>(null)
  const filterArray = (userArray: userType[], name?: string) => {
    const filteredArray = userArray.filter((user) => user.first_name === name);
    return filteredArray
  }

  console.log('resulting array', resultingArray, 'users', users)
  return (<div className = {styles.userlist}>
    <div>Фильтрация</div>
    <div onClick={filter} className = {styles.userlist__filterbtn}>Filter</div>
    <div>Фильтрация по имени</div>
    <UserListButton onClick={() => { setResultingArray(users) }}>Сбросить</UserListButton>
    <div>Сбросить</div>
    <div>Сортировка по ID</div>
    <UserListButton onClick={sortAsc}>По возрастанию</UserListButton>
    <UserListButton onClick={sortDesc}>По убыванию</UserListButton>
    <input type="text" ref={filterRef} />
    {
      resultingArray?.map(user => {
        return (
          <User user={user} />
        )
      })
    }
  </div>);
}

export default UserList;