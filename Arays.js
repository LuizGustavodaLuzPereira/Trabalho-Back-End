// ===============================
// CONTROLE DE PACOTES (ENTREGAS)
// ===============================

// PACOTES (Aray)
let pacotes = [
    { codigo: 101, destino: "São Paulo", pesoKg: 12.5 },
    { codigo: 102, destino: "Curitiba", pesoKg: 7.3 },
    { codigo: 103, destino: "Rio de Janeiro", pesoKg: 15.8 },
    { codigo: 104, destino: "Belo Horizonte", pesoKg: 5.1 },
    { codigo: 105, destino: "Porto Alegre", pesoKg: 9.4 }
];

// ===============================
// Listas Dos PACOTES (Console.log)
// ===============================
function listarPacotes(lista) {
    console.log("PACOTES NO GALPÃO:");
    
    lista.forEach(function(pacote) {
        console.log(
            "Código: " + pacote.codigo +
            " | Destino: " + pacote.destino +
            " | Peso: " + pacote.pesoKg + "kg"
        );
    });
}

// ===============================
// Ordem dos PACOTES (LISTA)
// Do mais LEVE ao PESADO (Kg)
// ===============================
function ordenarPorPeso(lista) {

    for (let i = 1; i < lista.length; i++) {

        let atual = lista[i];
        let j = i - 1;

        while (j >= 0 && lista[j].pesoKg > atual.pesoKg) {
            lista[j + 1] = lista[j];
            j--;
        }

        lista[j + 1] = atual;
    }

    return lista;
}

// =====================================
// Busca por CÓDIGO do PACOTE (BINARIO)
// =====================================
function buscaBinaria(lista, codigoBuscado) {

    let inicio = 0;
    let fim = lista.length - 1;

    while (inicio <= fim) {

        let meio = Math.floor((inicio + fim) / 2);

        if (lista[meio].codigo === codigoBuscado) {
            return lista[meio];
        }

        if (lista[meio].codigo < codigoBuscado) {
            inicio = meio + 1;
        } else {
            fim = meio - 1;
        }
    }

    return null;
}

// ===============================
// SISTEMA DE LISTAS
// ===============================

// PACOTES ORIGINAIS
listarPacotes(pacotes);

console.log("\nPACOTES ORDENADOS POR PESO:\n");

// PACOTES ordenados por peso(kg)
ordenarPorPeso(pacotes);

// Mostrar PACOTES ordenados
listarPacotes(pacotes);

// Busca BINARIA (PACOTES)
console.log("\nBUSCA DE PACOTE:\n");

let codigoProcurado = 103;

let resultado = buscaBinaria(pacotes, codigoProcurado);

if (resultado) {
    console.log(
        "Pacote encontrado -> Código: " +
        resultado.codigo +
        " | Destino: " +
        resultado.destino +
        " | Peso: " +
        resultado.pesoKg + "kg"
    );
} else {
    console.log("Pacote não encontrado.");
}