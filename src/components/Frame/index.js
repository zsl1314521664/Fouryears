import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import ReadAll from '../../pages/admin/readAll';
import { BrowserRouter, Link, Route, withRouter } from 'react-router-dom'
import {adminRoutes} from '../../routes/index'
const { Header, Content, Footer } = Layout;

function index(props) {
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">
                        <Link to='/'>
                            <span>首页</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to='/readAll'>
                            <span>查看信息</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to='/edit'>
                            <span>报名</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Header>
            {/* <Content style={{ padding: '0 50px' }}> */}
                {/* <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb> */}
                {/* <div className="site-layout-content">{props.children}</div> */}
            {/* </Content> */}
            {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
        </Layout>
    )
}

export default index
