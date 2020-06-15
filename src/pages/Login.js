import React from "react";
import { Form, Input, Button} from 'antd';
import styled from 'styled-components'
import {useStores} from "../stores";

const Wraper = styled.div`
  max-width: 600px;
  margin: 30px auto;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 20px;
`;


const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`;

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18},
};
const tailLayout = {
  wrapperCol: { offset: 6, span: 18 },
};

const Register = () => {
  const {AuthStore}=useStores()

  const onFinish = values => {
    console.log('Success:', values);
    AuthStore.setUsername(values.username)
    AuthStore.setPassword(values.password)
    AuthStore.login().then(
      ()=>{console.log("登陆成功")}
    ).catch(
      ()=>{console.log("登陆失败")}
    )
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const validateUsername = (rule, value) => {
    if(/\W/.test(value)) {return Promise.reject('只能是字母数字下划线');}
    if(value.length < 4 || value.length > 10) return Promise.reject('长度为4～10个字符');
    return Promise.resolve();
  };

  return (
    <Wraper>
      <Title>登陆</Title>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: '请输入用户名' },
            {validator:validateUsername},


          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码' },
            {min:4,message: '最小4位密码'},
            {max:10,message: '最大10位密码'}

          ]}
        >
          <Input.Password />
        </Form.Item>


        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </Wraper>
  );
};
export default Register