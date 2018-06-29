<template>
<div class="col s12 l12 m12">
  <form>
    <div class="col s12 l12 m12">
      <div class="input-field col s12 l3">
        <input type="text" id="Nome" v-model="Nome">
        <label for="Nome">Nome</label>
      </div>
      <div class="input-field col s12 l3">
        <input type="text" id="Descricao" v-model="Descricao">
        <label for="Nome">Descricao</label>
      </div>
      <div class="input-field col s12 l3">
        <input type="text" id="TempoEstimado" v-model="TempoEstimado">
        <label for="TempoEstimado">Tempo Estimado</label>
      </div>
      <div class="input-field col s12 l3">
        <input type="text" id="ValorEstimado" v-model="ValorEstimado">
        <label for="ValorEstimado">Valor Estimado</label>
      </div>
    </div>
    <div class=" input-field col s12 m12 l6">
      <a class="waves-effect waves-light btn" v-on:click="salvar()"><i class="material-icons right">save</i>Salvar</a>
    </div>
  </form>
</div>
</template>
<script>
export default {
  name: "Produtos",
  data() {
    return {
      Id: this.$route.params.idProduto,
      Nome: "",
      Descricao: "",
      TempoEstimado: "",
      ValorEstimado: ""
    };
  },
  mounted: function() {
    let produtos = JSON.parse(window.localStorage.getItem("produtos"));
    if (this.Id > 0) {
      produtos.map(produto => {
        if (produto.Id == this.Id) this._data = produto;
      });
    }
  },
  methods: {
    salvar: function() {
      let produtos = [];
      if (window.localStorage.getItem("produtos")) {
        produtos = JSON.parse(window.localStorage.getItem("produtos"));
      }
      produtos2 = [];
      if (this.Id > 0) {
        produtos.map(produto => {
          if (produto.Id != this.Id) produtos2.push(produto);
        });
      }
      produtos2.push(this._data);
      window.localStorage.setItem("prodtos", JSON.stringify(produtos2));
    }
  }
};
</script>
