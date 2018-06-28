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
             <div class="row" style="margin: 5px;">
              <div class="col s12">
                <div class="row">
                  <div class="input-field col s12">
                    <!-- <i class="material-icons prefix"></i> -->
                    <input type="text" id="autocomplete-input" class="autocomplete" v-model="Cliente">
                    <label for="autocomplete-input">Cliente</label>
                  </div>
                </div>
              </div>
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
console.log(eventosClass.retornaEventos());
export default {
  name: "Evento",
  data() {
    return {
      title: "",
      start: this.$route.params.day,
      horario: null,
      horasEstimadas: "",
      local: "Hospital de Clinicas Gerais",
      Cliente: ''
    };
  },
  methods: {
    salvar: function() {
      let data = this._data;
      new moment(data.start);
      console.log(this);
      data.start = data.start + "T" + data.horario;
      console.log(data);
      eventosClass.adicionar(data);
    }
  },
  mounted: function() {
    console.log(this);
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
    let data = {};
    if (window.localStorage.getItem("clientes")) {
      let clientes = JSON.parse(window.localStorage.getItem("clientes"));
      clientes.map(cliente => {
        data[cliente.Nome] = cliente;
      });
    }
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".autocomplete");
      var instances = M.Autocomplete.init(elems, {
        data: data
      });
    });
  }
};
</script>
<style scoped>
</style>
