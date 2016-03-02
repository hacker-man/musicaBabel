  $(document).ready(function () {
      /*Cuando se pulse en el boton editar de los datos de una canción
	  se desplagara un formulario en linea justo debajo que nos permitira
	  editar los campos de la misma. A su vez este formulario cuenta con un
	  boton Cancelar -> Cierra el formulario y Guardar -> valida y envía el 
	  formulario.Toda esa funcionalidad esta implementada en este fichero.
	  */
	  
      $("#musicaList").on("click", "#buttonEditar", function () {
          var self = this;
          $(self).attr("disabled", true);
          console.log("Editar canción");
          var id = $(this).data("musicaid");
          var self = this; //Se refiere al button
          $(self).parent().append("<form novalidate> <input type= 'text' id= 'artista' class = 'artistaClase' placeholder= 'Artista' name='artista' required> <input type= 'text' id=titulo class = 'tituloClase' placeholder= 'Titulo' name='titulo' required> <input type='text' id='url' class = 'urlClase' placeholder='URL' name='titulo' required> <button type='submit'>Guardar</button><button type = 'button' id = 'cancelar'>cancelar</button></form>");

          $("#musicaList").on("click", "#cancelar", function () {
              $(self).attr("disabled",false);
              $("form").remove();
          });

          $("li form").on("submit", function () {
              var artista = $.trim($(".artistaClase").val());
              if (artista == "") {
                  alert("El artista no puede ser vacío");
                  return false;
              }
              //Validación del título
              var titulo = $.trim($(".tituloClase").val());
              if (titulo == "") {
                  alert("El título no puede ser vacío");
                  return false;
              }
              //Validación de la url
              var url = $.trim($(".urlClase").val());
              var pattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/ig;
              if (url == "" || false == pattern.test(url)) {
                  alert("La url del archivo no es valido");
                  return false;
              }
              $.ajax({
                  url: "/api/musica/" + id,
                  data: JSON.stringify({
                      artista: artista,
                      title: titulo,
                      url: url,
                  }),
                  contentType: 'application/json',
                  method: "put",
                  success: function () {
                      alert("Editado con exito");
                      $("form").remove();
                      cargarCancion();
                      return false;
                  },
                  error: function () {
                      alert("Se ha producido un error");
                      return false;
                  }

              });
              return false;
          });
      });
  });
