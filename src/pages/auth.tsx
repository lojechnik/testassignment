import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { forceLogin, login, logout } from "../redux/authslice";
import { RootState } from "../redux/store";
import useFetch from "../hooks/useFetch";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import AuthPopUp from "../components/authpopup/authpopup";
function HomePage() {
    const navigate = useNavigate()
    const [authed, setAuthed] = useState<boolean>(false)
    const dispatch = useDispatch();
    const send = useFetch();
    const loginInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (localStorage.getItem('token') !== null) { dispatch(forceLogin()); navigate('/home'); }
    })
    const auth = async () => {
        const token = await send("login/", "POST", {
            username: loginInputRef?.current?.value,
            password: passwordInputRef?.current?.value,
        });
        if (token) { setAuthed(true); dispatch(login(token)); navigate('/home') } else setAuthed(false)
    };
    const logoutF = () => {
        dispatch(logout())
        setAuthed(false)
    }
    const token = useSelector((state: RootState) => state.auth.token);

    return (
        <>
            Логин
            <input ref={loginInputRef} /> <br />
            Пароль
            <input ref={passwordInputRef} />
            <div onClick={auth}>Авторизация</div>
            <div onClick={logoutF}>Выйти</div>
            {token}
            <AuthPopUp authed={authed} />
        </>
    );
}

export default HomePage;
