switch(window.location.href.split('#')[1]) {
    case 'the-default-view':
        $(".home-area").addClass('active');
        break;
    case 'artist-view':
        $(".artists-area").addClass('active');
        break;
    case 'music-view':
        $(".music-area").addClass('active');
        break;
    case 'vision-view':
        $(".vision-area").addClass('active');
        break;
    case 'events-view':
        $(".events-area").addClass('active');
        break;                          
    case 'shop-view':
        $(".shop-area").addClass('active');
        break;                        
    case 'about-view':
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