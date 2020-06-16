import React from 'react';

import Uploader from '../components/Uploader';
import Tips from '../components/Tips';

const Home =( )=> {

  return (
    <>
      <Tips>请先登录再上传!!!</Tips>
      <Uploader />
    </>
  );
};

export default Home;