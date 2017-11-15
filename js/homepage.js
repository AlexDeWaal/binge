function getSeries() {
    
    var actionMovies = ['Futurama', 'The Simpsons', 'Brooklyn Nine Nine', 'Kevin Can Wait', 'The Middle'];

    $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[0])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.futuramaPoster').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.futurama').text(name);
        
        var rating = response.imdbRating;
        $('.imdbFuturama').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.futuramaPlot').text(plot);
        
        var genre = response.Genre;
        $('.genreFuturama').text("Genre: " + genre);
        
    });
    
    $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[1])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.simpsonsPoster').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.simpsons').text(name);
        
        var rating = response.imdbRating;
        $('.imdbSimpsons').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.simpsonsPlot').text(plot);
        
        var genre = response.Genre;
        $('.genreSimpsons').text("Genre: " + genre);
        
    });
    
    $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[2])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.brooklynPoster').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.brooklyn').text(name);
        
        var rating = response.imdbRating;
        $('.imdbBrooklyn').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.brooklynPlot').text(plot);
        
        var genre = response.Genre;
        $('.genreBrooklyn').text("Genre: " + genre);
        
    });
    
    $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[3])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.kevinPoster').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.kevin').text(name);
        
        var rating = response.imdbRating;
        $('.imdbKevin').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.kevinPlot').text(plot);
        
        var genre = response.Genre;
        $('.genreKevin').text("Genre: " + genre);
        
    });
    
    $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[4])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.theMiddlePoster').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.theMiddle').text(name);
        
        var rating = response.imdbRating;
        $('.imdbTheMiddle').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.theMiddlePlot').text(plot);
        
        var genre = response.Genre;
        $('.genreTheMiddle').text("Genre: " + genre);
        
    });      
}

getSeries();