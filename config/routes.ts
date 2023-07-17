export default [
    {
        name: '登录',
        path: '/login',
        layout: false,
        hideInMenu: true,
        component: './Login'
    },
    {
        path: '/welcome',
        name: '欢迎',
        icon: 'smile',
        hideInMenu: true,
        component: './Welcome'
    },
    // 系统管理
    {
        name: "系统管理",
        path: '/system',
        icon: 'crown',
        routes: [
            {
                name: "用户管理",
                path: '/system/user',
                component: './System/User',
            },
            {
                name: "角色管理",
                path: '/system/role',
                component: './System/Role',
            },
            // {
            //     name: "设备管理",
            //     path: '/system/equipment',
            //     component: './System/Equipment',
            // },
            // {
            //     name: "策略管理",
            //     path: '/system/strategy',
            //     component: './System/Strategy',
            // },
            // { component: './404' },
        ],
    },
    {
        path: '/task',
        name: '训练任务',
        icon: 'SolutionOutlined',
        component: './Task'
    },
    // {
    //     name: "识别结果",
    //     path: '/result',
    //     icon: 'AppstoreAddOutlined',
    //     routes: [
    //         {
    //             name: "手势单通道",
    //             path: '/result/singleGesture',
    //             component: './Result/singleGesture',
    //         },
    //         {
    //             name: "手势多通道",
    //             path: '/result/multiGesture',
    //             component: './Result/MultiGesture',
    //         },
    //         {
    //             name: "动作捕捉",
    //             path: '/result/motion',
    //             component: './Result/motion',
    //         },
    //         {
    //             name: "多通道语义融合",
    //             path: '/result/fusion',
    //             component: './Result/Fusion',
    //         },
    //         { component: './404' },
    //     ],
    // },
    {
        path: '/statistic',
        name: '统计分析',
        icon: 'LineChartOutlined',
        component: './Statistic'
    },

    { path: '/', redirect: '/welcome' },
    { component: './404' },
];
