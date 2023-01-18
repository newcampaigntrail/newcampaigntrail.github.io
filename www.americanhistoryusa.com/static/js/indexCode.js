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
    },
    "lgbtqpride": {
        name: "Pride Month",
        background: "https://images.foxtv.com/static.fox29.com/www.fox29.com/content/uploads/2019/07/1280/720/48163187801_2f5c8df352_o.jpg?ve=1&tl=1",
        banner: "https://media.discordapp.net/attachments/818130397706846242/981446618937188372/pride.jpg",
        coloring_window: "#380069",
        coloring_container: "#5a00a8",
        coloring_title: "#380069",
        music: "https://cdn.discordapp.com/attachments/818130397706846242/981591347129618482/yt5s.com_-_Diana_Ross_-_Im_Coming_Out_128_kbps.mp3"
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

/*
let christmasToggle = document.createElement("button")
if (nct_stuff.christmas) {
    christmasToggle.innerHTML = "Disable Christmas"
    christmasToggle.onclick = function() {
        window.localStorage.setItem("christmas", 0)
        window.location.reload()
    }
} else {
    christmasToggle.innerHTML = "Enable Christmas"
    christmasToggle.onclick = function() {
        window.localStorage.setItem("christmas", 1)
        window.location.reload()
    }
}
christmasToggle.style = `position:fixed;left:10px;bottom:10px`
christmasToggle.id = "christmasToggler"
document.body.appendChild(christmasToggle)
*/

nct_stuff.selectedTheme = ""
theme = window.localStorage.getItem("theme")

/*
var theGrinch = window.setInterval(function() {
  if (document.getElementById("inner_window_1")) {
    return false;
  }
  let toggler = document.getElementById("christmasToggler")
  toggler.remove()
  window.clearInterval(theGrinch)
},100)
*/

if (theme == null) {
    nct_stuff.selectedTheme = "nct"
} else {
    nct_stuff.selectedTheme = theme
}

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
    if (sel == "ogtheme") {
        BSColour = "black"
    } else {
        BSColour = "white"
    }
    window.localStorage.setItem("theme", sel)
    location.reload()
}
susnum = Math.floor((Math.random() * 8) + 1)
stassennum = Math.floor((Math.random() * 8) + 1)
stassenyear = ["1944", "1948", "1952", "1964", "1968", "1980", "1984", "1988", "1992"]
  nct_stuff.quotes=[`"All men are created equal" - Thomas Jefferson`,`"All the Way with LBJ!"`,`"Those who make peaceful revolution impossible, make violent revolution inevitable" - John Kennedy`,`"I'm Gerald Ford, and you're not."`,`"Fool me once, shame on  -  shame on you. Fool me  -  you can't get fooled again." - George W. Bush`,`"It's the economy stupid!"`,`"You shall not crucify mankind upon a cross of gold." - William Jennings Bryan`,`"Politics have no relations to morals." - Machiavelli`,`"I am not going to exploit, for political purposes, my opponent's youth and inexperience." - Ronald Reagan`,`"There are weapons of mass destruction in Iraq." - George W. Bush`,`"That was really uncalled for, Senator." - Dan Quayle`,`"My failures have been error in judgement, not intent." - Ulysses S. Grant`,`"When the president does it, that means it is not illegal" - Richard Nixon`,`"Leave nothing for tomorrow which can be done today" - Abraham Lincoln`, `"Extremism, in the defense of liberty, is no vice." - Barry Goldwater`,`"My fellow Americans, I'm pleased to tell you today that I've signed legislation that will outlaw Russia forever. We begin bombing in five minutes." - Ronald Reagan`,`"Injustice anywhere, is a threat to justice everywhere." - Martin Luther King`,`"The Dream shall never die!" - Ted Kennedy`,`“I have binders full of women!” - Mitt Romney`,`“Who am I? Why am I here?” - James Stockdale`, `"Read My Lips: No New Taxes." - George HW. Bush`, `"Thomas Jefferson lives." - John Adams`,`"Tippecanoe and Tyler Too!"`,`"There is no Soviet domination of eastern Europe!" - Gerald Ford`,`"Change based on principle is progress. Constant change without principle becomes chaos." - Dwight Eisenhower`,`"Freedom is never more than one generation away from extinction."" - Ronald Reagan`,` "Ladies and gentlemen, I don't know whether you fully understand that I have just been shot," - Theodore Roosevelt`,`"DEWEY DEFEATS TRUMAN"`,`"Hell no, we won't go!"`,'"Hey, hey, LBJ, how many kids did you kill today?"',`"Vote for the Crook: It’s Important!`,`"Every man a king, but no one wears a crown!"`,`"Keep cool with Coolidge!"`,`"Don't swap horses in the middle of the stream."`,`"Mr. Gorbachev, tear down this wall!" - Ronald Reagan`,`"Pokémon Go to the Polls!" - Hillary Clinton`,`"The only thing we have to fear is fear itself."-Franklin Roosevelt`,`“Only those who have the courage to fail greatly achieve greatly.” - Robert Kennedy`,`"Amnesty, acid, and abortion."`,`"In your heart, you know he's right!"`,`"Give me liberty, or give me death!" - Patrick Henry`,`"Vote for Taft now, you can vote for Bryan anytime!"`,`"Vote for the crook. It's important."`,`"Blaine, Blaine, James G. Blaine, The Continental Liar from the State of Maine!"`,`"I like Ike!"`,`"A house divided can not stand."-Abraham Lincoln`,`"Ask not what your country can do for you- ask what you can do for your country." - John Kennedy`,`"Give me six hours to chop down a tree and I will spend four sharpening the axe" - Abraham Lincoln`]
  //nct_stuff.quotes = ["Remember, if your campaign manager isn't yelling at you, you're playing this game wrong.","Ralph Nader won in 2000","The American people are tired of women - Bernie Sanders","So I can just write anything here and it appears on the website?","Vote for President Johnson on November 3rd. The stakes are too high for you to stay home.","Dewey Defeats Truman!","You are not immune to 306-232","Read my lips. No new taxes","I did not have sexual relations with that woman","You know that your future still lies ahead of you.","Obligatory Wallave mention","if you don’t vote for me, ‘you ain’t black!","Fool me once, shame on...shame on you. Fool me—you can't get fooled again","We won this election by a lot!","Created by Al Gore under the pseudonym Dan Bryan","Senator, you’re no Dan Bryan","Yes, I would support the death penalty in that instance, Mr.Shaw","Making a mod; need a moder and a coder","We stan Dan Bryan in this household!","Most Americans wonder if you hit your head the wrong way getting out of bed this morning.","When he’s a tariff man through and through😩😩😩","Are you an Egghead or Lemonhead?","DO NOT LOOK UP WHERE HUBERT HUMPHREY WAS BORN","50 unban, 60% rual", "Look being a moderator, is all about learning from mistakes...", "Now with 30% less damn commies <font size='1'>McCarthy Approved</font>","I’ve never seen a skinny person drink Diet Coke","Alright. Way to get that crowd fired up.","<font size='1'>This is a good, liberal answer that will motivate your base. As always, make sure you strike the right balance between appealing to moderates and getting your troops out.</font>","Harold Stassen for president "+stassenyear[stassennum]+"!","Minecraft is better", "Statement by Donald J. Trump, 45th President of the United States of America","Now with an updated mod loader! (yes, seriously)", "Feels like a good time for a fireside chat", "[Insert Undertale Reference]", "2012 is the best scenario!", "Shopping for a New Deal", "Now with 10% more sarcastic comments", "<button onclick='alert(\"bepis\")'>Click for bepis</button>", "Don't stop me now! <font size='1'>no seriously please don't</font>", "she/they #BLM #ACAB", "The Industrial Revolution and its consequences have been a disaster for the human race", "Patriot | 80 years old | Unvaxxed | In ICU with COVID 😔", "<b>NEWER CAMPAIGN TRAIL</b> when?", "I'm all alone... more or less", "Let me fly far away from here", "<audio src='https://ia601807.us.archive.org/32/items/lp_fly-me-to-the-moon_earl-grant/disc1/01.02.%20Fly%20Me%20To%20The%20Moon%20%28In%20Other%20Words%29.mp3' autoplay='true'></audio>", "I like Ike!", "Giraffes are heartless creatures", "\"People who are hungry and out of a job are the stuff of which dictatorships are made.\" - Franklin D. Roosevelt", "\"The only thing we have to fear is fear itself.\" - Franklin D. Roosevelt", "\"You are fake news.\" - Donald J. Trump", "\"What counts is not necessarily the size of the dog in the fight - it's the size of the fight in the dog.\" - Dwight D. Eisenhower", "If you don't stand for something, you will fall for anything.", "Tiocfaidh ár lá", "https://www.twitch.tv/itsastronomics", "Wow, a cow made of butter. My girls would love it. In fact, the first sentence Caroline ever said was \"I like Butter.\" - Ted Cruz", "The plan is to fan this spark into a flame but damn, it's getting dark"]
  //nct_stuff.quotes = [`It's cold outside, no kind of atmosphere!`, `I'll be honest, I reused the Christmas code from last year.`, `Turles planted the Christmas Tree of Might!`, `"I am Champion Christmas" - Son Goku`, `Let me <em>flyyyy</em> far away from here`, `2019NK is just the start`, `Waiting for Sumner 68`, `"Cold of the winter, snow settles on my face" - Christmas Khamsin`, `Do you believe in gravity?`, `Who was the person who decided to makes quotes that overflow over the text width limit, y'know I specifically tried to avoid this when making the NCT quote section >:(`, `Denying Reagan his Christmas present since 1984`, `[insert unfunny community injoke here]`, `<button onclick='alert("Made mod.")'>Click here to make mod</button>`, `Merry Holidays.`, `Happy Christmas.`, `SONS OF LIBERTY - COMING OUT 2050`, `Florida has a date with the bottom of the ocean`, `Patch 1.02 - Removed Ohio`, `Enjoying our Charlie Cristmas`, `Ron Desanta - that's it, that's the quote.`]
quotnum = Math.floor((Math.random() * nct_stuff.quotes.length))
quote = nct_stuff.quotes[quotnum]
    // Banner Stuff
banner = $('#header')[0];
//num = 22
banner.src = nct_stuff.themes[nct_stuff.selectedTheme].banner
correctbannerpar = document.getElementsByClassName("game_header")[0]
correctbannerpar.innerHTML += "<font id='wittyquote' size='4' color='white'><em>" + quote + "</em></font>"
corrr = correctbannerpar.innerHTML
banner.width = 1000
if (true)
    document.body.background = nct_stuff.themes[nct_stuff.selectedTheme].background
else if (nct_stuff.selectedTheme == "nct") {
    document.body.background = "https://upload.wikimedia.org/wikipedia/commons/6/6b/1984-Big-Brother.jpg"
    document.body.style.fontFamily = "Comic Sans MS"
    document.getElementsByClassName("game_header")[0].children[0].innerHTML = "haha I said gorg wlave laugh!!11!"
    vvv = document.getElementById("inner_window_1")
    vvv.children[0].innerText = uwuifier(vvv.children[0].innerText)
    vvv.children[1].innerText = uwuifier(vvv.children[1].innerText)
    document.getElementById("game_start").children[0].innerText = uwuifier(document.getElementById("game_start").innerText)
    setInterval(function() {
        es = document.getElementById("election_summary")
        if (es != null && es.children[0].innerHTML != uwuifier(es.children[0].innerHTML)) {
            for (i in es.children) {
                es.children[i].innerHTML = uwuifier(es.children[i].innerHTML)
            }
        }
        ps = document.getElementById("candidate_summary")
        if (ps != null && ps.children[0].children[0].innerHTML != uwuifier(ps.children[0].children[0].innerHTML)) {
            for (v = 0; v < ps.children[0].children.length; v++) {
                ps.children[0].children[v].innerHTML = uwuifier(ps.children[0].children[v].innerHTML)
            }
            ps.children[1].innerText = uwuifier(ps.children[1].innerText)
        }
    }, 100)
}
$("#game_window")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_window
$(".container")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_container
document.getElementsByClassName("game_header")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_title
if (nct_stuff.themes[nct_stuff.selectedTheme].text_col != null) {
    $(".container")[0].style.color = nct_stuff.themes[nct_stuff.selectedTheme].text_col
    $("#game_window")[0].style.color = "black"
}
if (nct_stuff.themes[nct_stuff.selectedTheme].music != null) {
    document.getElementById("music_player").style.display = ""
    document.getElementById('campaigntrailmusic').src = nct_stuff.themes[nct_stuff.selectedTheme].music
    document.getElementById('campaigntrailmusic').autoplay = "true"
}
setInterval(function() {
    document.getElementsByClassName("game_header")[0].innerHTML = corrr
    document.getElementsByClassName("game_header")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_title

    sussywussy = nct_stuff.themes[nct_stuff.selectedTheme]
    if (document.getElementById("inner_window_2") != null) {
        document.getElementById("inner_window_2").style.backgroundColor = sussywussy.coloring_window
    } else if (document.getElementById("inner_window_3") != null) {
        document.getElementById("inner_window_3").style.backgroundColor = sussywussy.coloring_window
    }
    if (document.getElementById("inner_window_4") != null) {
        document.getElementById("inner_window_4").style.backgroundColor = sussywussy.coloring_window
    }
    if (document.getElementById("inner_window_5") != null) {
        document.getElementById("inner_window_5").style.backgroundColor = sussywussy.coloring_window
    }
}, 100)
if (nct_stuff.christmas != true) {
    // Banner Stuff
    banner = $('#header')[0];
    //num = 22
    banner.src = nct_stuff.themes[nct_stuff.selectedTheme].banner
    banner.width = 1000
    if (true)
        document.body.background = nct_stuff.themes[nct_stuff.selectedTheme].background
    else if (nct_stuff.selectedTheme == "nct") {
        document.body.background = "https://upload.wikimedia.org/wikipedia/commons/6/6b/1984-Big-Brother.jpg"
        document.body.style.fontFamily = "Comic Sans MS"
        document.getElementsByClassName("game_header")[0].children[0].innerHTML = "haha I said gorg wlave laugh!!11!"
        vvv = document.getElementById("inner_window_1")
        vvv.children[0].innerText = uwuifier(vvv.children[0].innerText)
        vvv.children[1].innerText = uwuifier(vvv.children[1].innerText)
        document.getElementById("game_start").children[0].innerText = uwuifier(document.getElementById("game_start").innerText)
        setInterval(function() {
            es = document.getElementById("election_summary")
            if (es != null && es.children[0].innerHTML != uwuifier(es.children[0].innerHTML)) {
                for (i in es.children) {
                    es.children[i].innerHTML = uwuifier(es.children[i].innerHTML)
                }
            }
            ps = document.getElementById("candidate_summary")
            if (ps != null && ps.children[0].children[0].innerHTML != uwuifier(ps.children[0].children[0].innerHTML)) {
                for (v = 0; v < ps.children[0].children.length; v++) {
                    ps.children[0].children[v].innerHTML = uwuifier(ps.children[0].children[v].innerHTML)
                }
                ps.children[1].innerText = uwuifier(ps.children[1].innerText)
            }
        }, 100)
    }
    $("#game_window")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_window
    $(".container")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_container
    document.getElementsByClassName("game_header")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_title
    if (nct_stuff.themes[nct_stuff.selectedTheme].text_col != null) {
        $(".container")[0].style.color = nct_stuff.themes[nct_stuff.selectedTheme].text_col
        $("#game_window")[0].style.color = "black"
    }
    if (nct_stuff.themes[nct_stuff.selectedTheme].music != null) {
        document.getElementById("music_player").style.display = ""
        document.getElementById('campaigntrailmusic').src = nct_stuff.themes[nct_stuff.selectedTheme].music
        document.getElementById('campaigntrailmusic').autoplay = "true"
    }
    setInterval(function() {
        sussywussy = nct_stuff.themes[nct_stuff.selectedTheme]
        document.getElementsByClassName("game_header")[0].style.backgroundColor = sussywussy.coloring_title
        if (document.getElementById("inner_window_2") != null) {
            document.getElementById("inner_window_2").style.backgroundColor = sussywussy.coloring_window
        } else if (document.getElementById("inner_window_3") != null) {
            document.getElementById("inner_window_3").style.backgroundColor = sussywussy.coloring_window
        }
        if (document.getElementById("inner_window_4") != null) {
            document.getElementById("inner_window_4").style.backgroundColor = sussywussy.coloring_window
        }
        if (document.getElementById("inner_window_5") != null) {
            document.getElementById("inner_window_5").style.backgroundColor = sussywussy.coloring_window
        }
    }, 100)
} else {
    nct_stuff.themes = {
        "christmas": {
            name: "jesus christ is my ",
            background: "../static/images/background_christmas.jpg",
            banner: "../static/images/banner_christmas_" + susnum + ".png",
            coloring_window: "#8D3A3D",
            coloring_container: "#871d0d",
            coloring_title: "#194260",
            music: "../static/audio/christmas.mp3"
        }
    }
    nct_stuff.selectedTheme = "christmas"
        // Banner Stuff
    banner = $('#header')[0];
    //num = 22
    banner.src = nct_stuff.themes[nct_stuff.selectedTheme].banner
    correctbannerpar = document.getElementsByClassName("game_header")[0]
    corrr = correctbannerpar.innerHTML
    banner.width = 1000
    document.body.background = nct_stuff.themes[nct_stuff.selectedTheme].background
    $("#game_window")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_window
    $(".container")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_container
    document.getElementsByClassName("game_header")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_title
    if (nct_stuff.themes[nct_stuff.selectedTheme].text_col != null) {
        $(".container")[0].style.color = nct_stuff.themes[nct_stuff.selectedTheme].text_col
        $("#game_window")[0].style.color = "black"
    }
    if (nct_stuff.themes[nct_stuff.selectedTheme].music != null) {
        document.getElementById("music_player").style.display = ""
        document.getElementById('campaigntrailmusic').src = nct_stuff.themes[nct_stuff.selectedTheme].music
        document.getElementById('campaigntrailmusic').autoplay = "true"
    }
    setInterval(function() {
        document.getElementsByClassName("game_header")[0].innerHTML = corrr
        document.getElementsByClassName("game_header")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_title
        sussywussy = nct_stuff.themes[nct_stuff.selectedTheme]
        if (document.getElementById("inner_window_2") != null) {
            document.getElementById("inner_window_2").style.backgroundColor = sussywussy.coloring_window
        } else if (document.getElementById("inner_window_3") != null) {
            document.getElementById("inner_window_3").style.backgroundColor = sussywussy.coloring_window
        }
        if (document.getElementById("inner_window_4") != null) {
            document.getElementById("inner_window_4").style.backgroundColor = sussywussy.coloring_window
        }
        if (document.getElementById("inner_window_5") != null) {
            document.getElementById("inner_window_5").style.backgroundColor = sussywussy.coloring_window
        }
    }, 100)
}