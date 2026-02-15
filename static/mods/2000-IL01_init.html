musicMode = () => {
    songsPlayed = 0;
    // Initialise custom music
  
    $("#music_player")[0].children[0].style.display = "none"
    $("#music_player")[0].children[1].style.display = "none"
  
    document.getElementById("modLoadReveal").style.display = "none"
    document.getElementById("modloaddiv").style.display = "none"
  
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
  background-color:#752525;
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
        pausePlay.innerHTML = "<b>Pause</b>"
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
          trackSel = document.createElement("div");
          trackSel.id = "trackSelParent"
          let z = `<br><br><br><br><br><br><br><br><br><br><div id='trackSel' style="text-align:left;border-style:solid;border-width:3px;overflow-y: scroll;overflow-x: hidden;height:200px; width:400px;background-color:#752525;float:right;">`
          z += `<b><select id='selectSoundtrack'><option value='` + soundtracks[e.selectedSoundtrack].name + `'>` + soundtracks[e.selectedSoundtrack].name + "</option>"
          for (i in soundtracks) {
              if (soundtracks[e.selectedSoundtrack] != soundtracks[i]) {
                  z += `<option value='` + soundtracks[i].name + `'>` + soundtracks[i].name + `</option>`
              }
          }
          z += `</select></b><br><br>`
              // <label><input type="radio" name="option" value="option1">Option 1</label><br>
          for (i in soundtracks[e.selectedSoundtrack].tracklist) {
              let a = soundtracks[e.selectedSoundtrack].tracklist[i]
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
              for (i in soundtracks) {
                  if (soundtracks[i].name == soundtrackSelector.value) {
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
                  audio.src = soundtracks[e.selectedSoundtrack].tracklist[this.value].url
                  audio.currentTime = 0
              }
          }
    
          musicBox.children[2].loop = false
          musicBox.children[2].src = soundtracks[e.selectedSoundtrack].tracklist[0].url
    
          musicBox.children[2].onended = function() {
              console.log("next track")
              let selected = Number(document.querySelector('input[name="trackSelector"]:checked').value);
              let newSel = clamp(selected + 1, soundtracks[e.selectedSoundtrack].tracklist.length - 1, 0)
              let buttons = Array.from(document.getElementById("trackSel").children).filter(f => {
                      return f.tagName == "LABEL"
                  }).map(f => f.children[0])
                  //let selectedIndex = buttons.map(f=>f.children[0]).map(f=>f.checked)
              buttons[newSel].click()
              songsPlayed++; // Increment the songs played counter
        
           
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
    
      
      // Track list
    
      var soundtracks = {
          0: {
              name: "Obama vs. Rush 2000",
              tracklist: [
                {
               "name": "The 6th Sense - Common",
                "url": "https://audio.jukehost.co.uk/WwZpbZzMXLmH35cTLNpvuPTqsJUXHG4r"
              },
              {
                "name": "UMI Says - Mos Def",
                "url": "https://audio.jukehost.co.uk/yuoWama7bBWBHOOaTdPspN0MRfrk91Z2"
              },
              {
                "name": "Go Let It Out - Oasis",
                "url": "https://audio.jukehost.co.uk/YRFHBmwdMb3Jpkqmnmu8ih4ZOcjp5WIz"
              },
              {
                "name": "Everything Is Everything - Lauryn Hill",
                "url": "https://audio.jukehost.co.uk/vEqYtFrythceeWNfGgXBem776ujs2nD5"
              },
              {
                "name": "Revolution - Kirk Franklin",
                "url": "https://audio.jukehost.co.uk/3F3ESenvEuPWtqyNlQv9mheEYRvXWEoy"
            },
            ]
         },
  
          
          
      }
  
    
      // Set up new music player
    
      newMusicPlayer()
    
  
  }
  
    $("#game_start").click((event) => {
      event.preventDefault();
      $("#election_id_button").click((event) => {
          musicMode()
  
          setInterval(changeFontColour, 200)
    
      })
    })


RecReading=true
e = campaignTrail_temp;

nct_stuff.themes[nct_stuff.selectedTheme].coloring_title = "#2E2E38";     // deep charcoal (header)
nct_stuff.themes[nct_stuff.selectedTheme].coloring_window = "#DDE6F0";   // soft light blue-gray (window background)

document.getElementsByClassName("game_header")[0].style.backgroundColor = 
    nct_stuff.themes[nct_stuff.selectedTheme].coloring_title;

$("#game_window")[0].style.backgroundColor = 
    nct_stuff.themes[nct_stuff.selectedTheme].coloring_window;

$(".container")[0].style.background = "linear-gradient(180deg, #9A5353 0%, #7F2E2E 45%, #6A1B1B 100%)";


        	document.getElementById("header").src = "https://i.postimg.cc/8cvCY3VD/bho-banner.png";

document.body.style.backgroundSize = "cover"

e.HomeStateText = "Neighborhood:";

        	document.body.background = "https://i.postimg.cc/KzPGrT7v/djtsfg.jpg";

        	e.election_json = [{"model":"campaign_trail.election","pk":10,"fields":{"year":2000,"summary":"<p>First elected in 1992, Bobby Rush has what many consider an iron grip over Illinois’s 1st Congressional District. A former Black Panther, radical, and activist, he maintains a deep connection with the constituents of one of the most heavily Black congressional districts in the nation.</p><p>But according to some, a new day for politics in the 1st District may be dawning. Barack Obama, a lecturer at the University of Chicago and a state senator, has entered the race, calling for a “new politics.” With support from the more affluent and white residents of the district, he hopes to consign the Black Panther to the dustbin of the 20th century.</p>","image_url":"https://i.postimg.cc/rmjh8LPq/Barackvs-Rush.png","winning_electoral_vote_number":0,"advisor_url":"https://i.postimg.cc/m2QYQtqX/advisorimage-bho.png","recommended_reading":"<h4 style=\"margin-top: 0.5em;\">Main Sources</h4><a href=\"https://www.youtube.com/watch?v=o04VcMRcB7M&t=406s\" target=\"_blank\">YouTube — Barack Obama: Debate for Congressman in 2000 (Part One)</a><br><a href=\"https://www.youtube.com/watch?v=G0j9GgjxRYk&t=719s\" target=\"_blank\">YouTube — Barack Obama: Debate for Congressman in 2000 (Part Two)</a><br><a href=\"https://www.youtube.com/watch?v=5L4xIBKNePg\" target=\"_blank\">YouTube — Barack Obama 2000 Debate with Bobby Rush</a><br><a href=\"https://www.nytimes.com/2007/09/09/us/politics/09obama.html\" target=\"_blank\">Zeleny, Jeff. “After Defeat in 2000, Obama Rebuilt His Career.” <i>The New York Times</i>, Sept. 9, 2007.</a><br><a href=\"https://www.cnn.com/2016/12/30/politics/president-obama-almost-left-politics-axe-files\" target=\"_blank\">CNN — <q>President Obama almost left politics</q> (The Axe Files)</a><br><a href=\"https://www.npr.org/2007/09/19/14502364/obamas-loss-may-have-aided-white-house-bid\" target=\"_blank\">NPR — <q>Obama’s Loss May Have Aided White House Bid</q>, Sept. 19, 2007.</a><br><a href=\"https://rollcall.com/2007/02/09/when-obama-wasnt-a-star/\" target=\"_blank\">Roll Call — <q>When Obama Wasn’t a Star</q>, Feb. 9, 2007.</a><br><a href=\"https://www.amazon.com/Dreams-My-Father-Story-Inheritance/dp/1400082773\" target=\"_blank\">Obama, Barack. <i>Dreams from My Father: A Story of Race and Inheritance</i>. New York, NY: Three Rivers Press, 2004.</a></p>","has_visits":0,"no_electoral_majority_image":"../static/images/2012-no-majority.jpg"}}];e.temp_election_list = [{"id":10,"year":1976,"is_premium":0,"display_year":"2000-IL01"}];e.credits = "theanswerisme";e.global_parameter_json = [{"model":"campaign_trail.global_parameter","pk":1,"fields":{"vote_variable":1.125,"max_swing":0.12,"start_point":0.94,"candidate_issue_weight":10,"running_mate_issue_weight":3,"issue_stance_1_max":-0.71,"issue_stance_2_max":-0.3,"issue_stance_3_max":-0.125,"issue_stance_4_max":0.125,"issue_stance_5_max":0.3,"issue_stance_6_max":0.71,"global_variance":0.01,"state_variance":0.005,"question_count":16,"default_map_color_hex":"#C9C9C9","no_state_map_color_hex":"#999999"}}];e.candidate_json = [{"model":"campaign_trail.candidate","pk":91,"fields":{"first_name":"Barack","last_name":"Obama","election":10,"party":"Democratic","state":"Hyde Park","priority":1,"description":"Barack Hussein Obama was warned against this. Friends in the State Senate, and across the Democratic Party in Chicagoland, have made it clear that he risks his future political fortunes by jumping into a race against such a beloved name.<br><br>But something bigger is calling to the young professor - something bigger than him. The battles of the now… they are merely the psychodrama of the 1960s generation playing out, over and over and over again. Whether it’s on the presidential level this cycle with Bush vs. Gore, or Bill Clinton’s two terms in office, or in Illinois’s 1st, with a former Black Panther still acting like it’s 1972, it’s as if the nation is trapped.<br><br>Call it ambition, or call it ego, the 38-year old Obama sees himself as the key out of this limbo. But can these lofty ideas of change make an impact on everyday voters? Can Obama bring change to Illinois’s 1st?","color_hex":"#8D68BC","secondary_color_hex":"#7D4FB2","is_active":1,"image_url":"https://i.postimg.cc/Znjjt9cT/BHO.png","electoral_victory_message":"<h3>OBAMA DEFEATS RUSH IN AN UPSET!</h3><div style='overflow-y:scroll;height:200px;'><p>You sit in your campaign headquarters on a cheap folding chair, watching as the results start to trickle in. Bobby Rush leads you… but it’s much closer than even you or your staff were expecting. You feel something in your spine, something like electricity. The gap between you and Rush keeps narrowing and then… you are in the lead. A smile starts to creep onto your lips. You turn to Michelle, who is beginning to grin, too.<br><br>''Barack, honey, I think you did it,'' she says. ''There’s still 10% of the vote to be counted,'' you reply quickly. You won’t let yourself feel the sheer joy of victory yet; you have to be sure they can’t take this away from you.<br><br>Soon the TV declares, ''We can now report that Barack Obama has defeated Congressman Rush and will be heading into the general election as the Democratic nominee.'' The small crowd of allies in your room breaks into rapturous cheers and whoops. You’ve done it; you’ve really done it.<br><br>After a few minutes of celebration, your campaign manager, Dan Shomon, comes in holding a cell phone. ''Barack, it’s the Congressman,'' he says. You walk toward him, take the phone, and hush the joyous staff and friends in the room.<br><br>Though the room is quiet, you barely hear Rush. Your mind is swirling. Still, you make an effort to be courteous. ''I want to meet with you and your team, Bobby,'' you hear yourself say. ''I’ve always known there’s a lot we can learn from the great work you’ve done.''<br><br>Eventually, after what feels like a night of celebration, a beer or two, and plenty of smiles and wide eyes, you head back to your Hyde Park home with your wife and daughter. You’ve tried to keep your cool, but you still feel like you’re vibrating. Just a few minutes after you walk in, you hear your cell phone buzzing. You answer. It’s the President. ''Barack, congratulations. Let’s get you across the finish line in November. We need your voice in Washington,'' a familiar Southern voice says. ''Thank you, sir,'' you say.</p>","electoral_loss_message":"<h3>RUSH DEFEATS OBAMA IN SOUTH SIDE SHOWDOWN</h3><div style='overflow-y:scroll;height:200px;'><p>As you watch the results trickle in, you quickly realize you aren’t going to win. You had hoped for an upset, but it never materialized. You feel Michelle place her hand on your arm as your eyes stay fixed on the TV, your jaw clenched. You aren’t paying much attention to the program; instead, you let your mind wander.<br><br>Eventually, you break out of your trance and rub your forehead. You turn to your wife. ''It’s okay, Barack. You didn’t let anyone down,'' she says. ''I know, I know,'' you reply. You know she’s telling a white lie; she loves you too much to see you like this.<br><br>Soon, after it’s official that you’ve lost, your campaign manager, Dan Shomon, comes in. ''Barack? It’s the Congressman.'' He’s holding a cell phone. You rise from your seat and take it. You exchange blithe pleasantries. He says something you think is meant to be… kind, but you aren’t really listening.<br><br>In due time, you make your way back to your home in Hyde Park with your wife and daughter. After putting your two-year-old to bed, and after Michelle heads to the bedroom, you grab your jacket and step outside to smoke.<br><br>''Goddamn it,'' you whisper to yourself, before you slide a cigarette from the pack, flick your lighter, and take a long draw, enjoying the sweet relief as the pressure lifts from your mind. You still have a job in the State Senate and a career ahead of you. You shouldn’t be so hard on yourself.</p>","no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>","description_as_running_mate":null,"candidate_score":1,"running_mate":false,"scrollable":false}},{"model":"campaign_trail.candidate","pk":92,"fields":{"first_name":"Bobby","last_name":"Rush","election":10,"party":"Democratic","state":"Bronzeville","priority":1,"description":"","color_hex":"#4B82BF","secondary_color_hex":"#96B6C4","is_active":0,"image_url":"https://i.postimg.cc/TP194JxT/Bobby-Rush.png","electoral_victory_message":"<h3>DUMMY</h3>","electoral_loss_message":"<h3>DUMMY</h3>","no_electoral_majority_message":"<h3>DUMMY</h3>","description_as_running_mate":null,"candidate_score":1,"running_mate":false,"scrollable":false}},{"model":"campaign_trail.candidate","pk":93,"fields":{"first_name":"George","last_name":"Roby","election":10,"party":"Democratic","state":"Calumet Heights","priority":1,"description":"","color_hex":"#64AA71","secondary_color_hex":"#A5CE96","is_active":0,"image_url":"https://files.catbox.moe/ik2rlc.png","electoral_victory_message":"<h3>DUMMY</h3>","electoral_loss_message":"<h3>DUMMY</h3>","no_electoral_majority_message":"<h3>DUMMY</h3>","description_as_running_mate":null,"candidate_score":1,"running_mate":false,"scrollable":false}},{"model":"campaign_trail.candidate","pk":94,"fields":{"first_name":"Donne","last_name":"Trotter","election":10,"party":"Democratic","state":"Avalon Park","priority":1,"description":"","color_hex":"#CA5D5F","secondary_color_hex":"#E2A08B","is_active":0,"image_url":"https://i.postimg.cc/bN3DGcXw/trotter.png","electoral_victory_message":"<h3>DUMMY</h3>","electoral_loss_message":"<h3>DUMMY</h3>","no_electoral_majority_message":"<h3>DUMMY</h3>","description_as_running_mate":null,"candidate_score":1,"running_mate":false,"scrollable":false}},{"model":"campaign_trail.candidate","pk":1003,"fields":{"first_name":"Dan","last_name":"Shomon","election":10,"party":"Democratic","state":"Wherever he's needed","priority":1,"description":"Dan Shomon has long been Obama’s number-two man in Springfield, serving as his legislative and press adviser. Now he’s joining his boss in an upstart, risky campaign for Congress. Shomon will guide the state senator through the run and, hopefully, help him pull off a victory.<br><br>Known for his strategic poise rather than flashiness or celebrity, Shomon, a former media consultant, is tasked with keeping Obama’s feet on the ground and focused on the practical, rather than letting him get lost in rhetorical flourish. This includes parts of the campaign, such as ad buys, that the candidate does not want to handle himself. ","color_hex":"#0000ff","secondary_color_hex":null,"is_active":0,"image_url":"https://i.postimg.cc/R00Zmqzg/BHO-chiefadvisor.png","electoral_victory_message":"<h3>DUMMY</h3>","electoral_loss_message":"<h3>DUMMY</h3>","no_electoral_majority_message":"<h3>DUMMY</h3>","description_as_running_mate":"Dan Shomon has long been Obama’s number-two man in Springfield, serving as his legislative and press adviser. Now he’s joining his boss in an upstart, risky campaign for Congress. Shomon will guide the state senator through the run and, hopefully, help him pull off a victory.<br><br>Known for his strategic poise rather than flashiness or celebrity, Shomon, a former media consultant, is tasked with keeping Obama’s feet on the ground and focused on the practical, rather than letting him get lost in rhetorical flourish. This includes parts of the campaign, such as ad buys, that the candidate does not want to handle himself.","candidate_score":1,"running_mate":true,"scrollable":false,"partner":"0"}}];e.running_mate_json = [{"model":"campaign_trail.running_mate","pk":2001,"fields":{"candidate":91,"running_mate":1003}}];

quotes = ["Seniority is important, but I think vision and imagination and hard work are more important."]
  customquote = quotes[Math.floor((Math.random() * quotes.length))]
corrr = `\n<h2>THE CAMPAIGN TRAIL</h2><font id='wittyquote' size='4' color='white'><em>` + customquote + `</em></font>`

selectedTheme.text_col="black"

let style = document.createElement('style');
style.type = 'text/css';
style.id = 'dynamic-style';

style.innerHTML = `
.campaign_trail_start_emphasis{
  background: linear-gradient(180deg, #7A2E2E 0%, #6A1B1B 100%);
}
#state_info h3 {
  background-color: #813131;
}
#state_result h3 {
  background-color: #813131;
}
#overall_result h3 {
  background-color: #813131;
}
#campaign_sign {
    background-image: url("https://i.postimg.cc/D0CP08MB/o400gdt.png");
    background-size: cover;
    border-color: #c9c9c9;    
    border-width: .01em;
    margin: 0 auto;
    background-position: center;
    width: 100%; 
    height: 104px; 
    margin-left: -0.033em;
    margin-right: -0.033em;
  }
#campaign_sign p {
    color: rgb(0 0 0 / 0%);
}
.inner_window_sign_display {
  margin: 0;
    margin-right: 0.033px;
    margin-left: 0.033px;
  height: 25%;
  position: relative;
  width: 35%;
  height: 28%;
  background-color: #FFFFFF;
  margin-left: auto;
  margin-right: auto;
  border-style: double;
  border-color: #C9C9C9;
}
#map_footer {
    padding-top: 3em;
}
  .overlay_window h3 {
    background-color: #DDE6F0;
  }
  .inner_window_question h3 {
    background-color: #DDE6F0;
  }
  #overall_result_container {
    background-color: #DDE6F0;
  }
 #state_result_container {
   background-color: #DDE6F0;
}
#map_container {
  background: #F8F8F8;
  border-radius: 1px;
  box-shadow:
    inset 0 0 4px rgba(0, 0, 0, 0.08),
    0 0 0 2px rgba(0, 0, 0, 0.04);
  overflow: hidden;
}
.overlay_window {
            height: auto;
		}
    #menu_container {
      background-color: #DDE6F0 !important;
    }
  a:-webkit-any-link {
    color: #000000;
  }
`;

document.head.appendChild(style);

// Achievements

campaignTrail_temp.achievements = {
    "The Big Dog" : {
        "image" : "https://i.postimg.cc/qqhdZV74/congressmanobama.png",
        "description" : "President Clinton stays out of the race.",
        "cannotBeCheated" : true
  },

   "Early Exit" : {
        "image" : "https://i.postimg.cc/654vC8t1/loser.png",
        "description" : "Drop out of the race.",
        "cannotBeCheated" : true
    }
}

	HistHexcolour=["#4B82BF","#8D68BC","#CA5D5F","#64AA71"];
	HistName=["Bobby Rush","Barack Obama","Donne Trotter","George Roby"];
	HistEV=[0,0,0,0];
	HistPV=["59,599","29,649","6,915","1,501"];
	HistPVP=["61.0%","30.3%","7.0%","1.5%"];
