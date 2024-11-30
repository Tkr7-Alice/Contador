let contador = 0;

function diminuir() {
    contador--;
    atualizarResultado();
}

function resetar() {
    contador = 0;
    atualizarResultado();
}

function aumentar() {
    contador++;
    atualizarResultado();
}

function atualizarResultado() {
    const resultado = document.querySelector("#resultado p");
    resultado.textContent = contador;

    if (contador > 0) {
        resultado.style.color = "green";
    } else if (contador < 0) {
        resultado.style.color = "red";
    } else {
        resultado.style.color = "#555"; 
    }
}
