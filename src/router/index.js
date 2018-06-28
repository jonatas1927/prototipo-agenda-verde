import Vue from 'vue';
import Router from 'vue-router';
import Calendar from '@/components/Calendar';
import Evento from '@/pages/Evento';
import Login from '@/pages/Login';
import EventosHoje from '@/pages/EventosHoje';
import EventoAlteracao from '@/pages/EventoAlteracao'

Vue.use(Router);

export default new Router({
  routes: [{
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
    component: Evento
  },{
    path: '/eventos-dia',
    name: 'Eventos Hoje',
    component: EventosHoje
  },{
    path: '/evento/Alteracao/:idEvento',
    name: 'Eventos Alteracao',
    component: EventoAlteracao
  }],
  mode: "history"
});
