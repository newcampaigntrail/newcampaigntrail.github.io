const yearField = document.getElementById("year")
yearField.innerHTML = new Date().getFullYear()

// INITIAL BIGSHOT

const keyCodes = [66, 73, 71, 83, 72, 79, 84, 13];
const altCodes = [66, 83, 13]; // shortcut
let counter = 0;
let alt_counter = 0;
let initial = false;

document.addEventListener('keydown', function(event) {
    if (campaignTrail_temp.bigshot_mode) {
        return;
    }
    if (event.keyCode === keyCodes[counter]) {
        counter += 1;

        if (counter === keyCodes.length) {
            if (localStorage.getItem("cheated") !== "true") {
                const a = "LOOKING FOR [Irresistible Cheat Codes] THAT WILL [Blow Your Mind!?]\nWELL [Shut Your Mouth] BECAUSE YOU ARE [A Redditor!]\nTRY A LITTLE [Friday Night Work Out]...\nTHEN I'LL SHOW YOU MY\nTHEN I'LL SHOW YOU MY\n1 LEFT.";
                counter = 0;
                localStorage.setItem("cheated", true);
                alert(a);
                initial = true;
                return;
            } else {
                a = initial ? `DON'T WORRY! FOR OUR [No Time Back Guaranttee]\nTHIS IS [One Cheat Code] YOU WILL [Regret] FOR THE REST OF YOUR REDDIT POST!` : `[Heaven], are you WATCHING?`;
                campaignTrail_temp.bigshot_mode = true;
                alert(a);
                return;
            }
        }
    } else {
        counter = 0;
    }
    if (event.keyCode == altCodes[alt_counter] && localStorage.getItem("cheated") == "true") {
        alt_counter += 1;
        if (alt_counter === altCodes.length) {
            a = `ARE YOU GETTING ALL THIS [Mike]!? I'M FINALLY\nI'M FINALLY GONNA BE A BIG SHOT!!!`;
            campaignTrail_temp.bigshot_mode = true;
            alert(a);
        }
        return;
    } else {
        alt_counter = 0;
    }
});


function findCandidate(pk) {
    for (i in campaignTrail_temp.candidate_json) {
        if (campaignTrail_temp.candidate_json[i].pk == pk) {
            return [i, campaignTrail_temp.candidate_json[i].fields.first_name + " " + campaignTrail_temp.candidate_json[i].fields.last_name]
        }
    }
}

function findAnswer(pk) {
    for (i in campaignTrail_temp.answers_json) {
        if (campaignTrail_temp.answers_json[i].pk == pk) {
            return [i, campaignTrail_temp.answers_json[i].fields.description]
        }
    }
}

function findIssue(pk) {
    for (i in campaignTrail_temp.issues_json) {
        if (campaignTrail_temp.issues_json[i].pk == pk) {
            return [i, campaignTrail_temp.issues_json[i].fields.name]
        }
    }
}

function findState(pk) {
    for (i in campaignTrail_temp.states_json) {
        if (campaignTrail_temp.states_json[i].pk == pk) {
            return [i, campaignTrail_temp.states_json[i].fields.name]
        }
    }
}

function benefitCheck(objectid) {
    object = document.getElementById("question_form").children[0].children[(objectid * 3)]
    answerid = object.value
    effects = []
    i = 0
    for (i in campaignTrail_temp.answer_score_global_json) {
        if (campaignTrail_temp.answer_score_global_json[i].fields.answer == answerid) {
            effects.push(["global", campaignTrail_temp.answer_score_global_json[i]])
        }
    }
    i = 0
    for (i in campaignTrail_temp.answer_score_state_json) {
        if (campaignTrail_temp.answer_score_state_json[i].fields.answer == answerid) {
            effects.push(["state", campaignTrail_temp.answer_score_state_json[i]])
        }
    }
    i = 0
    for (i in campaignTrail_temp.answer_score_issue_json) {
        if (campaignTrail_temp.answer_score_issue_json[i].fields.answer == answerid) {
            effects.push(["issue", campaignTrail_temp.answer_score_issue_json[i]])
        }
    }
    i = 0

    console.log(effects)
    mods = ""
    for (_ = 0; _ < effects.length; _++) {
        if (effects[_][0] == "global") {
            affected = findCandidate(effects[_][1].fields.candidate)
            affected1 = findCandidate(effects[_][1].fields.affected_candidate)
            name = affected[1]
            name2 = affected1[1]
            multiplier = effects[_][1].fields.global_multiplier.toString()
            mods += "<br><em>Global:</em> Affects " + name2 + " for " + name + " by " + multiplier
        }
        if (effects[_][0] == "issue") {
            affected = findIssue(effects[_][1].fields.issue)
            name = affected[1]
            multiplier = effects[_][1].fields.issue_score.toString()
            multiplier1 = effects[_][1].fields.issue_importance.toString()
            mods += "<br><em>Issue:</em> Affects " + name + " by " + multiplier + " with a importance of " + multiplier1
        }
        if (effects[_][0] == "state") {
            affected = findState(effects[_][1].fields.state)
            candidatething = findCandidate(effects[_][1].fields.affected_candidate)
            candidatething2 = findCandidate(effects[_][1].fields.candidate)
            name1 = affected[1]
            test5 = candidatething[1]
            test6 = candidatething2[1]
            multiplier = effects[_][1].fields.state_multiplier.toString()
            mods += "<br><em>State:</em> Affects " + test5 + " for " + test6 + " in " + name1 + " by " + multiplier
        }
    }
    answerfeedback = "";
    for (let index = 0; index < campaignTrail_temp.answer_feedback_json.length - 1; index++) {
        if (answerid == campaignTrail_temp.answer_feedback_json[index].fields.answer) {
            answerfeedback = "<b>" + campaignTrail_temp.answer_feedback_json[index].fields.answer_feedback + "</b>"
            break;
        }
    }
    return '<font size="2"><b>Answer: </b>' + findAnswer(answerid)[1] + "'<br>" + "Feedback: " + answerfeedback + "'<br>" + mods + "</font><br><br>"
}

function benefitChecker() {
    questionlength = document.getElementById("question_form").children[0].children.length / 3
    nnn = ""
    for (v = 0; v < questionlength; v++) {
        n = benefitCheck(v)
        nnn += n
    }
    $("#dialogue")[0].innerHTML = nnn
    $("#dialogue").dialog();
}

function difficultyChanger() {
    var sliderValue = parseFloat(document.getElementById("difficultySlider").value);
    sliderValue = isNaN(sliderValue) == NaN ? 0.97 : sliderValue;
    var newVal = Math.pow(sliderValue / 1000, 2);
    campaignTrail_temp.difficulty_level_multiplier = newVal;
    document.getElementById("difficultyMod").innerHTML = `Multiplier: <span contenteditable="true" id='difficulty_mult_bigshot'>${newVal.toFixed(2)}</span>`;
    updateSliderValue(newVal);
    document.getElementById('difficulty_mult_bigshot').addEventListener('input', manuallyAdjustedSlider);
}

function manuallyAdjustedSlider() {
    var multiplier = parseFloat(document.getElementById("difficulty_mult_bigshot").innerText);
    multiplier = isNaN(multiplier) ? 0.97 : multiplier;
    console.log(multiplier)
    var sliderValue = Math.sqrt(multiplier) * 1000;
    document.getElementById("difficultySlider").value = sliderValue;
    campaignTrail_temp.difficulty_level_multiplier = multiplier;
}

function updateSliderValue(newVal) {
    var sliderValue = Math.sqrt(newVal) * 1000;
    document.getElementById("difficultySlider").value = sliderValue;
}

document.head = document.head || document.getElementsByTagName('head')[0];

function changeFavicon(src) {
    var link = document.createElement('link'),
        oldLink = document.getElementById('dynamic-favicon');
    link.id = 'dynamic-favicon';
    link.rel = 'shortcut icon';
    link.href = src;
    if (oldLink) {
        document.head.removeChild(oldLink);
    }
    document.head.appendChild(link);
}

changeFavicon("/static/34starcircle-2.png")

$(document).ready(function() {
    var originalOptions = null;

    $('.tagCheckbox').on('change', filterEntries);

    loadEntries();

    function loadEntries() {
        $.ajax({
            type: "GET",
            url: "../static/mods/MODLOADERFILE.html",
            dataType: "text",
            success: function(response) {
                $("#modSelect").html(response);

                // hot load
                let hotload = window.localStorage.getItem("hotload");
                if (hotload) {
                    try {
                        $("#modSelect")[0].value = hotload;
                        campaignTrail_temp.hotload = hotload;
                        $("#submitMod").click();
                    } catch {

                    }
                    window.localStorage.removeItem("hotload") // this should be done whether or not there is an error.
                }

                //clone so we don't reduce the list of mods every time a tag is selected
                originalOptions = $("#modSelect option").clone();
                filterEntries();
            },
            error: function() {
                console.log("Error loading mod loader - couldn't reach server.");
            }
        });
    }

    function filterEntries() {
        var selectedTags = [];

        // Get all selected tags
        $('.tagCheckbox:checked').each(function() {
            selectedTags.push($(this).val());
        });

        var filteredOptions = originalOptions.filter(function() {
            var entryTags = $(this).data('tags');

            if (selectedTags.length === 0) {
                // Show all if no tags are selected
                return true;
            }

            //return mods that are tagged and have all checked tags
            return entryTags && (containsAllTags(entryTags, selectedTags));
        });

        var $modSelect = $('#modSelect');
        $modSelect.empty().append(filteredOptions);

        $modSelect.val($modSelect.find('option:first').val());
    }

    function containsAllTags(entryTags, selectedTags) {
        var entryTagArray = entryTags.split(' ');

        for (var i = 0; i < selectedTags.length; i++) {
            if (!entryTagArray.includes(selectedTags[i])) {
                return false;
            }
        }

        return true;
    }
});


function uwuifier(a) {
    b = a.split(" I ")
    if (b.length > 0) {
        for (i in b) {
            if (i < b.length - 1) {
                b[i] += " I-I "
            }
        }
    }
    a = b.join("")
    b = a.split("l")
    if (b.length > 0) {
        for (i in b) {
            if (i < b.length - 1) {
                b[i] += "w"
            }
        }
    }
    a = b.join("")
    b = a.split("r")
    if (b.length > 0) {
        for (i in b) {
            if (i < b.length - 1) {
                b[i] += "w"
            }
        }
    }
    a = b.join("")
    b = a.split(" t")
    if (b.length > 0) {
        for (i in b) {
            if (i < b.length - 1) {
                if (b[Number(i) + 1][0] != '-')
                    b[i] += " t-t"
                else
                    b[i] += " t"
            }
        }
    }
    a = b.join("")
    b = a.split("ow")
    if (b.length > 0) {
        for (i in b) {
            if (i < b.length - 1) {
                b[i] += "uw"
            }
        }
    }
    a = b.join("")
    return a
}

function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

num = Math.floor((Math.random() * 50) + 1)
bgnum = Math.floor((Math.random() * 4) + 1)
modernnum = Math.floor((Math.random() * 1) + 1)
bernienum = Math.floor((Math.random() * 3) + 1)
reagannum = Math.floor((Math.random() * 4) + 1)
astronum = Math.floor((Math.random() * 3) + 1)
breakingbadnum = Math.floor((Math.random() * 2) + 1)
omorichoices = ["https://cdn.discordapp.com/attachments/818130397706846242/979975422706057216/omoribanner1.png", "https://cdn.discordapp.com/attachments/818130397706846242/979980497902010398/omor2.png"]
omorichoice = choose(omorichoices)
auschoices = ["https://cdn.discordapp.com/attachments/818130397706846242/979995935402754138/aus_ban_1.png", "https://cdn.discordapp.com/attachments/818130397706846242/979997719441571850/aus_ban_2.png"]
auschoice = choose(auschoices)

utnum = Math.floor((Math.random() * 2) + 1)
nct_stuff = {}
nct_stuff.dynamicOverride = false;
nct_stuff.themes = {
    "nct": {
        name: "New Campaign Trail",
        background: "../static/images/mlk.jpg",
        banner: "../static/images/banner_" + num + ".png",
        coloring_window: "#ff6b6b",
        coloring_container: "#930301",
        coloring_title: ""
    },
    "ogtheme": {
        name: "Classic",
        background: "",
        banner: "../static/images/banner_classic.png",
        coloring_window: "",
        coloring_container: "",
        coloring_title: ""
    },
    "dark": {
        name: "Batman (Dark Theme)",
        background: "../static/images/black.jpg",
        banner: "../static/images/banner_dark.png",
        coloring_window: "#b3b3b3",
        coloring_container: "#000000",
        coloring_title: "#000000",
        text_col: "white"
    },
    "patriot": {
        name: "Patriot",
        background: "../static/images/flag_background.jpg",
        banner: "../static/images/banner_patriot.jpg",
        coloring_window: "#002e94",
        coloring_container: "#00184d",
        coloring_title: "#000c26"
    },
    "Modern": {
        name: "Modern",
        background: "../static/images/bg_" + bgnum + ".jpg",
        banner: "../static/images/modern_" + modernnum + ".png",
        coloring_window: "#8D3A3D",
        coloring_container: "#4D2794",
        coloring_title: "#194260"
    },
    "amongus": {
        name: "Amogus",
        background: "../static/images/background_amogus.jpg",
        banner: "../static/images/banner_amogus.jpg",
        coloring_window: "#b3b3b3",
        coloring_container: "#858585",
        coloring_title: "#000000",
        music: "../static/audio/amogus.mp3"
    },
    "JEB!": {
        name: "JEB!",
        background: "../static/images/jebbushbg.png",
        banner: "../static/images/banner_jeb!.png",
        coloring_window: "#F5F5DC",
        coloring_container: "#FFFF8F",
        coloring_title: "#FDDA0D"
    },
    "space": {
        name: "Space",
        background: "../static/images/background_space.jpg",
        banner: "../static/images/banner_space.png",
        coloring_window: "#b3b3b3",
        coloring_container: "#000000",
        coloring_title: "#000000",
        text_col: "white",
        music: "../static/audio/space.mp3"
    },
    "civilwar": {
        name: "Civil War",
        background: "../static/images/background_civilwar.jpg",
        banner: "../static/images/banner_civilwar.png",
        coloring_window: "#ffb38c",
        coloring_container: "#401600",
        coloring_title: "#361200",
        text_col: "white",
        music: "../static/audio/civilwar.mp3"
    },
    "wildwest": {
        name: "Wild West",
        background: "../static/images/background_wildwest.png",
        banner: "../static/images/banner_wildwest.png",
        coloring_window: "#ffe8b5",
        coloring_container: "#b8ad95",
        coloring_title: "#422200",
        music: "../static/audio/wildwest.mp3"
    },
    "Bernie": {
        name: "Bernie Sanders",
        background: "../static/images/berniebg.png",
        banner: "../static/images/bernie_" + bernienum + ".png",
        coloring_window: "#f65e5e",
        coloring_container: "#ec3e3d",
        coloring_title: "#b51314"
    },
    "Reagan": {
        name: "Ronald Reagan",
        background: "../static/images/reaganbg.png",
        banner: "../static/images/reaganbanner_" + reagannum + ".png",
        coloring_window: "#0C5679",
        coloring_container: "#F28A0F",
        coloring_title: "#E5340B"
    },
    "Gore": {
        name: "Al Gore",
        background: "../static/images/algorebg.png",
        banner: "../static/images/gorebanner.png",
        coloring_window: "#005b96",
        coloring_container: "#6497b1",
        coloring_title: "#011f4b"
    },
    "ASTRO": {
        name: "Astro",
        background: "../static/images/astrobg.png",
        banner: "../static/images/astrobanner_" + astronum + ".png",
        coloring_window: "#221c69",
        coloring_container: "#431c76",
        coloring_title: "#080942"
    },
    "UT": {
        name: "Undertale",
        background: "../static/images/utbg.png",
        banner: "../static/images/utbanner_" + utnum + ".png",
        coloring_window: "#000000",
        coloring_container: "#000000",
        coloring_title: "#000000",
        text_col: "white"
    },
    "BreakingBad": {
        name: "Breaking Bad",
        background: "../static/images/breakingbadbg.png",
        banner: "../static/images/breakingbad_" + breakingbadnum + ".png",
        coloring_window: "#093009",
        coloring_container: "#1F6032",
        coloring_title: "#369457"
    },
    "Omori": {
        name: "Oyasumi",
        background: "https://wallpapercave.com/wp/wp8392690.jpg",
        banner: omorichoice,
        coloring_window: "#0b68a5",
        coloring_container: "#0b27a5",
        coloring_title: "#0060c6"
    },
    "australia": {
        name: "Down Under",
        background: "https://www.joseflebovicgallery.com/pictures/CL179-103_12.JPG?v=1492666961",
        banner: auschoice,
        coloring_window: "#fcfc49",
        coloring_container: "#13821a",
        coloring_title: "#026b1e"
    },
    "Morbius": {
        name: "Morbius",
        background: "../static/images/background_morbius.png",
        banner: "../static/images/banner_morbius.png",
        coloring_window: "#1C7D7D",
        coloring_container: "#093F3A",
        coloring_title: "#03141C"
    }
}

window.localStorage.setItem("christmas", 0)

if (!window.localStorage.getItem("christmas")) {
    window.localStorage.setItem("christmas", 1)
    nct_stuff.christmas = true
} else {
    if (window.localStorage.getItem("christmas") == "1") {
        nct_stuff.christmas = true
    } else {
        nct_stuff.christmas = false
    }
}

nct_stuff.selectedTheme = ""
theme = window.localStorage.getItem("theme")

if (theme == null) {
    nct_stuff.selectedTheme = "nct"
} else {
    nct_stuff.selectedTheme = theme
}

//christmasSetup();

if (nct_stuff.christmas != true) {
    document.getElementById("theme_picker").innerHTML = "<select id='themePicker' onchange='themePicked()'></select>"
    document.getElementById("themePicker").innerHTML += "<option value='" + nct_stuff.selectedTheme + "'>" + nct_stuff.themes[nct_stuff.selectedTheme].name + "</option>"
    for (i in nct_stuff.themes) {
        if (i != nct_stuff.selectedTheme)
            document.getElementById("themePicker").innerHTML += "<option value='" + i + "'>" + nct_stuff.themes[i].name + "</option>"
    }

} else {
    document.getElementById("theme_picker").style.display = 'none'
}

function themePicked() {
    sel = document.getElementById("themePicker").value
    window.localStorage.setItem("theme", sel)
    location.reload()
}
susnum = Math.floor((Math.random() * 8) + 1)
stassennum = Math.floor((Math.random() * 8) + 1)
stassenyear = ["1944", "1948", "1952", "1964", "1968", "1980", "1984", "1988", "1992"]
nct_stuff.quotes = [`"All men are created equal" - Thomas Jefferson`, `"All the Way with LBJ!"`, `"Those who make peaceful revolution impossible, make violent revolution inevitable" - John Kennedy`, `"I'm Gerald Ford, and you're not."`, `"Fool me once, shame on  -  shame on you. Fool me  -  you can't get fooled again." - George W. Bush`, `"It's the economy stupid!"`, `"You shall not crucify mankind upon a cross of gold." - William Jennings Bryan`, `"Politics have no relations to morals." - Machiavelli`, `"I am not going to exploit, for political purposes, my opponent's youth and inexperience." - Ronald Reagan`, `"There are weapons of mass destruction in Iraq." - George W. Bush`, `"That was really uncalled for, Senator." - Dan Quayle`, `"My failures have been error in judgement, not intent." - Ulysses S. Grant`, `"When the president does it, that means it is not illegal" - Richard Nixon`, `"Leave nothing for tomorrow which can be done today" - Abraham Lincoln`, `"Extremism, in the defense of liberty, is no vice." - Barry Goldwater`, `"My fellow Americans, I'm pleased to tell you today that I've signed legislation that will outlaw Russia forever. We begin bombing in five minutes." - Ronald Reagan`, `"Injustice anywhere, is a threat to justice everywhere." - Martin Luther King`, `"The Dream shall never die!" - Ted Kennedy`, `"I have binders full of women!" - Mitt Romney`, `"Who am I? Why am I here?" - James Stockdale`, `"Read My Lips: No New Taxes." - George HW. Bush`, `"Thomas Jefferson lives." - John Adams`, `"Tippecanoe and Tyler Too!"`, `"There is no Soviet domination of eastern Europe!" - Gerald Ford`, `"Change based on principle is progress. Constant change without principle becomes chaos." - Dwight Eisenhower`, `"Freedom is never more than one generation away from extinction."" - Ronald Reagan`, ` "Ladies and gentlemen, I don't know whether you fully understand that I have just been shot," - Theodore Roosevelt`, `"DEWEY DEFEATS TRUMAN"`, `"Hell no, we won't go!"`, '"Hey, hey, LBJ, how many kids did you kill today?"', `"Vote for the Crook: It’s Important!`, `"Every man a king, but no one wears a crown!"`, `"Keep cool with Coolidge!"`, `"Don't swap horses in the middle of the stream."`, `"Mr. Gorbachev, tear down this wall!" - Ronald Reagan`, `"Pokémon Go to the Polls!" - Hillary Clinton`, `"The only thing we have to fear is fear itself." - Franklin Roosevelt`, `"Only those who have the courage to fail greatly achieve greatly." - Robert Kennedy`, `"Amnesty, acid, and abortion."`, `"In your heart, you know he's right!"`, `"Give me liberty, or give me death!" - Patrick Henry`, `"Vote for Taft now, you can vote for Bryan anytime!"`, `"Vote for the crook. It's important."`, `"Blaine, Blaine, James G. Blaine, The Continental Liar from the State of Maine!"`, `"I like Ike!"`, `"A house divided can not stand." - Abraham Lincoln`, `"Ask not what your country can do for you- ask what you can do for your country." - John Kennedy`, `"Give me six hours to chop down a tree and I will spend four sharpening the axe" - Abraham Lincoln`]
    //nct_stuff.quotes = ["Remember, if your campaign manager isn't yelling at you, you're playing this game wrong.","Ralph Nader won in 2000","The American people are tired of women - Bernie Sanders","So I can just write anything here and it appears on the website?","Vote for President Johnson on November 3rd. The stakes are too high for you to stay home.","Dewey Defeats Truman!","You are not immune to 306-232","Read my lips. No new taxes","I did not have sexual relations with that woman","You know that your future still lies ahead of you.","Obligatory Wallave mention","if you don’t vote for me, ‘you ain’t black!","Fool me once, shame on...shame on you. Fool me—you can't get fooled again","We won this election by a lot!","Created by Al Gore under the pseudonym Dan Bryan","Senator, you’re no Dan Bryan","Yes, I would support the death penalty in that instance, Mr.Shaw","Making a mod; need a moder and a coder","We stan Dan Bryan in this household!","Most Americans wonder if you hit your head the wrong way getting out of bed this morning.","When he’s a tariff man through and through😩😩😩","Are you an Egghead or Lemonhead?","DO NOT LOOK UP WHERE HUBERT HUMPHREY WAS BORN","50 unban, 60% rual", "Look being a moderator, is all about learning from mistakes...", "Now with 30% less damn commies <font size='1'>McCarthy Approved</font>","I’ve never seen a skinny person drink Diet Coke","Alright. Way to get that crowd fired up.","<font size='1'>This is a good, liberal answer that will motivate your base. As always, make sure you strike the right balance between appealing to moderates and getting your troops out.</font>","Harold Stassen for president "+stassenyear[stassennum]+"!","Minecraft is better", "Statement by Donald J. Trump, 45th President of the United States of America","Now with an updated mod loader! (yes, seriously)", "Feels like a good time for a fireside chat", "[Insert Undertale Reference]", "2012 is the best scenario!", "Shopping for a New Deal", "Now with 10% more sarcastic comments", "<button onclick='alert(\"bepis\")'>Click for bepis</button>", "Don't stop me now! <font size='1'>no seriously please don't</font>", "she/they #BLM #ACAB", "The Industrial Revolution and its consequences have been a disaster for the human race", "Patriot | 80 years old | Unvaxxed | In ICU with COVID 😔", "<b>NEWER CAMPAIGN TRAIL</b> when?", "I'm all alone... more or less", "Let me fly far away from here", "<audio src='https://ia601807.us.archive.org/32/items/lp_fly-me-to-the-moon_earl-grant/disc1/01.02.%20Fly%20Me%20To%20The%20Moon%20%28In%20Other%20Words%29.mp3' autoplay='true'></audio>", "I like Ike!", "Giraffes are heartless creatures", "\"People who are hungry and out of a job are the stuff of which dictatorships are made.\" - Franklin D. Roosevelt", "\"The only thing we have to fear is fear itself.\" - Franklin D. Roosevelt", "\"You are fake news.\" - Donald J. Trump", "\"What counts is not necessarily the size of the dog in the fight - it's the size of the fight in the dog.\" - Dwight D. Eisenhower", "If you don't stand for something, you will fall for anything.", "Tiocfaidh ár lá", "https://www.twitch.tv/itsastronomics", "Wow, a cow made of butter. My girls would love it. In fact, the first sentence Caroline ever said was \"I like Butter.\" - Ted Cruz", "The plan is to fan this spark into a flame but damn, it's getting dark"]
    //nct_stuff.quotes = [`It's cold outside, no kind of atmosphere!`, `I'll be honest, I reused the Christmas code from last year.`, `Turles planted the Christmas Tree of Might!`, `"I am Champion Christmas" - Son Goku`, `Let me <em>flyyyy</em> far away from here`, `2019NK is just the start`, `Waiting for Sumner 68`, `"Cold of the winter, snow settles on my face" - Christmas Khamsin`, `Do you believe in gravity?`, `Who was the person who decided to makes quotes that overflow over the text width limit, y'know I specifically tried to avoid this when making the NCT quote section >:(`, `Denying Reagan his Christmas present since 1984`, `[insert unfunny community injoke here]`, `<button onclick='alert("Made mod.")'>Click here to make mod</button>`, `Merry Holidays.`, `Happy Christmas.`, `SONS OF LIBERTY - COMING OUT 2050`, `Florida has a date with the bottom of the ocean`, `Patch 1.02 - Removed Ohio`, `Enjoying our Charlie Cristmas`, `Ron Desanta - that's it, that's the quote.`]
quotnum = Math.floor((Math.random() * nct_stuff.quotes.length))
quote = nct_stuff.quotes[quotnum]


// Caching frequently accessed elements and values
let correctbannerpar = document.getElementsByClassName("game_header")[0]
correctbannerpar.innerHTML += "<font id='wittyquote' size='4' color='white'><em>" + quote + "</em></font>"
corrr = correctbannerpar.innerHTML
var corrr = correctbannerpar.innerHTML
var header = $('#header')[0];
var gameHeader = document.getElementsByClassName("game_header")[0];
var gameWindow = $("#game_window")[0];
var container = $(".container")[0];
var campaignTrailMusic = document.getElementById('campaigntrailmusic');
var selectedTheme = nct_stuff.themes[nct_stuff.selectedTheme];
// Create a style element
var dynamicStyle = document.createElement('style');
document.head.appendChild(dynamicStyle);

// Update banner and styling
function updateBannerAndStyling() {
    header.src = selectedTheme.banner;
    header.width = 1000;
    document.body.background = selectedTheme.background;
    gameWindow.style.backgroundColor = selectedTheme.coloring_window;
    container.style.backgroundColor = selectedTheme.coloring_container;
    gameHeader.style.backgroundColor = selectedTheme.coloring_title;

    if (selectedTheme.text_col != null) {
        container.style.color = selectedTheme.text_col;
        gameWindow.style.color = "black";
    }
}

// Update inner windows styling
function updateInnerWindowsStyling() {
    var innerWindow2 = document.getElementById("inner_window_2");
    var innerWindow3 = document.getElementById("inner_window_3");
    var innerWindow4 = document.getElementById("inner_window_4");
    var innerWindow5 = document.getElementById("inner_window_5");

    if (innerWindow2 != null) {
        innerWindow2.style.backgroundColor = selectedTheme.coloring_window;
    } else if (innerWindow3 != null) {
        innerWindow3.style.backgroundColor = selectedTheme.coloring_window;
    }

    if (innerWindow4 != null) {
        innerWindow4.style.backgroundColor = selectedTheme.coloring_window;
    }

    if (innerWindow5 != null) {
        innerWindow5.style.backgroundColor = selectedTheme.coloring_window;
    }
}

// Update game header content and styling
function updateGameHeaderContentAndStyling() {
    let gameHeader = $(".game_header")[0];
    if (gameHeader.innerHTML != corrr) {
        gameHeader.innerHTML = corrr;
    }
    gameHeader.style.backgroundColor = selectedTheme.coloring_title;
    updateInnerWindowsStyling();
}

// Update CSS rules in the style element
function updateDynamicStyle() {
    if (nct_stuff.dynamicOverride) {
        return;
    }
    let dynaStyle = `
    #header {
      src: ${selectedTheme.banner};
      width: 1000px;
    }
    body {
      background: ${selectedTheme.background};
    }
    #game_window {
      background-color: ${selectedTheme.coloring_window};
      color: black;
    }
    .container {
      background-color: ${selectedTheme.coloring_container};
      color: ${selectedTheme.text_col || "inherit"};
    }
    .game_header {
      background-color: ${selectedTheme.coloring_title};
    }
    #inner_window_2 {
        background-color: ${selectedTheme.coloring_window};
      }
      #inner_window_3 {
        background-color: ${selectedTheme.coloring_window};
      }
      #inner_window_4 {
        background-color: ${selectedTheme.coloring_window};
      }
      #inner_window_5 {
        background-color: ${selectedTheme.coloring_window};
      }  
  `;
  if (dynamicStyle.innerHTML != dynaStyle) {
    dynamicStyle.innerHTML = dynaStyle;
  }
}

// Update banner, styling, and game header on interval
setInterval(function() {
    let gameHeader = $(".game_header")[0];
    if (gameHeader.innerHTML != corrr) {
        gameHeader.innerHTML = corrr;
    }
    gameHeader.style.backgroundColor = selectedTheme.coloring_title;
    updateDynamicStyle();

    //updateGameHeaderContentAndStyling();
}, 100);


if (nct_stuff.christmas != true) {
    // Update banner and styling
    updateBannerAndStyling();

    // Play music if available
    if (selectedTheme.music != null) {
        document.getElementById("music_player").style.display = "";
        campaignTrailMusic.src = selectedTheme.music;
        campaignTrailMusic.autoplay = true;
    }
} else {
    nct_stuff.themes = {
        "christmas": {
            name: "jesus christ",
            background: "../static/images/background_christmas.jpg",
            banner: "../static/images/banner_christmas_" + susnum + ".png",
            coloring_window: "#8D3A3D",
            coloring_container: "#871d0d",
            coloring_title: "#194260",
            music: "../static/audio/christmas.mp3"
        }
    };
    nct_stuff.selectedTheme = "christmas"
    selectedTheme = nct_stuff.themes.christmas;

    // Update banner and styling
    //updateBannerAndStyling();

    // Update game header content and styling
    //updateGameHeaderContentAndStyling();

    updateDynamicStyle();

    // Play music if available
    if (selectedTheme.music != null) {
        document.getElementById("music_player").style.display = "";
        campaignTrailMusic.src = selectedTheme.music;
        campaignTrailMusic.autoplay = true;
    }
}

function loadJSON(path, varr, callback = () => {}) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                eval(varr + "=JSON.parse(" + JSON.stringify(xhr.responseText.trim()) + ")");
                callback()
            } else {
                return xhr;
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}

strCopy = (toCopy) => {
    let copy = JSON.parse(JSON.stringify(toCopy));
    return copy;
}

var campaignTrail_temp = {};
ree = {}

campaignTrail_temp.election_json = {}
campaignTrail_temp.candidate_json = {}
loadJSON("../static/json/election.json", "campaignTrail_temp.election_json", () => {
    ree.election_json = strCopy(campaignTrail_temp.election_json);
})
loadJSON("../static/json/candidate.json", "campaignTrail_temp.candidate_json", () => {
    ree.candidate_json = strCopy(campaignTrail_temp.candidate_json);
})
loadJSON("../static/json/running_mate.json", "campaignTrail_temp.running_mate_json", () => {
    ree.running_mate_json = strCopy(campaignTrail_temp.running_mate_json);
})
loadJSON("../static/json/opponents.json", "campaignTrail_temp.opponents_default_json", () => {
    ree.opponents_default_json = strCopy(campaignTrail_temp.opponents_default_json);
})
loadJSON("../static/json/opponents.json", "campaignTrail_temp.opponents_weighted_json", () => {
    ree.opponents_weighted_json = strCopy(campaignTrail_temp.opponents_weighted_json);
})
loadJSON("../static/json/election_list.json", "campaignTrail_temp.temp_election_list", () => {
    ree.temp_election_list = strCopy(campaignTrail_temp.temp_election_list);
})

campaignTrail_temp.difficulty_level_json = JSON.parse("[{\"model\": \"campaign_trail.difficulty_level\", \"pk\": 1, \"fields\": {\"name\": \"Cakewalk\", \"multiplier\": 1.33}}, {\"model\": \"campaign_trail.difficulty_level\", \"pk\": 2, \"fields\": {\"name\": \"Very Easy\", \"multiplier\": 1.2}}, {\"model\": \"campaign_trail.difficulty_level\", \"pk\": 3, \"fields\": {\"name\": \"Easy\", \"multiplier\": 1.1}}, {\"model\": \"campaign_trail.difficulty_level\", \"pk\": 4, \"fields\": {\"name\": \"Normal\", \"multiplier\": 0.97}}, {\"model\": \"campaign_trail.difficulty_level\", \"pk\": 5, \"fields\": {\"name\": \"Hard\", \"multiplier\": 0.95}}, {\"model\": \"campaign_trail.difficulty_level\", \"pk\": 6, \"fields\": {\"name\": \"Impossible\", \"multiplier\": 0.9}}, {\"model\": \"campaign_trail.difficulty_level\", \"pk\": 7, \"fields\": {\"name\": \"Unthinkable\", \"multiplier\": 0.83}}, {\"model\": \"campaign_trail.difficulty_level\", \"pk\": 8, \"fields\": {\"name\": \"Blowout\", \"multiplier\": 0.75}}, {\"model\": \"campaign_trail.difficulty_level\", \"pk\": 9, \"fields\": {\"name\": \"Disaster\", \"multiplier\": 0.68}}]");
campaignTrail_temp.global_parameter_json = JSON.parse("[{\"model\": \"campaign_trail.global_parameter\", \"pk\": 1, \"fields\": {\"vote_variable\": 1.125, \"max_swing\": 0.12, \"start_point\": 0.94, \"candidate_issue_weight\": 10.0, \"running_mate_issue_weight\": 3.0, \"issue_stance_1_max\": -0.71, \"issue_stance_2_max\": -0.3, \"issue_stance_3_max\": -0.125, \"issue_stance_4_max\": 0.125, \"issue_stance_5_max\": 0.3, \"issue_stance_6_max\": 0.71, \"global_variance\": 0.01, \"state_variance\": 0.005, \"question_count\": 25, \"default_map_color_hex\": \"#C9C9C9\", \"no_state_map_color_hex\": \"#999999\"}}]");
campaignTrail_temp.candidate_dropout_json = JSON.parse("[{\"model\": \"campaign_trail.candidate_dropout\", \"pk\": 1, \"fields\": {\"candidate\": 36, \"affected_candidate\": 18, \"probability\": 1.0}}]");
campaignTrail_temp.show_premium = true;
campaignTrail_temp.premier_ab_test_version = -1;
campaignTrail_temp.credits = "Dan Bryan";


// BIGSHOT MENU

const cheatMenu = document.querySelector('.cheat_menu');
const minimizeBtn = document.querySelector('#minimizeBtn');

minimizeBtn.addEventListener('click', () => {
    cheatMenu.classList.toggle('minimized');
});

$("#bigshotSkipBtn").click((e) => {
    e.preventDefault();

    let question_count = campaignTrail_temp.global_parameter_json[0].fields.question_count;
    let requested_question = Number(document.getElementById('skiptoquestion').value);

    // error handling in case the user is stupid
    if (requested_question > question_count - 1) {
        let a = confirm("You are trying to go over the question limit. This will likely break unless the mod maker specifically made questions for this (possibly for CYOA). Are you sure?");
        if (!a) return
    }
    if (requested_question < 0) {
        let a = confirm("You are trying to go below question 1. This will almost certainly break. Are you sure?");
        if (!a) return
    }

    campaignTrail_temp.question_number = requested_question;

    let sfx = $('#sfxMeme')[0];
    sfx.volume = 0.1;
    sfx.play();
});

duplicate_globals = {}

$("#disableRNG").change((a) => {
    a.preventDefault();

    let checkbox = a.target;
    let checked = checkbox.checked;

    if (!checked) {
        duplicate_globals = JSON.parse(JSON.stringify(campaignTrail_temp.global_parameter_json[0]));
        campaignTrail_temp.global_parameter_json[0].fields.global_variance = 0;
        campaignTrail_temp.global_parameter_json[0].fields.state_variance = 0;
        campaignTrail_temp.global_parameter_json[0].fields.max_swing = 0;
    } else {
        campaignTrail_temp.global_parameter_json[0] = JSON.parse(JSON.stringify(duplicate_globals));
    }
})

$("#skiptoquestion").keydown((e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        $("#bigshotSkipBtn").click();
    }
});