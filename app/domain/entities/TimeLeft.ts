export default class TimeLeft {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;

  constructor({
    dias,
    horas,
    minutos,
    segundos,
  }: {
    dias: number;
    horas: number;
    minutos: number;
    segundos: number;
  }) {
    this.dias = dias;
    this.horas = horas;
    this.minutos = minutos;
    this.segundos = segundos;
  }
}
