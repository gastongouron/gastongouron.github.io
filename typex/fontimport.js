// Google fonts call. line 2 to 13 provided by google
WebFontConfig = {
    google: { families: [ 'Open+Sans:400,300,300italic,400italic,600,800italic,800,700italic,700,600italic:latin,latin-ext' ] }
};
(function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();