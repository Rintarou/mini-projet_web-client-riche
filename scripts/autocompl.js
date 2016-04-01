$(document).ready(function(){


  $("#commune").autocomplete({

    source : function(request, response){

      $.ajax({
        url:'http://infoweb-ens/~jacquin-c/codePostal/commune.php',
        type:'GET',
        dataType:'json',
        data:'commune='+$("#commune").val()+"&maxRows=10",

        success:function(data){
          response($.map(data, function(valeur){
                return {
                  label:valeur.Ville,
                  valeur:valeur.Ville,
                }
          }));
        }
      })
    },

    minLength:2,
    select : function(event, ui){
      $("commune").text(ui.item.value);
    },


  });

   $( "#onglet1" ).tabs();


   $("#modale").dialog({
      autoOpen:false,
   });

   $("#boutonDeTest").click(function(event){
      event.preventDefault();
      $("#modale").dialog("open");
   });


});
