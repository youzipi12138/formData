import React from "react";

import { Form, Input, Button, message } from 'antd';
import { Rule } from 'antd/lib/form';

const { Item } = Form;

const FormPage: React.FC = ()=>{
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Received values:', values);
    message.success('注册成功！');
  };

  const validatePassword = (_: Rule, value: string) => {
    if (value && value.length < 6) {
      return Promise.reject('密码至少需要6位');
    }
    return Promise.resolve();
  };

  const validateEmail = (_: Rule, value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value && !emailRegex.test(value)) {
      return Promise.reject('请输入有效的邮箱地址');
    }
    return Promise.resolve();
  };
  return(
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Item
        label="用户名"
        name="username"
        rules={[{ required: true, message: '请输入用户名' }]}
      >
        <Input placeholder="请输入用户名" />
      </Item>

      <Item
        label="密码"
        name="password"
        rules={[{ required: true, validator: validatePassword }]}
      >
        <Input.Password placeholder="请输入密码" />
      </Item>

      <Item
        label="邮箱"
        name="email"
        rules={[{ required: true, validator: validateEmail }]}
      >
        <Input placeholder="请输入邮箱" />
      </Item>

      <Item>
        <Button type="primary" htmlType="submit">
          注册
        </Button>
      </Item>
    </Form>
  )
}
export default FormPage;