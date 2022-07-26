import UserMenu from "components/UserMenu";
import AuthNav from "components/AuthNav";
import Navigation from "components/Navigation";

export default function AppBar() {
  return (
    <header>
      <Navigation/>
      <UserMenu/>
      <AuthNav/>
    </header>
  );
}
