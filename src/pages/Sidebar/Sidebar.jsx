import Logo from "../../components/Logo/Logo.jsx";
import Nav from "../../components/Nav/Nav.jsx";
import User from "../../components/User/User.jsx";

function Sidebar() {
  return (
    <sidebar>
      <Logo />
      <div>
        <Nav />
        <User />
      </div>
    </sidebar>
  );
}

export default Sidebar;
