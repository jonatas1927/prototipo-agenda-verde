<template>
<div>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="attr in atributosExibe" :key="attr">
            {{ attr }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="objeto in lista" :key="objeto.Id">
          <td v-for="attr in atributosExibe" :key="attr">
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
      lista: [],
      atributosExibe: {}
    };
  },
  props: ["Tipo"],
  mounted: function() {}
};
</script>
