import React from "react";
import Logo from "../logo.svg"
import {Link} from 'react-router-dom'
function Header() {
  return(
    <Header>
      <p>Header</p>
      <img src={Logo} alt={Logo}/>
      <nav>
      <Link to="/" >首页</Link>
        <Link to="/history">上传历史</Link>
        <Link to="/about">关于我</Link>
      </nav>
    </Header>
  )

}

export default Header