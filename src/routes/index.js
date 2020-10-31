import Login from "../pages/Login"
import readAll from '../pages/admin/readAll'
import edit from '../pages/List'
import login from '../pages/login/login'
import pageNotFound from "../pages/pageNotFound";
export const mainRoutes = [{
    path: '/login',
    component: Login
}, {
    path: '/readAll',
    component: readAll
},{
    path:'/PageNotFound',
    component:pageNotFound
}];
export const adminRoutes=[{
    path:'/readAll',
    component:readAll,
    title:'用户信息',
    icon:"UserOutlined"
},
{
    path:'/edit',
    component:edit,
    title:'新增',
    icon:"EditOutlined"
},
// {
//     path:'/login',
//     component:login,
//     title:'登录',
//     icon:"EditOutlined"
// }
]

