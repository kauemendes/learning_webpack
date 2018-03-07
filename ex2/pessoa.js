/** Isso na verdade é uma função */
export default class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    toString() {
        return `Pessoa: ${this.nome}`
    }
}
