import Login from "../pages/Login"
import readAll from '../pages/admin/readAll'
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
    component:readAll
}]

