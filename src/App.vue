<template>
<div id="app">
    <ul id="dropdown1" class="dropdown-content col s12 l4 m5">
        <li>
            <router-link to="/eventos-dia">Eventos em Lista</router-link>
        </li>
    </ul>
    <nav>
        <div class="nav-wrapper teal">
            <router-link to="/" class="brand-logo col s6"><i class="material-icons">calendar_today</i> Agenda</router-link>
            <ul id="nav-mobile" class="right col s6">
                <li class="col l12">
                    <a class="dropdown-trigger" data-target="dropdown1"><i class="material-icons right">arrow_drop_down</i></a>
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
import {
    materialize
}
from "materialize-css";

export default {
    name: "App",
    data() {
        return {
            cadastros: [{
                nome: "Evento",
                path: "/cad-evento"
            }, {
                nome: "Periodo de Inatividade",
                path: "/cad-inatividade"
            }]
        };
    },
    mounted: () => {
        M.AutoInit();
    },
    updated: () => {
        M.AutoInit();
    }
};

</script>
