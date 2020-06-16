import React from 'react';
import {useStores} from "../stores";
import { observer } from 'mobx-react';
import styled from 'styled-components';

const StyledTips = styled.div`
  background: orange;
  padding: 10px;
  margin: 30px 0;
  color: #fff;
  border-radius: 4px;
`;
const Tips=observer(({children})=>{
  const {UserStore}=useStores()
  return(
    <StyledTips>
      {
        UserStore.currentUser?null:<div> {children}</div>
      }
    </StyledTips>
  )
})
export default Tips