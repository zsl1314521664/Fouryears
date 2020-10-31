import React, { useState, useEffect } from 'react'
import { Form, Card, Input, Button, message } from 'antd';
import { useForm } from 'antd/lib/form/Form';
// import './List.css'
import { formatCountdown } from 'antd/lib/statistic/utils';
// import axios from 'axios';
const axios = require('axios');
function Enroll(props) {
    // console.log(props);
    // const [form]=useForm()
    // console.log(props.match.params.id);
    // console.log(useState)
    const [currentData, setCurrentData] = useState({});
    const [form] = useForm()
    // console.log(currentData);
    useEffect(() => {
        if (props.match.params.id) {
            // console.log(props.match.params.id)
            axios.get(`http://www.fouryears.com/user/read?id=${props.match.params.id}`).then(res => {
                // console.log(res.data);
                setCurrentData(res.data)
                // console.log(props.currentData)
                form.setFieldsValue({
                    student_num: res.data.student_num,
                    username: res.data.username,
                    email: res.data.email,
                    phone: res.data.phone,
                    teacher_name: res.data.teacher_name,
                    person_introduce: res.data.person_introduce
                })
            });
            // console.log(res.data)
            // console.log('我是你猜')
            // console.log(currentData)
            // form.setFieldsValue({
            //     student_num: currentData.values.student_num,
            //     username: currentData.values.username,
            //     email: currentData.values.email,
            //     phone: currentData.values.phone,
            //     teacher_name: currentData.values.teacher_name,
            //     person_introduce: currentData.values.person_introduce
            // })
        }

    }, []);
    // console.log(currentData)
    // const huoqu=(e)=>{
    //     form.setFieldsValue({
    //             student_num: currentData.values.student_num,
    //             username: currentData.values.username,
    //             email: currentData.values.email,
    //             phone: currentData.values.phone,
    //             teacher_name: currentData.values.teacher_name,
    //             person_introduce: currentData.values.person_introduce
    //         })
    // }
    // form.setFieldsValue({
    //     username:'测试'
    // })
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
            const edit_api = `http://www.fouryears.com/user/edit?id=${props.match.params.id}`;
            axios.get(edit_api, {
                params: {
                    student_num: values.student_num,
                    username: values.username,
                    email: values.email,
                    phone: values.phone,
                    teacher_name: values.teacher_name,
                    person_introduce: values.person_introduce
                }
            }).then(res => {
                message.success('修改成功!');
                props.history.push('/readAll');
            }).catch(err => {
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
        // form.setFieldsValue({
        //     username:'测试'
        // })
        // console.log('hhaaah')
        // console.log(form.getFieldValue('username'))
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
    const huoqu = (e) => {
        form.setFieldsValue({
            username: '测试'
        })
    }
    return (
        <div className='zhengti2'>
            <Card>
                <Form onFinish={onFnish} form={form} title="编辑">
                    <Form.Item name="student_num" label="学号" rules={[
                        {
                            required: true,
                            message: "请输入学号"
                        }
                    ]}>
                        <Input placeholder="输入学号" />
                    </Form.Item>
                    {/* <Form.Item name="username" label="姓名">
                        <Input placeholder="请输入姓名" />
                    </Form.Item>
                    <Form.Item name="email" label="邮箱">
                        <Input placeholder="请输入邮箱" />
                    </Form.Item>
                    <Form.Item name="phone" label="手机号">
                        <Input placeholder="请输入手机号" />
                    </Form.Item> */}
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
        </div>
    )
}

export default Enroll