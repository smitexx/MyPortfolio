function cambiarFotos(imagenes) {
    Array.prototype.forEach.call(imagenes, function (img) {
        var ruta = img.getAttribute("src").replace("White", "");
        img.setAttribute("src", ruta);
    });
}
function cambiarWeb() {
    //change black-sections by color-sections
    var seccionesNegras = document.getElementsByClassName("bg-dark");
    var longitud = seccionesNegras.length;
    for (var i = 0; i < longitud; i++) {
        seccionesNegras[i].classList.add("seccionNegra");
    };
    seccionesNegras = document.getElementsByClassName("seccionNegra");
    for (var i = 0; i < longitud; i++) {
        console.log(seccionesNegras.length);
        seccionesNegras[i].className = seccionesNegras[i].className.replace("bg-dark", "");
        seccionesNegras[i].style.backgroundImage = "linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)";
    };
    //change white-sections by color-sections
    var seccionesBlancas = document.getElementsByClassName("seccionBlanca");
    Array.prototype.forEach.call(seccionesBlancas, function (seccion) {
        seccion.style.backgroundImage = "linear-gradient(180deg, #2af598 0%, #009efd 100%)";

    });
    //Change black-white photos by color photos
    var imagenes = document.getElementsByClassName("imagenBlanco");
    cambiarFotos(imagenes);
}
$(document).ready(function () {
    setTimeout(function () {
        var popup = document.getElementById("popup");
        $("#popup").hide().fadeIn(1000);
        $("#btnEncendido").on("click", function (e) {
            e.preventDefault();
            cambiarWeb();
            $("#popup").fadeOut(1000);
            $("#popupGracias").fadeIn(1000);
            setTimeout(function(){
                $("#popupGracias").fadeOut(1500);
            }, 5000)
        });
    }, 6000);
});