// Mostrar fecha actual

const fecha = new Date();

document.getElementById("fechaActual").innerHTML =
"Fecha actual: " + fecha.toLocaleDateString();


// Evento DOM para el botón

document.getElementById("btnMensaje")
.addEventListener("click", function(){

    alert(
        "Bienvenido a mi Hoja de Vida. Gracias por visitar esta página."
    );

});


// Cambiar color del título al hacer clic

document.getElementById("titulo")
.addEventListener("click", function(){

    if(this.style.color === "yellow"){
        this.style.color = "white";
    }else{
        this.style.color = "yellow";
    }

});