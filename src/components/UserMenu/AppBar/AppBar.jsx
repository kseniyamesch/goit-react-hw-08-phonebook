import UserMenu from "components/UserMenu";
import AuthNav from "components/UserMenu/AuthNav";
import Navigation from "components/UserMenu/Navigation";
import { useSelector } from 'react-redux';
import  authSelectors  from 'redux/auth/auth-selectors';

export default function AppBar() {

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  console.log(isLoggedIn)
  return (
    
    <header>
      <Navigation/>
      
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
