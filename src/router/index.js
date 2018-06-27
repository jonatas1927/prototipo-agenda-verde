import Vue from 'vue';
import Router from 'vue-router';
import Calendar from '@/components/Calendar';
import Evento from '@/pages/Evento';
import Login from '@/pages/Login';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/',
      name: 'Calendar',
      component: Calendar,
    }, {
      path: '/cad-evento/:day',
      name: 'Eventos',
      component: Evento,
    }],
  mode: "history"
});
