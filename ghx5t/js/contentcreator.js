data = {

	// HOME VIEW
	"home": {
		// SOUNDCLOUD SONG TO PLAY, ADD AN ID SO IT PLAYS RANDOMLY ON PAGE LOAD!
		"soundcloudIds": ["302662504", "116432275"],

		// HOME NEWS -> NOMBRE MIN/MAX: 8 NEWS
		"news": {
			"new1": {
				"image": 'http://placehold.it/1000x500/FFFFFF/FF0000',
				"href": 'www.google.com'
			},
			"new2": {
				"image": 'http://placehold.it/1000x500/FFFFFF/FF0000',
				"href": 'www.google.com'
			},
			"new3": {
				"image": 'http://placehold.it/1000x500/FFFFFF/FF0000',
				"href": 'www.google.com'
			},
			"new4": {
				"image": 'http://placehold.it/1000x500/FFFFFF/FF0000',
				"href": 'www.google.com'
			},
		},
		// HOME VIDEOS
		"videos": {
			"video1": {
				"href": 'https://www.youtube.com/embed/cBX80BCZsao',
				"text": 'A good music video with good rappers and aesthetics yo!'
			},
			"video2": {
				"href": 'https://www.youtube.com/embed/geTgZcHrXTc',
				"text": 'A good music video with good rappers and aesthetics yo!'
			},
			"video3": {
				"href": 'https://www.youtube.com/embed/geTgZcHrXTc',
				"text": 'A good music video with good rappers and aesthetics yo!'
			},
			"video4": {
				"href": 'https://www.youtube.com/embed/geTgZcHrXTc',
				"text": 'A good music video with good rappers and aesthetics yo!'
			},
			"video5": {
				"href": 'https://www.youtube.com/embed/geTgZcHrXTc',
				"text": 'A good music video with good rappers and aesthetics yo!'
			},
		}
	},

	// ARTIST VIEW
	"artists": {
		"Nai": {
			"image": 'img/nai.jpeg',
			"href": 'http://www.facebook.com/gaston.gouron'
		},
		"Paul": {
			"image": 'http://placehold.it/500/FF0000/FFFFFF',
			"href": 'http://www.facebook.com/gaston.gouron'
		},
		"Jeune Poulain": {
			"image": 'http://placehold.it/500/FF0000/FFFFFF',
			"href": 'http://www.facebook.com/gaston.gouron'
		}
	},

	// MUSIC VIEW
	"music": {
		"album1": {
			"image": 'img/album.jpg',
			"href": 'www.google.com'
		},
		"album2": {
			"image": 'http://placehold.it/500/FF0000/FFFFFF',
			"href": 'www.google.com'
		},
		"album3": {
			"image": 'http://placehold.it/500/FF0000/FFFFFF',
			"href": 'www.google.com'
		},
		"album4": {
			"image": 'http://placehold.it/500/FF0000/FFFFFF',
			"href": 'www.google.com'
		},
		"album5": {
			"image": 'http://placehold.it/500/FF0000/FFFFFF',
			"href": 'www.google.com'
		}
	},

	// VISION VIEW
	"vision": {
		"video1": {
			"href": 'https://www.youtube.com/embed/cBX80BCZsao'
		},
		"video2": {
			"href": 'https://www.youtube.com/embed/geTgZcHrXTc'
		},
	},

	// EVENTS VIEW
	"events": {
		"eventname1": {
			"date": '01/01-2017',
			"href": 'http://www.google.com',
			"image": 'img/event.jpg'
		},
		"eventname2": {
			"date": '01/01-2017',
			"href": 'http://www.google.com',
			"image": 'http://placehold.it/500/FF0000/FFFFFF'
		},
		"eventname3": {
			"date": '01/01-2017',
			"href": 'http://www.google.com',
			"image": 'http://placehold.it/500/FF0000/FFFFFF'
		},
		"eventname4": {
			"date": '01/01-2017',
			"href": 'http://www.google.com',
			"image": 'http://placehold.it/500/FF0000/FFFFFF'
		},
		"eventname5": {
			"date": '01/01-2017',
			"href": 'http://www.google.com',
			"image": 'http://placehold.it/500/FF0000/FFFFFF'
		},
		"eventname6": {
			"date": '01/01-2017',
			"href": 'http://www.google.com',
			"image": 'http://placehold.it/500/FF0000/FFFFFF'
		},
		"eventname7": {
			"date": '01/01-2017',
			"href": 'http://www.google.com',
			"image": 'http://placehold.it/500/FF0000/FFFFFF'
		},
	},

	// ABOUT VIEW
	"about": {
		"text": "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
		"people": {
			"Nai": {
				"email": "nai@ghx5t.com",
				"photo": "img/nai.jpeg",
				"position": "CTO"
			},
			"Paul": {
				"email": "paul@ghx5t.com",
				"photo": "http://placehold.it/200/000000/FFFFFF",
				"position": "Developper"
			},
			"Aurelie": {
				"email": "aurelie@ghx5t.com",
				"photo": "http://placehold.it/200/000000/FFFFFF",
				"position": "Designer"
			},
			"LEL": {
				"email": "aurelie@ghx5t.com",
				"photo": "http://placehold.it/200/000000/FFFFFF",
				"position": "LOL"
			}
		}
	}
}


// DO NOT TOUCH :)
// Parsing JSON to build  display HTML partials
var soundcloudSongIds 			= data.home.soundcloudIds;
var homeDataNews 				= data.home.news;
var homeDataVideos 				= data.home.videos;
var artistsData 				= data.artists;
var musicData 					= data.music;
var visionData 					= data.vision;
var eventsData 					= data.events;
var aboutText 					= data.about.text;
var aboutData 					= data.about.people;


var soundcloudPlayerHTML 		= '';
var homeDataNewsHTML 			= '';
var homeDataVideosMainHTML  	= '';
var homeDataVideosSecondaryHTML = '';
var artistsHTML 				= '';
var musicHTML 					= '';
var visionHTML 					= '';
var eventsHTML 					= '';
var aboutHTML 					= '';
var aboutTextHTML 				= '';

var counter 					= 0;


var rand = soundcloudSongIds[Math.floor(Math.random() * soundcloudSongIds.length)];
console.log(rand)
soundcloudPlayerHTML += '<iframe class="scplayer pull-left" width="100%" height="20" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/'+rand+'&amp;color=ff5500&amp;auto_play=true&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false"></iframe>'

for (var key in homeDataNews) {
 	var homeDataNew = homeDataNews[key];
 	$("#"+key).attr('src', homeDataNew.image);
 	$("#"+key).attr('href', homeDataNew.href);
}

var playerIdCounter = 0
for (var key in homeDataVideos) {
 	var homeDataVideo = homeDataVideos[key];
 	if (counter <= 1) {
 		homeDataVideosMainHTML += '<div class="col-md-10 col-md-push-1 col-lg-8 col-lg-push-2 col-sm-12 col-xs-12"><div class="video-content embed-responsive embed-responsive-16by9"><iframe class="yt_players embed-responsive-item" id="'+'player'+counter+'" src="'+homeDataVideo.href+'?rel=0&wmode=Opaque&enablejsapi=1;showinfo=0;controls=0'+'"></iframe></div></div><div class="col-md-10 col-md-push-1 col-lg-8 col-lg-push-2 col-sm-12 col-xs-12"><p>'+homeDataVideo.text+'</p></div>';
 	} else {
 		homeDataVideosSecondaryHTML += '<div class="col-md-10 col-md-push-1 col-lg-8 col-lg-push-2 col-sm-12 col-xs-12"><div class="video-content embed-responsive embed-responsive-16by9"><iframe class="yt_players embed-responsive-item" id="'+'player'+counter+'" src="'+homeDataVideo.href+'?rel=0&wmode=Opaque&enablejsapi=1;showinfo=0;controls=0'+'"></iframe></div></div><div class="col-md-10 col-md-push-1 col-lg-8 col-lg-push-2 col-sm-12 col-xs-12"><p>'+homeDataVideo.text+'</p></div>';
 	}
 	counter +=1;
 	playerIdCounter+=1
}

for (var key in aboutData) {
 	var about = aboutData[key];
	aboutHTML += '<div class="col-md-3 top-pad-30"><div class="media"><div class="media-center"><a href="#"><img class=" center-block img-responsivemedia-object img-circle" src="'+about.photo+'" height="60" alt="..."></a></div><div class="media-body contact-name"><span class="media-heading"><b>'+key+'</b></span><br><span>'+about.position+'</span><br><span><a href="mailto:'+about.email+'">'+about.email+'</a></span></div></div></div>';
}

for (var key in artistsData) {
 	var artist = artistsData[key];
	artistsHTML += '<div class="col-md-6 col-lg-6 col-sm-6 col-xs-12"><a target="_blank" href="'+artist.href+'"><img src="'+artist.image+'" class="grayscale img-responsive" alt="sry"></a><div class="artist"><span>'+key+'</span></div></div>';
}

for (var key in musicData) {
 	var music = musicData[key];
	musicHTML += '<div class="col-md-4 col-lg-4 col-sm-4 col-xs-12"><a target="_blank" href="'+music.href+'"><img src="'+music.image+'" class="grayscale img-responsive" alt="sry"></a><div class="music"><span>'+key+'</span></div></div>';
}

for (var key in visionData) {
 	var vision = visionData[key];
	visionHTML += '<div class="col-md-10 col-md-push-1 col-lg-8 col-lg-push-2 col-sm-12 col-xs-12"><div class="video-content embed-responsive embed-responsive-16by9"><iframe id="'+'player'+playerIdCounter+'" class="yt_players embed-responsive-item" src="'+vision.href+'"></iframe></div></div>';
	playerIdCounter+=1;
}

for (var key in eventsData) {
 	var events = eventsData[key];
	eventsHTML += '<div class="col-md-6 col-lg-6 col-sm-6 col-xs-12"><a href="'+events.href+'"><img src="'+events.image+'" class="grayscale img-responsive" alt="sry"></img></a><div class="events event-name"><span>'+key+'</span><span class="pull-right event-date">'+events.date+'</span></div></div>';
}

aboutTextHTML += '<div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 media-center" style="padding-top:20px"><h2 style="text-align: center">'+aboutText+'</h1></div>'

$(soundcloudPlayerHTML).appendTo("#imaplayer")
$(homeDataVideosMainHTML).appendTo("#home-videos-content-main");
$(homeDataVideosSecondaryHTML).appendTo("#home-videos-content-secondary");
$(aboutTextHTML).appendTo("#about-content");
$(aboutHTML).appendTo("#about-content");
$(artistsHTML).appendTo("#artists-content");
$(musicHTML).appendTo("#music-content");
$(visionHTML).appendTo("#vision-content");
$(eventsHTML).appendTo("#events-content");


//  DEAL WITH VIDEOS EVENTS?
var players = new Array();
var widgets = [];

$('iframe.scplayer').each(function (index, iframe) {
  widgets.push(SC.Widget(iframe));
});

function readyYoutube() {
    if((typeof YT !== "undefined") && YT && YT.Player){
		var temp = $("iframe.yt_players")
		console.log(temp.length)
		for (var i = 0; i < temp.length; i++) {
		    var t = new YT.Player($(temp[i]).attr('id'), {
		        events: {
		            'onStateChange': onPlayerStateChange
		        }
		    });
		    players.push(t);
		}
    }else{
        setTimeout(readyYoutube, 1000);
    }
}
readyYoutube();

console.log(players)

function onPlayerStateChange(event) {
	for (var i = 0, len = widgets.length; i < len; i++) {
	  widgets[i].pause();
	}
};

am = playerIdCounter
$('#navbar').on('click', function() {
	for (var i = 0; i < playerIdCounter; i++) {
	   $('#player'+i)[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
	}
});

$('#desktop-logo').on('click', function() {
	for (var i = 0; i < playerIdCounter; i++) {
	   $('#player'+i)[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
	}
});