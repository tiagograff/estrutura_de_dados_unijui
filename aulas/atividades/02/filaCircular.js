class No {
  constructor(valor) {
    this.valor = valor;
    this.proximo = null;
  }
}

class FilaCircular {
  constructor() {
    this.contador = 0;
    this.tamanhoMaximo = 5;
    this.inicio = null;
    this.fim = null;
  }

  enfileirar(elemento) {
    if (this.contador === this.tamanhoMaximo) {
      console.log('fila cheia');
      return undefined;
    }

    const novoNo = new No(elemento);

    if (this.contador === 0) {
      this.inicio = novoNo;
      this.fim = novoNo;
      novoNo.proximo = this.inicio; 
    } else {
      this.fim.proximo = novoNo;
      this.fim = novoNo;
      novoNo.proximo = this.inicio; 
    }

    this.contador++;
    return elemento;
  }

  desenfileirar() {
    if (this.contador === 0) {
      console.log('fila vazia');
      return null;
    }

    const valorRemovido = this.inicio.valor;

    if (this.contador === 1) {
      this.inicio = null;
      this.fim = null;
    } else {
      this.inicio = this.inicio.proximo;
      this.fim.proximo = this.inicio; 
    }

    this.contador--;
    return valorRemovido;
  }

  seEstaVazio() {
    return this.contador === 0;
  }

  tamanho() {
    return this.contador;
  }
}

const fila = new FilaCircular();

console.log('enfileirar',fila.enfileirar(3)); 
console.log('desenfileirar',fila.desenfileirar()); 
console.log('enfileirar',fila.enfileirar(5)); 
console.log('enfileirar',fila.enfileirar(7)); 
console.log('enfileirar',fila.enfileirar(9));  
console.log('desenfileirar',fila.desenfileirar());
console.log('desenfileirar',fila.desenfileirar());
console.log('desenfileirar',fila.desenfileirar());
console.log('desenfileirar',fila.desenfileirar());