import React from "react";
import { Form, Input, Button} from 'antd';
import styled from 'styled-components'

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
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Wraper>
      <Title>注册</Title>
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
        rules={[{ required: true, message: '请输入用户名' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="确认密码"
        name="password"
        rules={[{ required: true, message: '请确认密码' }]}
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