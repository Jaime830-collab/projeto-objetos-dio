//classe herói
class Heroi {
    //construtor
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
    //método atacar
    atacar() {
      let ataque;
  
      switch (this.tipo) {
        case 'mago':
          ataque = 'magia';
          break;
        case 'guerreiro':
          ataque = 'espada';
          break;
        case 'monge':
          ataque = 'artes marciais';
          break;
        case 'ninja':
          ataque = 'shuriken';
          break;
        default:
          ataque = 'ataque indefinido';
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  //entrada de dados
  const heroiMago = new Heroi('Gandalf', 150, 'mago');
  const heroiGuerreiro = new Heroi('Aragorn', 35, 'guerreiro');
  
  heroiMago.atacar();        // Saída esperada: O mago atacou usando magia
  heroiGuerreiro.atacar();   // Saída esperada: O guerreiro atacou usando espada
  