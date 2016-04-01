$(document).ready(function(){

  var key= "1a2489aa78ceb32dd2478ee997f53e22";

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

  $("#recherche").on("click", function(){
    $.ajax({
      url:'https://api.flickr.com/services/rest',
      jsoncallback:'jsonFlickrApi',
      datatype:'jsonp',
      type:'GET',
      data:'method=flickr.photos.search&api_key='+key+'&tags=Nantes&format=json&safe_search=1&per_page=10&callback=jsonpcallback',
    });
  });


});


function jsonFlickrApi(data) {

  for (i in data.photos.photo)
  {
    var item = data.photos.photo[i];
    $("#liste").append("<img src='https://farm"+item.farm+".staticflickr.com/"+item.server+"/"+item.id+"_"+item.secret+".jpg'/><br/><br/>");
  }
}