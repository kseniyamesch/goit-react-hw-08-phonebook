import { useDispatch, useSelector } from "react-redux";
import { authOperations } from "redux/auth";
import authSelectors from "redux/auth/auth-selectors";

export default function UserMenu () {
const dispatch = useDispatch();
const name = useSelector(authSelectors.getUsername);

    return (
        <div>
            <span>Welcome, {name}</span>
            <button type="button" onClick={() => dispatch(authOperations.logOut())}>Log out</button>
        </div>
    )
}