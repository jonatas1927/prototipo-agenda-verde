<template>
    <div id="fullcalendar" class="col l12 s12 m12"></div>
</template>
<script>
import $ from "jquery";
import "fullcalendar";
import "materialize-css";
export default {
  data() {
    return {};
  },
  mounted: () => {
    $("#fullcalendar").fullCalendar({
      defaultView: "month",
      locale: "pt-BR",
      navLinks: true,
      navLinkDayClick: function(date, jsEvent) {
        console.log("day", date.format()); // date is a moment
      }
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
