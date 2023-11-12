import { RootState } from '../redux/store'
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { logout } from "../redux/authslice";

interface IRequestOptions {
    method: string,
    headers: Headers,
    body?: string,
}
interface IHeader {
    'Authorisation': string
}
interface IBody {
    'id'?: number,
    'username'?: string,
    'first_name'?: string,
    'last_name'?: string,
    'is_active'?: boolean,
    'last_login'?: string,
    'is_superuser'?: boolean,
    'password'?: string
}
interface IHeaders {
    'Authorization': string;
}

export default function useFetch() {
    const dispatch = useDispatch()
    const token = useSelector((state: RootState) => state.auth.token)

    const send = (url: string, method: string, body?: IBody) => {

        const base = 'https://test-assignment.emphasoft.com/api/v1/'
        const normalizedURL = `${base}${url}`

        const requestOptions: IRequestOptions = {
            method,
            headers: new Headers({
                'accept': 'application/json',
                'Content-Type': 'application/json',
            }),
        }

        if (token) {
            requestOptions.headers.append('Authorization', `token ${token}`)
        }

        if (method !== 'GET') {
            requestOptions.body = JSON.stringify(body)
        }
        return fetch(normalizedURL, requestOptions)
            .then(res => {
                if (res.status === 401) {
                    dispatch(logout())
                    throw new Error(String(res.status))
                }
                return res.json()
            })
            .then(data => {
                console.log('data', data)
                return data
            })
            .catch(err => console.log(err))
    }

    return send
}
