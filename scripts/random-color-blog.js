$(document).ready(function () {
    var colors = ["#E72430", "#3875C5", "#179B72","#A10E32","#E93C0F"];
    $('main').each(function () {
        var rand = Math.floor(Math.random() * colors.length);
        $( "a.navItem" )
        .mouseover(function() {
            $(this).css("color", colors[rand]);
        })
        .mouseout(function() {
            $(this).css("color", "#3f4549");
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
            $(this).css("color", "#3f4549");
        });
        $( "html" ).css("background-color", colors[rand]);
    });
});
