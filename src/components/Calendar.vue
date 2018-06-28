<template>
    <div id="fullcalendar" class="col l12 s12 m12"></div>
</template>
<script>
import eventosClass from "../eventos";
import $ from "jquery";
import "fullcalendar";
import "materialize-css";
export default {
  data() {
    return {
      eventos: eventosClass.retornaEventos()
    };
  },
  mounted: function() {
    console.log(this);
    var thisComponent = this;
    $("#fullcalendar").fullCalendar({
      events: this.eventos,
      defaultView: "month",
      locale: "pt-BR",
      navLinks: true,
      navLinkDayClick: function(date, jsEvent) {
        thisComponent.$router.push("/cad-evento/" + date.format().toString());
      },
      eventClick: function(calEvent, jsEvent, view) {
        console.log(calEvent);
        let evento;
        let eventos = eventosClass.retornaEventos();
          eventos.map(esseEvento => {
            if(esseEvento.Id === calEvent.Id)
            evento = esseEvento
          })
          console.log(evento)
          thisComponent.$router.push('/evento/Alteracao/'+evento.id)
      }
    });
    var calendar = $("#calendar").fullCalendar("getCalendar");
    // calendar.on("dayClick", function(date, jsEvent, view) {});
  }
};
</script>
<style lang="scss" scoped>
// #fullcalendar {
//   width: 100%;
//   height: 100%;
// }
</style>
