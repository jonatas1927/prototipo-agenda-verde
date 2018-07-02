<template>
<div class="input-field col s12 l12 m12">
  <div v-for="campo of campos" :key="campo.Id" :id="'campo'+campo.id" v-html="htmlForm(campo)">

  </div>
</div>
</template>
<script>
export default {
  name: "FormVariavel",
  data() {
    return {};
  },
  props: ["campos", "nomeForm"],
  methods: {
    htmlForm(campo) {
      switch (campo.type) {
        case "text":
          return `
          <div class="input-field col s12">
            <input id="${campo.id}" type="text" class="validate col
              ${campo.class}">
            <label for="${campo.id}">${campo.nome}</label>
          </div>
        `;
        case "checkbox":
          return `
            <label>
              <input id="${campo.id}" type="checkbox" class="col ${
            campo.class
          }" />
              <span>${campo.nome}</span>
            </label>
          `;
        case "date":
          return `
             <input type="text" class="datepicker col ${campo.class}">
          `;
          if (campo.config) {
            setTimeout(() => {
              document.addEventListener("DOMContentLoaded", function() {
                var elem = document.getElementById("campo" + campo.id);
                var instances = M.Datepicker.init(elem, campo.options);
              });
            }, 500);
          }
        default:
          return "<p>Tipo Desconhecido</p>";
      }
    },
    getValues: function() {
      let objResposta = {};
      this.campos.forEach(campo => {
        objResposta[campo.id] = document
          .getElementById("campo" + campo.id)
          .getValues();
      });
      console.log(objResposta);
      const objetosJaInclusos = [];
      if (window.localStorage.getItem(this.nomeForm))
        objetosJaInclusos = JSON.parse(
          window.localStorage.getItem(this.nomeForm)
        );

      if (this.$route.params.Id > 0) {
        objetosJaInclusos.map(objeto => {
          if (objeto.id === this.$route.params.Id) objeto = objResposta;
          objResposta.id = this.$route.params.Id;
        });
      } else objetosJaInclusos.push(objResposta);
      window.localStorage.setItem(this.nomeForm, objetosJaInclusos);
    }
  }
};
</script>
