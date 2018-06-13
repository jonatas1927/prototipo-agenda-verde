<template>
<div class="row">
    <form class="col s12 center white">
        <div class="row">
            <div class="input-field col s12 l4">
                <input id="descricao" type="text" class="validate">
                <label for="descricao">Descrição</label>
            </div>
            <div class="input-field col s12 l2">
                 <input type="text" class="datepicker" id="Data">
                <label for="Data">Data</label>
            </div>
            <div class="input-field col s12 l3">
                <input type="text" class="timepicker" id="Horario">
                <label for="Horario">Horario</label>
            </div>
            <div class=" input-field col s12 m12 l6">
                <input type="number" id="horasEstimadas" class="validate">
                <label for="horasEstimadas">Horas Estimadas</label>
            </div>
            <div class=" input-field col s12 m12 l6">
                <input type="text" id="local" class="validate">
                <label for="local">Local</label>
            </div>
        </div>
    </form>
</div>
</template>
<script>
export default {
  name: "Evento",
  data() {
    return {};
  },
  mounted: () => {
    console.log("ashduhausda");
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".datepicker");
      var instances = M.Datepicker.init(elems, {
        format: "dd/mm/yyyy",
        autoClose: true,
        i18n: {
          cancel: "Cancelar",
          clear: "Limpar",
          months: [
            "Janeiro",
            "Fevereiro",
            "Março",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro"
          ],
          monthsShort: [
            "Jan",
            "Fev",
            "Mar",
            "Abr",
            "Mai",
            "Jun",
            "Jul",
            "Ago",
            "Set",
            "Out",
            "Nov",
            "Dez"
          ],
          weekdays: [
            "Domingo",
            "Segunda-Feira",
            "Terça-Feira",
            "Quarta-Feira",
            "Quinta-Feira",
            "Sexta-Feira",
            "Sábado"
          ],
          weekdaysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
          weekdaysAbbrev: ["D", "S", "T", "Q", "Q", "S", "S"]
        }
      });
    });
  }
};
</script>
<style scoped>
</style>
