$(document).ready(function(){
  var key= "1a2489aa78ceb32dd2478ee997f53e22";

  $.ajax({
    url:'https://api.flickr.com/services/rest',
    jsoncallback:'jsonFlickrApi',
    datatype:'jsonp',
    type:'GET',
    data:'method=flickr.photos.search&api_key='+key+'&tags=Nantes&format=json&safe_search=1&per_page=10&jsoncallback=?',
  });
});

function jsonFlickrApi(data) {

  for (i in data.photos.photo)
  {
    var item = data.photos.photo[i];
    $("#liste").append("<img src='https://farm"+item.farm+".staticflickr.com/"+item.server+"/"+item.id+"_"+item.secret+".jpg'/><br/><br/>");
  }
}
//https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=1a2489aa78ceb32dd2478ee997f53e22&tags=%22Paris%22
