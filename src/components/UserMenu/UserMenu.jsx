import { useDispatch, useSelector } from "react-redux";
import { authOperations } from "redux/auth";
import { Button } from 'react-bootstrap';
import authSelectors from "redux/auth/auth-selectors";
import s from './UserMenu.module.css';

export default function UserMenu () {
const dispatch = useDispatch();
const name = useSelector(authSelectors.getUsername);

    return (
        <div>
            <span className={s.span}>Welcome, <b>{name}</b></span>
            <Button type="button" onClick={() => dispatch(authOperations.logOut())}>Log out</Button>
        </div>
    )
}