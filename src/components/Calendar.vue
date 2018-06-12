<template>
    <div id="fullcalendar" class="browser-default"></div>
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
      //   header: { center: "month,agendaWeek" }, // buttons for switching between views

      views: {
        month: {
          // name of view
          titleFormat: "DD/MM/YYYY"
          // other view-specific options here
        }
      },
      locale: "pt-BR",
      navLinks: true,
      navLinkDayClick: function(date, jsEvent) {
        console.log("day", date.format()); // date is a moment
        console.log("coords", jsEvent.pageX, jsEvent.pageY);
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
#fullcalendar {
  width: 100%;
  height: 100%;
}
</style>
