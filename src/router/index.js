import Vue from 'vue';
import Router from 'vue-router';
import Calendar from '@/components/Calendar';
import Evento from '@/pages/Evento';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Calendar',
    component: Calendar
  }, {
    path: '/cad-evento',
    name: 'Eventos',
    component: Evento
  }],
  mode: "history"
});
