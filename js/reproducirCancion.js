//Reproducir la canción que te pasan
function reproducir(id, url) {
    $("#audio").data("id", id);
    $("#audio source").attr("src", url);
    console.log("Play canción" + id);
    $("#play").data("estado", "pause");
    $("#play").html("PAUSE");
    $("#audio").trigger('load');
    $("#audio").trigger('play');
}
