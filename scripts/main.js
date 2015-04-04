//
//keyboard();
//
//
//function keyboard (e)


$(document).ready(function() {
    var audio;
    

    $(document).bind('keydown', 'a', function() {
        audio = new Audio(['songs/knee.mp3']);
        audio.play();
    })

    $(document).bind('keydown', 'z', function() {
        audio = new Audio(['songs/zelda.mp3']);
        audio.play();
    })

    $(document).bind('keydown', 'e', function() {
 audio = new Audio(['songs/ea.mp3']);
        audio.play();
    })

    $(document).bind('keydown', 'r', function() {
        console.log('DOWN');
     audio = new Audio(['songs/rickrolled.mp3']);
        audio.play();
    })
    $(document).bind('keydown', 't', function() {
        audio = new Audio(['songs/trololo.mp3']);
        audio.play();
    })
    $(document).bind('keydown', 'y', function() {
        audio = new Audio(['songs/yeah.mp3']);
        audio.play();
    })
    $(document).bind('keydown', 'u', function() {
        audio = new Audio(['songs/utini_jawas.mp3']);
        audio.play();
    })
    $(document).bind('keydown', 'i', function() {
        audio = new Audio(['songs/internetporn.mp3']);
        audio.play();
    })
    $(document).bind('keydown', 'o', function() {
        audio = new Audio(['songs/over9000.mp3']);
        audio.play();
    })
    $(document).bind('keydown', 'p', function() {
        audio = new Audio(['songs/pokemon.mp3']);
        audio.play();
    })
        $(document).bind('keydown', 'q', function() {
        audio.pause();
    })

    $(document).bind('keydown', 's', function() {
        audio = new Audio(['songs/shutup.mp3']);
        audio.play();
    })

    $(document).bind('keydown', 'd', function() {
      audio = new Audio(['songs/demacia.mp3']);
        audio.play();
    })

    $(document).bind('keydown', 'f', function() {
      audio = new Audio(['songs/frozen.mp3']);
        audio.play();
    })
    $(document).bind('keydown', 'g', function() {
        audio = new Audio(['songs/power.mp3']);
        audio.play();
    })
    $(document).bind('keydown', 'h', function() {
        audio = new Audio(['songs/hallelujah.mp3']);
        audio.play();
    })
    $(document).bind('keydown', 'j', function() {
        audio = new Audio(['songs/jeff.mp3']);
        audio.play();
    })
    $(document).bind('keydown', 'k', function() {
        audio = new Audio(['songs/kamehameha.mp3']);
        audio.play();
    })
    $(document).bind('keydown', 'l', function() {
        audio = new Audio(['songs/leviosa.mp3']);
        audio.play();
    })
    $(document).bind('keydown', 'm', function() {
        audio = new Audio(['songs/mario.mp3']);
        audio.play();
    })
        $(document).bind('keydown', 'w', function() {
        audio = new Audio(['songs/whatfox.mp3']);
        audio.play();
    })
    $(document).bind('keydown', 'x', function() {
        audio = new Audio(['songs/xfiles.mp3']);
        audio.play();
    })
    $(document).bind('keydown', 'c', function() {
        audio = new Audio(['songs/challenge_accepted.mp3']);
        audio.play();
    })
    $(document).bind('keydown', 'v', function() {
        audio = new Audio(['songs/victoryfanfare.mp3']);
        audio.play();
    })
    $(document).bind('keydown', 'b', function() {
        audio = new Audio(['songs/batman.mp3']);
        audio.play();
    })
    $(document).bind('keydown', 'n', function() {
        audio = new Audio(['songs/nyancat.mp3']);
        audio.play();
    })

});
