import React ,{useRef}from 'react';
import ImageStore from '../stores/image'
import { observer } from 'mobx-react';

const Uploader=observer(()=>{
  const ref=useRef()
  const bindChange=()=>{
    console.log(ref.current);
    if(ref.current.files.length>0){
      ImageStore.setFile(ref.current.files[0])
      ImageStore.setFilename(ref.current.files[0].name())
      ImageStore.upload()
        .then((serverFile)=>{
          console.log('上传成功')
          console.log(serverFile);
        }).catch(()=>{
        console.log('上传失败')
      });
    }
  }

  return(

    <div>
      <h1>上传文件</h1>
      <input type="file" ref={ref} onChange={bindChange}/>
    </div>
  )



})




export default Uploader