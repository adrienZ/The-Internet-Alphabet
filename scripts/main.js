//
//keyboard();
//
//
//function keyboard (e)


$(document).ready(function() {
    var audio=null;

    $(document).bind('keydown', 'a', function (a) {
        if(audio != null){
            audio.pause();
        }

        audio = new Audio(['songs/knee.mp3']);
        audio.play();
    })


    $(document).bind('keydown', 'z', function() {
        if(audio != null){
            audio.pause();
        }
        audio = new Audio(['songs/zelda.mp3']);
        audio.play();
        $('.row:nth-child(1) .key:nth-child(1)').toggleClass('active');

    })

    $(document).bind('keydown', 'e', function() {
        if(audio != null){
            audio.pause();
        }
        audio = new Audio(['songs/ea.mp3']);
        audio.play();
    })

    $(document).bind('keydown', 'r', function() {
        if(audio != null){
            audio.pause();
        }
        audio = new Audio(['songs/rickrolled.mp3']);
        audio.play();
    })
    $(document).bind('keydown', 't', function() {
        if(audio != null){
            audio.pause();
        }
        audio = new Audio(['songs/trololo.mp3']);
        audio.play();
    })
    $(document).bind('keydown', 'y', function() {
        if(audio != null){
            audio.pause();
        }
        audio = new Audio(['songs/yeah.mp3']);
        audio.play();
    })
    $(document).bind('keydown', 'u', function() {
        if(audio != null){
            audio.pause();
        }
        audio = new Audio(['songs/utini_jawas.mp3']);
        audio.play();
    })
    $(document).bind('keydown', 'i', function() {
        if(audio != null){
            audio.pause();
        }
        audio = new Audio(['songs/internetporn.mp3']);
        audio.play();
    })
    $(document).bind('keydown', 'o', function() {
        if(audio != null){
            audio.pause();
        }
        audio = new Audio(['songs/over9000.mp3']);
        audio.play();
    })
    $(document).bind('keydown', 'p', function() {
        if(audio != null){
            audio.pause();
        }
        audio = new Audio(['songs/pokemon.mp3']);
        audio.play();
    })
    $(document).bind('keydown', 'q', function() {
        audio.pause();
    })

    $(document).bind('keydown', 's', function() {
        if(audio != null){
            audio.pause();
        }
        audio = new Audio(['songs/shutup.mp3']);
        audio.play();
    })

    $(document).bind('keydown', 'd', function() {
        if(audio != null){
            audio.pause();
        }
        audio = new Audio(['songs/demacia.mp3']);
        audio.play();
    })

    $(document).bind('keydown', 'f', function() {
        if(audio != null){
            audio.pause();
        }
        audio = new Audio(['songs/frozen.mp3']);
        audio.play();
    })
    $(document).bind('keydown', 'g', function() {
        if(audio != null){
            audio.pause();
        }
        audio = new Audio(['songs/power.mp3']);
        audio.play();
    })
    $(document).bind('keydown', 'h', function() {
        if(audio != null){
            audio.pause();
        }
        audio = new Audio(['songs/hallelujah.mp3']);
        audio.play();
    })
    $(document).bind('keydown', 'j', function() {
        if(audio != null){
            audio.pause();
        }
        audio = new Audio(['songs/jeff.mp3']);
        audio.play();
    })
    $(document).bind('keydown', 'k', function() {
        if(audio != null){
            audio.pause();
        }
        audio = new Audio(['songs/kamehameha.mp3']);
        audio.play();
    })
    $(document).bind('keydown', 'l', function() {
        if(audio != null){
            audio.pause();
        }
        audio = new Audio(['songs/leviosa.mp3']);
        audio.play();
    })
    $(document).bind('keydown', 'm', function() {
        if(audio != null){
            audio.pause();
        }
        audio = new Audio(['songs/mario.mp3']);
        audio.play();
    })
    $(document).bind('keydown', 'w', function() {
        if(audio != null){
            audio.pause();
        }
        audio = new Audio(['songs/whatfox.mp3']);
        audio.play();
    })
    $(document).bind('keydown', 'x', function() {
        if(audio != null){
            audio.pause();
        }
        audio = new Audio(['songs/xfiles.mp3']);
        audio.play();
    })
    $(document).bind('keydown', 'c', function() {
        if(audio != null){
            audio.pause();
        }
        audio = new Audio(['songs/challenge_accepted.mp3']);
        audio.play();
    })
    $(document).bind('keydown', 'v', function() {
        if(audio != null){
            audio.pause();
        }
        audio = new Audio(['songs/victoryfanfare.mp3']);
        audio.play();
    })
    $(document).bind('keydown', 'b', function() {
        if(audio != null){
            audio.pause();
        }
        audio = new Audio(['songs/batman.mp3']);
        audio.play();
    })
    $(document).bind('keydown', 'n', function() {
        if(audio != null){
            audio.pause();
        }
        audio = new Audio(['songs/nyancat.mp3']);
        audio.play();
    })

});
