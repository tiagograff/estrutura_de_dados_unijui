function insertion(vet){
    i = 1
    n = vet.length
    while (vet[i]<n){
        chute = 70
        j -= 1
        while(vet[j]>=0 && vet[j] > vet[i]){
            vet[j + 1] = vet[j]
            j--
        }
        vet[j+1] == chute
        i++
    }
}

vet = [20,70,30,90,40]
ordenado = insertion(vet)

console.log(ordenado)