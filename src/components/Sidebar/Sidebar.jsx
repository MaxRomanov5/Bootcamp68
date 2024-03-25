import Logo from "../Logo/Logo"
import Nav from "../Nav/Nav"
import User from "../User/User"


function Sidebar({user,fruit}) {
  console.log(user);
    return (
      <div>
            <Logo />
            <div>
                <Nav />
          <User userName={user} />
        </div>
        <p>{ fruit}</p>
      </div>
  )
}

export default Sidebar