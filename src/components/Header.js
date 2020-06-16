import React from "react";
import Logo from "../logo.svg"
import {NavLink,useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from 'antd';
import  {useStores} from "../stores";
import { observer } from 'mobx-react';

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

const Login = styled.div`
  margin-left: auto;
`;
const StyledButton=styled(Button)`
margin-left: 10px;
`


const Header=observer(()=>{
  const {UserStore,AuthStore}=useStores()
const history=useHistory()
  const handleLogout=()=>{
    AuthStore.logout()
  }


  const handleLogin=()=>{
    history.push('/login');
  }

  const handleRegister=()=>{
    history.push('/register');
  }


  return(
    <StyledHeader>
      <Logos src={Logo} alt={Logo}/>
      <nav>
        <StyledLink to="/" activeClassName="active" exact >首页</StyledLink>
        <StyledLink to="/history" activeClassName="active">上传历史</StyledLink>
        <StyledLink to="/about" activeClassName="active">关于我</StyledLink>
      </nav>
      <Login>
        {
          UserStore.currentUser ?<>
              {UserStore.currentUser.attributes.username}
              <StyledButton type="primary" onClick={handleLogout}>注销</StyledButton>
            </> :
            <>
              <StyledButton type="primary" onClick={handleLogin} > 登陆</StyledButton>
              <StyledButton type="primary" onClick={handleRegister}>注册</StyledButton>
            </>

        }
      </Login>
    </StyledHeader>
  )})





export default Header