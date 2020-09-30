import React, { useState, useEffect } from 'react'
import { Form, Card, Input, Button, message } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { formatCountdown } from 'antd/lib/statistic/utils';
// import axios from 'axios';
const axios = require('axios');
function List(props) {
    // const [form]=useForm()
    // console.log(props.match.params.id);
    // console.log(useState)
    const [currentData, setCurrentData] = useState({});
    // console.log(currentData);
    useEffect(() => {
        if (props.match.params.id) {
            console.log(props.match.params.id)
            axios.get(`http://www.fouryears.com/user/read?id=${props.match.params.id}`).then(res => {
                // console.log(res.data);
                setCurrentData(res.data)
                // console.log(props.currentData)
            });
            // console.log(currentData)
        }
    }, []);
    console.log(currentData.username)
    const [form] = useForm()
    form.setFieldsValue({
        ...currentData
    })
    // form.setFieldsValue({...currentData});
    // const { getFieldDecorator } = form
    const handle = (e) => {
        // console.log(form)
        // console.log(form.getFieldsValue())
    }
    const tiaozhuan = (e) => {
        // e.preventDefault();
        // props.history.push('/readAll')
    }
    const onFnish = (values) => {
        // console.log(values);
        if (props.match.params.id) {
            const edit_api=`http://www.fouryears.com/user/edit?id=${props.match.params.id}`;
            axios.get(edit_api,{
                params:{
                    student_num: values.student_num,
                    username: values.username,
                    email: values.email,
                    phone: values.phone,
                    teacher_name: values.teacher_name,
                    person_introduce: values.person_introduce
                }
            }).then(res=>{
                message.success('修改成功!');
                props.history.push('/readAll');
            }).catch(err=>{
                message.error('修改失败');
            })
        } else {
            const api = 'http://www.fouryears.com/user/Add';
            console.log(api);
            axios.get(api, {
                params: {
                    student_num: values.student_num,
                    username: values.username,
                    email: values.email,
                    phone: values.phone,
                    teacher_name: values.teacher_name,
                    person_introduce: values.person_introduce
                }
            }).then(res => {
                message.success('添加成功！');
                // console.log(this)
                props.history.push('/readAll');
            })
                .catch(err => {
                    message.error('添加失败');
                    console.log(err);
                })
        }
    }
    const handleSubmit = e => {
        console.log(e)
        e.preventDefault()
        console.log(e)
    }
    const handleCancel = (e) => {
        // e.preventDefault();
        props.history.push('/readAll')
    }
    // componentDidMount() {
    //     this.handleCancel();
    // }
    return (
        <Card>
            <Form onFinish={onFnish} title="编辑">
                <Form.Item name="student_num" label="学号" rules={[
                    {
                        required: true,
                        message: "请输入学号"
                    }
                ]}>
                    <Input placeholder="输入学号" />
                </Form.Item>
                <Form.Item name="username" label="姓名" value={currentData.username}>
                    <Input placeholder="请输入姓名" />{currentData.username}
                </Form.Item>
                <Form.Item name="email" label="邮箱">
                    <Input placeholder="请输入邮箱" />
                </Form.Item>
                <Form.Item name="phone" label="手机号">
                    <Input placeholder="请输入手机号" />
                </Form.Item>
                <Form.Item name="teacher_name" label="老师姓名">
                    <Input placeholder="请输入老师姓名" />
                </Form.Item>
                <Form.Item name="person_introduce" label="个人介绍">
                    <Input placeholder="请输入个人介绍" />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" onClick={tiaozhuan} type="primary">保存</Button>
                    <Button style={{ margin: 15 }} type="primary" onClick={handleCancel}>取消</Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default List