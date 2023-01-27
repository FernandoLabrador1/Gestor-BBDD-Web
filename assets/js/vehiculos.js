    /*Array con las imagenes y enlaces que se iran mostrando en la web*/
    var imagenes=new Array(
        ['../imagenes/berlinas.jpg',],
        ['../imagenes/coupes.jpg',],
        ['../imagenes/electricos.jpeg',],
        ['../imagenes/suv.jpg',]
    );
    var contador=0;
 
     /*Funcion para cambiar la imagen y link*/
    function rotarImagenes()
    {
        /*cambiamos la imagen y la url*/
        contador++
        document.getElementById("imagen").src=imagenes[contador%imagenes.length][0];
    }
    
    /*Función que se ejecuta una vez cargada la página*/
    onload=function()
    {
        /*Cargamos una imagen aleatoria*/
        rotarImagenes();
 
        /*Indicamos que cada 5 segundos cambie la imagen*/
        setInterval(rotarImagenes,3000);
    }
