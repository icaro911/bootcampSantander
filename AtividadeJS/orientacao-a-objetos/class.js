class ContaBancaria {
  constructor (agencia, numero, tipo){
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this.saldo = 0;
  }

  sacar(valor){
    if(valor > this._saldo){
      console.log('Saldo Insuficiente. Seu saldo é de: ' + this._saldo)
    }else{
    this._saldo = this._saldo - valor;
    return this._saldo;
  }
}

  depositar(valor){
    this._saldo = this._saldo + valor;
    return this._saldo;
  }

    set saldo(valor){
      this._saldo = valor
    }
    get saldo(){
      return this._saldo;
    }


}

class ContaCorrente extends ContaBancaria{
  constructor (agencia,numero,cartaoCredito){
    super(agencia,numero);
    this.tipo = 'Corrente'
    this._cartaoCredito = cartaoCredito ;
  }

  set cartaoCredito(valor){
    this._cartaoCredito = valor;
  }
  get cartaoCredito(){
    return this._cartaoCredito;
  }
}

class ContaPoupanca extends ContaBancaria{
  constructor(agencia,numero){
    super(agencia,numero);
    this.tipo = 'Conta Polpança';
  }
}

class ContaUniversitaria extends ContaBancaria{
  constructor(agencia,numero){
    super(agencia,numero);
    this.tipo = 'Conta Universitária'
  }

  sacar(valor){
    if(valor > 500){
      return 'Operação negada.'
    }
    this._saldo = this._saldo - valor
    return this._saldo;
  }
}

const minhaConta = new ContaCorrente(1,211,true);
const minhaContaUni = new ContaUniversitaria(2,33)
