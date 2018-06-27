<template>
    <div id="fullcalendar" class="col l12 s12 m12"></div>
</template>
<script>
import {Eventos} from '../eventos'
import $ from "jquery";
import "fullcalendar";
import "materialize-css";
export default {
  data() {
    return {
      eventos: new Eventos().retornaEventos()
    };
  },
  mounted: ()=> {
    console.log(this)
    $("#fullcalendar").fullCalendar({
      events: this.a.data().eventos,
      defaultView: "month",
      locale: "pt-BR",
      navLinks: true,
      navLinkDayClick: function(date, jsEvent) {
        console.log("day", date.format()); // date is a moment
console.log()
        window.location.href = '/evento-cad'+date.format();

      },
    });
    var calendar = $("#calendar").fullCalendar("getCalendar");
    calendar.on("dayClick", function(date, jsEvent, view) {
      console.log("clicked on " + date.format());
    });
  }
};
</script>
<style lang="scss" scoped>
// #fullcalendar {
//   width: 100%;
//   height: 100%;
// }
</style>
