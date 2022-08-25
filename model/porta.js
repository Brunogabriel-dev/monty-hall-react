export default class Porta {
  #numero
  #temPresente
  #selecionada
  #aberta

  constructor(numero, temPresente = false, selecionada = false, aberta = false) {
    this.#numero = numero
    this.#temPresente = temPresente
    this.#selecionada = selecionada
    this.#aberta = aberta
  }
}