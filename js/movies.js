function getSeries() {
    
    var actionMovies = ['Futurama', 'The Simpsons', 'Brooklyn Nine Nine', 'Kevin Can Wait', 'The Middle', 'Rick and Morty', 'Timeless', 'Code Black', 'Dexter', 'American Horror Story', 'Riverdale', 'American Gods', 'Wonder Woman', 'Deadpool', 'Atomic Blonde', 'Adventure Time', 'Split', 'Lucy', 'Stranger things'];

    $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[0])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster1').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.1Name').text(name);
        
        var rating = response.imdbRating;
        $('.1Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.1Plot').text(plot);
        
        var genre = response.Genre;
        $('.1Genre').text("Genre: " + genre);
        
    });
    
    $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[1])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster2').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.2Name').text(name);
        
        var rating = response.imdbRating;
        $('.2Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.2Plot').text(plot);
        
        var genre = response.Genre;
        $('.2Genre').text("Genre: " + genre);
        
    });
    
    $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[2])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster3').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.3Name').text(name);
        
        var rating = response.imdbRating;
        $('.3Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.3Plot').text(plot);
        
        var genre = response.Genre;
        $('.3Genre').text("Genre: " + genre);
        
    });
    
    $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[3])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster4').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.4Name').text(name);
        
        var rating = response.imdbRating;
        $('.4Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.4Plot').text(plot);
        
        var genre = response.Genre;
        $('.4Genre').text("Genre: " + genre);
        
    });
    
    $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[4])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster5').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.5Name').text(name);
        
        var rating = response.imdbRating;
        $('.5Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.5Plot').text(plot);
        
        var genre = response.Genre;
        $('.5Genre').text("Genre: " + genre);
        
    });
    
    $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[5])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster6').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.6Name').text(name);
        
        var rating = response.imdbRating;
        $('.6Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.6Plot').text(plot);
        
        var genre = response.Genre;
        $('.6Genre').text("Genre: " + genre);
        
    });
    
    $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[6])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster7').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.7Name').text(name);
        
        var rating = response.imdbRating;
        $('.7Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.7Plot').text(plot);
        
        var genre = response.Genre;
        $('.7Genre').text("Genre: " + genre);
        
    });
    
    $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[7])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster8').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.8Name').text(name);
        
        var rating = response.imdbRating;
        $('.8Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.8Plot').text(plot);
        
        var genre = response.Genre;
        $('.8Genre').text("Genre: " + genre);
        
    });
    
    $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[8])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster9').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.9Name').text(name);
        
        var rating = response.imdbRating;
        $('.9Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.9Plot').text(plot);
        
        var genre = response.Genre;
        $('.9Genre').text("Genre: " + genre);
        
    });
    
    $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[9])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster10').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.10Name').text(name);
        
        var rating = response.imdbRating;
        $('.10Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.10Plot').text(plot);
        
        var genre = response.Genre;
        $('.10Genre').text("Genre: " + genre);
        
    });
    
    $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[10])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster11').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.11Name').text(name);
        
        var rating = response.imdbRating;
        $('.11Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.11Plot').text(plot);
        
        var genre = response.Genre;
        $('.11Genre').text("Genre: " + genre);
        
    });
    
    $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[11])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster12').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.12Name').text(name);
        
        var rating = response.imdbRating;
        $('.12Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.12Plot').text(plot);
        
        var genre = response.Genre;
        $('.12Genre').text("Genre: " + genre);
        
    });
    
    $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[12])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster13').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.13Name').text(name);
        
        var rating = response.imdbRating;
        $('.13Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.13Plot').text(plot);
        
        var genre = response.Genre;
        $('.13Genre').text("Genre: " + genre);
        
    });
    
    $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[13])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster14').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.14Name').text(name);
        
        var rating = response.imdbRating;
        $('.14Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.14Plot').text(plot);
        
        var genre = response.Genre;
        $('.14Genre').text("Genre: " + genre);
        
    });
    
    $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[14])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster15').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.15Name').text(name);
        
        var rating = response.imdbRating;
        $('.15Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.15Plot').text(plot);
        
        var genre = response.Genre;
        $('.15Genre').text("Genre: " + genre);
        
    });
    
    $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[15])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster16').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.16Name').text(name);
        
        var rating = response.imdbRating;
        $('.16Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.16Plot').text(plot);
        
        var genre = response.Genre;
        $('.16Genre').text("Genre: " + genre);
        
    });
    
    $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[16])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster17').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.17Name').text(name);
        
        var rating = response.imdbRating;
        $('.17Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.17Plot').text(plot);
        
        var genre = response.Genre;
        $('.17Genre').text("Genre: " + genre);
        
    });
    
    $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[17])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster18').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.18Name').text(name);
        
        var rating = response.imdbRating;
        $('.18Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.18Plot').text(plot);
        
        var genre = response.Genre;
        $('.18Genre').text("Genre: " + genre);
        
    });
    
   
}

getSeries();function getSeries() {
    
    var actionMovies = ['Futurama', 'The Simpsons', 'Brooklyn Nine Nine', 'Kevin Can Wait', 'The Middle', 'Rick and Morty', 'Timeless', 'Code Black', 'Dexter', 'American Horror Story', 'Riverdale', 'American Gods', 'Wonder Woman', 'Deadpool', 'Atomic Blonde', 'Adventure Time', 'Split', 'Lucy'];

    $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[0])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster1').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.1Name').text(name);
        
        var rating = response.imdbRating;
        $('.1Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.1Plot').text(plot);
        
        var genre = response.Genre;
        $('.1Genre').text("Genre: " + genre);
        
    });
    
    $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[1])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster2').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.2Name').text(name);
        
        var rating = response.imdbRating;
        $('.2Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.2Plot').text(plot);
        
        var genre = response.Genre;
        $('.2Genre').text("Genre: " + genre);
        
    });
    
    $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[2])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster3').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.3Name').text(name);
        
        var rating = response.imdbRating;
        $('.3Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.3Plot').text(plot);
        
        var genre = response.Genre;
        $('.3Genre').text("Genre: " + genre);
        
    });
    
    $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[3])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster4').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.4Name').text(name);
        
        var rating = response.imdbRating;
        $('.4Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.4Plot').text(plot);
        
        var genre = response.Genre;
        $('.4Genre').text("Genre: " + genre);
        
    });
    
    $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[4])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster5').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.5Name').text(name);
        
        var rating = response.imdbRating;
        $('.5Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.5Plot').text(plot);
        
        var genre = response.Genre;
        $('.5Genre').text("Genre: " + genre);
        
    });
    
    $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[5])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster6').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.6Name').text(name);
        
        var rating = response.imdbRating;
        $('.6Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.6Plot').text(plot);
        
        var genre = response.Genre;
        $('.6Genre').text("Genre: " + genre);
        
    });
    
    $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[6])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster7').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.7Name').text(name);
        
        var rating = response.imdbRating;
        $('.7Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.7Plot').text(plot);
        
        var genre = response.Genre;
        $('.7Genre').text("Genre: " + genre);
        
    });
    
    $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[7])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster8').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.8Name').text(name);
        
        var rating = response.imdbRating;
        $('.8Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.8Plot').text(plot);
        
        var genre = response.Genre;
        $('.8Genre').text("Genre: " + genre);
        
    });
    
    $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[8])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster9').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.9Name').text(name);
        
        var rating = response.imdbRating;
        $('.9Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.9Plot').text(plot);
        
        var genre = response.Genre;
        $('.9Genre').text("Genre: " + genre);
        
    });
    
    $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[9])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster10').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.10Name').text(name);
        
        var rating = response.imdbRating;
        $('.10Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.10Plot').text(plot);
        
        var genre = response.Genre;
        $('.10Genre').text("Genre: " + genre);
        
    });
    
    $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[10])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster11').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.11Name').text(name);
        
        var rating = response.imdbRating;
        $('.11Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.11Plot').text(plot);
        
        var genre = response.Genre;
        $('.11Genre').text("Genre: " + genre);
        
    });
    
    $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[11])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster12').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.12Name').text(name);
        
        var rating = response.imdbRating;
        $('.12Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.12Plot').text(plot);
        
        var genre = response.Genre;
        $('.12Genre').text("Genre: " + genre);
        
    });
    
    $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[12])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster13').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.13Name').text(name);
        
        var rating = response.imdbRating;
        $('.13Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.13Plot').text(plot);
        
        var genre = response.Genre;
        $('.13Genre').text("Genre: " + genre);
        
    });
    
    $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[13])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster14').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.14Name').text(name);
        
        var rating = response.imdbRating;
        $('.14Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.14Plot').text(plot);
        
        var genre = response.Genre;
        $('.14Genre').text("Genre: " + genre);
        
    });
    
    $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[14])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster15').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.15Name').text(name);
        
        var rating = response.imdbRating;
        $('.15Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.15Plot').text(plot);
        
        var genre = response.Genre;
        $('.15Genre').text("Genre: " + genre);
        
    });
    
    $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[15])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster16').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.16Name').text(name);
        
        var rating = response.imdbRating;
        $('.16Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.16Plot').text(plot);
        
        var genre = response.Genre;
        $('.16Genre').text("Genre: " + genre);
        
    });
    
    $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[16])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster17').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.17Name').text(name);
        
        var rating = response.imdbRating;
        $('.17Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.17Plot').text(plot);
        
        var genre = response.Genre;
        $('.17Genre').text("Genre: " + genre);
        
    });
    
    $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[18])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster18').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.18Name').text(name);
        
        var rating = response.imdbRating;
        $('.18Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.18Plot').text(plot);
        
        var genre = response.Genre;
        $('.18Genre').text("Genre: " + genre);
        
    });
    
   $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[19])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster19').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.19Name').text(name);
        
        var rating = response.imdbRating;
        $('.19Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.19Plot').text(plot);
        
        var genre = response.Genre;
        $('.19Genre').text("Genre: " + genre);
        
    });
    
   $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[20])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster20').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.20Name').text(name);
        
        var rating = response.imdbRating;
        $('.20Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.20Plot').text(plot);
        
        var genre = response.Genre;
        $('.20Genre').text("Genre: " + genre);
        
    });
    
   $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[21])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster21').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.21Name').text(name);
        
        var rating = response.imdbRating;
        $('.21Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.21Plot').text(plot);
        
        var genre = response.Genre;
        $('.21Genre').text("Genre: " + genre);
        
    });
    
   $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[22])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster22').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.22Name').text(name);
        
        var rating = response.imdbRating;
        $('.22Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.22Plot').text(plot);
        
        var genre = response.Genre;
        $('.22Genre').text("Genre: " + genre);
        
    });
    
   $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[23])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster23').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.23Name').text(name);
        
        var rating = response.imdbRating;
        $('.23Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.23Plot').text(plot);
        
        var genre = response.Genre;
        $('.23Genre').text("Genre: " + genre);
        
    });
    
   $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[24])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster24').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.24Name').text(name);
        
        var rating = response.imdbRating;
        $('.24Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.24Plot').text(plot);
        
        var genre = response.Genre;
        $('.24Genre').text("Genre: " + genre);
        
    });
    
   $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[25])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster25').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.25Name').text(name);
        
        var rating = response.imdbRating;
        $('.25Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.25Plot').text(plot);
        
        var genre = response.Genre;
        $('.25Genre').text("Genre: " + genre);
        
    });
    
   $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[26])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster26').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.26Name').text(name);
        
        var rating = response.imdbRating;
        $('.26Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.26Plot').text(plot);
        
        var genre = response.Genre;
        $('.26Genre').text("Genre: " + genre);
        
    });
    
   $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[27])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster27').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.27Name').text(name);
        
        var rating = response.imdbRating;
        $('.27Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.27Plot').text(plot);
        
        var genre = response.Genre;
        $('.27Genre').text("Genre: " + genre);
        
    });
    
   $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[28])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster28').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.28Name').text(name);
        
        var rating = response.imdbRating;
        $('.28Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.28Plot').text(plot);
        
        var genre = response.Genre;
        $('.28Genre').text("Genre: " + genre);
        
    });
    
   $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[29])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster29').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.29Name').text(name);
        
        var rating = response.imdbRating;
        $('.29Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.29Plot').text(plot);
        
        var genre = response.Genre;
        $('.29Genre').text("Genre: " + genre);
        
    });
    
   $.getJSON('http://www.omdbapi.com/?apikey=e3c1bdc7&t=' + encodeURI(actionMovies[30])).then(function(response) {
        var image = response.Poster;
        
        if (image !== "N/A"){
            $('.Poster30').css('background-image', 'url(' + image + ')');
        };
        
        var name = response.Title;
        $('.30Name').text(name);
        
        var rating = response.imdbRating;
        $('.30Imdb').text("IMDb Rating: " + rating);
        
        var plot = response.Plot;
        $('.30Plot').text(plot);
        
        var genre = response.Genre;
        $('.30Genre').text("Genre: " + genre);
        
    });
    
   
}

getSeries();

});