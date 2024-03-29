import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/login"),
    hidden: true,
  },

  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true,
  },

  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/views/dashboard/index"),
        meta: { title: "首页", icon: "dashboard" },
      },
    ],
  },

  // {
  //   path: "/example",
  //   component: Layout,
  //   redirect: "/example/table",
  //   name: "Example",
  //   meta: { title: "Example", icon: "el-icon-s-help" },
  //   children: [
  //     {
  //       path: "table",
  //       name: "Table",
  //       component: () => import("@/views/table/index"),
  //       meta: { title: "Table", icon: "table" },
  //     },
  //     {
  //       path: "tree",
  //       name: "Tree",
  //       component: () => import("@/views/tree/index"),
  //       meta: { title: "Tree", icon: "tree" },
  //     },
  //   ],
  // },

  // {
  //   path: "/record",
  //   component: Layout,
  //   children: [
  //     {
  //       path: "index",
  //       name: "Record",
  //       component: () => import("@/views/record/index"),
  //       meta: { title: "检测数据", icon: "form" },
  //     },
  //   ],
  // },

  // {
  //   path: "/history",
  //   component: Layout,
  //   children: [
  //     {
  //       path: "index",
  //       name: "History",
  //       component: () => import("@/views/history/index"),
  //       meta: { title: "历史更新", icon: "form" },
  //     },
  //   ],
  // },
  // {
  //   path: "/identity",
  //   component: Layout,
  //   redirect: "identity/index",
  //   meta: { title: "身份管理", icon: "el-icon-s-help" },
  //   children: [
  //     {
  //       path: "index",
  //       name: "Identity",
  //       component: () => import("@/views/identity/index"),
  //       meta: { title: "设备列表", icon: "tree" },
  //     },
  //     {
  //       path: "detail/:id?",
  //       name: "detail",
  //       component: () => import("@/views/identity/detail"),
  //       meta: { title: "设备详情", icon: "tree" },
  //     },
  //     {
  //       path: "register",
  //       name: "register",
  //       component: () => import("@/views/identity/register"),
  //       meta: { title: "身份注册", icon: "form" },
  //     },
  //   ],
  // },
  // {
  //   path: "/register",
  //   component: Layout,
  //   children: [
  //     {
  //       path: "index",
  //       name: "Register",
  //       component: () => import("@/views/register/index"),
  //       meta: { title: "用户注册", icon: "form" },
  //     },
  //   ],
  // },

  // {
  //   path: "/test",
  //   component: () => import("@/views/Test.vue"),
  // },

  // {
  //   path: "/test",
  //   component: Layout,
  //   children: [
  //     {
  //       path: "index",
  //       name: "Test",
  //       component: () => import("@/views/Test.vue"),
  //       meta: { title: "测试页面", icon: "form" },
  //     },
  //   ],
  // },
  {
    path: "/mainTask",
    component: Layout,
    meta: { title: "制造任务管理", icon: "form" },
    children: [
      {
        path: "index",
        name: "mainTask",
        component: () => import("@/views/mainTask/index.vue"),
        meta: { title: "主任务页面", icon: "form" },
      },
      {
        path: "mainTask",
        name: "mainTask",
        component: () => import("@/views/Test.vue"),
        meta: { title: "任务创建", icon: "form" },
      },
    ],
  },
  {
    path: "/subTask",
    component: Layout,
    children: [
      {
        path: "subTask",
        name: "subTask",
        component: () => import("@/views/subTask/index.vue"),
        meta: { title: "子任务详情", icon: "form" },
      },
    ],
  },

  {
    path: "/permission",
    component: Layout,
    children: [
      {
        path: "permission",
        name: "permission",
        component: () => import("@/views/permission/index.vue"),
        meta: { title: "权限管理", icon: "form", roles: ['admin'] },
      },
    ],
  },



  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true },
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
