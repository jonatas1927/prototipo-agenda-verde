<template>
<div class="row">
    <form class="col s12 center white">
        <div class="row">
            <div class="input-field col s12 l4">
                <input id="descricao" type="text" class="validate" v-model="title">
                <label for="descricao">Descrição</label>
            </div>
             <!-- <div class="input-field col s12 l2">
                 <input type="text" class="datepicker" id="Data" v-model="start">
                <label for="Data">Data</label>
            </div>  -->
            <div class="input-field col s12 l3">
                <input type="text" id="Horario" v-model="horario">
                <label for="Horario">Horario</label>
            </div>
            <div class=" input-field col s12 m12 l6">
                <input type="number" id="horasEstimadas" class="validate" v-model="horasEstimadas">
                <label for="horasEstimadas">Horas Estimadas</label>
            </div>
            <div class=" input-field col s12 m12 l6">
                <input type="text" id="local" class="validate" disabled v-model="local">
                <label for="local">Local</label>
            </div>
            <div class=" input-field col s12 m12 l6">
              <a class="waves-effect waves-light btn" v-on:click="salvar()"><i class="material-icons right">save</i>Salvar</a>
            </div>
        </div>
    </form>
</div>
</template>
<script>
import eventosClass from "../eventos";
import * as moment from "moment";
export default {
  name: "Evento",
  data() {
    return {
      id: '',
      title: "",
      start: this.$route.params.day,
      horario: null,
      horasEstimadas: "",
      local: "SETREM"
    };
  },
  methods: {
    salvar: function() {
      let data = this._data;
      new moment(data.start);
      console.log(this);
      data.start = data.start+'T'+data.horario
      console.log(data)
      eventosClass.remover(data);
      eventosClass.adicionar(data);
    }
  },
  mounted: function(){
    console.log(this)

    let evento = eventosClass.buscaPorId(this.$route.params.idEvento);
      this.title = evento.title;
      this.horario = evento.start;
      this.horasEstimadas = evento.horasEstimadas;
      this.local= evento.local;
      M.AutoInit();


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
