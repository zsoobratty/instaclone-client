import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import {UserContext} from '../App'
import { render } from '@testing-library/react'
const NavBar = () => {
  const {state,dispatch} = useContext(UserContext)
  const renderList = ()=>{
    if(state){
      return [
        <li><Link to="/profile">Profile</Link></li>,
        <li><Link to="/create">Create Post</Link></li>
      ]
    } else {
      return [
        <li><Link to="/signin">Login</Link></li>,
        <li><Link to="/signup">Sign Up</Link></li>
      ]
    }
  }
    return(
        <nav>
        <div className="nav-wrapper white">
          <Link to={state?"/":"/signin"} className="brand-logo left">Instaclone</Link>
          <ul id="nav-mobile" className="right">
            {renderList()}
          </ul>
        </div>
      </nav>
    )
}


export default NavBar