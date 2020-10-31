import React, { Component, Fragment } from 'react';
import zhCN from 'antd/es/locale/zh_CN';
import { Table, Button, Modal, Form, Input, InputNumber, Popconfirm, message, ConfigProvider } from 'antd';
import './index.css';
// import {connect} from 'react-redux'
import FormItem from 'antd/lib/form/FormItem';
import { useForm } from 'antd/lib/form/Form';
// import Frame from './components/Frame/index'
const axios = require('axios');
// const [form]=Form.useForm();
class Test extends React.Component {
    // state = {
    //     local: zhCN
    // }
    // const [form]=Form.useForm();
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            // urls:"http://a.itying.com/"
            urls: "http://www.fouryears.com/",
            total: 1,
            visible: false,
            isdelete: false,
            locale: zhCN,
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
                list: res.data.data,
                total: res.data.total
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
    isdel = () => {
        console.log('kkjojoil')
        this.setState({
            isdelete: !(this.state.isdelete)
        })
        console.log(this.state.isdelete)
    }
    buttonClick = () => {
        this.setState({
            visible: true
        })
    }
    buttonClick2 = () => {
        this.props.history.push("edit")
    }
    buttonClick3 = () => {
        this.props.history.push("enroll")
    }
    getusers = (page, pageSize) => {
        // console.log(page,pageSize);
        const get_users = this.state.urls + `user/readAll`;
        axios.get(get_users, {
            params: {
                page: page,
                limit: pageSize
            }
        }).then(res => {
            // console.log(res.data.data);
            this.setState({
                list: res.data.data,
                total: res.data.total
            })
        })
    }
    componentDidMount() {
        // this.getApiData();
        this.getusers();
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
                render: (txt, record, index) => index + 1,
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
                // render:(txt1,record1,index1)=>{
                //     return(
                //     <a>{record1.username}</a>
                //     )
                // }
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
            // {
            //     title: '老师姓名',
            //     dataIndex: 'teacher_name',
            //     key: 'teacher_name',
            // },
            {
                title: '个性签名',
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
                            {/* <Button onClick={this.isdel}>www</Button> */}
                            <Button type="primary" size="small" onClick={() => {
                                this.props.history.push(`/search/${record.student_num}`)
                            }}>
                                详情
                                </Button>
                            <Button style={{ margin: "0 1rem" }} type="primary" size="small" onClick={() => {
                                this.props.history.push(`/edit/${record.id}`)
                            }}>
                                修改
                                </Button>
                            <Popconfirm title="是否删除?" cancelText="取消" okText="确认" onCancel={() => { console.log("取消删除") }} onConfirm={() => {
                                axios.get(`http://www.fouryears.com/user/del?id=${record.id}`).then(res => {
                                    message.success("删除成功")
                                    // this.forceUpdate();
                                    // console.log(res)
                                    // console.log(this)
                                    // this.isdel()
                                    // this.forceUpdate()
                                    // console.log(this)
                                    // this.props.history.push('/readAll');
                                })
                                axios.get('/readAll').then((res) => {
                                    // const result = res.data;
                                    // this.setState({ list: result })
                                }).catch(err => {
                                    console.log(err);
                                })
                                // console.log(this.state.isdelete)
                                // // this.forceUpdate()
                                // this.isdel()
                                // // console.log(this.state)
                            }}>
                                <Button style={{ margin: "0 1rem" }} type="danger" size="small ">删除</Button>
                            </Popconfirm>
                        </div>
                    )
                }
            }


        ];
        // 分页
        const pagination = this.state;
        const { local } = this.state;
        // const { getFieldDecorator } = this.props.form;
        return (
            // this.state.list.map((item,index)=>{
            //     return (
            //     // <h5>{item.title}</h5>
            //     <h5>{item.title}</h5>
            //     // <Table dataSource={item}></Table>
            //     )
            // })
            // <Fragment>
            <div className='zhengti'>

                <Button type="primary" onClick={this.buttonClick}>增加</Button>
                <Button type="primary" onClick={this.buttonClick2}>新增</Button>
                <Button type="primary" onClick={this.buttonClick3}>报名</Button>
                <ConfigProvider locale={data.locale}>
                    <Table dataSource={data.list} columns={columns}
                        pagination={{
                            defaultCurrent: 1,
                            defaultPageSize: 3,
                            total: data.total,
                            onChange: this.getusers,
                            showSizeChanger: true,
                            showTotal: () => <span>共有:{data.total}条数据</span>,
                            pageSizeOptions: [3, 5, 10, 15]
                        }}></Table>
                </ConfigProvider>
                {/* {current:1,pageSize:2,total:data.total,onChange=this.onChange} */}
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
            </div>
            // </Fragment>

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