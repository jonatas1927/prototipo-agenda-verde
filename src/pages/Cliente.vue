<template>
    <div id="cadCliente">
        <form class="col s12 m8 l8">
            <div>
                 <div class="row" style="margin: 5px;">
                    <div class="input-field col s12 m8 l8">
                        <input placeholder="Nome" id="Nome" type="text" class="validate" v-model="Nome">
                        <label for="Nome">Nome</label>
                    </div>
                    <div class="input-field col s6">
                        <input placeholder="CPF" id="CPF" type="text" class="validate" v-model="CPF">
                        <label for="CPF">CPF</label>
                    </div>
                    <div class="input-field col s6">
                        <input placeholder="RG" id="RG" type="text" class="validate" v-model="RG">
                        <label for="Nome">RG</label>
                    </div>
                    <div class="input-field col s12">
                        <input placeholder="Endereço" id="Endereço" type="text" class="validate" v-model="Endereco">
                        <label for="Nome">Endereço</label>
                    </div>
                    <div class="input-field col s12">
                        <textarea placeholder="Observação" id="Observacao" class="validate materialize-textarea" v-model="Observacao"></textarea>
                        <label for="Observacao">Observacao</label>
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
export default {
  name: "Cliente",
  data() {
    return {
      Nome: "",
      CPF: "",
      RG: "",
      Endereco: "",
      Observacao: ""
    };
  },
  methods: {
    salvar: function() {
      let clientes = [];
      if (window.localStorage.getItem("clientes")) {
        clientes = JSON.parse(window.localStorage.getItem("clientes"));
      }
      clientes.push(this._data);
      window.localStorage.setItem("clientes", JSON.stringify(clientes));
      this.$router.push("/cliente/lista");
    }
  }
};
</script>
<style>
</style>
