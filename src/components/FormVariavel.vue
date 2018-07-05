<template>
<div class="row">
  <div v-for="campo of pagina.campos" :key="campo.Id" :id="'campo'+campo.id" v-html="htmlForm(campo)">
  </div>
  <div class="col s6 m4 l2">
    <a class="waves-effect waves-light btn"  v-on:click="salvar()">Salvar</a>
  </div>
  <div class="col s6 m4 l2">
    <a class="waves-effect waves-light btn"  v-on:click="cancelar()">Cancelar</a>
  </div>
</div>
</template>
<script>
export default {
  name: "FormVariavel",
  data() {
    return {
      pagina: JSON.parse(window.localStorage.getItem(this.$route.params.nome)),
      dados: {}
    };
  },
  methods: {
    htmlForm(campo) {
      switch (campo.type) {
        case "text":
          return `
          <div class="input-field col ${campo.classe}">
            <input id="${campo.id}" type="text" >
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
          <div class="input-field col ${campo.classe} ">
              <input type="text" class="datepicker" id="${campo.Id}">
              <label for="${campo.id}">${campo.nome}</label>
          </div>
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
      this.pagina.campos.forEach(campo => {
        objResposta[campo.nome] = document.getElementById(
          "campo" + campo.id
        ).value;
      });
      return objResposta;
      // console.log(objResposta);
      // let objetosJaInclusos = [];
      // if (window.localStorage.getItem(this.nomeForm))
      //   objetosJaInclusos = JSON.parse(
      //     window.localStorage.getItem(this.nomeForm)
      //   );

      // if (this.$route.params.Id > 0) {
      //   objetosJaInclusos.map(objeto => {
      //     if (objeto.id === this.$route.params.Id) objeto = objResposta;
      //     objResposta.id = this.$route.params.Id;
      //   });
      // } else objetosJaInclusos.push(objResposta);
      // window.localStorage.setItem(this.nomeForm, objetosJaInclusos);
    },

    salvar: function() {
      let objResposta = {};
      this.pagina.campos.forEach(campo => {
        objResposta[campo.nome] = document.getElementById(campo.id).value;
      });
      console.log(objResposta);
      let valores = [];
      if (window.localStorage.getItem("data" + this.$route.params.nome))
        valores = JSON.parse(
          window.localStorage.getItem("data" + this.$route.params.nome)
        );
      valores.push(objResposta);
      window.localStorage.setItem(
        "data" + this.$route.params.nome,
        JSON.stringify(valores)
      );
      this.cancelar();
    },
    cancelar: function() {
      this.$router.back();
    }
  }
};
</script>
