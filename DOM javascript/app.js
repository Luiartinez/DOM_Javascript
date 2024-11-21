const btnAumentar = document.querySelector(".btn-info");

const btnDisminuir = document.querySelector(".btn-info");

const span = document.getElementById("span");

//crear contador
let contador = 0;

btnAumentar.addEventListener("click", () => {
    console.log("mediste click asi que aumentare");
    //span.textContent = 1;
    contador++;
    span.textContent = contador;

    btnDisminuir.addEventListener("click", () => {
        //console.log("mediste click asi que disminuire");
        //span.textContent = 1;
        contador--;
        span.textContent = contador;
    
        
    });
});