var url = "https://newsapi.org/v2/everything";

var apiKey = "fb3792690aa84954aeb7141705a16f78";

// var queryURL = url + queryString + "&apiKey=" + apiKey;

$("#search-btn").on("click", function (event) {

    event.preventDefault();

    var keyword = $("#search-input").val().trim();
    var queryString = "?q=" + keyword;
    var lang = "&language=en";
    var source = "&sources=time,the-new-york-times,the-huffington-post"
    var from = "&from=2019-01-01";
    // var to = "&to=2019-01-20";

    var queryURL = url + queryString + lang  + from + "&apiKey=" + apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response.articles);
        var responseArray = response.articles

        for (i = 0; i < responseArray.length; i++) {
            console.log(responseArray[i].url);

            var resultURL = responseArray[i].url;
            var resultLink = $('<a href="' + resultURL + '">' + resultURL + '</a>' + '<br>');
            $(".response").append(resultLink);
        };
    });

    $(".response").empty();
    
});