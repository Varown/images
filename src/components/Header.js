import React, {useState} from "react";
import Logo from "../logo.svg"
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import { Button } from 'antd';

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

const StyledLinks=styled(NavLink)`
text-decoration: none;

`
const Login = styled.div`
  margin-left: auto;
`;
const StyledButton=styled(Button)`
margin-left: 10px;
`


function Header() {
  const [isLogin,setIsLogin]=useState(false)

  return(
    <StyledHeader>
      <p>Header</p>
      <Logos src={Logo} alt={Logo}/>
      <nav>
      <StyledLink to="/" activeClassName="active" exact >首页</StyledLink>
        <StyledLink to="/history" activeClassName="active">上传历史</StyledLink>
        <StyledLink to="/about" activeClassName="active">关于我</StyledLink>
      </nav>

      <Login>
        {
          isLogin ?<>
              <span>孟鹏</span>
              <StyledButton type="primary" onClick={()=>setIsLogin(false)}>注销</StyledButton>
            </> :
            <>
              <StyledButton type="primary" onClick={()=>setIsLogin(true)} > 登陆</StyledButton>
              <StyledButton type="primary">注册</StyledButton>
            </>

        }
      </Login>

    </StyledHeader>
  )

}

export default Header