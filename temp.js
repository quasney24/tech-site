d3.select("#find-name").on("click", function(event){
    d3.event.preventDefault();
    var name = d3.select("#name-input").node().value;
    var key = "c8a4b6c487e97bc9f1940df7758a0f72"
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + name +"&appid="+key;
    d3.json(queryURL, function (error, response) {
        if (error) return d3.select("#temp").text("City Not Found!");
        console.log("url", response);
        
        var good = response.cod;
        var gif_desc = response.weather[0].main;
        console.log(good);
        if (good==200){
            var url = response.main.temp;
            var url2 = ((url*(9/5)) - (459.76));
            var urlhumid = response.main.humidity;
            var pressureurl = response.main.pressure;
            var formatting = d3.format(",");
            d3.select("#city").text(name)
            d3.select("#temp").text("Temperture: " +formatting(url2)+ " F");
            d3.select("#humid").text("Humidity: " + urlhumid+"%");
            d3.select("#pressure").text("Pressure: "+ pressureurl);
        
        }
        var gifqueryURL = "https://api.giphy.com/v1/gifs/search?q="+gif_desc+"&api_key=dc6zaTOxFJmzC";

    d3.json(gifqueryURL, function (error, response){
        if(error) return d3.select(".gifgoeshere").text("Error");
        console.log("url", response);
        
        var gifurl = response.data[0].images.original.url;
        d3.select(".gifgoeshere").append("img").attr("src",gifurl).attr("style","padding-top=10%").attr("align", "middle")

        
        
    })    

    })



})

