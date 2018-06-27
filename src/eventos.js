export class Eventos {
  constructor() {
    const data = this.formatDate(new Date());
const eventos = [
  {
    title  : 'Prova de Gerenciamento de Projetos',
    start  : data
  },
  {
    title  : 'event2',
    start  : '2018-06-05',
    end    : '2018-06-09'
  },
  {
    title  : 'event3',
    start  : '2010-01-09T12:30:00',
    allDay : false // will make the time show
  }
]
window.localStorage.setItem('eventos', JSON.stringify(eventos));
  }
  retornaEventos(){
      const eventos = window.localStorage.getItem('eventos');
      if(eventos)
      return JSON.parse(eventos)
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
