import React from 'react';
import {
  Card,
  Form,
  Button,
  Input,
  Checkbox,
  Radio,
  Select,
  Switch,
  DatePicker,
  TimePicker,
  Upload,
  message,
  InputNumber
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import moment from 'moment';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const TextArea = Input.TextArea;

class FormRegister extends React.Component {

  state = {}
  formRef = React.createRef();

  handleSubmit = () => {
    let userInfo = this.props.form.getFieldsValue();
    console.log(JSON.stringify(userInfo))
    message.success(`${userInfo.userName} 恭喜你，您通过本次表单组件学习，当前密码为：${userInfo.userPwd}`)
  }

  getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  handleChange = (info) => {
    if(info.file.status === 'uploading') {
      this.setState({loading: true});
      return;
    }
    if(info.file.status === 'done') {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, imageUrl => this.setState({
        userImg: imageUrl,
        loading: false,
      }));
    }
  }

  render() {
    // const [form] = Form.useForm();

    const formItemLayout = {
      labelCol: {
        xs: 24,
        sm: 4
      },
      wrapperCol: {
        xs: 24,
        sm: 12
      }
    }
    const offsetLayout = {
      wrapperCol: {
        xs: 24,
        sm: {
          span: 12,
          offset: 4
        }
      }
    }
    const rowObject = {
      minRows: 4, maxRows: 6
    }
    return (
      <div>
        <Card title="注册表单">
          <Form
            {...formItemLayout}
            ref={this.formRef}
            name="register"
            initialValues={{
              sex: '1',
              age: 18,
              currentState: '2',
              interest: ['2', '5'],
              isMarried: true,
              birthday: moment('2020-02-20'),
              address: '北京市海淀区奥林匹克公园',
              register: true
            }}
            scrollToFirstError
          >

            <FormItem
              name="userName"
              label="用户名"
              rules={[
                {
                  required: true,
                  message: '用户名不能为空'
                }
              ]}
            >
              <Input placeholder="请输入用户名"/>
            </FormItem>

            <FormItem name="userPwd" label="密码" hasFeedback>
              <Input type="password" placeholder="请输入密码"/>
            </FormItem>

            <FormItem name="sex" label="性别" >
              <RadioGroup>
                <Radio value="1">男</Radio>
                <Radio value="2">女</Radio>
              </RadioGroup>
            </FormItem>

            <FormItem name="age" label="年龄" >
              <InputNumber />
            </FormItem>

            <FormItem label="当前状态" name='currentState' {...formItemLayout}>
              <Select>
                <Option value="1">咸鱼一条</Option>
                <Option value="2">风华浪子</Option>
                <Option value="3">北大才子一枚</Option>
                <Option value="4">百度FE</Option>
                <Option value="5">创业者</Option>
              </Select>
            </FormItem>

            <FormItem label="爱好" name='interest' {...formItemLayout}>
              <Select mode="multiple">
                <Option value="1">游泳</Option>
                <Option value="2">打篮球</Option>
                <Option value="3">踢足球</Option>
                <Option value="4">跑步</Option>
                <Option value="5">爬山</Option>
                <Option value="6">骑行</Option>
                <Option value="7">桌球</Option>
                <Option value="8">麦霸</Option>
              </Select>
            </FormItem>

            <FormItem name='isMarried' label="是否已婚" valuePropName="checked" {...formItemLayout}>
              <Switch/>
            </FormItem>

            <FormItem name='birthday' label="生日" {...formItemLayout}>
              <DatePicker
                showTime
                format="YYYY-MM-DD HH:mm:ss"
              />
            </FormItem>

            <FormItem name='address' label="联系地址" {...formItemLayout}>
              <TextArea
                autosize={rowObject}
              />
            </FormItem>

            <FormItem name='time' label="早起时间" {...formItemLayout}>
              <TimePicker/>
            </FormItem>

            <FormItem name='userImg' label="头像" {...formItemLayout}>
              <Upload
                listType="picture-card"
                showUploadList={false}
                action="//jsonplaceholder.typicode.com/posts/"
                onChange={this.handleChange}
              >
                {this.state.userImg ? <img src={this.state.userImg}/> : <PlusOutlined />}
              </Upload>
            </FormItem>

            <FormItem name='register' valuePropName='checked' {...offsetLayout}>
                <Checkbox>我已阅读过<a href="#">慕课协议</a></Checkbox>
            </FormItem>

            <FormItem {...offsetLayout}>
              <Button type="primary" onClick={this.handleSubmit}>注册</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}

export default FormRegister;