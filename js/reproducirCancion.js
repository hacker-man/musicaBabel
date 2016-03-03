//Reproducir la canción que te pasan
function reproducir(id, url) {
    $("#audio").data("id", id);
    $("#audio source").attr("src", url);
    console.log("Play canción" + id);
    $("#play").data("estado", "pause");
    $("#play").html("<i class='fa fa-pause-circle-o'></i>");
    $("#audio").trigger('load');
    $("#audio").trigger('play');
}
