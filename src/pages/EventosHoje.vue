<template lang="html">

<div class="col l12 s12 m12" id="calendarioLista">

</div>

</template>

<script>

import eventosClass from "../eventos";
import $ from "jquery";
import "fullcalendar";
export default {
    name: 'EventosHoje',
    data () {
        return {
          eventos: eventosClass.retornaEventos()
        }
    },
    mounted: function() {
        $('#calendarioLista').fullCalendar({
            defaultView: 'list',
            events: this.eventos,
            locale: "pt-BR",
            navLinks: true,
        });
    }
}

</script>
