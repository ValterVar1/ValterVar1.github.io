window.onload = function() {
    var soundtracks = [
        { title: 'Main Menu', file: 'soundtracks/MainMenu.mp3', image: 'images/MainMenu.jpg' },
        { title: 'Godskin Apostles', file: 'soundtracks/GodskinApostles.mp3', image: 'images/GodskinApostles.jpg' },
        { title: 'Lichdragon Fortissax', file: 'soundtracks/LichdragonFortissax.mp3', image: 'images/LichdragonFortissax.jpg' },
        { title: 'Malenia', file: 'soundtracks/MaleniaBladeOfMiquella.mp3', image: 'images/MaleniaBladeOfMiquella.jpg' },
        { title: 'Mohg', file: 'soundtracks/MohgLordOfBlood.mp3', image: 'images/MohgLordOfBlood.jpg' },
        { title: 'Radahn', file: 'soundtracks/StarscourgeRadahn.mp3', image: 'images/StarscourgeRadahn.jpg' },
        { title: 'Godfrey', file: 'soundtracks/GodfreyFirstEldenLord.mp3', image: 'images/GodfreyFirstEldenLord.jpg' },
        { title: 'Dragonlord Placidusax', file: 'soundtracks/DragonlordPlacidusax.mp3', image: 'images/DragonlordPlacidusax.jpg' },
        { title: 'Fire Giant', file: 'soundtracks/FireGiant.mp3', image: 'images/FireGiant.jpg' },
        { title: 'The Final Battle', file: 'soundtracks/TheFinalBattle.mp3', image: 'images/TheFinalBattle.jpg' },
        { title: 'Rennala', file: 'soundtracks/RennalaQueenOfTheFullMoon.mp3', image: 'images/RennalaQueenOfTheFullMoon.jpg' },
        { title: 'Morgott', file: 'soundtracks/MorgottTheOmenKing.mp3', image: 'images/MorgottTheOmenKing.jpg' },
        { title: 'Margit', file: 'soundtracks/MargitTheFellOmen.mp3', image: 'images/MargitTheFellOmen.jpg' },
        { title: 'Regal Ancestor', file: 'soundtracks/RegalAncestorSpirit.mp3', image: 'images/RegalAncestorSpirit.jpg' },
        { title: 'Godrick', file: 'soundtracks/GodrickTheGrafted.mp3', image: 'images/GodrickTheGrafted.jpg' },
        { title: 'Rykard', file: 'soundtracks/GodDevouringSerpent.mp3', image: 'images/GodDevouringSerpent.jpg' }
    ];

    var soundtracksDiv = document.getElementById('soundtracks');

    soundtracks.forEach(function(soundtrack) {
        var div = document.createElement('div');
        div.className = 'soundtrack';
        div.style.backgroundImage = 'url(' + soundtrack.image + ')';
        div.style.backgroundSize = 'cover';
        div.style.backgroundPosition = 'center';
        div.style.backgroundRepeat = 'no-repeat';
        div.draggable = true;
    
        var title = document.createElement('p');
        title.textContent = soundtrack.title;
        div.appendChild(title);
    
        var playPauseSymbol = document.createElement('p');
        playPauseSymbol.textContent = "►";
        div.appendChild(playPauseSymbol);
    
        var audio = new Audio(soundtrack.file);
        var isPlaying = false;
    
        var clickStartX;
        var clickStartY;
    
        div.addEventListener('mousedown', function(event) {
            clickStartX = event.clientX;
            clickStartY = event.clientY;
        });
    
        div.addEventListener('mouseup', function(event) {
            var dx = event.clientX - clickStartX;
            var dy = event.clientY - clickStartY;
            if (Math.abs(dx) < 3 && Math.abs(dy) < 3) {
                if (isPlaying) {
                    audio.pause();
                    audio.currentTime = 0;
                    playPauseSymbol.textContent = "►";
                } else {
                    audio.play();
                    playPauseSymbol.textContent = "❚❚";
                }
                isPlaying = !isPlaying;
            }
        });
    
        soundtracksDiv.appendChild(div);
    });     

    var dragged;

    document.addEventListener("drag", function(event) {
    }, false);

    document.addEventListener("dragstart", function(event) {
        dragged = event.target;
        event.target.style.opacity = .5;
    }, false);

    document.addEventListener("dragend", function(event) {
        event.target.style.opacity = "";
    }, false);

    document.addEventListener("dragover", function(event) {
        event.preventDefault();
    }, false);

    document.querySelectorAll(".tier").forEach(function(element) {
        element.addEventListener("dragenter", function(event) {
            if (event.target.className == "tier") {
                event.target.style.background = "rgba(0, 255, 0, 0.2)";
            }
        }, false);

        element.addEventListener("dragleave", function(event) {
            if (event.target.className == "tier") {
                event.target.style.background = "";
            }
        }, false);

        element.addEventListener("drop", function(event) {
            event.preventDefault();
            if (event.target.className == "tier") {
                event.target.style.background = "";
                dragged.parentNode.removeChild(dragged);
                event.target.appendChild(dragged);
            }
        }, false);
    });
}