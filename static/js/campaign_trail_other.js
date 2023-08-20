var hotkey_handler = (event) => {
    if (nct_stuff.bigshot_activation) {
        nct_stuff.bigshot_activation = false;
        return;
    }
    
    // opening menu selection
    if (document.querySelector("#game_start") && $("#modloaddiv")[0].style.display == "none") {
        if (event.key == "Enter" || event.key == "ArrowRight") {
            $("#game_start").click();
            return;
        }
        if (event.key == "m") {
            $("#modLoadReveal").click();
            return;
        }
    }

    // mod loader
    if ($("#modloaddiv")[0].style.display != "none") {
        if (event.key == "Escape") {
            $("#mod_loader_overlay_block").click();
            return;
        }
    }

    // election year selection
    if (document.querySelector("#election_year_form")) {
        if (event.key === "Enter" || event.key == "ArrowRight") {
            $("#election_id_button").click();
            return;
        }

        // arrow events to control value in dropdown
        const arrowKey = event.key === "ArrowUp" || event.key === "ArrowDown";
        if (!arrowKey) {
            return;
        }

        event.preventDefault(); // no scrolling!
        
        const electionSelect = $("#election_id")[0];
        const electionOptions = Array.from(electionSelect.children);
        const currentSelection = electionSelect.value;
        const index = electionOptions.findIndex(option => option.value === currentSelection);
        let newIndex;
        
        if (event.key === "ArrowDown") {
            newIndex = index + 1 > electionOptions.length - 1 ? 0 : index + 1;
        } else if (event.key === "ArrowUp") {
            newIndex = index - 1 < 0 ? electionOptions.length - 1 : index - 1;
        }
        
        electionSelect.selectedIndex = newIndex;
        $(electionSelect).trigger('change');
        return;
    }

    // candidate selection
    if (document.querySelector("#candidate_form")) {
        if (event.key === "Enter" || event.key == "ArrowRight") {
            $("#candidate_id_button").click();
            return;
        }
        if (event.key === "Backspace" || event.key == "ArrowLeft") {
            $("#candidate_id_back").click();
            return;
        }

        const arrowKey = event.key === "ArrowUp" || event.key === "ArrowDown";
        if (!arrowKey) {
            return;
        }

        event.preventDefault(); // no scrolling!
        
        const candidateSelect = $("#candidate_id")[0];
        const candidateOptions = Array.from(candidateSelect.children);
        const currentSelection = candidateSelect.value;
        const index = candidateOptions.findIndex(option => option.value === currentSelection);
        let newIndex;
        
        if (event.key === "ArrowDown") {
            newIndex = index + 1 > candidateOptions.length - 1 ? 0 : index + 1;
        } else if (event.key === "ArrowUp") {
            newIndex = index - 1 < 0 ? candidateOptions.length - 1 : index - 1;
        }
        
        candidateSelect.selectedIndex = newIndex;
        $(candidateSelect).trigger('change');
        return;
    }

    // running mate selection
    if (document.querySelector("#running_mate_form")) {
        if (event.key === "Enter" || event.key == "ArrowRight") {
            $("#running_mate_id_button").click();
            return;
        }
        if (event.key === "Backspace" || event.key == "ArrowLeft") {
            $("#running_mate_id_back").click();
            return;
        }

        const arrowKey = event.key === "ArrowUp" || event.key === "ArrowDown";
        if (!arrowKey) {
            return;
        }

        event.preventDefault(); // no scrolling!
        
        const runningMateSelect = $("#running_mate_id")[0];
        const runningMateOptions = Array.from(runningMateSelect.children);
        const currentSelection = runningMateSelect.value;
        const index = runningMateOptions.findIndex(option => option.value === currentSelection);
        let newIndex;
        
        if (event.key === "ArrowDown") {
            newIndex = index + 1 > runningMateOptions.length - 1 ? 0 : index + 1;
        } else if (event.key === "ArrowUp") {
            newIndex = index - 1 < 0 ? runningMateOptions.length - 1 : index - 1;
        }
        
        runningMateSelect.selectedIndex = newIndex;
        $(runningMateSelect).trigger('change');
        return;
    }

    // difficulty selection
    if (document.querySelector("#opponent_selection_description_window")) {
        if (event.key === "Enter" || event.key == "ArrowRight") {
            $("#opponent_selection_id_button").click();
            return;
        }
        if (event.key === "Backspace" || event.key == "ArrowLeft") {
            $("#opponent_selection_id_back").click();
            return;
        }

        const arrowKey = event.key === "ArrowUp" || event.key === "ArrowDown";
        if (!arrowKey) {
            return;
        }

        event.preventDefault(); // no scrolling!
        
        const difficultySelect = $("#difficulty_level_id")[0];
        const diffOptions = Array.from(difficultySelect.children);
        const currentSelection = difficultySelect.value;
        const index = diffOptions.findIndex(option => option.value === currentSelection);
        let newIndex;
        
        if (event.key === "ArrowDown") {
            newIndex = index + 1 > diffOptions.length - 1 ? 0 : index + 1;
        } else if (event.key === "ArrowUp") {
            newIndex = index - 1 < 0 ? diffOptions.length - 1 : index - 1;
        }
        
        difficultySelect.selectedIndex = newIndex;
        $(difficultySelect).trigger('change');
        return;
    }
    
    // question events    
    if (document.querySelector("#question_form")) {
        let answers = Array.from($(".game_answers"));

        if (event.key == "Enter" || event.key == "ArrowRight") {
            if ($("#ok_button")[0]) {
                $("#ok_button").click();
                return;
            }
            let anySelected = false;
            answers.forEach(f=>{if (f.checked) anySelected = true});

            if (!anySelected) {
                answers[Math.floor(Math.random() * answers.length)].click();
                return;
            }

            $("#answer_select_button").click();
            return;
        }
        if ($("#ok_button")[0]) {
            return;
        }

        if (event.key == "ArrowLeft") {
            $("#view_electoral_map").click();
            return;
        }
    
        let selection = answers.findIndex(f=>f.checked);

        if (event.key === "ArrowDown") {
            event.preventDefault();
            selection = selection + 1 > answers.length - 1 ? 0 : selection + 1;
        } else if (event.key === "ArrowUp") {
            event.preventDefault();
            selection = selection - 1 < 0 ? answers.length - 1 : selection - 1;
        } else {
            selection = Number(event.key) - 1
        }

        if (!answers[selection]) {
            return;
        }
        answers[selection].click();
        return;
    }

    // poll view
    if (document.querySelector("#AdvisorButton")) {
        if (event.key == "Enter" || event.key == "ArrowRight") {
            $("#resume_questions_button").click();
        }
        return;
    }

    // visit map
    if (document.querySelector(".visit_text")) {
        if (event.key == "Enter" || event.key == "ArrowRight") {
            if ($("#confirm_visit_button")[0]) {
                $("#confirm_visit_button").click();
                return;
            }
            let stateElems = Array.from($("#map_container").children(0).children(0)).filter(f=>f.tagName == "path").filter((f, i, e)=>i > e.length/2);
            $(stateElems[Math.floor(Math.random()*stateElems.length)]).click();
            return;
        }
        if (event.key === "Backspace" || event.key == "ArrowLeft") {
            if ($("#no_visit_button")[0]) {
                $("#confirm_visit_button").click();
                return;
            }
        }
        return;
    }

    // election night
    if (document.querySelector("#final_result_button")) {
        if (event.key == "Enter" || event.key == "ArrowRight") {
            if ($("#election_night_buttons")[0]) {
                $("#ok_button").click();
                return;
            }
            if ($("#winner_buttons")[0]) {
                $("#ok_button").click();
                return;
            }
            $("#final_result_button").click();
        }
        return;
    }

    // ending screen
    if ($(".final_menu_button").length > 0) {
        const arrowKey = event.key === "ArrowLeft" || event.key === "ArrowRight";
        if (!arrowKey) {
            return;
        }

        let buttons = Array.from($(".final_menu_button"));
        buttons = buttons.slice(0, buttons.length - 1); // we don't want the play again button included
        const currentSelection = buttons.findIndex(f=>f.disabled);
        let newIndex;
        
        if (event.key === "ArrowRight") {
            newIndex = currentSelection + 1 > buttons.length - 1 ? 0 : currentSelection + 1;
        } else if (event.key === "ArrowLeft") {
            newIndex = currentSelection - 1 < 0 ? buttons.length - 1 : currentSelection - 1;
        }
        
        buttons[newIndex].click();
        return;

    }
}

document.body.addEventListener("keydown", hotkey_handler);

// kromer killer :pensive:

const observer = new MutationObserver((mutationsList, observer) => {
    if (document.querySelector("#question_form")) {
        document.removeEventListener("keydown", bigshot_key_handler);
        observer.disconnect();
    }
});

observer.observe(document.body, { childList: true, subtree: true });

// BONUS: 2000N soundtrack player formalised

// Initialise custom music

$("#music_player")[0].children[0].style.display = "none"
$("#music_player")[0].children[1].style.display = "none"

musicBox = document.getElementById("music_player")
musicBox.style.display = ""

var trackSel;
e = campaignTrail_temp
e.selectedSoundtrack = 0

toTime = (seconds) => {
    var date = new Date(null);
    date.setSeconds(seconds);
    return date.toISOString().substr(11, 8);
}

generateTime = () => {
    // Get the audio element
    var audio = document.getElementById("campaigntrailmusic");

    timeTracker = document.createElement("div");
    timeTracker.style = `
        text-align:left;
        border-style:solid;
        border-width:3px;
        height:150px;
        width:200px;
        background-color:#999999;
        float:right;
        padding: 10px;
      `
    $("#trackSelParent")[0].prepend(timeTracker);
    $("#trackSelParent")[0].prepend(document.createElement("br"));

    // Create a new element to display the current position of the audio
    var positionDisplay = document.createElement("gg");
    positionDisplay.id = "position-display";

    // Create a new slider element to change the time
    var timeSlider = document.createElement("input");
    timeSlider.type = "range";
    timeSlider.min = 0;
    timeSlider.max = 1;
    timeSlider.step = 0.001;
    timeSlider.value = 0;
    timeSlider.style.width = "200px";
    timeSlider.id = "time-slider";

    var pausePlay = document.createElement("button");
    pausePlay.id = "position-display";
    pausePlay.innerHTML = "<b>Play</b>"
    pausePlay.style.width = "100%";


    pausePlay.addEventListener("click", event => {
        event.preventDefault();
        updatePositionDisplay();
        let audio = document.getElementById("campaigntrailmusic");
        if (audio.paused) {
            audio.play();
            event.target.innerHTML = "<b>Pause</b>";
            return;
        }
        audio.pause();
        event.target.innerHTML = "<b>Play</b>";
        return;
    })

    var volumeLabel = document.createElement("gg");
    volumeLabel.id = "volume-label";
    volumeLabel.innerHTML = "<br><b>Volume: </b>"

    var volumeSlider = document.createElement("input");
    volumeSlider.type = "range";
    volumeSlider.min = 0;
    volumeSlider.max = 1;
    volumeSlider.step = 0.001;
    volumeSlider.value = 0;
    volumeSlider.style.width = "200px";
    volumeSlider.id = "volume-slider";

    volumeSlider.value = audio.volume;

    timeTracker.appendChild(pausePlay);
    timeTracker.appendChild(document.createElement("br"));
    timeTracker.appendChild(document.createElement("br"));
    timeTracker.appendChild(positionDisplay);
    timeTracker.appendChild(timeSlider);
    timeTracker.appendChild(volumeLabel);
    timeTracker.appendChild(volumeSlider);

    updatePositionDisplay();

    //for (let i = 0; i < 10; i++)
    //timeTracker.append(document.createElement("br"));


    // Function to update the position display
    function updatePositionDisplay() {
        positionDisplay.innerHTML = "<b>Time:</b> " + toTime(audio.currentTime) + "<br>";
        timeSlider.value = audio.duration ? audio.currentTime / audio.duration : 0;
    }

    // Function to change the time of the audio
    function changeTime() {
        positionDisplay.innerHTML = "<b>Time:</b> " + toTime(audio.currentTime) + "<br>";
        audio.currentTime = timeSlider.value * audio.duration;
    }

    updateVolume = event => {
        audio.volume = event.target.value;
    }

    // Update the position display and slider every second
    setInterval(updatePositionDisplay, 1000);

    // Listen for changes to the time slider and change the time of the audio
    timeSlider.addEventListener("input", changeTime);
    volumeSlider.addEventListener("input", updateVolume)
}

function newMusicPlayer() {
    if ($("#trackSel").length != 0) {
        document.getElementById("trackSelParent").remove()
    }
    trackSel = document.createElement("div");
    trackSel.id = "trackSelParent"
    let z = `<br><br><br><br><br><br><br><br><br><br><div id='trackSel' style="text-align:left;border-style:solid;border-width:3px;overflow-y: scroll;overflow-x: hidden;height:200px; width:400px;background-color:#999999;float:right;">`
    z += `<b><select id='selectSoundtrack'><option value='` + e.soundtracks[e.selectedSoundtrack].name + `'>` + e.soundtracks[e.selectedSoundtrack].name + "</option>"
    for (i in e.soundtracks) {
        if (e.soundtracks[e.selectedSoundtrack] != e.soundtracks[i]) {
            z += `<option value='` + e.soundtracks[i].name + `'>` + e.soundtracks[i].name + `</option>`
        }
    }
    z += `</select></b><br><br>`
        // <label><input type="radio" name="option" value="option1">Option 1</label><br>
    for (i in e.soundtracks[e.selectedSoundtrack].tracklist) {
        let a = e.soundtracks[e.selectedSoundtrack].tracklist[i]
        let b = `<label><input class="trackSelector" type="radio" name="trackSelector" value="` + i + `">` + a.name + `</label><br>`
        z += b
    }
    z += "</div><br><br>"
    trackSel.innerHTML = z

    // select correct song

    musicBox.appendChild(trackSel);
    Array.from(document.getElementById("trackSel").children).filter(f => {
        return f.tagName == "LABEL"
    }).map(f => f.children[0])[0].checked = true

    // set soundtrack changer

    soundtrackSelector = document.getElementById("selectSoundtrack")
    soundtrackSelector.onchange = function() {
        for (i in e.soundtracks) {
            if (e.soundtracks[i].name == soundtrackSelector.value) {
                e.selectedSoundtrack = i
                break
            }
        }
        document.getElementById("trackSelParent").remove()
        newMusicPlayer()
    }

    var matches = document.querySelectorAll('.trackSelector');

    for (match in matches) {
        matches[match].onchange = function() {
            audio = $("#campaigntrailmusic")[0];
            audio.src = e.soundtracks[e.selectedSoundtrack].tracklist[this.value].url
            audio.currentTime = 0
            audio.autoplay = true;
        }
    }

    audio = $("#campaigntrailmusic")[0];
    audio.autoplay = false

    musicBox.children[2].loop = false
    musicBox.children[2].src = e.soundtracks[e.selectedSoundtrack].tracklist[0].url

    musicBox.children[2].onended = function() {
        let selected = Number(document.querySelector('input[name="trackSelector"]:checked').value);
        let newSel = clamp(selected + 1, e.soundtracks[e.selectedSoundtrack].tracklist.length - 1, 0)
        let buttons = Array.from(document.getElementById("trackSel").children).filter(f => {
                return f.tagName == "LABEL"
            }).map(f => f.children[0])
            //let selectedIndex = buttons.map(f=>f.children[0]).map(f=>f.checked)
        buttons[newSel].click();
    }

    for (w = 0; w < 7; w++) {
        document.getElementById("trackSelParent").appendChild(document.createElement("br"))
    }

    generateTime();

}

clamp = function(a, max, min, overflow = true) {
    if (overflow) {
        return a > max ? min : a < min ? max : a;
    }
    return a > max ? max : a < min ? min : a;
}


// example track list

e.soundtracks = {
    0: {
        name: "Everywhere at the End of Time", // nowayyy 2000N!>?!?!?11//1/1
        tracklist: [
            {
                "name": "The Caretaker - E1; Back There Benjamin",
                "url": "https://cdn.discordapp.com/attachments/810034515334004766/1074235126654959696/e1.mp3"
            }
        ]
    }
}

// bonus for shining theme

if (nct_stuff.selectedTheme == "shining") {
    e.soundtracks = [
        {
            name: "The Beautiful",
            tracklist: [
                {
                    name: "06 Concerto No. 2 in G Minor, RV 315 Summer: III. Presto - Vivaldi: The Four Seasons",
                    url: "https://cdn.discordapp.com/attachments/810034515334004766/1142207109442838639/concerto.mp3"
                },
                {
                    name: "Beethoven - Moonlight Sonata",
                    url: "https://cdn.discordapp.com/attachments/810034515334004766/1142073582810304623/moonlight_sonata.mp3"
                },
                {
                    name: "Brahms - Hungarian Dance No. 5",
                    url: "https://cdn.discordapp.com/attachments/810034515334004766/1142220507480076408/hungarian.mp3"
                },
                {
                    name: "Beethoven - 5th Symphony in C Minor",
                    url: "https://cdn.discordapp.com/attachments/810034515334004766/1142073582206320650/5th_movement.mp3"
                },
                {
                    name: "Tchaikovsky - 1812 Overture",
                    url: "https://cdn.discordapp.com/attachments/810034515334004766/1142206148800430120/1812_overture.mp3"
                },
                {
                    name: "Carl Orff - O Fortuna ~ Carmina Burana",
                    url: "https://cdn.discordapp.com/attachments/810034515334004766/1142207750621888542/fortuna.mp3"
                },
                {
                    name: "Dmitri Shostakovich - Waltz No. 2",
                    url: "https://cdn.discordapp.com/attachments/810034515334004766/1142208300079927417/waltz.mp3"
                }
            ]
        },
        {
            name: "In Liberating Strife",
            tracklist: [
                {
                    name: "Bob Dylan - Masters of War",
                    url: "https://cdn.discordapp.com/attachments/810034515334004766/1142223392553062511/war.mp3"
                },
                {
                    name: "Randall Hammer - Bella Ciao",
                    url: "https://cdn.discordapp.com/attachments/810034515334004766/1142211620978823228/bella_ciao.mp3"
                },
                {
                    name: "Interlude 1",
                    url: "https://cdn.discordapp.com/attachments/810034515334004766/1142214642777735238/allende.mp3"
                },
                {
                    name: "Verdi - Drinking Song (cover by Bridget Mermikides)",
                    url: "https://cdn.discordapp.com/attachments/810034515334004766/1142214135992553583/drinking_song.mp3"
                },
                {
                    name: "Interlude 2",
                    url: "https://cdn.discordapp.com/attachments/810034515334004766/1142213172766441583/death.mp3"
                },
                {
                    name: "Rammstein - Amerika",
                    url: "https://cdn.discordapp.com/attachments/810034515334004766/1142210127861125250/amerika.mp3"
                },
                {
                    name: "Mefisto - Let Go of Life",
                    url: "https://cdn.discordapp.com/attachments/810034515334004766/1142221135828758648/let_go.mp3"
                }
            ]
        }
    ]
    newMusicPlayer();
}