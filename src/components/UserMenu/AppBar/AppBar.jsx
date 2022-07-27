import UserMenu from "components/UserMenu";
import AuthNav from "components/UserMenu/AuthNav";
import Navigation from "../Navigation";
import { useSelector } from 'react-redux';
import  authSelectors  from 'redux/auth/auth-selectors';

export default function AppBar() {

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    
    <header>
      <Navigation/>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
