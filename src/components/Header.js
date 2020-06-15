import React from "react";
import Logo from "../logo.svg"
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'


const StyledHeader=styled.header`
  display: flex;
  align-items: center;
  padding: 10px 100px;
  background-color: #02101f;
  color: #fff;
`

const Logos=styled.img`
height: 30px;
`

const StyledLink=styled(NavLink)`
text-decoration: none;
color: #fff;
margin-left: 30px;
&.active{
border-bottom: 1px solid #fff;
}
`

function Header() {
  return(
    <StyledHeader>
      <p>Header</p>
      <Logos src={Logo} alt={Logo}/>
      <nav>
      <StyledLink to="/" activeClassName="active" exact >首页</StyledLink>
        <StyledLink to="/history" activeClassName="active">上传历史</StyledLink>
        <StyledLink to="/about" activeClassName="active">关于我</StyledLink>
      </nav>
    </StyledHeader>
  )

}

export default Header