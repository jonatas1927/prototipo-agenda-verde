export class Eventos {
  constructor() {
    const data = this.formatDate(new Date());
    let eventos = [{
        title: 'Prova de Gerenciamento de Projetos',
        start: data+'T22:30:00',
        id: 3,
        local: 'SETREM Sala 505'
      },
    ]
    if(window.localStorage.getItem('eventos')){
      let evt = window.localStorage.getItem('eventos');
      eventos = JSON.parse(evt);
    }
    window.localStorage.setItem('eventos', JSON.stringify(eventos));
  }
  retornaEventos() {
    const eventos = window.localStorage.getItem('eventos');
    if (eventos)
      return JSON.parse(eventos)
  }

  adicionar(objeto) {
    let eventos = this.retornaEventos();
    objeto.id = eventos[eventos.length - 1].id + 1
    eventos.push(objeto)
    window.localStorage.setItem('eventos', JSON.stringify(eventos));
  }

  remover(objeto){
    let eventosMantem = [];
    let eventos = this.retornaEventos();
      eventos.map(esseEvento => {
        if(esseEvento.id != objeto.id) eventosMantem.push(esseEvento);
      })
      window.localStorage.setItem('eventos', JSON.stringify(eventosMantem));
  }

  buscaPorId(id){
    let evento;
    let eventos = this.retornaEventos();
      eventos.map(esseEvento => {
        if(esseEvento.id == id) evento = esseEvento;
      })
      return evento
  }

  formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }
}

var eventosClass = new Eventos();
export default eventosClass;
