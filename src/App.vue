<template>
<div id="app">
    <ul id="dropdown1" class="dropdown-content">
        <li>
            <router-link to="/cliente/lista">Clientes</router-link>
            <router-link to="/produtos/lista">Produtos</router-link>
            <router-link to="/eventos-dia">Eventos em Lista</router-link>
            <router-link to="/cad-tela/">Cadastro de Tela</router-link>
            <router-link v-for="pag in listaPaginas" :to="'/form/'+pag.nome" :key="pag.nome">{{pag.nome.toUpperCase()}}</router-link>
        </li>
    </ul>
    <nav>
        <div class="nav-wrapper teal">
            <router-link to="/" class="brand-logo col s6"><i class="material-icons">calendar_today</i>Agenda</router-link>
            <ul id="nav-mobile" class="right col s6 m12 l12">
                <li class="col l12" v-if="login">
                    <a class="dropdown-trigger" data-target="dropdown1">Opções<i class="material-icons right">arrow_drop_down</i></a>
                </li>
            </ul>
        </div>
    </nav>
    <div id="app">
        <router-view/>
    </div>
</div>
</template>

<script>
import $ from "jquery";
import { materialize } from "materialize-css";

export default {
  name: "App",
  data() {
    return {
      cadastros: [
        {
          nome: "Evento",
          path: "/cad-evento"
        },
        {
          nome: "Periodo de Inatividade",
          path: "/cad-inatividade"
        }
      ],
      login: window.localStorage.getItem("login"),
      listaPaginas: JSON.parse(
        window.localStorage.getItem("paginasCadastradas")
      )
    };
  },
  mounted: () => {
    M.AutoInit();
  },
  updated: function() {
    M.AutoInit();
    if (!window.localStorage.getItem("login")) this.$router.push("/login");
  }
};
</script>
