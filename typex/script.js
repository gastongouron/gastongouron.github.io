// prevent default backspace to return to previous page
$(document).on("keydown", function (e) {
    if (e.which === 8 && !$(e.target).is("input, textarea")) {
        e.preventDefault();
    }
});

// Create a variable equal to the actual div where id="output"
// And an hash to store pressed keys and their duration
var output = document.getElementById('output'),
    pressed = 0,
    character,
    list = document.getElementById("output");

// Listen to keydown via window element
$("body").on("keypress", function(e) {
   if (pressed) return;
   if (e.which === 13) character = '<br>'
   else if (e.which === 8) list.removeChild(listLastChild);
   else character = String.fromCharCode(e.which);;
   pressed=e.timeStamp;
});

// just for backspace
$("body").on("keydown", function(e) {
    var lastguy = $( "span span:last-child" );
    console.log(lastguy);
   if (e.which === 8) lastguy.remove();
});

// Listen to keyup via window element
$("body").on("keyup", function(e) {
    if ( !pressed ) return;

        // get duration of the key pressed event
        var duration = ( e.timeStamp - pressed ) / 1000;
        console.log(duration);

        // Output the letter in a span tag
        output.innerHTML += '<span class="klass">' + character + '</span>';

        // Get the next one with classname index -1
        var target_array = document.getElementsByClassName('klass');
        var target = target_array[target_array.length - 1];

        // Change character family to Open Sans and font style to Italic
        target.style.fontFamily = "open sans";
        target.style.fontStyle = "italic";
        target.style.fontSize = 70;

    // Conditional statement that modify fontWeight referring to the duration of the key pressed event
    if (duration < 0.05)
        target.style.fontWeight = 300;
    else if (duration < 0.1)
        target.style.fontWeight = 400;
    else if (duration < 0.15)
        target.style.fontWeight = 600;
    else if (duration < 0.2)
        target.style.fontWeight = 700;
    else
        target.style.fontWeight = 800;

        // Reinitialize pressed to 0
        pressed = 0;

});


function blink(selector){
$(selector).fadeOut('slow', function(){
    $(this).fadeIn('slow', function(){
        blink(this);
    });
});
}

blink('.blink');
