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
    component: () => import("@/views/login/index"),
    hidden: true,
  },

  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true,
  },

  {
    path: "/",
    component: Layout, //src/views/
    children: [
      {
        path: "",
        name: "",
        component: () => import("@/views/home/index"),
        meta: { title: "首页", icon: "el-icon-s-home" },
        //icon：图标
      },
    ],
  },
    {
    path: "/",
    component: Layout, //src/views/
    children: [
      {
        path: "home/index",
        name: "home",
        component: () => import("@/views/dashboard/index"),
        meta: { title: "图表数据", icon: "el-icon-s-data" },
        //icon：图标
      },
    ],
  },

  {
    path: "/",
    component: Layout, //src/views/
    children: [
      {
        path: "users_management/index",
        name: "Users_management",
        component: () => import("@/views/users_management/index"),
        meta: { title: "用户管理", icon: "el-icon-s-custom" },
        //icon：图标
      },
    ],
  },

  {
    path: "/",
    component: Layout, //src/views/
    children: [
      {
        path: "posts_management/index",
        name: "Posts_management",
        component: () => import("@/views/posts_management/index"),
        meta: { title: "帖子管理", icon: "el-icon-document" },
        //icon：图标
      },
    ],
  },

  {
    path: "/",
    component: Layout, //src/views/
    children: [
      {
        path: "label_management/index",
        name: "Label_management",
        component: () => import("@/views/label_management/index"),
        meta: { title: "标签管理", icon: "el-icon-collection-tag" },
        //icon：图标
      },
    ],
  },

  {
    path: "/",
    component: Layout, //src/views/
    children: [
      {
        path: "business/index",
        name: "business",
        component: () => import("@/views/business/index"),
        meta: { title: "推广链接管理", icon: "el-icon-share" },
        //icon：图标
      },
    ],
  },

  {
    path: "/",
    component: Layout, //src/views/
    children: [
      {
        path: "personal_center/index",
        name: "Personal_center",
        component: () => import("@/views/personal_center/index"),
        meta: { title: "个人中心", icon: "el-icon-user-solid" },
        //icon：图标
      },
    ],
  },

  // {
  //   path: '/home',
  //   component: Layout,
  //   redirect: '/home',
  //   name: 'Home',
  //   meta: { title: '首页', icon: 'el-icon-s-help' },
  //   children: [
  //     {
  //       path: '/home/chart_data',
  //       name: 'chart_data',
  //       component: () => import('@/views/home/chart_data/index'),
  //       meta: { title: '图表数据', icon: 'table' }
  //     }
  //   ]
  // },

  // {
  //   path: '/chart_data',
  //   component: Layout,
  //   redirect: '/chart_data',
  //   name: 'Chart_data',
  //   meta: { title: '图表数据', icon: 'el-icon-s-help' },
  //   children: [
  //     {
  //       path: '/publication_data',
  //       name: 'Publication_data',
  //       component: () => import('@/views/chart_data/publication_data/index'),
  //       meta: { title: '文章发表数据', icon: 'table' }
  //     },
  //     {
  //       path: '/browsing_data',
  //       name: 'browsing_data',
  //       component: () => import('@/views/chart_data/browsing_data/index'),
  //       meta: { title: '文章浏览数据', icon: 'tree' }
  //     }
  //   ]
  // },

  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: 'Example', icon: 'el-icon-s-help' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: 'Table', icon: 'table' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: 'Tree', icon: 'tree' }
  //     }
  //   ]
  // },

  // {
  //   path: '/form',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Form',
  //       component: () => import('@/views/form/index'),
  //       meta: { title: 'Form', icon: 'form' }
  //     }
  //   ]
  // },

  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: {
  //     title: 'Nested',
  //     icon: 'nested'
  //   },
  //   children: [
  //     {
  //       path: 'menu1',
  //       component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'Menu1',
  //       meta: { title: 'Menu1' },
  //       children: [
  //         {
  //           path: 'menu1-1',
  //           component: () => import('@/views/nested/menu1/menu1-1'),
  //           name: 'Menu1-1',
  //           meta: { title: 'Menu1-1' }
  //         },
  //         {
  //           path: 'menu1-2',
  //           component: () => import('@/views/nested/menu1/menu1-2'),
  //           name: 'Menu1-2',
  //           meta: { title: 'Menu1-2' },
  //           children: [
  //             {
  //               path: 'menu1-2-1',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //               name: 'Menu1-2-1',
  //               meta: { title: 'Menu1-2-1' }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //               name: 'Menu1-2-2',
  //               meta: { title: 'Menu1-2-2' }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: () => import('@/views/nested/menu1/menu1-3'),
  //           name: 'Menu1-3',
  //           meta: { title: 'Menu1-3' }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       component: () => import('@/views/nested/menu2/index'),
  //       name: 'Menu2',
  //       meta: { title: 'menu2' }
  //     }
  //   ]
  // },

  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },

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

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
