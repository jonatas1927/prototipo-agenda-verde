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
          <tr v-for="item in clientes">
            <td>{{ item.Nome }}</td>
            <td>{{ item.CPF }}</td>
            <td>{{ item.RG }}</td>
            <td>{{ item.Endereco }}</td>
            <td>{{ item.Observação }}</td>
          </tr>
        </tbody>
      </table>
        <div class=" input-field col s12 m12 l6 right">
            <a class="waves-effect waves-light btn" v-on:click="novoCliente()"><i class="material-icons right">save</i>Novo Cliente</a>
        </div>
    </div>
</template>
<script>
export default {
  name: "ClienteLista",
  data() {
    return {
      clientes: [
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
    if (window.localStorage.getItem("clientes")) {
      console.log(JSON.parse(window.localStorage.getItem("clientes")));
      this.clientes = JSON.parse(window.localStorage.getItem("clientes"));
    }
  },
  methods: {
    novoCliente: function() {
        this.$router.push('/cliente/cadastro')
    }
  }
};
</script>