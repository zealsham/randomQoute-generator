$(document).ready(function(){
  $('button').click(function(){
    //load the ajax request and api in JSONP format
    $.ajax({
      url:"http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?",
      dataType:"json",
      async: true,//allows other code to run .non blocking
      success: function(data){//call back for sucessful request
        $('#quote-text').html(JSON.stringify(data));
      }


    })
  });
});
