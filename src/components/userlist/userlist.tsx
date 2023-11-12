import React from 'react'
import { userType } from '../user/usertype';
import User from '../user/user'
import { useRef } from 'react';
import { useState } from 'react';
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
      users.sort((a, b) => {
        return a.id - b.id
      }));

  }
  const sortDesc = () => {
    setResultingArray(users.sort((a, b) => {
      return b.id - a.id
    }));

  }
  const filterRef = useRef<HTMLInputElement>(null)
  const filterArray = (userArray: userType[], name?: string) => {
    const filteredArray = userArray.filter((user) => user.first_name === name);
    return filteredArray
  }
  console.log('resulting array', resultingArray, 'users', users)
  return (<>
    <div>Фильтрация</div>
    <button onClick={filter}>Filter</button>
    <div>Фильтрация по имени</div>
    <button onClick={() => { setResultingArray(users) }}>Сбросить</button>
    <div>Сбросить</div>
    <div>Сортировка по ID</div>
    <button onClick={sortAsc}>По возрастанию</button>
    <button onClick={sortDesc}>По убыванию</button>
    <input type="text" ref={filterRef} />
    {
      resultingArray?.map(user => {
        return (
          <User user={user} />
        )
      })
    }
  </>);
}

export default UserList;