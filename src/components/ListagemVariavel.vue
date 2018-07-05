<template>
<div>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="campo of atributosExibe.campos" :key="campo.id" v-if="campo.exibe">
            {{ campo.nome }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="objeto in lista" :key="objeto">
          <td v-for="attr in atributosExibe.campos" :key="attr.id">
            {{ objeto[attr.nome] }}
          </td>
        </tr>
      </tbody>
    </table>
    <a class="waves-effect waves-light btn"  v-on:click="Cadastrar()">Cadastrar</a>
  </div>
</div>
</template>
<script>
export default {
  name: "ListagemVariavel",
  data() {
    return {
      lista: JSON.parse(
        window.localStorage.getItem("data" + this.$route.params.nome)
      ),
      atributosExibe: JSON.parse(
        window.localStorage.getItem(this.$route.params.nome)
      )
    };
  },
  mounted: function() {
    console.log("hasuhsauh");
  },
  methods: {
    Cadastrar: function() {
      console.log(this);
      this.$router.push("/form/" + this.$route.params.nome);
    }
  }
};
</script>
