<template>
    <div>
    <table>
        <thead>
          <tr>
              <th>Nome</th>
              <th>CPF</th>
              <th>RG</th>
              <th>Endereço</th>
              <th>Observação</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in produtos" :key="item.Id">
            <td>{{ item.Nome }}</td>
            <td>{{ item.CPF }}</td>
            <td>{{ item.RG }}</td>
            <td>{{ item.Endereco }}</td>
            <td>{{ item.Observação }}</td>
          </tr>
        </tbody>
      </table>
        <div class=" input-field col s12 m12 l6 right">
            <a class="waves-effect waves-light btn" v-on:click="novoproduto()"><i class="material-icons right">save</i>Novo produto</a>
        </div>
    </div>
</template>
<script>
export default {
  name: "ProdutosLista",
  data() {
    return {
      produtos: [
        {
          Nome: "Jônatas Thielke",
          CPF: "000-000-000-00",
          RG: "1231254375212",
          Endereco: "Centro",
          Observacao: ""
        }
      ]
    };
  },
  mounted: function() {
    if (window.localStorage.getItem("produtos")) {
      console.log(JSON.parse(window.localStorage.getItem("produtos")));
      this.produtos = JSON.parse(window.localStorage.getItem("produtos"));
    }
  },
  methods: {
    novoproduto: function() {
      this.$router.push("/produtos/cadastro");
    }
  }
};
</script>
