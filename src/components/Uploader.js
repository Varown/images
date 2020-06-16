import React,{useRef} from 'react';
import { useStores } from '../stores';
import { observer ,useLocalStore} from 'mobx-react';
import { Upload, message,Spin} from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import styled from 'styled-components';



const Result = styled.div`
  margin-top: 30px;
  border: 1px dashed #ccc;
  padding: 20px;
`;
const H1 = styled.h1`
  margin: 20px 0;
  text-align: center;
`;
const Image = styled.img`
  max-width: 300px;
`;

const Input = styled.input`
margin-top: 5px;
  margin-right: 10px;
  border-radius: 4px;
`;


const { Dragger } = Upload;

 const Uploader=observer(()=>{


  const { ImageStore,UserStore } = useStores();
   const store = useLocalStore(() => ({
     width: null,
     setWidth(width) {
       store.width = width;
     },
     get widthStr() {
       return store.width?`/w/${store.width}`:'';
     },
     height: null,
     setHeight(height) {
       store.height = height;
     },
     get heightStr() {
       return store.height?`/h/${store.height}`:'';
     },
     get fullStr() {
       //?imageView2/0/w/800/h/400)
       return ImageStore.serverFile.attributes.url.attributes.url + '?imageView2/0' + store.widthStr + store.heightStr
     }

   }));


  const ref1 = useRef();
  const ref2 = useRef();

  const bindWidthChange=()=>{
     store.setWidth(ref1.current.value)

  }
  const bindHeightChange=()=>{
    store.setHeight(ref2.current.value)

  }


  const props = {
    showUploadList: false,
    beforeUpload: file => {
      ImageStore.setFile(file);
      ImageStore.setFilename(file.name);
      if(UserStore.currentUser === null) {
        message.warning('请先登录再上传！');
        return false;
      }

      if (!/(svg$)|(png$)|(jpg$)|(jpeg$)|(gif$)/ig.test(file.type)) {
        message.error('只能上传png/svg/jpg/gif格式的图片');
        return false;
      }
      if (file.size > 1024 * 1024) {
        message.error('图片最大1M');
        return false;
      }
      ImageStore.upload()
        .then((serverFile) => {
          console.log('上传成功')
          console.log(serverFile);
        }).catch(() => {
        console.log('上传失败')
      });
      return false;
    }
  };

  return(
    <div>
      <Spin tip="上传中" spinning={ImageStore.isUpoading} >
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">点击或者拖拽上传图片</p>
        <p className="ant-upload-hint">
          仅支持.png/.gif/.jpg/.svg格式的图片，图片最大1M
        </p>
      </Dragger>
      </Spin>
      {
        ImageStore.serverFile ? <Result>
          <H1>上传结果</H1>
          <dl>
            <dt>线上地址:</dt>
            <dd><a  href={ImageStore.serverFile.attributes.url.attributes.url}>{ ImageStore.serverFile.attributes.url.attributes.url}</a></dd>
            <dt>文件名</dt>
            <dd>{ImageStore.filename}</dd>
            <dt>图片预览</dt>
            <dd>
              <Image target='_blank' src={ImageStore.serverFile.attributes.url.attributes.url}/>
            </dd>
            <dt>更多尺寸</dt>
            <dd>
              <Input ref={ref1} onChange={bindWidthChange} placeholder="最大宽度（可选）"/>
              <Input ref={ref2} onChange={bindHeightChange} placeholder="最大高度（可选）"/>
            </dd>
            <dt>
              修改后的地址:
            </dt>
           <dd>
             <a target='_blank' href={store.fullStr}>{store.fullStr}</a>
           </dd>

          </dl>
        </Result> :null




      }
    </div>
  )



})




export default Uploader