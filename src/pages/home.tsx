import { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import useFetch from "../hooks/useFetch";
import UserList from '../components/userlist/userlist';
import { useRef } from 'react'
import { userType } from '../components/user/usertype';
function HomePage() {

    return (
        <>
            <UserList />
        </>
    )
}

export default HomePage;
