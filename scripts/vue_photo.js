$(document).ready(function(){
  var key= "1a2489aa78ceb32dd2478ee997f53e22";

  $.ajax({
    url:'https://api.flickr.com/services/rest',
    jsoncallback:'jsonFlickrApi',
    datatype:'jsonp',
    type:'GET',
    data:'method=flickr.photos.search&api_key='+key+'&tags=Paris&format=json&safe_search=1&per_page=10&jsoncallback=?',

    /*success:function(data){
      console.log(data);
      $.each(data.photos.photo, function(i, item){
        $("table").append("<tr><img src=\"https://farm"+item.farm+".staticflickr.com/"+item.server+"/"+item.id+"_"+item.secret+"\"/></tr>");
      });
    },*/
  });
});

function jsonFlickrApi(data) {
  alert(JSON.stringify(data));

  for (i in data.photos.photo)
  {
    var item = data.photos.photo[i];
    $("table").html("<tr>coucou</tr>");
    alert(item.server);
    $("table").html("<tr><img src='https://farm"+item.farm+".staticflickr.com/"+item.server+"/"+item.id+"_"+item.secret+"'/></tr>");
  }
}
//https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=1a2489aa78ceb32dd2478ee997f53e22&tags=%22Paris%22
