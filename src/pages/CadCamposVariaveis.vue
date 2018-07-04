<template>
    <div class="row col s12">
        <div>

        </div>
        <hr>
        <div>
            <div class="input-field col s12 l6">
                <input id="id" placeholder="Id" type="text" class="validate" v-model="campo.id">
                <label for="id">Id</label>
            </div>
            <div class="input-field col s12 l6">
                <input id="nome" placeholder="Nome" type="text" class="validate" v-model="campo.nome">
                <label for="nome">Nome</label>
            </div>
            <div class="input-field col s10 l5">
                <input id="Classe" placeholder="Classe" type="text" class="validate" v-model="campo.classe">
                <label for="Classe">Classe</label>
            </div>
            <div class="input-field col s12 l6">
                <select v-model="campo.type">
                    <option value="" disabled selected>Selecione o Tipo</option>
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
                    <tr v-for="item of this.campos" :key="item.Id">
                        <td>
                            {{ item['id'] }}
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
                            {{ item['exibe'] }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CadCamposVariaveis',
    data(){
        return {
            id: '',
            nome: '',
            classe: '',
            exibe: false,
            campos: [],
            type: '',campo: {}
        }
    }, mounted: function () {
        console.log('huhasudhsa')
    },methods: {
        adicionarCampo: function (){
       const a =     this._data.campos.push(this._data.campo)
            console.log(a)
        }
    }
}
</script>

