/*La variable mybutton equivale al ID del botón*/
var mybutton = document.getElementById("up");

/*Cuando el scroll baje, se ejecuta la función que muestra el botón*/
window.onscroll = function() { scrollFunction() };

function scrollFunction() { /*Función mostrar botón tras bajar 300px*/
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

/*Cuando se de click al botón, la página sube al inicio con una animación de 0.3 seg*/
function scrollTopAnimated() {
    $("html, body").animate({ scrollTop: "0" }, 300);
}