$(document).ready(function(){
    console.log("ajax setup se ejecuta");
    var htmlCode ="<div class='sk-circle'><div class='sk-circle1 sk-child'></div><div class='sk-circle2 sk-child'></div><div class='sk-circle3 sk-child'></div><div class='sk-circle4 sk-child'></div><div class='sk-circle5 sk-child'></div><div class='sk-circle6 sk-child'></div><div class='sk-circle7 sk-child'></div><div class='sk-circle8 sk-child'></div><div class='sk-circle9 sk-child'></div><div class='sk-circle10 sk-child'></div><div class='sk-circle11 sk-child'></div><div class='sk-circle12 sk-child'></div></div>";
    $.ajaxSetup({
        beforeSend: function () {
            // setting a timeout
            $("#bloqueante").addClass('activo');
            $("#bloqueante").append(htmlCode);
        },
        complete: function () {
            $("#bloqueante").removeClass('activo');
            $("#bloqueante").find("div").remove();
        }
    });
});