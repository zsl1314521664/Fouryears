import React, { Component, Fragment } from 'react';
import { Table, Button, Modal, Form, Input, InputNumber, Popconfirm, message } from 'antd';
import './index.css'
const axios =require('axios');
class Search extends React.Component {
    constructor(props){
        super(props);
        console.log(props.match.params.id);
        this.state={
            list:[],
            urls:"http://www.fouryears.com/"
        }
    }
    getApiData=()=>{
        // if(props.match.params.id){
        //     axios.get(`http://www.fouryears.com/information/search?student_num=${props.match.params.id}`)
        // }
        var api=this.state.urls+`information/search?student_num=${this.props.match.params.id}`;
        axios.get(api).then(res=>{
            console.log(res.data)
            this.setState({
                list:res.data
            })
        })
    }
    componentDidMount(){
        this.getApiData();
    }
    render(){
        const data=this.state;
        const columns=[
            {
                title:'编号',
                dataIndex:'id',
                key:'id',
                render:(txt,record,index)=>index+1,
            },
            {
                title:'老师姓名',
                dataIndex:'tea_name',
                key:'tea_name',
            },
            {
                title:'自我介绍',
                dataIndex:'self_introduce',
                key:'self_introduce',
            }
        ];
        return (
            <div className="zhengti">
                <Table dataSource={data.list} columns={columns}>
                    
                </Table>
            </div>
        )
    }
}

export default Search
