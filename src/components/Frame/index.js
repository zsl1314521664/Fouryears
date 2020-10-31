import React from 'react'
// import { Layout, Menu, Breadcrumb } from 'antd';
// import ReadAll from '../../pages/admin/readAll';
// import { BrowserRouter, Link, Route, withRouter } from 'react-router-dom'
// import {adminRoutes} from '../../routes/index'
// const { Header, Content, Footer } = Layout;


import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { adminRoutes } from '../../routes/index'
import { withRouter } from 'react-router-dom'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
function index(props) {
  const path=props.location.pathname;
  return (
    // <Layout className="layout">
    //     <Header>
    //         <div className="logo" />
    //         <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
    //             <Menu.Item key="1">
    //                 <Link to='/'>
    //                     <span>首页</span>
    //                 </Link>
    //             </Menu.Item>
    //             <Menu.Item key="2">
    //                 <Link to='/readAll'>
    //                     <span>查看信息</span>
    //                 </Link>
    //             </Menu.Item>
    //             <Menu.Item key="3">
    //                 <Link to='/edit'>
    //                     <span>报名</span>
    //                 </Link>
    //             </Menu.Item>
    //             <Menu.Item style={{float:"right",marginRight:100}} key="4">
    //                 <Link to='/login'>
    //                     <span>登录</span>
    //                 </Link>
    //             </Menu.Item>
    //         </Menu>
    //     </Header>
    //     {/* <Content style={{ padding: '0 50px' }}> */}
    //         {/* <Breadcrumb style={{ margin: '16px 0' }}>
    //             <Breadcrumb.Item>Home</Breadcrumb.Item>
    //             <Breadcrumb.Item>List</Breadcrumb.Item>
    //             <Breadcrumb.Item>App</Breadcrumb.Item>
    //         </Breadcrumb> */}
    //         {/* <div className="site-layout-content">{props.children}</div> */}
    //     {/* </Content> */}
    //     {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
    // </Layout>


    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          {/* <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item> */}
          {adminRoutes.map(route => {
            return (<Menu.Item key={route.path} >{route.title}</Menu.Item>)
          })}
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            selectedKeys={[path]}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            {/* <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu> */}

            {adminRoutes.map(route => {
              return (
                <Menu.Item key={route.path} icon={<UserOutlined />} onClick={p => props.history.push(p.key)}>
                  {route.title}
                </Menu.Item>)
            })}
          </Menu>
        </Sider>
        {/* <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout> */}

      </Layout>
    </Layout>


  )
}

export default withRouter(index)
