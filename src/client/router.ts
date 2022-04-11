import { createRouter, createWebHashHistory } from 'vue-router';
import CurrentOrder from './pages/CurrentOrder.vue';
import OrderDetail from './pages/OrderDetail.vue';

const routes = [
  {
    path: '/current-order',
    name: 'CurrentOrder',
    component: CurrentOrder,
  },
  {
    path: '/order-detail/:orderId',
    name: 'OrderDetail',
    component: OrderDetail,
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
