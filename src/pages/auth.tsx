import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { login } from "../redux/authslice";
import { RootState } from "../redux/store";
import useFetch from "../hooks/useFetch";
import { useRef } from "react";
function HomePage() {
    const dispatch = useDispatch();
    const send = useFetch();
    const loginInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);
    const auth = async () => {
        const token = await send("login/", "POST", {
            username: loginInputRef?.current?.value,
            password: passwordInputRef?.current?.value,
        });
        dispatch(login(token));
        console.log(token, "TOKEN");
    };

    const token = useSelector((state: RootState) => state.auth.token);

    return (
        <>
            Логин
            <input ref={loginInputRef} /> <br />
            Пароль
            <input ref={passwordInputRef} />
            <div onClick={auth}>Авторизация</div>
            {token}
        </>
    );
}

export default HomePage;
