import Vue from 'vue';
import Router from 'vue-router';
import Calendar from '@/components/Calendar';
import Evento from '@/pages/Evento';
import Login from '@/pages/Login';
import EventosHoje from '@/pages/EventosHoje';
import EventoAlteracao from '@/pages/EventoAlteracao'
import Cliente from '@/pages/Cliente'
import ClienteLista from '@/pages/ClienteLista'
import Produtos from '@/pages/Produtos'
import ProdutosLista from '@/pages/ProdutosLista'
import FormVariavel from '@/components/FormVariavel'
import ListagemVariavel from '@/components/ListagemVariavel'
import CadCamposVariaveis from '@/pages/CadCamposVariaveis'

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
  }, {
    path: '/eventos-dia',
    name: 'Eventos Hoje',
    component: EventosHoje
  }, {
    path: '/evento/Alteracao/:idEvento',
    name: 'Eventos Alteracao',
    component: EventoAlteracao
  }, {
    path: '/cliente/cadastro',
    name: 'Clientes',
    component: Cliente
  }, {
    path: '/cliente/lista',
    name: 'Clientes Lista',
    component: ClienteLista
  }, {
    path: '/produtos/lista',
    name: 'Produtos Lista',
    component: ProdutosLista
  }, {
    path: '/produtos/cadastro/:id',
    name: 'Produtos Cadastro',
    component: Produtos
  }, {
    path: '/form/:nome',
    name: 'Form Cadastro',
    component: FormVariavel
  }, {
    path: '/list/:nome',
    name: 'List',
    component: ListagemVariavel
  }, {
    path: '/cad-tela/:nome',
    name: 'Tela',
    component: CadCamposVariaveis
  }, {
    path: '/cad-tela/',
    name: 'Tela',
    component: CadCamposVariaveis
  }],
  mode: "history"
});
