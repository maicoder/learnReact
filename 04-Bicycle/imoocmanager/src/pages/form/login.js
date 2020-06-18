import React from "react";
import {
  Card,
  Form,
  Input,
  Button,
  message,
  Checkbox
} from "antd";
import {
  UserOutlined,
  LockOutlined
} from '@ant-design/icons';

const FormItem = Form.Item;

class FormLogin extends React.Component {

  handleSubmit = () => {
    let userInfo = this.props.form.getFieldsValue();
    this.props.form.validateFields((err, values) => {
      if(!err) {
        message.success(`${userInfo.userName} 恭喜你，您通过本次表单组件学习，当前密码为：${userInfo.userPwd}`)
      }
    })
  }

  render() {

    return (
      <div>
        <Card title="登录行内表单">
          <Form layout="inline">
            <FormItem>
              <Input placeholder="请输入用户名"/>
            </FormItem>
            <FormItem>
              <Input placeholder="请输入密码"/>
            </FormItem>
            <FormItem>
              <Button type="primary">登录</Button>
            </FormItem>
          </Form>
        </Card>

        <Card title="登录水平表单" style={{marginTop: 10}}>
          <Form style={{width: 300}}>
            <FormItem name="userName" rules={[
              {
                required: true,
                message: '用户名不能为空'
              },
              {
                min: 5, max: 10,
                message: '长度不在范围内'
              },
              {
                pattern: new RegExp('^\\w+$', 'g'),
                message: '用户名必须为字母或者数字'
              }
            ]}>
              <Input prefix={<UserOutlined />} placeholder="请输入用户名"/>
            </FormItem>

            <FormItem name="userPwd" rules={[{}]}>
              <Input prefix={<LockOutlined />} type="password" placeholder="请输入密码"/>
            </FormItem>

            <FormItem name="remember" rules={[{}]}>
              <Checkbox>记住密码</Checkbox>
              <a href="#" style={{float: 'right'}}>忘记密码</a>
            </FormItem>

            <FormItem>
              <Button type="primary" onClick={this.handleSubmit}>登录</Button>
            </FormItem>

          </Form>
        </Card>
      </div>
    );
  }
}

export default FormLogin;