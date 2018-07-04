<template>
    <div class="row col s12">
        <div style="margin: 5px;">
          <div class="input-field col s12 l6">
            <input id="NomeTela" placeholder="Nome da Tela" type="text" class="validate" v-model="nome">
            <label for="NomeTela">Nome da Tela</label>
          </div>
        </div>
        <div class="row col s12">
          <div class="input-field col s12 l6">
            <input id="id" placeholder="Id" type="text" class="validate" v-model="campo.id">
            <label for="id">Id</label>
          </div>
          <div class="input-field col s12 m12 l6">
            <input id="nome" placeholder="Nome do Campo" type="text" class="validate" v-model="campo.nome">
            <label for="nome">Nome do Campo</label>
          </div>
          <div class="input-field col s10 m12 l5">
            <input id="Classe" placeholder="Classe" type="text" class="validate" v-model="campo.classe">
            <label for="Classe">Classe</label>
          </div>
          <div class="input-field col s12 m12 l6">
            <select v-model="campo.type">
              <option value="" disabled >Selecione o Tipo</option>
              <option value="text">Texto</option>
              <option value="checkbox">Checkbox</option>
              <option value="date">Data</option>
            </select>
            <label>Tipo</label>
          </div>
          <div class="input-field col s2 l1">
            <label>
              <input type="checkbox" v-model="campo.exibe" />
                <span>Exibir</span>
            </label>
          </div>
          <a class="waves-effect waves-light btn"  v-on:click="adicionarCampo()">Adicionar Campo</a>
        </div>
        <div id="table">
            <table>
                <thead>
                    <tr>
                        <th>
                            Id
                        </th>
                        <th>
                            Tipo
                        </th>
                        <th>
                            Nome
                        </th>
                        <th>
                            Classe
                        </th>
                        <th>
                            Exibe
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item of campos" :key="item.Id">
                        <td>
                            {{ item.id }}
                        </td>
                        <td>
                            {{ item['type'] }}
                        </td>
                        <td>
                            {{ item['nome'] }}
                        </td>
                        <td>
                            {{ item['classe'] }}
                        </td>
                        <td>
                            <i v-if="item['exibe']" class="material-icons">thumb_up</i>
                            <i v-else class="material-icons">thumb_down</i>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
  name: "CadCamposVariaveis",
  data() {
    return {
      nome: this.$route.params.nome,
      campo: {},
      campos:
        window.localStorage.getItem(this.$route.params.nome) !== null
          ? JSON.parse(window.localStorage.getItem(this.$route.params.nome))
              .campos
          : []
    };
  },
  mounted: function() {},
  methods: {
    adicionarCampo: function() {
      const a = this.campo;
      const campo = {
        id: a.id,
        nome: a.nome,
        classe: a.classe,
        exibe: a.exibe,
        type: a.type
      };
      console.log(a.id && a.nome && a.type);
      if (a.id && a.nome && a.type) {
        this.campos.push(campo);
        let b = JSON.parse(window.localStorage.getItem(this.nome)) || [];
        b.campos.push(campo);
        window.localStorage.setItem(this.nome, JSON.stringify(b));
        this.campo = {};
        let listaPaginas = [];
        if (window.localStorage.getItem("paginasCadastradas"))
          listaPaginas = JSON.parse(
            window.localStorage.getItem("paginasCadastradas")
          );
        listaPaginas.push({ nome: this.nome });
        window.localStorage.setItem(
          "paginasCadastradas",
          JSON.stringify(listaPaginas)
        );
      }
    }
  }
};
</script>
