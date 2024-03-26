import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import User from "../User/User";
import { menuConfig } from "../../Data/menu";

function Sidebar({ user, fruit }) {
  console.log(user);
  return (
    <div>
      <Logo />
      <div>
        <Nav data={menuConfig} />
        <User userName={user} />
      </div>
      <p>{fruit}</p>
    </div>
  );
}

export default Sidebar;
