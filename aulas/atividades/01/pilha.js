class Pilha {
  constructor(tamanhoMaximo) {
    this.tamanhoMaximo = tamanhoMaximo;
    this.pilha = {};
    this.topo = -1;
  }

  inserir(elemento) {
    if (this.topo < this.tamanhoMaximo - 1) {
      this.topo++;
      this.pilha[this.topo] = elemento;
      return elemento;
    } else {
      console.log('pilha cheia');
      return null;
    }
  }

  retirar() {
    if (this.seEstaVazia()) {
      console.log('pilha vazia');
      return null;
    } else {
      const elemento = this.pilha[this.topo];
      delete this.pilha[this.topo];
      this.topo--;
      return elemento;
    }
  }

  seEstaVazia() {
    return this.topo === -1;
  }

  tamanho() {
    return this.tamanhoMaximo;
  }
}

class FilaAuxiliar {
  constructor(tamanhoMaximo) {
    this.pilha1 = new Pilha(tamanhoMaximo);
    this.pilha2 = new Pilha(tamanhoMaximo);
  }

  empilhar(elemento) {
    return this.pilha1.inserir(elemento);
  }

  desempilhar() {
    if (this.pilha2.seEstaVazia()) {
      if (this.pilha1.seEstaVazia()) {
        console.log('a fila está vazia');
        return undefined;
      }
      while (!this.pilha1.seEstaVazia()) {
        this.pilha2.inserir(this.pilha1.retirar());
      }
    }
    return this.pilha1.retirar();
  }

  seEstaVazia() {
    return this.pilha1.seEstaVazia() && this.pilha2.seEstaVazia();
  }
}

const fila = new FilaAuxiliar(10);

console.log('empilha',fila.empilhar(3));
console.log('desempilha',fila.desempilhar());
console.log('empilha',fila.empilhar(4));
console.log('empilha',fila.empilhar(5));
console.log('empilha',fila.empilhar(6));
console.log('desempilha',fila.desempilhar());
