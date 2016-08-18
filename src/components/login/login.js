import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import { Row, Col } from 'antd';
import Register from '../register/register.jsx';

const FormItem = Form.Item;

class Login extends React.Component {
  handleSubmit(e) {
    // 阻止默认刷新行为
    e.preventDefault();
    //this.props.form.getFieldsValue()返回的是一个json对象
    const data = this.props.form.getFieldsValue();
    console.log(data);
    // 将json对象转化为字符串
    // const dataStr = JSON.stringify(data, (k, v) => {
    //   if (typeof v === 'undefined') {
    //     return '';
    //   }
    //   return v;
    // });
  }

  redirectRegister() {
    ReactDOM.render(<Register />, document.getElementById('root'));
  }

  render() {
    const { getFieldProps } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <div style={{ margin: '100px auto' }}>
        <Row type="flex" align="middle" justify="space-around">
          <Col span={8}>
            <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
              <FormItem label="账户" {...formItemLayout}>
                <Input placeholder="请输入账户名" {...getFieldProps('username')} />
              </FormItem>
              <FormItem label="密码" {...formItemLayout}>
                <Input type="password" placeholder="请输入密码" {...getFieldProps('password')} />
              </FormItem>
              <FormItem label="记住我" {...formItemLayout}>
                <Checkbox {...getFieldProps('agreement')} />
              </FormItem>
              <FormItem wrapperCol={{ span: 16, offset: 6 }} style={{ marginTop: 24 }}>
                <Button type="primary" htmlType="submit">登录</Button>
              </FormItem>
              <FormItem label="没有帐号?" {...formItemLayout}>
                <p><a href="#" onClick={this.redirectRegister}>立即注册!</a></p>
              </FormItem>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

Login = Form.create()(Login);

export default Login;
