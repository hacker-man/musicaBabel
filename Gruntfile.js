module.exports = function(grunt){
    //Configuración de Grunt
    var settings = {
        less:{
            style:{
                files:{//archivos a compilar
                "css/style.css":"less/style.less" //destino:origen
             }
            }
        },
          watch:{
              styles:{
                  files:["less/*.less"], //Observa cualquier cambio en archivo less
                  tasks:["less"], //Ejecuta la compilación CSS
                  options:{
                    spawn: false
                 }
              }
          }
       
    };
    //Cargamos la configuración de Grunt
    grunt.initConfig(settings);
    //Cargamos plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    //Definimos tareas disponibles para grunt-cli
    grunt.registerTask('default',['less','watch']);
    grunt.registerTask('poduction',['less']);
}