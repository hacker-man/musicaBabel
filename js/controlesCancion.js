 $(document).ready(function() {
   	 
     $("#play").on("click", function() {
         var estado = $(this).data("estado");
         console.log("Play/Pause canción", estado);
         if (estado == "play") {
             console.log("Play canción");
             $(this).data("estado", "pause");
             $(this).html("<i class='fa fa-pause-circle-o'></i>");
             $("#audio").trigger('play');
             //$(this).remove();
         } else {
             console.log("Pause canción");
             $(this).data("estado", "play");
             $(this).html("<i class='fa fa-play-circle'></i>");
             $("#audio").trigger('pause');
         }
         //Se refiere al button

         // $.ajax({
         //     url: "/api/musica/" + id,
         //     method: "get",
     });
     $("#adelante").on("click", function() {
        $("#audio").trigger('pause');
        var id = $("#audio").data("id");
        $(this).data("id", id+1);
        console.log("Adelante cancion", id);
        $("#audio source").attr("src", "canciones/"+ (id+1) + ".mp3");
        $("#audio").trigger('load');
        $("#audio").trigger('play');
     });
    $("#atras").on("click", function() {
        $("#audio").trigger('pause');
        var id = $("#audio").data("id");
        $(this).data("id", id-1);
        console.log("Atras cancion", id);
        $("#audio source").attr("src", "canciones/"+ (id-1) + ".mp3");
        $("#audio").trigger('load');
        $("#audio").trigger('play');
     });
 });
