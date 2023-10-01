class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "pedra";
        }
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}!`);
    }
}

let heroi1 = new Heroi("Harry Potter", 17, "mago");
let heroi2 = new Heroi("Naruto", 15, "ninja");

heroi1.atacar();
heroi2.atacar();