import React from 'react';
import {useStores} from "../stores";
import { observer } from 'mobx-react';
const Tips=observer(({children})=>{
  const {UserStore}=useStores()
  return(
    <>
      {
        UserStore.currentUser?null:<div> {children}</div>
      }
    </>
  )
})
export default Tips