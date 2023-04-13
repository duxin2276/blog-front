import React, { Component } from 'react';
import { Button, Card, Form, Input, Tag, message, Switch } from 'antd';
import './index.css';
// import request from '../../utis/requrest'
import Qs from 'qs';
import axios from 'axios';

class Login extends Component {
    state = {
        username: '',
        password: '',
        title: '登录',
    };

    handleButton(e) {
        console.log('触发的事件', e, this.state);
        const { username, password } = this.state;
        const obj = {
            username,
            password,
        };

        message.loading({
            content: 'Loading...',
            key: 'updatable',
        });

        axios({
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            method: 'post',
            url: '/api/login',
            data: Qs.stringify(obj),
        }).then(({ data }) => {
            message.success({
                content: data.msg,
                key: 'updatable',
                duration: 2,
              });
            console.log('返回的数据--', data);
        });

        // try {
        //     request.post({ url: '/login', data: obj }).then(res => {
        //         console.log('获取到的数据', res);
        //     });
        // } catch (err) {
        //     console.log('报错了', err)
        // }
    }

    handleInput1({ target: { value } }) {
        console.log('触发的事件', value);
        this.setState({ username: value });
    }

    handleInput2({ target: { value } }) {
        console.log('触发的事件', value);
        this.setState({ password: value });
    }

    onFinish(values) {
        console.log('成功', values);
    }

    onFinishFailed(values) {
        console.log('失败', values);
    }

    register() {
        this.setState({ title: '注册' });
    }

    login() {
        this.setState({ title: '登录' });
    }

    handleSwitch(checked) {
        console.log(typeof checked)
    }

    render() {
        console.log('state', this.state);

        return (
            <section className="login_wrap">
                <Card
                    title={this.state.title}
                    bordered={false}
                    style={{ width: 500, height: 300 }}
                >
                    <Form
                        name="basic"
                        labelCol={{ span: 5 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish.bind(this)}
                        onFinishFailed={this.onFinishFailed.bind(this)}
                        autoComplete="off"
                    >
                        <Form.Item
                            onInput={this.handleInput1.bind(this)}
                            label="账号"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            onInput={this.handleInput2.bind(this)}
                            label="密码"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
                            <Button
                                type="primary"
                                onClick={this.handleButton.bind(this)}
                            >
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </section>
        );
    }
}

export default Login;
