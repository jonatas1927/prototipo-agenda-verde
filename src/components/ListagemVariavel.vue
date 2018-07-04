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
        <tr v-for="objeto in lista" :key="objeto.id">
          <td v-for="attr in atributosExibe" :key="attr" v-if="attr.exibe">
            {{ objeto[attr] }}
          </td>
        </tr>
      </tbody>
    </table>
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
  }
};
</script>
