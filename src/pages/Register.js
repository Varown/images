import React, {useRef} from "react";
import { observer } from 'mobx-react';
import {useStores} from "../stores";


const  Register=observer(()=>{
  const {AuthStore}=useStores();
  const inputRef=useRef()
  const xxx=()=>{

    AuthStore.setUsername(inputRef.current.value)

  }
  return(
    <>
      <h1>Register:{AuthStore.values.username}</h1>
      <input onChange={xxx} ref={inputRef}/>
    </>
  )

})

export default Register