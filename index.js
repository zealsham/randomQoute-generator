$(document).ready(function() {
  $('button').click(function() {

// making an array of random color

var randomColors = ["rgba(86,175,99,0.6)", "rgba(86,175,222,0.6)", "rgba(0,0,0,0.6)","rgba(46, 138, 138, 1)","rgba(46, 138, 138, 1)","rgba(86, 213, 138, 0.6)"]
// generate random collor for background
var  bodyRandom = randomColors[Math.floor(Math.random()*randomColors.length)]
 $('body').css("background",bodyRandom);

 // colors for the quote background i.e jumbotron

 var jumboColors = ["#A52A2A","#7FFF00","#EE82EE","#E0FFFF","yellow","#9ACD32","#87CEFA","#7CFC00","#FF1493"]
     jumboRandom = jumboColors[Math.floor(Math.random()*jumboColors.length)]
     $(".jumbo").css("background",jumboRandom);

    // load the ajax request and api in JSONP format

    $.ajax({
      url: "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?",
      dataType: "json",
      async: true, // allows other code to run .non blocking
      success: function(data) { // call back for sucessful request

        $('#quote-text').html(data.quoteText);
        $('#authors').html(data.quoteAuthor);
        //$('#quote-text').html(JSON.stringify(data));
      } ,
      error: function(err){

      }

    });
  });
});
