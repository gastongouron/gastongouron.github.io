$(document).ready(function () {
    var colors = ["#885159", "#645188", "#886451", "#528881"];
    $('main').each(function () {
        var rand = Math.floor(Math.random() * colors.length);
        $( "a.navItem" )
        .mouseover(function() {
            $(this).css("color", colors[rand]);
        })
        .mouseout(function() {
            $(this).css("color", "#191919");
        });
            $( "div.col" )
        .mouseover(function() {
            $(this).css("background-color", colors[rand]);
        })
        .mouseout(function() {
            $(this).css("background-color", "white");
        });
        $( "article.articleItem" )
        .mouseover(function() {
            $(this).css("background-color", colors[rand]);
            $(this).css("color", "white");
        })
        .mouseout(function() {
            $(this).css("background-color", "white");
            $(this).css("color", "#212121");
        });
    });
});