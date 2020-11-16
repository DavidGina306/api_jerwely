const Dashboard = () => import('./views/dashboard.vue');

export default [{
        path: '/dashboard',
        component: Dashboard
    }
    // {
    //     path: '/desmembramento',
    //     component: require('./views/desmembramento').default
    // },
    // {
    //     path: '/alteracao-pedido',
    //     component: require('./views/alteracao_pedido').default
    // },
    // {
    //     path: '/login',
    //     name: 'login',
    //     component: require('./views/alteracao_pedido').default,
    //     meta: {
    //         auth: false
    //     }
];

