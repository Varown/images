import React from "react";
import Uploader from "../components/Uploader";
import Tips from "../components/Tips";


const Home=()=>{

  return(
    <>
      {
        <Tips>请先登录在上传</Tips>
      }
    <Uploader/>
    </>
  )

}
export default Home
