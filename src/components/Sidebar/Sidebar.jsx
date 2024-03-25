import Logo from "../Logo/Logo"
import Nav from "../Nav/Nav"
import User from "../User/User"


function Sidebar() {
    return (
      <sidebar>
            <Logo />
            <div>
                <Nav />
                <User />
            </div>
      </sidebar>
  )
}

export default Sidebar