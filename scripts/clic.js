function auClic(clic) {
    var audio = null
    var letter = clic.id;
    switch (letter) {

    case 'a':
        if (audio != null) {
            audio.pause();
        }

        audio = new Audio(['songs/knee.mp3']);
        audio.play();

        break;

    case 'z':
        if (audio != null) {
            audio.pause();
        }

        audio = new Audio(['songs/zelda.mp3']);
        audio.play();

        break;
    case 'e':
        if (audio != null) {
            audio.pause();
        }

        audio = new Audio(['songs/ea.mp3']);
        audio.play();

        break;
    case 'r':
        if (audio != null) {
            audio.pause();
        }

        audio = new Audio(['songs/rickrolled.mp3']);
        audio.play();

        break;
    case 't':
        if (audio != null) {
            audio.pause();
        }

        audio = new Audio(['songs/trololo.mp3']);
        audio.play();

        break;
    case 'y':
        if (audio != null) {
            audio.pause();
        }

        audio = new Audio(['songs/yeah.mp3']);
        audio.play();

        break;
    case 'u':
        if (audio != null) {
            audio.pause();
        }

        audio = new Audio(['songs/utini_jawas.mp3']);
        audio.play();

        break;
    case 'i':
        if (audio != null) {
            audio.pause();
        }

        audio = new Audio(['songs/internetporn.mp3']);
        audio.play();

        break;
    case 'o':
        if (audio != null) {
            audio.pause();
        }

        audio = new Audio(['songs/over9000.mp3']);
        audio.play();

        break;
    case 'p':
        if (audio != null) {
            audio.pause();
        }

        audio = new Audio(['songs/pokemon.mp3']);
        audio.play();

        break;
    case 'q':
        audio = null;


        break;
    case 's':
        if (audio != null) {
            audio.pause();
        }

        audio = new Audio(['songs/shutup.mp3']);
        audio.play();

        break;
    case 'd':
        if (audio != null) {
            audio.pause();
        }

        audio = new Audio(['songs/demacia.mp3']);
        audio.play();

        break;
    case 'f':
        if (audio != null) {
            audio.pause();
        }

        audio = new Audio(['songs/frozen.mp3']);
        audio.play();

        break;
    case 'g':
        if (audio != null) {
            audio.pause();
        }

        audio = new Audio(['songs/power.mp3']);
        audio.play();

        break;
    case 'h':
        if (audio != null) {
            audio.pause();
        }

        audio = new Audio(['songs/hallelujah.mp3']);
        audio.play();

        break;
    case 'j':
        if (audio != null) {
            audio.pause();
        }

        audio = new Audio(['songs/jeff.mp3']);
        audio.play();

        break;
    case 'k':
        if (audio != null) {
            audio.pause();
        }

        audio = new Audio(['songs/kamehameha.mp3']);
        audio.play();

        break;
    case 'l':
        if (audio != null) {
            audio.pause();
        }

        audio = new Audio(['songs/leviosa.mp3']);
        audio.play();

        break;
    case 'm':
        if (audio != null) {
            audio.pause();
        }

        audio = new Audio(['songs/mario.mp3']);
        audio.play();

        break;
    case 'w':
        if (audio != null) {
            audio.pause();
        }

        audio = new Audio(['songs/whatfox.mp3']);
        audio.play();

        break;
    case 'x':
        if (audio != null) {
            audio.pause();
        }

        audio = new Audio(['songs/xfiles.mp3']);
        audio.play();

        break;
    case 'c':
        if (audio != null) {
            audio.pause();
        }

        audio = new Audio(['songs/challenge_accepted.mp3']);
        audio.play();

        break;
    case 'v':
        if (audio != null) {
            audio.pause();
        }

        audio = new Audio(['songs/victory fanfare.mp3']);
        audio.play();

        break;
    case 'b':
        if (audio != null) {
            audio.pause();
        }

        audio = new Audio(['songs/batman.mp3']);
        audio.play();

        break;
    case 'n':
        if (audio != null) {
            audio.pause();
        }

        audio = new Audio(['songs/nyancat.mp3']);
        audio.play();

        break;
    }
}