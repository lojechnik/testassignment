import { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import useFetch from "../hooks/useFetch";
import { RootState } from '../redux/store';
import UserList from '../components/userlist/userlist';
import { useSelector } from 'react-redux';
function HomePage() {
    const authed = useSelector((state: RootState) => state)
    console.log(authed,'xxxxx')
    return (
        <>
            <UserList />
        </>
    )
}

export default HomePage;
