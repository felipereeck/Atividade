class Funcionario {
  constructor(nome, idade, cargo) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
  }

  seApresentar() {
    console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu cargo é ${this.cargo}.`);
  }

  trabalhar() {
    console.log(`${this.nome} está trabalhando.`);
  }
}

class Gerente extends Funcionario {
  constructor(nome, idade, cargo, departamento) {
    super(nome, idade, cargo);
    this.departamento = departamento;
  }

  gerenciar() {
    console.log(`${this.nome} está gerenciando o departamento de ${this.departamento}.`);
  }
}

class Desenvolvedor extends Funcionario {
  constructor(nome, idade, cargo, linguagem) {
    super(nome, idade, cargo);
    this.linguagem = linguagem;
  }

  programar() {
    console.log(`${this.nome} está programando em ${this.linguagem}.`);
  }
}

// Criando instâncias de um gerente e um desenvolvedor
let gerente = new Gerente('Alice', 40, 'Gerente', 'Vendas');
let desenvolvedor = new Desenvolvedor('Bob', 30, 'Desenvolvedor', 'JavaScript');

// Chamando os métodos
gerente.seApresentar();
gerente.trabalhar();
gerente.gerenciar();

desenvolvedor.seApresentar();
desenvolvedor.trabalhar();
desenvolvedor.programar();