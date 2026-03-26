class Pessoa {
  constructor(nome, email, telefone) {
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
  }
}

class Cliente extends Pessoa {
  constructor(nome, email, telefone, idCliente) {
    super(nome, email, telefone);
    this.idCliente = idCliente;
  }
}

class Funcionario extends Pessoa {
  constructor(nome, email, telefone, idFuncionario, especialidade) {
    super(nome, email, telefone);
    this.idFuncionario = idFuncionario;
    this.especialidade = especialidade;
  }
}

class Servico {
  constructor(idServico, nome, preco, duracao) {
    this.idServico = idServico;
    this.nome = nome;
    this.preco = preco;
    this.duracao = duracao;
  }
}

class Agendamento {
  constructor(id, data, hora, cliente, funcionario, servico) {
    this.id = id;
    this.data = data;
    this.hora = hora;
    this.status = "Agendado";
    this.cliente = cliente;
    this.funcionario = funcionario;
    this.servico = servico;
  }

  cancelar() {
    this.status = "Cancelado";
  }

  exibir() {
    console.log(`Agendamento:
Cliente: ${this.cliente.nome}
Funcionário: ${this.funcionario.nome}
Serviço: ${this.servico.nome}
Data: ${this.data}
Hora: ${this.hora}
Status: ${this.status}`);
  }
}


// 🧪 TESTE DO SISTEMA

const cliente = new Cliente("João", "joao@email.com", "9999-9999", 1);
const funcionario = new Funcionario("Carlos", "carlos@email.com", "8888-8888", 1, "Barbeiro");
const servico = new Servico(1, "Corte de cabelo", 50, 30);

const agendamento = new Agendamento(1, "27/03/2026", "14:00", cliente, funcionario, servico);

agendamento.exibir();

// Testando cancelamento
agendamento.cancelar();
agendamento.exibir();
