import React, { Component, Fragment } from 'react';
import { Table, Button, Modal, Form, Input, InputNumber, Popconfirm } from 'antd';
import './index.css';
// import {connect} from 'react-redux'
import FormItem from 'antd/lib/form/FormItem';
import { useForm } from 'antd/lib/form/Form';
// import Frame from './components/Frame/index'
const axios = require('axios');
// const [form]=Form.useForm();
class Test extends React.Component {
    // const [form]=Form.useForm();
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            // urls:"http://a.itying.com/"
            urls: "http://www.fouryears.com/",
            visible: false,
            confirmLoading: false
        }
    }
    // formRef = React.createRef();
    getApiData = () => {
        // var api=this.state.urls+"api/productlist";
        var api = this.state.urls + "user/readAll";
        axios.get(api).then(res => {
            // console.log(res.data);
            this.setState({
                list: res.data
            })
            const data = this.state;
            console.log(data.visible)
        })
            .catch(err => {
                console.log(err);
            })
    }
    handleSubmit = (e) => {
        // this.setState({
        //     confirmLoading: false,
        //     visible: false
        // });
        let demo = this.refs.getFormValue((err, values) => {
            console.log(values);
        })
        console.log("表单提交");
        // let demo=this.refs.getFormvalue;
        // console.log(this.props.Input.values)
        // console.log(values);
        this.setState({
            visible: false
        })
        // demo.validateFields((err,values)={
        //     if(!err){
        //         console.log(values);
        //     }
        // });
    }
    handleCancle = () => {
        console.log('Click cancle button');
        this.setState({
            visible: false
        });
        const data = this.state;
        console.log(data.visible);
    }
    onFinish = (values) => {
        console.log(values);
    }
    buttonClick = () => {
        this.setState({
            visible: true
        })
    }
    buttonClick2 = () => {
        this.props.history.push("edit")
    }
    componentDidMount() {
        this.getApiData();
    }
    render() {
        // const {data,pageObj}=this.state;
        // 获取要展示的数据
        const data = this.state;
        // 要展示的标题

        const columns = [
            {
                title: '编号',
                dataIndex: 'id',
                key: 'id',
                render:(txt,record,index)=>index+1,
            },
            {
                title: '学号',
                dataIndex: 'student_num',
                key: 'student_num',
            },
            {
                title: '学生姓名',
                dataIndex: 'username',
                key: 'username',
            },
            {
                title: '邮箱',
                dataIndex: 'email',
                key: 'email',
            },
            {
                title: '电话',
                dataIndex: 'phone',
                key: 'phone',
            },
            {
                title: '老师姓名',
                dataIndex: 'teacher_name',
                key: 'teacher_name',
            },
            {
                title: '个人介绍',
                dataIndex: 'person_introduce',
                key: 'person_introduce',
            },
            {
                title: '提交时间',
                dataIndex: 'created_at',
                key: 'created_at',
            }, {
                title: "操作",
                render: (txt, record, index) => {
                    return (
                        <div>
                            <Button type="primary" size="small" onClick={() => {
                                this.props.history.push(`/edit/${record.id}`)
                            }}>
                                修改
                                </Button>
                            <Popconfirm title="是否删除?" onCancel={() => { console.log("取消删除") }} onConfirm={() => {
                                // this.getApiData();
                                this.forceUpdate();
                                axios.get(`http://www.fouryears.com/user/del?id=${record.id}`).then(res=>{
                                    this.forceUpdate();
                                    // console.log(res)
                                })
                            }}>
                                <Button style={{ margin: "0 1rem" }} type="danger" size="small ">删除</Button>
                            </Popconfirm>
                        </div>
                    )
                }
            }


        ];
        // const { getFieldDecorator } = this.props.form;
        return (
            // this.state.list.map((item,index)=>{
            //     return (
            //     // <h5>{item.title}</h5>
            //     <h5>{item.title}</h5>
            //     // <Table dataSource={item}></Table>
            //     )
            // })
            <Fragment>
                <Button type="primary" onClick={this.buttonClick}>增加</Button>
                <Button type="primary" onClick={this.buttonClick2}>新增</Button>
                <Table dataSource={data.list} columns={columns}></Table>
                {/* <Button>修改</Button> */}
                <Modal visible={data.visible} onOk={this.handleSubmit} onCancel={this.handleCancle} cancelText="取消" okText="确认">
                    增加
                    <Form layout="horizontal" onFinish={this.onFinish}>
                        <FormItem name="username" label="学号：" rules={[{ required: true, message: '请输入你的学号' }]}>
                            <Input></Input>
                        </FormItem>
                        <FormItem>
                            <Input></Input  >
                        </FormItem>
                        <FormItem>
                            <Input></Input>
                        </FormItem>
                    </Form>
                </Modal>
            </Fragment>

        )
        // this.state.list.map((item,index)=>{
        //     return (
        //     <h5>{item.title}</h5>
        //     )
        // })
        // <Table dataSource={list}></Table>
    }

}
export default Test;
// export default connect((state)=>state.list)(Test)