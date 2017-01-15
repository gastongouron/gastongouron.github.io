switch(window.location.href.split('#')[1]) {
    case 'home':
        $(".home-area").addClass('active');
        break;
    case 'artist':
        $(".artists-area").addClass('active');
        break;
    case 'music':
        $(".music-area").addClass('active');
        break;
    case 'vision':
        $(".vision-area").addClass('active');
        break;
    case 'events':
        $(".events-area").addClass('active');
        break;                          
    case 'shop':
        $(".shop-area").addClass('active');
        break;                        
    case 'about':
        $(".about-area").addClass('active');
        break;                                                                                  
    default:
        $(".home-area").addClass('active');
}
$('li').click(function() {
    var subMenu = $(this).attr('class').substring(-1,7);
    $("navbar-nav").removeClass('active');
    if ( !$( this ).hasClass( 'active' ) ) {
        $("navbar."+subMenu).addClass('active');
    }
    $(this).siblings().removeClass('active');
    $(this).toggleClass('active');
});