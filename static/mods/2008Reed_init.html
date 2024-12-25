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
  background-color:#9785a6;
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
          let z = `<br><br><br><br><br><br><br><br><br><br><div id='trackSel' style="text-align:left;border-style:solid;border-width:3px;overflow-y: scroll;overflow-x: hidden;height:200px; width:400px;background-color:#9785a6;float:right;">`
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
              name: "For a Change.",
              tracklist: [
                {
               "name": "I Got a Feeling - Black Eyed Peas",
                "url": "https://audio.jukehost.co.uk/Q3OVCieNBdJO7g2nfzAQV9LBIZhE09iF"
              },
              {
                "name": "Teenage Dream - Katy Perry",
                "url": "https://audio.jukehost.co.uk/omEznxrV3r78IsvtPkc5yd3c3ILhXrds"
              },
              {
                "name": "Viva la Vida - Coldplay",
                "url": "https://audio.jukehost.co.uk/s2MI0bEB46NUuTyUrVhZ0GdDtvLL8eSN"
              },
              {
                "name": "Island in the Sun - Weezer",
                "url": "https://audio.jukehost.co.uk/ND1w5K5F3lHGICbA9MsJgHFTU8gTJPVZ"
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
  
  
  e = campaignTrail_temp;
  

campaignTrail_temp.election_json = [
    {
        "model": "campaign_trail.election",
        "pk": 9,
        "fields": {
            "year": 2008,
            "summary": "<p>As the 2008 election underway, divisive topics such as the ongoing Iraq and Afghanistan Wars along with the presidency of George Bush are set to shape the scene. The Democrats hold the upper hand, but Reed is seen as bland, while McCain has many tricks up his sleeve.<p><ul><li>After besting a wide field of contenders, Rhode Island Senator Jack Reed has won his party's nomination on a message of change.</li><li>Bouncing back from a tough spot in the early primaries, Arizona Senator John McCain roared forward as the Republican nominee in a heated primary.</li></ul>",
            "image_url": "https://i.imgur.com/7mqg0oG.png",
            "winning_electoral_vote_number": 270,
            "advisor_url": "https://i.imgur.com/VNz8VR9.png",
            "recommended_reading": "<div style='overflow-y:scroll;height:370px;'><h3>Very outdated Lore collage</h3><img src='https://i.imgur.com/iK0I0wq.png' width='700px'></img><p>Hey guys, Jimbo here with my 18th released mod (i think) and I just wanted to say thank you for playing 2008 Reed. This mod has seen a pretty large roller coaster of development, as it released in December, yet work started in the spring of 2024.</p><p>Reed tuah</div>",
            "has_visits": 1,
            "no_electoral_majority_image": "https://www.jetsimon.com/public/static/images/2012-no-majority.jpg",
            "creator": "Dan Bryan",
            "display_year": "2008Reed"
        }
    }
]

campaignTrail_temp.candidate_json = [
    {
        "model": "campaign_trail.candidate",
        "pk": 77,
        "fields": {
            "first_name": "John",
            "last_name": "McCain",
            "election": 9,
            "party": "Republican",
            "state": "Arizona",
            "priority": 1,
            "description": "<b>Unplayable, Context Only</b><p>John Sidney McCain III  has lived a long and storied life. His troubles in Vietnam brought McCain well-needed support and material for his first Senate run and in 2000. While he lost that battle to soon-to-be President Bush, his national profile has only expanded. Now, after bouncing back from a critical state in the early primaries, wide-scale support coalesced in support of McCain during the primaries and he now sits as the party's nominee.</p><p>McCain has support among the majority of the Republican rank-and-file, but an increasingly large portion of so-called \"Tea Party\" Republicans who favor demagoguery over bipartisanship to get their way are unsupportive. His party in general doesn't have the popularity needed to go into the election, due to Iraq and Bush sagging it down.</p>",
            "color_hex": "#d12424",
            "secondary_color_hex": "#FFA0A0",
            "is_active": 0,
            "image_url": "https://i.imgur.com/OkOupSu.png",
            "electoral_victory_message": "<h3>Congratulations! You have won the 2000 election.</h3><p>Confounding the predictions of many experts, you were able to turn the tables on Al Gore, in spite of the economy and Clinton's popularity.</p><p>On the political front, you can push for tax cuts to spur the economy and return the budget surplus to the American people. You might also pursue education and immigration reform, individual Social Security accounts, and new laws to defend the family and the sanctity of life.</p>",
            "electoral_loss_message": "<h3>Sorry! You have lost the 2000 election.</h3><p>Perhaps it was always a long-shot, with the Democrats in such a commanding position after eight years of Bill Clinton. In any case, at least you are still the Governor of Texas.</p><p>Expect Al Gore to unleash a new round of government programs and environmental regulations. You are still youngish, however. If the election was close this time, perhaps you can run again in 2004, or work on behalf your brother Jeb.</p>",
            "no_electoral_majority_message": "<h3>Wow! You have won in a squeaker.</h3><p>No candidate achieved a majority of the electoral votes, marking the first time this has happened since 1824. Fortunately for you, the majority of U.S. states have Republican controlled congressional delegations, and they will cast their votes accordingly.</p><p>Given the incredibly close nature of the election, you will surely be expected to govern as a moderate, conciliatory President. Right??</p>",
            "description_as_running_mate": "''",
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 78,
        "fields": {
            "first_name": "Jack",
            "last_name": "Reed",
            "election": 9,
            "party": "Democratic",
            "state": "Rhode Island",
            "priority": 2,
            "description": "<p>John Francis Reed is Rhode Island's respected senior Senator, taking over for Claiborne Pell in 1996 after serving as a representative for the State's 2nd District. Born to a World War 2 veteran,  he served in the army as a platoon leader of the 82nd Airborne Division. However, his military background pales in comparison with McCain. Reed is well respected across the political spectrum as a compromising figure and is a member of the powerful Senate Appropriations Committee, which could help him wrestle away some of the \"experience\" points from McCain.</p><p>Despite some early reluctance, Reed's campaign received a major boost when Senator Hillary Clinton, who declined to run this year, endorsed him. After this, he faced a decidedly tough battle from Illinois Senator Barack Obama, who made it up to the convention. Reed is popular among his peers, but the perception that he is an insider candidate is not lost on many, especially those who supported Obama this year.",
            "color_hex": "#004ad4",
            "secondary_color_hex": "#90C0FF",
            "is_active": 1,
            "image_url": "https://i.imgur.com/Vx6D7e4.png",
            "electoral_victory_message": "<h3>Congratulations! You have won the 2000 election.</h3><p>Though it was perhaps expected, you could have easily faltered at a number of points. Credit to you for pulling through.</p><p>On the political front, you can continue the Clinton legacy and strengthen Social Security for generations to come. Perhaps you can succeed on health care where Clinton came up short? Or maybe you can create a future of renewable energy for America. Just be wary of a (George or Jeb?) Bush challenge in 2004.</p>",
            "electoral_loss_message": "<h3>Sorry! You have lost the 2000 election.</h3><p>Surely the second-guessing will be intense, but if things were close you could probably run again in 2004.</p><p>It seems that with George W. Bush and a Republican majority, the United States can expect some conservative policy-making over the next four years. Hopefully Bush comes through on his promise to govern in a bipartisan, conciliatory manner. A lot should depend on the margin of his victory, and whether it was large or small.</p>",
            "no_electoral_majority_message": "<h3>Sorry! You have lost in a squeaker.</h3><p>No candidate achieved a majority of the electoral votes, for the first time since 1824. Unfortunately for you, a majority of states have Republican controlled congressional delegations.</p><p>It seems that with George W. Bush and a Republican majority, the United States can expect some conservative policy-making over the next four years. Hopefully Bush comes through on his promise to govern in a bipartisan, conciliatory manner.</p>",
            "description_as_running_mate": "''",
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 79,
        "fields": {
            "first_name": "Ralph",
            "last_name": "Nader/Others",
            "election": 9,
            "party": "Independent",
            "state": "Connecticut",
            "priority": 3,
            "description": "<p>Ralph Nader enters the 2000 election as the Green candidate after years as an activist and consumer advocate.</p><p>After eight years of George W. Bush, it is clear that the United States needs a true liberal alternative -- one that will fight for fair trade, universal health care, free college, and campaign finance reform. Nader's primary goal in this election is to win 5% of the popular vote, which will qualify the Green Party for federal matching funds in 2012.</p>",
            "color_hex": "#c1bfbd",
            "secondary_color_hex": "#A1FFA1",
            "is_active": 0,
            "image_url": "https://www.jetsimon.com/public/static/images/ralph-nader-2000.jpg",
            "electoral_victory_message": "<h3>Congratulations! You have won the 2000 election.</h3><p>This was definitely not supposed to happen. Good luck!</p>",
            "electoral_loss_message": "<h3>As expected, you have lost the 2000 election.</h3><p>The legacy of this campaign depends on a couple of factors. First of all, did you receive 5% of the popular vote? If so, congratulations! You will enable the Green Party to run a vigorous campaign in 2004 and present a true choice to the American people. Also, the Democrats were a little peeved that you \"stole\" votes from them in this election. Hopefully that doesn't lead to a backlash.</p>",
            "no_electoral_majority_message": "<h3>Wow! No candidate received 270 electoral votes, but the House will elect George W. Bush as President.</h3><p>Did you receive 5% of the popular vote? If so, congratulations! You will enable the Green Party to run a vigorous campaign in 2004 and present a true choice to the American people. Also, the Democrats were a little peeved that you \"stole\" votes from them in this election. Hopefully that doesn't lead to a backlash, especially since they will lose the vote in the House.</p>",
            "description_as_running_mate": "''",
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 80,
        "fields": {
            "first_name": "Bob",
            "last_name": "Barr",
            "election": 9,
            "party": "Libertarian",
            "state": "Georgia",
            "priority": 4,
            "description": "''",
            "color_hex": "#aa29b7",
            "secondary_color_hex": "#FFFFC0",
            "is_active": 0,
            "image_url": "''",
            "electoral_victory_message": "''",
            "electoral_loss_message": "''",
            "no_electoral_majority_message": "''",
            "description_as_running_mate": "''",
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 81,
        "fields": {
            "first_name": "Sarah",
            "last_name": "Palin",
            "election": 9,
            "party": "Republican",
            "state": "Alaska",
            "priority": 5,
            "description": "''",
            "color_hex": "#FF0000",
            "secondary_color_hex": "#FFA0A0",
            "is_active": 0,
            "image_url": "https://i.imgur.com/FEundwf.png",
            "electoral_victory_message": "''",
            "electoral_loss_message": "''",
            "no_electoral_majority_message": "''",
            "description_as_running_mate": "<p>Recommended by many of your advisors as a so-called \"wild-card\" Governor of Alaska Sarah Louise Palin would give the ticket an inn with Tea Party voters, and would secure conservative support due to her credentials. However, many worry that her loose-cannon personality could cause more harm than good while campaigning, and she offers zero geographical balance.</p><p>Regardless, she should be a decent if not chaotic choice if selected.",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 85,
        "fields": {
            "first_name": "Bill",
            "last_name": "Richardson",
            "election": 9,
            "party": "Democratic",
            "state": "New Mexico",
            "priority": 9,
            "description": "''",
            "color_hex": "#0000FF",
            "secondary_color_hex": "#90C0FF",
            "is_active": 0,
            "image_url": "https://i.imgur.com/rzf8IFR.png",
            "electoral_victory_message": "''",
            "electoral_loss_message": "''",
            "no_electoral_majority_message": "''",
            "description_as_running_mate": "<p>Loaded with executive experience as former Ambassador to the U.N, and Secretary of Energy, William Blaine Richardson III is the Governor of New Mexico, and has been widely speculated as a potential running mate by the news for some time now. Richardson adds a lot of useful benefits to the ticket, he strengthens the party's margins with Hispanics, especially those in the southwest, and is an olive branch to Obama supporters.<p>Richardson's downsides come into play when you consider that New Mexico generally votes Democratic now, and while Nevada could swing either way, it's not necessarily an important state. His presidential campaign, while historic, unfortunately went nowhere, which could be capitalized upon by Conservative operatives as a sign of the ticket's incompetence.",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 86,
        "fields": {
            "first_name": "Janet",
            "last_name": "Napolitano",
            "election": 9,
            "party": "Democratic",
            "state": "Arizona",
            "priority": 10,
            "description": "''",
            "color_hex": "#0000FF",
            "secondary_color_hex": "#90C0FF",
            "is_active": 0,
            "image_url": "https://i.imgur.com/vb3mcOW.png",
            "electoral_victory_message": "''",
            "electoral_loss_message": "''",
            "no_electoral_majority_message": "''",
            "description_as_running_mate": "<p>If you're looking to eat into McCain's home turf, then the Governor of Arizona, Janet Ann Napolitano is for you. Napolitano would energize female voters across the country, and combat Palin's appeal with them. Additionally, her reforms to the state's educational system have been widely popular throughout the country. Lastly, she has fought hard for abortion rights during her tenure as Governor, which could will you with pro-choicers.<p>She is not without her faults though, her heavy pro-choice views could deepen religious distrust with your campaign, and while her presence could help the greater American Southwest, It would take a couple miracles to turn Arizona blue with McCain running. Lastly, her mastectomy in 2000 could also be an uncomfortable topic with some voters.",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 87,
        "fields": {
            "first_name": "Deval",
            "last_name": "Patrick",
            "election": 9,
            "party": "Democratic",
            "state": "Massachusetts",
            "priority": 11,
            "description": "''",
            "color_hex": "#0000FF",
            "secondary_color_hex": "#90C0FF",
            "is_active": 0,
            "image_url": "https://i.imgur.com/eNJkH96.png",
            "electoral_victory_message": "''",
            "electoral_loss_message": "''",
            "no_electoral_majority_message": "''",
            "description_as_running_mate": "<p>Many Obama supporters are still sore about the primaries, so why not throw his wing a bone? Deval Laurdine Patrick is the recently elected Governor of Massachusetts, replacing Mitt Romney. Patrick is a liberal Democrat, and while he supported Obama during the primaries, is more than happy to be your running mate this year. He would be the key in bringing back black voters hesistant with your nomination.<p>However, given his reputation as a political newcomer and lightweight, added alongside his race, would strengthen the argument that you are merely choosing him because of his race. Patrick is also from Massachusetts, which means that he gives no geographic balance. Lastly, he could cause more... fringe voters down South to turn out in droves against the ticket.",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 88,
        "fields": {
            "first_name": "Tim",
            "last_name": "Kaine",
            "election": 9,
            "party": "Democratic",
            "state": "Virginia",
            "priority": 12,
            "description": "''",
            "color_hex": "#0000FF",
            "secondary_color_hex": "#90C0FF",
            "is_active": 0,
            "image_url": "https://i.imgur.com/jkJ7rye.png",
            "electoral_victory_message": "''",
            "electoral_loss_message": "''",
            "no_electoral_majority_message": "''",
            "description_as_running_mate": "<p>To conclude, there's Timothy Michael Kaine, the incumbent Governor of Virginia. Kaine has rounded off his governorship as a bipartisan moderate, willing to work across the aisle to get things done. Before that, he was the mayor of Richmond. Kaine remains broadly popular within the party, and in Virginia, which looks competetive this year. Kaine's qualities include his fluency in Spanish, which could help in the Southwest, and his past as a Catholic missionary, which could help tithe back some on-the-fence religious voters.<p>It must be stated though that other than that, Kaine offers very little while campaigning. He is a monotone speaker and is quite forgettable, and he would not be worth it to an Obama supporter. Lastly, despite his dark hair, two older white men on a ticket do nothing to excite minority voters.",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 89,
        "fields": {
            "first_name": "Matt",
            "last_name": "Gonzalez",
            "election": 9,
            "party": "Independent",
            "state": "California",
            "priority": 13,
            "description": "''",
            "color_hex": "#00C100",
            "secondary_color_hex": "#A1FFA1",
            "is_active": 0,
            "image_url": "https://www.jetsimon.com/public/static/images/winona-laduke-2000.jpg",
            "electoral_victory_message": "''",
            "electoral_loss_message": "''",
            "no_electoral_majority_message": "''",
            "description_as_running_mate": "<p>He is the running mate of Ralph Nader in this election.</p>",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 90,
        "fields": {
            "first_name": "Wayne",
            "last_name": "Root",
            "election": 9,
            "party": "Libertarian",
            "state": "Nevada",
            "priority": 14,
            "description": "''",
            "color_hex": "#FFFF00",
            "secondary_color_hex": "#FFFFC0",
            "is_active": 0,
            "image_url": "''",
            "electoral_victory_message": "''",
            "electoral_loss_message": "''",
            "no_electoral_majority_message": "''",
            "description_as_running_mate": "''",
            "candidate_score": 0,
            "running_mate": true
        }
    }
]

campaignTrail_temp.running_mate_json = [
    {
        "model": "campaign_trail.running_mate",
        "pk": 57,
        "fields": {
            "candidate": 80,
            "running_mate": 90
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 56,
        "fields": {
            "candidate": 79,
            "running_mate": 89
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 48,
        "fields": {
            "candidate": 77,
            "running_mate": 81
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 52,
        "fields": {
            "candidate": 78,
            "running_mate": 85
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 53,
        "fields": {
            "candidate": 78,
            "running_mate": 86
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 54,
        "fields": {
            "candidate": 78,
            "running_mate": 87
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 55,
        "fields": {
            "candidate": 78,
            "running_mate": 88
        }
    }
]

campaignTrail_temp.credits = "a Rhode Islander (WNDIUA/Jimbo).<br>Credits to Decstar for the Music Player<br>Thank you to all who playtested"

campaignTrail_temp.global_parameter_json = [
    {
        "model": "campaign_trail.global_parameter",
        "pk": 1,
        "fields": {
            "vote_variable": 1.125,
            "max_swing": 0.12,
            "start_point": 0.94,
            "candidate_issue_weight": 10,
            "running_mate_issue_weight": 3,
            "issue_stance_1_max": -0.71,
            "issue_stance_2_max": -0.3,
            "issue_stance_3_max": -0.125,
            "issue_stance_4_max": 0.125,
            "issue_stance_5_max": 0.3,
            "issue_stance_6_max": 0.71,
            "global_variance": 0.01,
            "state_variance": 0.005,
            "question_count": 30,
            "default_map_color_hex": "#C9C9C9",
            "no_state_map_color_hex": "#999999"
        }
    }
]

campaignTrail_temp.opponents_default_json = [
    {
        "election": 9,
        "candidates": [
            77,
            78,
            79,
            80
        ]
    }
]

campaignTrail_temp.opponents_weighted_json = [
    {
        "election": 9,
        "candidates": [
            77,
            78,
            79,
            80
        ]
    }
]

campaignTrail_temp.temp_election_list = [
    {
        "id": 9,
        "year": 2000,
        "is_premium": 0,
        "display_year": "2008Reed"
    }
]

jet_data = {
    "headerColor": "#283570",
    "windowColor": "#736fac",
    "containerColor": "#64406a",
    "innerWindowColor": "#c2d1ff",
    "bannerImageUrl": "https://i.imgur.com/itcTHGg.png",
    "backgroundImageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/30/Jack_Reed_DNC_2008.jpg",
    "endingTextColor": "#000000",
    "customQuote": "",
    "gameTitle": "THE 2008 ELECTION"
}

//#startcode

RecReading = true

HistHexcolour=["#004AD4","#D12424","#AA29B7","#C1BFBD"]; HistName=[" Jack Reed"," John McCain"," Bob Barr"," Ralph Nader/Others"]; HistEV=[349,189,0,0]; HistPV=["69,941,088","58,924,063","1,466,455","965,356"]; HistPVP=["53.3%","44.9%","1.1%"," 0.7%"];

corrr = '\n              <h2>THE 2008 ELECTION</h2>\n            ';


nct_stuff.themes[nct_stuff.selectedTheme].coloring_title = "#283570";

nct_stuff.themes[nct_stuff.selectedTheme].coloring_window = "#736fac";

document.getElementsByClassName("game_header")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_title;

$("#game_window")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_window;

$(".container")[0].style.backgroundColor = "#64406a";

document.getElementById("header").src = "https://i.imgur.com/jTz5aUC.png";

document.body.background = "https://upload.wikimedia.org/wikipedia/commons/3/30/Jack_Reed_DNC_2008.jpg";

document.head.innerHTML += "<style>#results_container {color:#000000;} .inner_window_w_desc {background-color:#c2d1ff!important;}</style>";

bannerArr=0
        
            bannerlist=["https://i.imgur.com/jTz5aUC.png", "https://i.imgur.com/XI2nQBe.png", "https://i.imgur.com/itcTHGg.png"]
            document.getElementById("header").src = bannerlist[Math.floor((Math.random() * bannerlist.length))]
            var changeBanner = () =>
            {
            bannerArr+=1
            document.getElementById("header").src=bannerlist[bannerArr % bannerlist.length]
            }
            document.getElementById("header").src=bannerlist[0]
            footer = $(".footer")[0]
            var button = document.createElement("button") // <button onclick="changeBanner()" style="font-weight: bold; height:19.49px; position: static; right: 770px; top: 0px;">Change banner</button>
            button.style = `font-weight: bold; height:19.49px; position: static; right: 770px; top: 0px;`
            button.innerHTML = "Change banner"
            footer.insertBefore(button, footer.firstChild);
            button.onclick = changeBanner;

//#endcode