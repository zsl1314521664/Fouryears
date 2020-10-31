import React,{Component} from 'react'
import {Button, Form, Input} from 'antd'
import './login.css'
// import Item from 'antd/lib/list/Item'
// import { Component } from 'react'
class Login extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return (
            <div className="login">
                <section>
                    <h1>用户登录</h1>
                    <Form>
                        <Form.Item name="user_name" label="用户名">
                            <Input placeholder="请输入用户名"/>
                        </Form.Item>
                        <Form.Item name="password" label="密&nbsp;&nbsp;&nbsp;&nbsp;码">
                            <Input placeholder="请输入密码"/>
                        </Form.Item>
                        <Button style={{marginLeft:50}} htmlType="submit" type="primary">登录</Button>
                        <Button style={{margin:15}} type="primary">注册</Button>
                    </Form>
                </section>
            </div>
        )
    }
}

export default Login;