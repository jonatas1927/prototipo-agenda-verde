<template>
<div id="app">
    <ul id="dropdown1" class="dropdown-content">
      <li><a href="#!">Cadastrar Evento</a></li>
      <li><a href="#!">Cadastrar Periodos de Inatividade</a></li>
      <li class="divider"></li>
      <li><a href="#!">three</a></li>
    </ul>
  <nav>
    <div class="nav-wrapper teal">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li class="col l4">
          <a class="dropdown-trigger" data-target="dropdown1">
            Opções Principais Disponiveis no Sistema
            <i class="material-icons right">arrow_drop_down</i>
          </a>
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
        { nome: "Evento", path: "/cad-evento" },
        { nome: "Periodo de Inatividade", path: "/cad-inatividade" }
      ]
    };
  },
  mounted: () => {
    M.AutoInit();
  }
};
</script>

<style>
</style>
