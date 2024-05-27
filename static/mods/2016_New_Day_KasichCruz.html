// thank you to simonjet for making the mod tool used to make this
// thank you to 2021DE and Nina for making a bunch of the CYOA stuff I used and giving advice
// thank you to M4S and Killeritch for giving me technical support advice
// oh yeah and for anyone looking for things to steal, the saveTheEndangeredThirdParty function is something that you might find useful if you have any candidates who sometimes go below 0% in a state. it can also be modified to only include certain states, or to exclude certain states, or whatever. long term I might just make a thing which calculates what PV the candidate is at, but this just uses global scores as a bodge

// candidate image and name setup
campaignTrail_temp.candidate_image_url = 'https://i.imgur.com/ZxZ382f.png';                
campaignTrail_temp.running_mate_image_url = 'https://i.imgur.com/PXzlgy9.png';                
campaignTrail_temp.candidate_last_name = 'Kasich';                
campaignTrail_temp.running_mate_last_name = 'Cruz';

// CYOA

// question CYOA
var trumpiness = 0; // how much trump likes you
var trumpinessMax = 9; // how many trumpiness points you need for him to drop out for you
var trumpFuckYou = false; // does trump hate you forever
var runningmatePissed = 0; // this one doesnt matter for walker or robo rubio
var runningmatePissedMax = 3;
var wokeness = 0; // how liberal are you
var wokenessMax = 5; // wokeness cap
var con = 0; // how con are you
var conMax = 6; // con cap
var rejectedVP = 0; // 0 means not rejected
var pop_vote = 0;
var kasichPolling = 0;
var trumpPolling = 0;
var berniePolling = 0;
var droppedVeeps = 0;
var totalVeepAnswers = 8; // this is the number of potential answers for the question for picking a veep when cruz drops out - change it if you add one!
var trumpDeath = false;
// endings checks
var FUCKYOU = false; // did cruz fuck you over
var cruzRevolt = false; // did cruz whine
var trumpDropped = false; // did trump drop out for you?
var droppedForTrump = false; // did you drop out for trump?
var liberalKasich = false; // kasich is a dirty lib no wonder he lost
var conKasich = false; //did kasich go con?
var vpname = "Ted Cruz";

campaignTrail_temp.cyoa = true;
e = campaignTrail_temp;

// don't go through and read these unless you want CYOA spoilers!
extraQuestions = JSON.parse("[{\"model\": \"campaign_trail.question\", \"pk\": 21048, \"fields\": {\"priority\": 1, \"description\": \"Just before the election comes to a close, a weary Trump has contacted you. He's offered... to drop out and endorse you?\", \"likelihood\": 1.0, \"question_number\": \"26\"}}, {\"model\": \"campaign_trail.question\", \"pk\": 21057, \"fields\": {\"priority\": 1, \"description\": \"Just before the election comes to a close, a weary Trump has contacted you. He's asking... for you to drop out and endorse him?\", \"likelihood\": 1.0, \"question_number\": \"27\"}},{\"model\": \"campaign_trail.question\", \"pk\": 1039, \"fields\": {\"priority\": 1, \"description\": \"Not long before the election comes to a close, the Vice Presidential Debates have been held...\", \"likelihood\": 1.0, \"question_number\": \"28\"}},{\"model\": \"campaign_trail.question\", \"pk\": 11337, \"fields\": {\"priority\": 1, \"description\": \"As expected, you\'ve made a bit of a pivot heading into the general election. Less expectedly, it's been... very liberal. As Cruz fumes, Trump reaches out to disaffected conservatives, raging against \'Calamity Kasich\', and Bernie keeps trying to push you back to the right, how are you going to sell this new direction?\", \"likelihood\": 1.0, \"question_number\": \"29\"}},{\"model\": \"campaign_trail.question\", \"pk\": 1337, \"fields\": {\"priority\": 1, \"description\": \"As expected, you\'ve made a bit of a pivot heading into the general election. Less expectedly, it\'s been... very conservative. Cruz is over the moon, Trump is having to push further and further towards the fringes of the right in an effort to hurt you, and Sanders is decrying you as \'George Bush 2.0\'. How are you going to sell this new direction?\", \"likelihood\": 1.0, \"question_number\": \"30\"}},{\"model\": \"campaign_trail.question\", \"pk\": 1042, \"fields\": {\"priority\": 1, \"description\": \"???\", \"likelihood\": 1.0, \"question_number\": \"31\"}},{\"model\": \"campaign_trail.question\", \"pk\": 1043, \"fields\": {\"priority\": 1, \"description\": \"Enraged by your liberal policies and your repeated failure to listen to his advice and counsel, Ted Cruz has dropped off the ticket in a fit of rage. You need to find a replacement quickly - who will you call?\", \"likelihood\": 1.0, \"question_number\": \"32\"}},{\"model\": \"campaign_trail.question\", \"pk\": 1044, \"fields\": {\"priority\": 1, \"description\": \"trump is playing relatively nice with you actually but also trying to claw back support, you\'re being kinda friendly with him but also stealing his whole platform\", \"likelihood\": 1.0, \"question_number\": \"33\"}},{\"model\": \"campaign_trail.question\", \"pk\": 1683, \"fields\": {\"priority\": 1, \"description\": \"As Sanders falls in the polls, he is redoubling his efforts, launching broadsides against the Republican Congress, appearing with President Obama at rallies, giving fiery speeches about how with your \'socialism for the very wealthy\', you are the real radical, and other desperate attempts to claw back support. Unfortunately, it seems to be working. How are we going to hit back?\", \"likelihood\": 1.0, \"question_number\": \"34\"}},{\"model\": \"campaign_trail.question\", \"pk\": 1046, \"fields\": {\"priority\": 1, \"description\": \"With your new running mate by your side, you have a desperate few days to campaign before people start voting. Where will you go?\", \"likelihood\": 1.0, \"question_number\": \"35\"}},{\"model\": \"campaign_trail.question\", \"pk\": 1007, \"fields\": {\"priority\": 1, \"description\": \"A mass shooting has occured at Pulse, a gay nightclub in Orlando. This shooting was perpetrated by a Muslim, and 50 people have been killed. What is your reaction?\", \"likelihood\": 1.0, \"question_number\": \"36\"}}]");
cyoAdventure = function (a) {
	//stolen from 2016 gary
	let pop_vote = e.current_results[0];
	let kasichPolling = (pop_vote.find(p => p.pk === 200)).pvp;
	let berniePolling = (pop_vote.find(p => p.pk === 201)).pvp;
	let trumpPolling = (pop_vote.find(p => p.pk === 202)).pvp;
	let thirdPartyPolling = (pop_vote.find(p => p.pk === 202)).pvp;
	
	saveTheEndangeredThirdParty(203,0.05); // makes sure the LP/Greens/Other never get 0% in a state
	applyDrift(201,0.003); //minor boost for bernie every question as balancing
	applyTrumpDrift(202,-0.017); //minor malus for trump every question so he goes down over time
	applyDrift(203,-0.001); //minor malus for third parties every question so they go down over time
    ans = e.player_answers[e.player_answers.length - 1] // useful for checks
	
	// remember to comment this out before release
	//console.log(campaignTrail_temp);
	// first question gives trump a big universal buff so he then dies more
	if (ans == 20721 || ans == 20733 || ans == 20718 || ans == 20728) {
		applyDrift(202,0.1);
	}
	
	// did you say a trumpy thing? get a trump point!
    if (ans == 1455 || ans == 20718 || ans == 5017 || ans == 5062 || ans == 5023 || ans == 20752 || ans == 20751 || ans == 5099 || ans == 20962 || ans == 20847) {
		applyTrumpDrift(202,-0.015); // being trumpy makes trump get less votes
        trumpiness++; // trump liked that
    } else if (ans == 20715 || ans == 20917 || ans == 20874 || ans == 5063 || ans == 20912 || ans == 20836) { // ultratrumpy
		applyTrumpDrift(202,-0.03); // being very trumpy makes trump get even less votes
		trumpiness+=2; // trump loved that
	} else if (ans == 5003 || ans == 20830 || ans == 5020 || ans == 20905) {
		if (ans == 20830) { // having issues with global score so applying it here too
			applyTrumpDrift(202,-0.1); // you are hard bashing trump
		}
		trumpFuckYou = true; // he will never endorse you or anything - however for palin or other checks like that, they still fire
	}
	// did you say something that made cruz mad?
	if (ans == 6002 || ans == 5127 || ans == 20749 || ans == 5063) {
	    applyDrift(200,-0.001); // running mate angy hurts you a little
        runningmatePissed++;
    } else if (ans == 20751 || ans == 20855 || ans == 21022 || ans == 5027) {
		applyDrift(200,-0.002); // running mate very angy hurts you a little
		runningmatePissed+=2;
	} else if (ans == 1454 || ans == 20689 || ans == 5066 || ans == 20978 || ans == 5125 || ans == 133714) {
		applyDrift(200,0.002); // running mate happy helps you
		runningmatePissed-=1;
	}
	// did you say something woke?
	if (ans == 5999 || ans == 20799 || ans == 20844 || ans == 1456 || ans == 208701) { //woke
	    applyTrumpDrift(202,0.015); // wokeness boosts trump
        wokeness++;
    } else if (ans == 20751 || ans == 5199) { //superwoke
		applyTrumpDrift(202,0.03); // superwokeness boosts trump
		wokeness+=2;
	} // question is PK 11337
	
	// did you say something con?
	if (ans == 1457 || ans == 20905 || ans == 20906 || ans == 20836 || ans == 20689 || ans == 20733 || ans == 20733 || ans == 20750 || ans == 5100 || ans == 5098 || ans == 20944 || ans == 20869 || ans == 20905 || ans == 20916 || ans == 5066) { //con
        con++;
		applyTrumpDrift(202,-0.008);
    } // question is PK 1337
	
	// bad alt veeps
	if (ans == 9003 || ans == 9006) {// pataki is from choice or trump
		rejectedVP = 1;
	} else if (ans == 9201 || ans == 9202 || ans == 9004) { // condi or palin or rubio gets boehner
		rejectedVP = 2;
	} else if (ans == 9007 || ans == 9008) { // brown is from cruz or romney
		rejectedVP = 3;
	}
	
	//VP choice stuff
	if (campaignTrail_temp.question_number == 24) {
		// if hawkish, condi is an option
		if (wasAnsPicked(20855)) { // support invading iraq, her denying is thrown out
			campaignTrail_temp.answers_json.find(item => item.pk === 9201).fields.question = '';
			droppedVeeps++;
		} else if (wasAnsPicked(20859)) { // dodge on iraq, her accepting is thrown out
			campaignTrail_temp.answers_json.find(item => item.pk === 9001).fields.question = '';
			droppedVeeps++;
		} else { // neither, both are thrown out
			campaignTrail_temp.answers_json.find(item => item.pk === 9201).fields.question = '';
			campaignTrail_temp.answers_json.find(item => item.pk === 9001).fields.question = '';
			droppedVeeps+=2;
			console.log("condi is down");
		}
		
		// if not trumpy enough, drop trump
		if (trumpiness < 6) {
			campaignTrail_temp.answers_json.find(item => item.pk === 90039).fields.question = '';
			campaignTrail_temp.answers_json.find(item => item.pk === 9003).fields.question = '';
			droppedVeeps++;
			droppedVeeps+=2;
		} else if (trumpiness > 8) { // he is happy to accept
			campaignTrail_temp.answers_json.find(item => item.pk === 9003).fields.question = '';
			droppedVeeps++;
		} else { // trumpiness is 6 or 7 or 8, he appears but says no
			campaignTrail_temp.answers_json.find(item => item.pk === 90039).fields.question = '';
		}
		
		if (trumpiness > 2 && trumpiness < 5) { // if trumpiness is 3-4, palin appears but only says no
			campaignTrail_temp.answers_json.find(item => item.pk === 9002).fields.question = '';
			droppedVeeps++;
		} else if (trumpiness > 4 && trumpiness <= 6) {// if trumpiness is 5 or 6 she appears and says yes
			campaignTrail_temp.answers_json.find(item => item.pk === 9202).fields.question = '';
			droppedVeeps++;
		} else { // no palin
			campaignTrail_temp.answers_json.find(item => item.pk === 9002).fields.question = '';
			campaignTrail_temp.answers_json.find(item => item.pk === 9202).fields.question = '';
			droppedVeeps+=2;
		}
		
		// if still need extra, marco
		if (droppedVeeps<(totalVeepAnswers-4)) {
			campaignTrail_temp.answers_json.find(item => item.pk === 9004).fields.question = '';
			droppedVeeps++;
		}
		// if still need extra, romney
		if (droppedVeeps<(totalVeepAnswers-4)) {
			campaignTrail_temp.answers_json.find(item => item.pk === 9007).fields.question = '';
			droppedVeeps++;
		}
		// if need more cruz
		if (droppedVeeps<(totalVeepAnswers-4)) {
			campaignTrail_temp.answers_json.find(item => item.pk === 9008).fields.question = '';
			droppedVeeps++;
		}
		// if antiwoke, newt is an option
		if (con<3 || droppedVeeps<(totalVeepAnswers-4)) {
			campaignTrail_temp.answers_json.find(item => item.pk === 9005).fields.question = '';
			droppedVeeps++;
		}
		
		// if not woke, pataki is not an option
		if (wokeness<3 || droppedVeeps<(totalVeepAnswers-4)) {
			campaignTrail_temp.answers_json.find(item => item.pk === 9006).fields.question = '';
			droppedVeeps++;
		}
	}
	
	// new vp wow
	if (campaignTrail_temp.question_number == 25 && runningmatePissed >= 5) {
        applyDrift(200,-0.032);
		applyDrift(202,0.2);
		applyDrift(203,0.02);
		campaignTrail_temp.candidate_image_url = 'https://i.imgur.com/4UyevXl.png'; // punished kasich    
		FUCKYOU = true;
		
		if (rejectedVP != 0) { // first choice rejected you or you got a loser
			applyDrift(200,-0.01);
			applyDrift(202,0.05);
			applyDrift(203,0.01);
			
			if (rejectedVP == 1) { // Pataki
				campaignTrail_temp.running_mate_image_url = 'https://i.imgur.com/TNcKvOF.png';
				campaignTrail_temp.running_mate_last_name = 'Pataki';
				vpname = "George Pataki";
			} else if (rejectedVP == 2) { // Boehner
				campaignTrail_temp.running_mate_image_url = 'https://i.imgur.com/XBNRYZf.png';
				campaignTrail_temp.running_mate_last_name = 'Boehner';
				vpname = "John Boehner";
			} else if (rejectedVP == 3) { // Brown
				campaignTrail_temp.running_mate_image_url = 'https://i.imgur.com/fCd3M9I.png';
				campaignTrail_temp.running_mate_last_name = 'Brown';
				vpname = "Scott Brown";
			}
		} else if (ans == 9001) { // condi
			//malus is a lot less bad
			applyDrift(200,0.01);
			//brings back third party people
			applyDrift(203,-0.015);
			campaignTrail_temp.running_mate_image_url = 'https://i.imgur.com/yt4KRm3.png';
			campaignTrail_temp.running_mate_last_name = 'Rice';
			vpname = "Condoleezza Rice";
		} else if (ans == 9002) { // palin
			applyDrift(200,0.005);
			campaignTrail_temp.running_mate_image_url = 'https://i.imgur.com/NLCJ8cH.png';
			campaignTrail_temp.running_mate_last_name = 'Palin';
			vpname = "Sarah Palin";
		} else if (ans == 90039) { // trump
			// helps kasich by more than condi because the answers you need to do to get him are worse
			applyDrift(200,0.008);
			//nuke the orange man, boost third parties
			applyDrift(202,-1);
			applyDrift(202,-1);
			applyDrift(203,0.1);
			campaignTrail_temp.running_mate_image_url = 'https://i.imgur.com/mVY1oWp.png'; // lower res than other pics, may need to get another
			campaignTrail_temp.running_mate_last_name = 'Trump';
			vpname = "Donald Trump";
		} else if (ans == 9005) { // Gingrich
			applyDrift(200,0.01);
			campaignTrail_temp.running_mate_image_url = 'https://i.imgur.com/D2K0kTP.png';
			campaignTrail_temp.running_mate_last_name = 'Gingrich';
			vpname = "Newt Gingrich";
		}
	}
	//cruz will whine at the VP debate
	if (campaignTrail_temp.question_number == 22 && runningmatePissed >= runningmatePissedMax) {
        let selectedQuestion = extraQuestions[2];
		//console.log("lyin\' ted");
		e.questions_json.splice(23, 1, selectedQuestion);
		//console.log(campaignTrail_temp);
		//pk is 5998
	}
	//cruz drops out lol lmao - sends you to question 26
	if (campaignTrail_temp.question_number == 24 && runningmatePissed >= (runningmatePissedMax*2)) {
        let selectedQuestion = extraQuestions[6];
		e.global_parameter_json[0].fields.question_count = 27
		//console.log("wolverine is out for your blood");
		e.questions_json.splice(25, 1, selectedQuestion);
		//pk is 1043
	}
	// cruz dropped out campaigning Q
	if (campaignTrail_temp.question_number == 24 && runningmatePissed >= (runningmatePissedMax*2)) {
		runningmatePissedMax = 0; // just to make sure for a check
        let selectedQuestion = extraQuestions[9]; //10th question
		e.questions_json.splice(26, 1, selectedQuestion);
		//pk is 1046
	}
	
	//trump will endorse you
	if (campaignTrail_temp.question_number == 23 && trumpiness > trumpinessMax && !trumpFuckYou) {
        let selectedQuestion = extraQuestions[0];
		//console.log("trumptime");
		e.questions_json.splice(24, 1, selectedQuestion);
		//console.log(campaignTrail_temp);
		//pk is 21048
	}
	//do you want to endorse trump???
	if (campaignTrail_temp.question_number == 23 && trumpiness == trumpinessMax && !trumpFuckYou) {
		let selectedQuestion = extraQuestions[1];
		//console.log("trump\'s time");
		e.questions_json.splice(24, 1, selectedQuestion);
		//console.log(campaignTrail_temp);
		//pk is 21057
	}
	//is bernie polling bad and getting desperate?
	if (campaignTrail_temp.question_number == 21 && ((kasichPolling-berniePolling)>0)) {
		let selectedQuestion = extraQuestions[8];
		e.questions_json.splice(22, 1, selectedQuestion);
		// decides if you get the good version or not
		if (trumpiness>2) {
			campaignTrail_temp.answers_json.find(item => item.pk === 16834).fields.question = ''; // drops bad answer
		} else {
			campaignTrail_temp.answers_json.find(item => item.pk === 16833).fields.question = ''; // drops good answer
		}
		//console.log(campaignTrail_temp);
		//pk is 21057
	}
	// was cruz just a whiny little bitch? if so, you get hurt. and trump is boosted for good measure. thanks cruz!
	if (campaignTrail_temp.question_number == 23 && ans == 5998) {
		cruzRevolt = true;
		applyTrumpDrift(202,0.08)
		applyDrift(203,0.01)
		applyDrift(200,-0.01)
	}
	//did trump just drop out for you? if so, all his support is removed
	if (campaignTrail_temp.question_number == 24 && ans == 21049) {
		trumpDropped = true;
		applyDrift(202,-1) // not apply trump drift because this is a nuke
		applyDrift(202,-1) // not apply trump drift because this is a nuke
		trumpDeath = true;
		applyDrift(200,0.09)
	}
	//did you drop out for trump? well, you are now gone
	if (campaignTrail_temp.question_number == 24 && ans == 21059) {
		droppedForTrump = true;
		applyDrift(200,-1)
		applyDrift(200,-1)
		applyTrumpDrift(202,0.83)
	}
	//when the john kasich is woke :rofl: :rofl: :rofl:
	if (campaignTrail_temp.question_number == 20 && liberalKasich) {
		let selectedQuestion = extraQuestions[3];
		e.questions_json.splice(21, 1, selectedQuestion);
		applyDrift(203,0.03); // boosts the LP
		applyTrumpDrift(202,0.1);
		applyDrift(200,0.01); // raaaaa
	}
	//when the john kasich is conservative :rofl: :rofl: :rofl:
	if (campaignTrail_temp.question_number == 20 && conKasich) {
		let selectedQuestion = extraQuestions[4];
		e.questions_json.splice(21, 1, selectedQuestion);
		applyDrift(203,0.03); // boosts the LP
		applyTrumpDrift(202,-0.1);
		applyDrift(200,0.015); // raaaaaa
	}
	//wokeness
	if (wokeness>=wokenessMax && !liberalKasich && !conKasich) {
		if (con>3) {
			wokeness-=3;
			con-=3;
		} else {
			liberalKasich = true;
		}
		console.log("woke!");
	}
	//conservativeness
	if (con>=conMax && !conKasich && !liberalKasich) {
		if (wokeness>3) {
			con-=3;
			wokeness-=3;
		} else {
			conKasich = true;
		}
		console.log("antiwoke!");
	}
	if (campaignTrail_temp.question_number == 0) { // decides if you get nice or pulse
		if (generateRandomNumber(1,2)==2) { // 50 50 chance
			let selectedQuestion = extraQuestions[10];
			e.questions_json.splice(1, 1, selectedQuestion);
		}
	}
	if (campaignTrail_temp.question_number == 16) {
		if (wokeness<4) {
			campaignTrail_temp.answers_json.find(item => item.pk === 208701).fields.question = ''; // drops woke lib answer
		}
	}
	if (campaignTrail_temp.question_number == 22 && ((kasichPolling-berniePolling)>0)) {
		campaignTrail_temp.candidate_image_url = 'https://i.imgur.com/tj587oG.png';
	}
	//console.log("trump points: "+trumpiness+"\n running mate anger:"+runningmatePissed);
}
function wasAnsPicked(ans) {
	if (e.player_answers.includes(ans)) {
		return true;
    }
	return false;
}
function multiplyEffect(num, answers) {
    campaignTrail_temp.answer_score_global_json.forEach(item => {
        if (answers.includes(item.fields.answer)) {
            item.fields.global_multiplier *= num;
        }
    });

    campaignTrail_temp.answer_score_issue_json.forEach(item => {
        if (answers.includes(item.fields.answer)) {
            item.fields.issue_importance *= num;
        }
    });

    campaignTrail_temp.answer_score_state_json.forEach(item => {
        if (answers.includes(item.fields.answer)) {
            item.fields.state_multiplier *= num;
        }
    });
}

function addEffect(num, answers) {
    campaignTrail_temp.answer_score_global_json.forEach(item => {
        if (answers.includes(item.fields.answer)) {
            item.fields.global_multiplier += num;
        }
    });

    campaignTrail_temp.answer_score_issue_json.forEach(item => {
        if (answers.includes(item.fields.answer)) {
            if (num > 0) {
                item.fields.issue_importance *= 1.2;
            } else if (num < 0) {
                item.fields.issue_importance /= 1.2;
            }
        }
    });

    campaignTrail_temp.answer_score_state_json.forEach(item => {
        if (answers.includes(item.fields.answer)) {
            item.fields.state_multiplier += num;
        }
    });
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function applyDrift(candidateId, driftAmount, stateId) {
  // Loop through each object in the JSON array
  campaignTrail_temp.candidate_state_multiplier_json.forEach((item) => {
    // Check if the candidate ID matches the given candidate
    if (item.fields.candidate === candidateId) {
      // If stateId is undefined or empty, apply drift to all states for that candidate
      if (stateId === undefined || stateId.length === 0) {
        item.fields.state_multiplier += driftAmount;
        item.fields.state_multiplier = Math.max(0, item.fields.state_multiplier); // Ensure the multiplier never goes below 0
      } else {
        // If stateId is an array, loop through it
        if (Array.isArray(stateId)) {
          if (stateId.includes(item.fields.state)) {
            item.fields.state_multiplier += driftAmount;
            item.fields.state_multiplier = Math.max(0, item.fields.state_multiplier); // Ensure the multiplier never goes below 0
          }
        } else {
          // If stateId is a single value, just check it
          if (item.fields.state === stateId) {
            item.fields.state_multiplier += driftAmount;
            item.fields.state_multiplier = Math.max(0, item.fields.state_multiplier); // Ensure the multiplier never goes below 0
          }
        }
      }
    }
  });
}

//applies a global drift, but avoids states where the candidate is under 0.2 (basically dead) if its negative and allows for states where support is between 0.2 and 0.1 
function applyTrumpDrift(candidateId, driftAmount) {
  // Loop through each object in the JSON array
  if (!trumpDeath) {
	  campaignTrail_temp.candidate_state_multiplier_json.forEach((item) => {
		// Check if the candidate ID matches the given candidate
		if (item.fields.candidate === candidateId) {
			if ( (item.fields.state_multiplier >= 0.2 && (driftAmount<0)) || driftAmount>0) {
				item.fields.state_multiplier += driftAmount;
				item.fields.state_multiplier = Math.max(0.1, item.fields.state_multiplier); // Ensure the multiplier never goes below 0.1
			}
		}
	  });
  }
}

function saveTheEndangeredThirdParty(candidateId, minAmount) {
  // Loop through each object in the JSON array
  campaignTrail_temp.candidate_state_multiplier_json.forEach((item) => {
    // Check if the candidate ID matches the given candidate
    if (item.fields.candidate === candidateId) {
		item.fields.state_multiplier = Math.max(minAmount, item.fields.state_multiplier); // Ensure the multiplier never goes below minAmount
    }
  });
}

campaignTrail_temp.questions_json = [
    {
        "model": "campaign_trail.question",
        "pk": 1000,
        "fields": {
            "priority": 1,
            "description": "After a deal with Cruz, it is now clear that you will have enough delegates to become the Republican nominee for the Presidency. Trump is claiming a Corrupt Bargain, and plans a third-party run. What will be your message going into the General Election?",
            "likelihood": 1
        }
    },
	{
        "model": "campaign_trail.question",
        "pk": 1011,
        "fields": {
            "priority": 5,
            "description": "A terrorist attack has occurred in Nice today, and 86 people have died, with many more injured. What will your response be?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1001,
        "fields": {
            "priority": 3,
            "description": "What was your rationale behind selecting Ted Cruz as your running mate?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1019,
        "fields": {
            "priority": 4,
            "description": "How are you planning to reach out to the supporters of Donald Trump's third party bid?",
            "likelihood": 0.5
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1008,
        "fields": {
            "priority": 4,
            "description": "What will your message be as you accept the Republican nomination for President on national television?",
            "likelihood": 1
        }
    },
    {
		"model": "campaign_trail.question",
		"pk": 1453,
		"fields": {
			"priority": 1,
			"description": "Early on in the race, there's a critical difficulty you're facing: the Republican base. Trump is seen as the rightful nominee by about 40% of Republicans, and the Republican base was never favorable to you at the best of times. How are you going to get these people to vote for you rather than voting for Trump or staying home?",
			"likelihood": 1.0
		}
	},
	{
        "model": "campaign_trail.question",
        "pk": 1006,
        "fields": {
            "priority": 2,
            "description": "Another day on the campaign trail. What policies will you choose to highlight?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1009,
        "fields": {
            "priority": 5,
            "description": "There are rumors that many who supported Clinton in 2016 are dissatisfied with the choice of Sanders for nominee, despite her endorsement. What, if anything, will you do to court them?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1038,
        "fields": {
            "priority": 8,
            "description": "With the present state of the race, it seems that you need to play defensive in a traditional Republican stronghold: the South. What’s going to be your strategy to win back states like Georgia, North Carolina, and Florida?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1022,
        "fields": {
            "priority": 10,
            "description": "How will your campaign handle the issue of gay marriage?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1020,
        "fields": {
            "priority": 10,
            "description": "To what extent are you going to talk about NAFTA, the TPP, and other trade agreements?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1012,
        "fields": {
            "priority": 10,
            "description": "Sanders had a primary scandal regarding an old article where he wrote about a lot of very gross things, such as women fantasizing about being raped. Do you want to try to dredge that up again?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1030,
        "fields": {
            "priority": 10,
            "description": "Donald Trump has campaigned in Florida, Georgia, and North Carolina a lot recently, clearly trying to hand the states to Sanders. Sanders, meanwhile, has been campaigning in the upper midwest, trying to keep those states in his column. What are you going to do in response?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1027,
        "fields": {
            "priority": 10,
            "description": "You worked for Lehman Brothers when the company went bankrupt during the 2008 financial crisis, and Sanders and his surrogates, as well as Trump, have attacked you for this. What will be your campaign’s response?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1016,
        "fields": {
            "priority": 10,
            "description": "Immigration has been a notable issue this election. Both Trump and Sanders have taken historically tough stances on the border, though Sanders\' stance is a far cry from what it was years ago. What is your position on this salient issue?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1029,
        "fields": {
            "priority": 10,
            "description": "What are your plans for the American economy as a whole?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1021,
        "fields": {
            "priority": 10,
            "description": "You have a long history with fiscal conservatism, having written the first balanced national budget in decades in '97. How are you going to try to play this on the campaign trail?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1014,
        "fields": {
            "priority": 10,
            "description": "You've been attacked for speaking in favor of the Iraq Invasion back in 2002. What's your response?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1025,
        "fields": {
            "priority": -6,
            "description": "After experiencing chest pain at an event earlier today, Sanders' team has admitted that he suffered from a heart attack. How are we going to address this?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1026,
        "fields": {
            "priority": -5,
            "description": "Do you plan to participate in the traditional three debates, between yourself and Bernie Sanders?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1033,
        "fields": {
            "priority": -4,
            "description": "As the Campaign nears it\'s close, Trump has launched a new flurry of attacks on your compassionate conservative philosophy, calling it out of date and tying you to what he terms \"forever wars\". What is going to be your response?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1035,
        "fields": {
            "priority": -3,
            "description": "As the election is coming to a close, we have an opportunity to press a message to the American people before they step into the voting booth. What will it be?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1034,
        "fields": {
            "priority": -3,
            "description": "At a rally in Ohio, a young man asks you what your favorite thing about Bernie Sanders is. What do you say?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1036,
        "fields": {
            "priority": -2,
            "description": "Not long before the election comes to a close, the Vice Presidential Debates have been held...",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1037,
        "fields": {
            "priority": -1,
            "description": "With the election almost over, where will you spend the last days of your campaign?",
            "likelihood": 1
        }
    }
]

campaignTrail_temp.answers_json = [
	// patriot base answers
	{
        "model": "campaign_trail.answer",
        "pk": 1454,
        "fields": {
            "question": 1453,
            "description": "Well, I'll deploy Cruz. He does well with these base types, he'll win them back."
        }
    },
	{
        "model": "campaign_trail.answer",
        "pk": 1455,
        "fields": {
            "question": 1453,
            "description": "Oh, uh. Well, I'll start working with my surrogates, Carson and Rubio and Gingrich and whoever I can get, we've got to get these people back on board. In particular, let\'s go after those who supported Trump in the primary - we\'ll bring them back on board early."
        }
    },
	{
        "model": "campaign_trail.answer",
        "pk": 1456,
        "fields": {
            "question": 1453,
            "description": "You know what? I don't need them. I'll keep pushing with moderates, with independents, with those on the right of the Democratic Party, and I'll make up for the base with new voters."
        }
    },
	{
        "model": "campaign_trail.answer",
        "pk": 1457,
        "fields": {
            "question": 1453,
            "description": "I'll have to start changing things up. I'll shift personally, to the right, more towards what they like. I'll get Newt and Cruz and all them out there. I'll go all out. I can't win without the base."
        }
    },
	// lame answers below! not patriotic
	{ // works if you have been hawkish
        "model": "campaign_trail.answer",
        "pk": 9001,
        "fields": {
            "question": 1043,
            "description": "Oh God. Well, we\'ve got to fix this quickly. Get me someone with real experience, Condi Rice, on the phone, we\'ll swap her in."
        }
    },
	{ // condi fail
        "model": "campaign_trail.answer",
        "pk": 9201,
        "fields": {
            "question": 1043,
            "description": "Oh God. Well, we\'ve got to fix this quickly. Get me someone with real experience, Condi Rice, on the phone, we\'ll swap her in."
        }
    },
	{ // always shows up, accepts w/3+ trump pts
        "model": "campaign_trail.answer",
        "pk": 9002,
        "fields": {
            "question": 1043,
            "description": "Oh God. Uh, how about we go for... hell. Palin? She hasn\'t stuck with Trump after he went indie, and she\'d fire up the base. Call her up."
        }
    },
	{ // palin fail
        "model": "campaign_trail.answer",
        "pk": 9202,
        "fields": {
            "question": 1043,
            "description": "Oh God. Uh, how about we go for... hell. Palin? She hasn\'t stuck with Trump after he went indie, and she\'d fire up the base. Call her up."
        }
    },
	{ // shows up with 6+ trump points, this is the no
        "model": "campaign_trail.answer",
        "pk": 9003,
        "fields": {
            "question": 1043,
            "description": "What a disaster. God. Well, I know one way out of this. It\'s tough for me, you know that, but let\'s call up Donald, maybe we can work something out."
        }
    },
	{ // trump says yes
        "model": "campaign_trail.answer",
        "pk": 90039,
        "fields": {
            "question": 1043,
            "description": "What a disaster. God. Well, I know one way out of this. It\'s tough for me, you know that, but let\'s call up Donald, maybe we can work something out."
        }
    },
	{ // generic pick, always rejects
        "model": "campaign_trail.answer",
        "pk": 9004,
        "fields": {
            "question": 1043,
            "description": "Oh God. How about I tap, um, Senator Rubio? I mean, he\'s gotta be with me. We\'ll do great."
        }
    },
	{ // libby pick to get cons back on board, always accepts
        "model": "campaign_trail.answer",
        "pk": 9005,
        "fields": {
            "question": 1043,
            "description": "My God. Who would accept? Uh, Gingrich. God, I\'ve got to get the conservatives back on board somehow."
        }
    },
	{ // generic, always accepts
        "model": "campaign_trail.answer",
        "pk": 9006,
        "fields": {
            "question": 1043,
            "description": "Oh God. How about I tap, maybe, Pataki. God, I might as well lean into those moderates now. What other choice do I have?"
        }
    },
	{ // always says no because fuck you
        "model": "campaign_trail.answer",
        "pk": 9007,
        "fields": {
            "question": 1043,
            "description": "This is a disaster, but also an opportunity. Call up Romney. He\'ll get revenge for Obama, he can\'t say no."
        }
    },
	{ // lol no
        "model": "campaign_trail.answer",
        "pk": 9008,
        "fields": {
            "question": 1043,
            "description": "Oh. Surely he doesn't, he can't... call him. Cruz. We can get him back. We can fix this."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5003,
        "fields": {
            "question": 1001,
            "description": "Well, Ted Cruz and I worked together in the primaries, we denied the nomination to Trump, and I am simply repaying him for that. Look, I keep my deals, I honor my commitments."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5004,
        "fields": {
            "question": 1001,
            "description": "Ted Cruz is a courageous conservative. Ted Cruz is a constitutional scholar. Ted Cruz is a fighter for the American people. And he and I are going to fight against Sanders and bring a victory to the American people."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5017,
        "fields": {
            "question": 1007,
            "description": "Our thoughts and prayers go out to all affected by this Radical Islamic terrorist. This is truly a tragedy, and we cannot allow this sort of thing to continue."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5018,
        "fields": {
            "question": 1007,
            "description": "Our hearts and prayers go out to everyone affected by this shooting, and particularly the victims. Now is the most important time to remember the importance of working together and creating bipartisan change in order to prevent this from happening again."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5019,
        "fields": {
            "question": 1007,
            "description": "What happened in Orlando last right was a great tragedy, and my thoughts and prayers go out to all Americans affected by these terrible events."
        }
    },
	{
        "model": "campaign_trail.answer",
        "pk": 5999,
        "fields": {
            "question": 1007,
            "description": "Truly, the events in Orlando last night were terrible. Our thoughts and prayers go out to everyone affected by this shooting. Now is the most important time to remember the importance of tolerance in our society. We cannot allow ourselves to be divided and hateful."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5020,
        "fields": {
            "question": 1008,
            "description": "This is a good opportunity to pivot a bit from my positive stance in the primaries, and really get down in the mud, attacking Trump. We have to show voters that he isn't a good option, and bring people under our banner to beat Bernie."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5021,
        "fields": {
            "question": 1008,
            "description": "I will have a positive tone, focusing on my own accomplishments as Governor of Ohio, on my policies, on my sensible moderation."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5022,
        "fields": {
            "question": 1008,
            "description": "I will compare and contrast my record as Governor, and my record as a moderate and sensible conservative, with the radical socialist tendencies of Bernie Sanders, and remind voters of my views on the wall, tax cuts, and illegal immigration."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5023,
        "fields": {
            "question": 1008,
            "description": "I will go on the attack against Radical Socialist Bernie Sanders, I will attack his plans and warn against allowing our nation to fall to Communism. Do we want to become another Cuba?"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5024,
        "fields": {
            "question": 1009,
            "description": "I can’t get their support without losing support among my core supporters. If I try to appeal to centrist or establishment democrats, I\'ll lose the right-wingers that I need on my side to win this. I\’ll do nothing."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5025,
        "fields": {
            "question": 1009,
            "description": "I can’t do anything personally, but my running mate Cruz should begin to attack Sanders for ‘stealing’ the nomination from Clinton, amplifying old primary attacks by Sanders against Clinton, and trying to widen their rift."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5026,
        "fields": {
            "question": 1009,
            "description": "I’m going to try something radical. What if I talk to Hillary Clinton privately and offer her the position of Secretary of State to rescind her endorsement of Sanders?"
        }
    },
	{
        "model": "campaign_trail.answer",
        "pk": 5027,
        "fields": {
            "question": 1009,
            "description": "We'll use imagery to win these people over. I'm the establishmentarian, experienced, and nonpartisan Governor who wants to unite America, rather than divide us with radical polices that would destroy our system."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5040,
        "fields": {
            "question": 1014,
            "description": "If I knew what I know today, I would never have supported it. This invasion was a disaster. I was deceived just like millions of Americans were."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5060,
        "fields": {
            "question": 1019,
            "description": "He\'s splitting my votes, so I will emphasize the policies of mine that appeal more to his supporters, such as my policy on the wall, and my opposition to illegal immigration. But I will be careful not to outright say things which will damage my support with moderates. I need to be subtle about this."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5061,
        "fields": {
            "question": 1019,
            "description": "I will do nothing. Trump supporters are mostly concentrated in states which lean very red and which I will win anyway, so I'll actually perform better if instead of wasting my time on them, I campaign a bit more in the swing states."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5062,
        "fields": {
            "question": 1019,
            "description": "I will pivot to appeal more to his supporters. I will emphasize the policies that we already have in common, such as building the wall, and pivot away from many of the stances I had in the primary, such as my desire to allow illegal immigrants already in the country to stay. I'll become the candidate they want me to be, and they'll come running."
        }
    },
	{
        "model": "campaign_trail.answer",
        "pk": 5199,
        "fields": {
            "question": 1019,
            "description": "We\'re going to punch down, and use Trump to pivot - not just to the center, but we\'re going to try to even get some liberals, some center left people. We\'ve got to get them, we\'ve got to bring in those Clintonites and that\'ll let us destroy Sanders. He\'ll have no chance."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5063,
        "fields": {
            "question": 1020,
            "description": "Look, I need to win the midwest. And so I'm going to tell them what they want to hear, that if I am President, I am going to end NAFTA, I am going to end the TPP, and I am going to bring back our jobs from China. And I\'ll do it."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5064,
        "fields": {
            "question": 1020,
            "description": "Look, I\'ll just do a little pivot, make sure I still have some appeal up there. I\'ll tell them NAFTA is a good deal, and that I support it, but given some of the provisions that made it into the TPP, I can no longer lend my support to that. And that\'ll be good."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5065,
        "fields": {
            "question": 1020,
            "description": "I have a lot of issues to talk about, and I think it's better to avoid this one. It's divisive and it'll shatter any hopes I have of building a coalition to carry me to the Presidency."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5066,
        "fields": {
            "question": 1020,
            "description": "I am and have always been in favor of Free Trade. Taking a second look at NAFTA is fine, but once you take that look you see there are no problems, Canada is a great friend and Mexico, aside from a couple problems, is also a great friend. And of course, the TPP helps us fight Chinese influence in Asia, it helps us keep those nations on our side. These trade deals serve us, we don't serve them."
        }
    },
	
	{
        "model": "campaign_trail.answer",
        "pk": 5998,
        "fields": {
            "question": 1039,
            "description": "Cruz wants to do this, and he\'s not taking no for an answer. I hope he does well."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5071,
        "fields": {
            "question": 1022,
            "description": "It's just like I said in the primaries. I am against gay marriage personally, but the Supreme Court has already ruled. That's the judicial branch, it's not my place to overturn that."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5083,
        "fields": {
            "question": 1025,
            "description": "We won't address this directly, but let's start running ads showing me being fit and healthy. That'll clearly contrast our ages without requiring us to be nasty."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5085,
        "fields": {
            "question": 1025,
            "description": "I hate to see something like this. We're opponents, but in the end we are both human. I'll visit Sanders at the hospital."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5086,
        "fields": {
            "question": 1026,
            "description": "I don't think so. Debates aren't very widely watched these days, it would be a better use of my time to do some rallies in key swing states."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5087,
        "fields": {
            "question": 1026,
            "description": "I'm ready to debate Sanders!"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5088,
        "fields": {
            "question": 1026,
            "description": "I'm excited to debate Sanders!"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5089,
        "fields": {
            "question": 1026,
            "description": "I'm pumped up to debate Sanders!"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5097,
        "fields": {
            "question": 1029,
            "description": "Simple. I am going to cut taxes for every single American, and I am going to pay for it by cutting Democrat spending. Not only will every American have our taxes lowered, but we\'ll work our way to a balanced budget as well. And of course, we\'ve got to keep Social Security, and Medicare, and Medicaid, alive for our children."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5098,
        "fields": {
            "question": 1029,
            "description": "Well, I am going to make life better for the average American and bring us towards a balanced budget very quickly. How? By repealing and replacing Obamacare."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5099,
        "fields": {
            "question": 1029,
            "description": "Well, I am going to work towards a balanced budget, I\'m going to seek to cut spending, but I am also going to work to lower taxes and to increase the child tax credit and other measures. For too long, we\'ve neglected the young mothers struggling to care for their children, the working families who are the bedrock of this nation. And in the White House, I am going to change that."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5100,
        "fields": {
            "question": 1029,
            "description": "Well, I can talk about what I will and won\'t do. I will cut down our deficit. I will fight waste and graft in our government. I won\'t create a totalitarian socialist healthcare system, and I won\'t raise your taxes to pay for it!"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5124,
        "fields": {
            "question": 1037,
            "description": "We're going to visit Michigan, Wisconsin, and Minnesota. We're going to win those states, and we'll win the election!"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5125,
        "fields": {
            "question": 1037,
            "description": "We're going to rally in Nevada, in Colorado, and in New Mexico. These are some crucial states for us to win."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5126,
        "fields": {
            "question": 1037,
            "description": "We need to make sure that we can win Pennsylvania. We'll hit it, and hit it hard."
        }
    },
	{
        "model": "campaign_trail.answer",
        "pk": 5130,
        "fields": {
            "question": 1037,
            "description": "We need to make sure that we can win in North Carolina, in Florida, and in Virginia. That\'s what we\'ve got to do."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5127,
        "fields": {
            "question": 1038,
            "description": "I’m going to take advantage of Bernie's bad numbers with the black community. I’ll make a new black outreach section for my campaign, and bring in Doctor Ben Carson to lead it. People love him!"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5128,
        "fields": {
            "question": 1038,
            "description": "I’m going to start campaigning heavily in Georgia, North Carolina, and Florida, and encourage my surrogates to do the same."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5129,
        "fields": {
            "question": 1038,
            "description": "Whatever happens, I can’t lose Florida. I’m going to talk with former Governor Bush and some of our other surrogates there, and we’re going to fight like hell to make sure we win the sunshine state! "
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20689,
        "fields": {
            "question": 1001,
            "description": "Ted Cruz is a courageous conservative. Ted Cruz is a constitutional scholar. He has demonstrated in his time in the Senate, in his time on the trail for the Presidency, in his time in law, that he deeply cares about the American people. He has shown that he will not stop fighting! And that\'s why I picked him, he\'s a hero."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20703,
        "fields": {
            "question": 1006,
            "description": "I'll talk about my sensible moderation, attack Sanders a bit, and really try to present myself as the voice of reason. We\'ll take from the center while keeping the right behind us."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20706,
        "fields": {
            "question": 1006,
            "description": "I'll talk about my stance on immigration, pivot towards protectionism, and try to make a play for the Midwest and bring up my numbers in that region. I can\'t win without states like Pennsylvania and Wisconsin, and Bernie has a lot of appeal there."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20711,
        "fields": {
            "question": 1006,
            "description": "I'll talk about my harsh position on the Islamic State, attack the Obama administration for not doing enough, and generally hit Sanders for his weakness here. This is an opportunity to get some conservative points in without alienating the median voter."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20715,
        "fields": {
            "question": 1006,
            "description": "I'll emphasize the positions that I share with Trump, as long as they aren\'t unpopular, and try to bring in his supporters. Trump is the only reason we\'re down in the polls right now, by bringing his supporters back into the fold we can take the lead over Sanders and win this election for the American people!"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20718,
        "fields": {
            "question": 1000,
            "description": "We need to defuse Trump as a threat, and quickly. I\'m going to start emphasizing all of my positions that appeal to his base, my support of the wall, all that. By hitting him now, we can prevent his votesplitting from losing us this election, and maybe drive him out of the race entirely."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20721,
        "fields": {
            "question": 1000,
            "description": "We need to emphasize my position as a sensible moderate. With Sanders from the left and Trump on the right, we can pivot to the center, hit Sanders for radicalism, try not to mention Trump and hopefully win this election."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20728,
        "fields": {
            "question": 1000,
            "description": "I'll focus on positivity, on hope, and use Trump as a punching bag, with some good hits on Sanders as well. I'll show my own moderation using my opponents as examples of what I'm standing against."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20733,
        "fields": {
            "question": 1000,
            "description": "I'll focus on my conservative positions. I need to unite the right behind me to win this election, and shore up support in conservative regions. There\'s no other way to win this election."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20741,
        "fields": {
            "question": 1011,
            "description": "My thoughts and prayers go out to those affected by this terrible tragedy. This attack in France was simply a terrible thing, and as President I will offer my support to our allies whenever issues such as this crop up."
        }
    },
	{
        "model": "campaign_trail.answer",
        "pk": 20799,
        "fields": {
            "question": 1011,
            "description": "My thoughts and prayers go out to those affected by this terrible tragedy. It is important to remember the importance of tolerance and diversity. The enemy of radical fundamentalist terror is light and hope. They think that our diversity is a weakness, we will show them that it is a strength!"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20746,
        "fields": {
            "question": 1011,
            "description": "My thoughts and prayers go out to those affected by this terrible tragedy. As President, I will take a strong stance against radical jihadists and prevent terrible events like this from happening ever again."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20749,
        "fields": {
            "question": 1022,
            "description": "I'm against gay marriage personally, but I will abide by the Supreme Court's ruling. I believe that the Supreme Court is an institution worthy of our respect, and I don't plan to appoint judges who will overturn Obergefell."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20750,
        "fields": {
            "question": 1022,
            "description": "I am strongly against gay marriage. I will seek to pass an amendment to ban gay marriage, and if a vacancy opens up I will appoint a judge who will repeal Obergefell."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20751,
        "fields": {
            "question": 1022,
            "description": "I believe that any Americans who desire to enter into marriage have the right to do so, and I believe in extending full rights and privileges to all of the LGBT citizens in this great nation."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20752,
        "fields": {
            "question": 1038,
            "description": "You know the biggest reason for this problem? Vote splitting by the Donald. We’ll emphasize some of the positions that appeal to his base and try to peel some of them off, particularly in states like Georgia, North Carolina, and Florida."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20754,
        "fields": {
            "question": 1027,
            "description": "We’ll stay silent. Without any oxygen this will stay minor and it won’t be a problem. "
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20756,
        "fields": {
            "question": 1027,
            "description": "I’ve been accused of bankrupting Lehman Brothers. I actually operated a two-man office in Columbus, Ohio. If I can bankrupt Lehman Brothers from there, I ought to be the pope!"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20759,
        "fields": {
            "question": 1027,
            "description": "Deflect, deflect, deflect!"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20818,
        "fields": {
            "question": 1012,
            "description": "No, I want to keep this race clean. No mudslinging."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20821,
        "fields": {
            "question": 1012,
            "description": "This article was disgusting, and we've got to make that clear to the American people. Can we really trust someone who said things like this as President?"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20827,
        "fields": {
            "question": 1012,
            "description": "Not only will we bring this up, let's also talk about his history with the Liberty Union and his Communist Past."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20830,
        "fields": {
            "question": 1012,
            "description": "Let's not bring it up. Instead, we'll go after Trump for things he's said of a similar nature. How can anyone take a candidate like him seriously?"
        }
    },
    {
        "model": "campaign_trail.answer", // hard
        "pk": 20836,
        "fields": {
            "question": 1016,
            "description": "I believe in strong protection of our border. We need a wall, we need more border patrol officers down south, we need better enforcement of our existing laws and regulations, we need to do whatever we can to secure our open border and prevent these people from coming over."
        }
    },
    {
        "model": "campaign_trail.answer", // soft
        "pk": 20844,
        "fields": {
            "question": 1016,
            "description": "I stand for humane treatment of illegal immigrants just as Reagan did. I believe that we need amnesty for illegal immigrants, we need to keep taking care of our Dreamers, and we need a humane approach to all this. And of course, we also need a broad reform of our system for legal immigration, to make illegal immigration a less attractive alternative."
        }
    },
    {
        "model": "campaign_trail.answer", // irl response, middle of the road
        "pk": 20847,
        "fields": {
            "question": 1016,
            "description": "Well, I believe now exactly what I believed during the Republican Primaries. I want amnesty for illegal immigrants, but this flow, it\'s still a problem, and to stop it we need stronger measures like increasing the number of people down at the southern border and, yes, a border wall."
        }
    },
    {
        "model": "campaign_trail.answer", // softish
        "pk": 20851,
        "fields": {
            "question": 1016,
            "description": "Well, I believe now exactly what I believed during the Republican Primaries. I want amnesty for illegal immigrants, they\'re Americans just like the rest of us. But this flow, it\'s still a problem, and to stop it we need stronger measures like increasing the number of people down at the southern border. And we\'ll supplement that with a broad reform of our legal immigration, to streamline it and make illegal immigration less attractive."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20855,
        "fields": {
            "question": 1014,
            "description": "I supported the invasion of Iraq, and in fact I still do. We removed a murderous dictator and brought peace to the region."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20859,
        "fields": {
            "question": 1014,
            "description": "Did you know that Bernie Sanders has been calling for a new NATO against terrorism? Here's the problem: that already exists. It's called the counter-ISIS coalition. Bush and Obama already worked on these proposals, and Sanders is trying to spin them as new!"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20862,
        "fields": {
            "question": 1014,
            "description": "I don't know what I was thinking when I said that. I oppose the war and I always have."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20865,
        "fields": {
            "question": 1021,
            "description": "I'm going to talk about '97 on the Campaign Trail, and repeatedly claim that I will be able to bring us to a balanced budget while I am President. People can trust that I can do it, because I already have."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20869,
        "fields": {
            "question": 1021,
            "description": "I'm going to talk about my strong fiscally conservative record, and specifically contrast it with Sanders and his policies. He wants all these expensive things, how is he going to pay for them? Given my experience, voters can trust that my plans are realistic and achievable."
        }
    },
	{
        "model": "campaign_trail.answer",
        "pk": 208701,
        "fields": {
            "question": 1021,
            "description": "You know, I\'m trying to appeal to more centrist types who don\'t really care about all this very much. I\'m going to just go out and talk about how I\'ll be against cutting welfare."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20874,
        "fields": {
            "question": 1025,
            "description": "We'll talk a bit about how Bernie is physically unfit for the Presidency. A vote for President Bernie Sanders is a vote for President Klobuchar."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20905,
        "fields": {
            "question": 1033,
            "description": "I am a compassionate conservative. And you see, that\'s something that Donald Trump doesn\'t understand. He doesn\'t understand conservatism and he doesn\'t understand compassion. Donald Trump is masquerading as a conservative in order to take down my campaign, and the American People see that. They\'re not fooled."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20906,
        "fields": {
            "question": 1033,
            "description": "Compassion can never be out of date. Light can never be out of date. Hope can never be out of date. I think going into Iraq was wrong, but we need to be compassionate and we need light and hope and unity. I am going to be a President that my daughters, Emma and Reese, can be proud of."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20912,
        "fields": {
            "question": 1033,
            "description": "Look, I have been a compassionate conservative for my whole life, but we\'ve got to recognize compassionate conservatives just cannot win anymore. We cannot keep following Bush, we cannot keep following Romney, we need to carve out our own path."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20914,
        "fields": {
            "question": 1035,
            "description": "I'll talk about light and about hope. Positivity is really what will win us this election, not divisive rhetoric. I am a uniter, not a divider. That\'s the energy we need in the White House."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20915,
        "fields": {
            "question": 1035,
            "description": "Moderation and common sense. What the American people need to see is that between Sanders and Trump, I'm really the adult in the room. The two of them are off at the extremes while I am right here in the middle with the American people."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20916,
        "fields": {
            "question": 1035,
            "description": "We're going to talk about my fiscally conservative record. I drafted the first balanced budget in decades! I ran Ohio like a tight ship. And if anyone can bring down this national debt, I can."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20917,
        "fields": {
            "question": 1035,
            "description": "I offer the American people protection. I will protect them from every threat. I will protect them from illegal immigrants, from socialists, from all the enemies of this great nation. And this\'ll let me cut into Trump\'s support."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20930,
        "fields": {
            "question": 1036,
            "description": "I hope Cruz does well, but I'll just have to wait and see..."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20932,
        "fields": {
            "question": 1034,
            "description": "Um, uh, nothing. I don't think that there is one thing that I like about that man."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20935,
        "fields": {
            "question": 1034,
            "description": "Well, I really appreciate his integrity. I think he's a good man, an honest man, and I think he's really fighting for what he believes in. He and I believe in different things, but I respect that he does fight for what he believes in."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20939,
        "fields": {
            "question": 1034,
            "description": "Well, I appreciate that he's fought for gun rights, just like me. You know, I voted with the NRA on every bill for 7 years when I was Governor, and Sanders, he's historically voted further to the right on that than me, but I appreciate that he's fought for that cause. I believe in common sense gun reforms, Sanders, in the past, hasn't. Well, I respect, uh, his strength on that case."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20944,
        "fields": {
            "question": 1021,
            "description": "I'm going to talk about fiscal conservatism, and I'm going to tie that in to my broad conservatism as well. With Trump pretending to be a conservative in order to hurt me, I have no choice."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20959,
        "fields": {
            "question": 1030,
            "description": "I'm going to focus on the upper midwest. This is a crucial region, my home region, and we can't let Sanders beat us here."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20962,
        "fields": {
            "question": 1030,
            "description": "I'm going to focus on the southern states Trump is going for. If we lose any of these states, we can't expect to win the election."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20978,
        "fields": {
            "question": 1030,
            "description": "I'm not going to fight either of them. Instead, I'm going to campaign in the Southwest - Nevada, Arizona, Colorado, and New Mexico."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20979,
        "fields": {
            "question": 1030,
            "description": "I'm not going to fight either of them. Instead, I'm going to campaign heavily in New Hampshire and Maine. I've got to win those states."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21022,
        "fields": {
            "question": 1036,
            "description": "Eh, we'll have Cruz skip it. Klobuchar would demolish him."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21049,
        "fields": {
            "question": 21048,
            "description": "Victory is still in sight."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21050,
        "fields": {
            "question": 21048,
            "description": "Never."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21058,
        "fields": {
            "question": 21057,
            "description": "What? Of course not."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21059,
        "fields": {
            "question": 21057,
            "description": "It's the only way to unify the Republican vote. I have no choice."
        }
    },
	{
        "model": "campaign_trail.answer",
        "pk": 1146,
        "fields": {
            "question": 1046,
            "description": "I am going to have to do my last campaigning in the South. I need to keep Georgia, North Carolina, and Florida, and maybe I can take Virginia too?"
        }
    },
	{
        "model": "campaign_trail.answer",
        "pk": 1246,
        "fields": {
            "question": 1046,
            "description": "I am going to have to do my last campaigning in the Midwest. I\'ll hit Michigan, Wisconsin, Ohio, and win those states."
        }
    },
	{
        "model": "campaign_trail.answer",
        "pk": 1346,
        "fields": {
            "question": 1046,
            "description": "I am going to have to do my last campaigning on the Eastern Seaboard. Pennsylvania, New Hampsbire, and Maine."
        }
    },
	{
        "model": "campaign_trail.answer",
        "pk": 1446,
        "fields": {
            "question": 1046,
            "description": "I am going to have to do my last campaigning in the Southeast. Colorado, Arizona, and Nevada. With Cruz off the ticket, I can\'t fail here."
        }
    },
	{ // no winged hussars for you, bernie fends it off like a champ
        "model": "campaign_trail.answer",
        "pk": 16831,
        "fields": {
            "question": 1683,
            "description": "He can scream and he can shout but he is fundamentally radical. Why don\'t we run some ads about him and communist Cuba?"
        }
    },
	{ // you find out that they have had a strained relationship and hit them on it, obama goes 'yeah but we good now fam', everyone cheers, fuck you john
        "model": "campaign_trail.answer",
        "pk": 16832,
        "fields": {
            "question": 1683,
            "description": "From what I\'ve heard, Senator Sanders hasn\'t had the best relationship with President Obama. Maybe we can find something there? That\'d help us with those Clinton people for sure, maybe get some of them to stay home."
        }
    },
	{ // if you\'re trumpy then palin goes wild and it helps you and hurts trump
        "model": "campaign_trail.answer",
        "pk": 16833,
        "fields": {
            "question": 1683,
            "description": "We\'ll let him play Truman and drag things into the mud. I\'ll stay out of the fray and let my surrogates go wild."
        }
    },
	{ // not trumpy version where it goes ok and hurts you a little
        "model": "campaign_trail.answer",
        "pk": 16834,
        "fields": {
            "question": 1683,
            "description": "We\'ll let him play Truman and drag things into the mud. I\'ll stay out of the fray and let my surrogates go wild."
        }
    },
    {   "model": "campaign_trail.answer",
        "pk": 111337,
        "fields": {
            "question": 1337,
            "description": "Well, why don't I start really working those compassionate conservative muscles? Bush himself is too unpopular, but I'll trot out Condi and Colin and some of those other folks, and we'll really turn out that base."
        }
    },
	{
        "model": "campaign_trail.answer",
        "pk": 12337,
        "fields": {
            "question": 1337,
            "description": "Well, this is good news with Trump. But let's finish the job. I can't say anything, but let's get our surrogates to blast him, let's talk up some of his more popular proposals, let's do what we can to just destroy him. Without that damn votesplitter, we'll win this easily."
        }
    },
	{
        "model": "campaign_trail.answer",
        "pk": 13337,
        "fields": {
            "question": 1337,
            "description": "There is no moral imperative greater than that of the right to life, of the right to worship, and of the right to protect ourselves. Radical Democrats want to take all that away. I won't let them."
        }
    },
	{
        "model": "campaign_trail.answer",
        "pk": 14337,
        "fields": {
            "question": 1337,
            "description": "I believe in responsibility, in patriotism, and in reason. I believe that a message of sanity ground in compassionate, real, and down to earth conservatism is what is going to turn this nation around, and it's going to beat Sanders. And by winning, I'll prove it."
        }
    },
	{
        "model": "campaign_trail.answer",
        "pk": 133712,
        "fields": {
            "question": 11337,
            "description": "This is compassionate conservatism adapted for 2016. I want to get results, and to do that I'm working with what I have."
        }
    },
	{
        "model": "campaign_trail.answer",
        "pk": 133713,
        "fields": {
            "question": 11337,
            "description": "Tolerance and charity are christian values. Unlike the radical Democrats, I understand that we can support people's freedoms without needing to take away freedoms from our businesses, from our gun owners, and from other groups."
        }
    },
	{
        "model": "campaign_trail.answer",
        "pk": 133714,
        "fields": {
            "question": 11337,
            "description": "Look, enough of this campaign mumbo jumbo. Cruz is mad. I've got to talk to him before he does something stupid."
        }
    },
	{
        "model": "campaign_trail.answer",
        "pk": 133715,
        "fields": {
            "question": 11337,
            "description": "I think people are going too far, some things I'm saying are being taken out of context. Trump calls me a Calamity, I can tell you what a Calamity for this country would be: a Bernie Sanders Presidency. I am fundamentally a conservative, whether that's on abortion or on gun rights or on any other issue."
        }
    }
]

campaignTrail_temp.states_json = [
    {
        "model": "campaign_trail.state",
        "pk": 1000,
        "fields": {
            "name": "Alabama",
            "abbr": "AL",
            "electoral_votes": 9,
            "popular_votes": 2123372,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1001,
        "fields": {
            "name": "Alaska",
            "abbr": "AK",
            "electoral_votes": 3,
            "popular_votes": 318608,
            "poll_closing_time": 420,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1002,
        "fields": {
            "name": "Arizona",
            "abbr": "AZ",
            "electoral_votes": 11,
            "popular_votes": 2604657,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1003,
        "fields": {
            "name": "Arkansas",
            "abbr": "AR",
            "electoral_votes": 6,
            "popular_votes": 1130635,
            "poll_closing_time": 150,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1004,
        "fields": {
            "name": "California",
            "abbr": "CA",
            "electoral_votes": 55,
            "popular_votes": 14237893,
            "poll_closing_time": 300,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1005,
        "fields": {
            "name": "Colorado",
            "abbr": "CO",
            "electoral_votes": 9,
            "popular_votes": 2780247,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1006,
        "fields": {
            "name": "Connecticut",
            "abbr": "CT",
            "electoral_votes": 7,
            "popular_votes": 1644920,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1007,
        "fields": {
            "name": "Delaware",
            "abbr": "DE",
            "electoral_votes": 3,
            "popular_votes": 443814,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1008,
        "fields": {
            "name": "Florida",
            "abbr": "FL",
            "electoral_votes": 29,
            "popular_votes": 9502747,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1009,
        "fields": {
            "name": "Georgia",
            "abbr": "GA",
            "electoral_votes": 16,
            "popular_votes": 4141447,
            "poll_closing_time": 60,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1010,
        "fields": {
            "name": "Hawaii",
            "abbr": "HI",
            "electoral_votes": 4,
            "popular_votes": 428937,
            "poll_closing_time": 360,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1011,
        "fields": {
            "name": "Idaho",
            "abbr": "ID",
            "electoral_votes": 4,
            "popular_votes": 690433,
            "poll_closing_time": 300,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1012,
        "fields": {
            "name": "Illinois",
            "abbr": "IL",
            "electoral_votes": 20,
            "popular_votes": 5594825,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1013,
        "fields": {
            "name": "Indiana",
            "abbr": "IN",
            "electoral_votes": 11,
            "popular_votes": 2757965,
            "poll_closing_time": 0,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1014,
        "fields": {
            "name": "Iowa",
            "abbr": "IA",
            "electoral_votes": 6,
            "popular_votes": 1566031,
            "poll_closing_time": 240,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1015,
        "fields": {
            "name": "Kansas",
            "abbr": "KS",
            "electoral_votes": 6,
            "popular_votes": 1194755,
            "poll_closing_time": 240,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1016,
        "fields": {
            "name": "Kentucky",
            "abbr": "KY",
            "electoral_votes": 8,
            "popular_votes": 1924150,
            "poll_closing_time": 0,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1017,
        "fields": {
            "name": "Louisiana",
            "abbr": "LA",
            "electoral_votes": 8,
            "popular_votes": 2029032,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1018,
        "fields": {
            "name": "Maine",
            "abbr": "ME",
            "electoral_votes": 4,
            "popular_votes": 747927,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1019,
        "fields": {
            "name": "Maryland",
            "abbr": "MD",
            "electoral_votes": 10,
            "popular_votes": 2781446,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1020,
        "fields": {
            "name": "Massachusetts",
            "abbr": "MA",
            "electoral_votes": 11,
            "popular_votes": 3325046,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1021,
        "fields": {
            "name": "Michigan",
            "abbr": "MI",
            "electoral_votes": 16,
            "popular_votes": 4824542,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1022,
        "fields": {
            "name": "Minnesota",
            "abbr": "MN",
            "electoral_votes": 10,
            "popular_votes": 2945233,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1023,
        "fields": {
            "name": "Mississippi",
            "abbr": "MS",
            "electoral_votes": 6,
            "popular_votes": 1211088,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1024,
        "fields": {
            "name": "Missouri",
            "abbr": "MO",
            "electoral_votes": 10,
            "popular_votes": 2828266,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1025,
        "fields": {
            "name": "Montana",
            "abbr": "MT",
            "electoral_votes": 3,
            "popular_votes": 501822,
            "poll_closing_time": 240,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1026,
        "fields": {
            "name": "Nebraska",
            "abbr": "NE",
            "electoral_votes": 5,
            "popular_votes": 844227,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1027,
        "fields": {
            "name": "Nevada",
            "abbr": "NV",
            "electoral_votes": 6,
            "popular_votes": 1125385,
            "poll_closing_time": 240,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1028,
        "fields": {
            "name": "New Hampshire",
            "abbr": "NH",
            "electoral_votes": 4,
            "popular_votes": 744296,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1029,
        "fields": {
            "name": "New Jersey",
            "abbr": "NJ",
            "electoral_votes": 14,
            "popular_votes": 3906723,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1030,
        "fields": {
            "name": "New Mexico",
            "abbr": "NM",
            "electoral_votes": 5,
            "popular_votes": 798319,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1031,
        "fields": {
            "name": "New York",
            "abbr": "NY",
            "electoral_votes": 29,
            "popular_votes": 7721795,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1032,
        "fields": {
            "name": "North Carolina",
            "abbr": "NC",
            "electoral_votes": 15,
            "popular_votes": 4741564,
            "poll_closing_time": 90,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1033,
        "fields": {
            "name": "North Dakota",
            "abbr": "ND",
            "electoral_votes": 3,
            "popular_votes": 344360,
            "poll_closing_time": 300,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1034,
        "fields": {
            "name": "Ohio",
            "abbr": "OH",
            "electoral_votes": 18,
            "popular_votes": 5536547,
            "poll_closing_time": 90,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1035,
        "fields": {
            "name": "Oklahoma",
            "abbr": "OK",
            "electoral_votes": 7,
            "popular_votes": 1452992,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1036,
        "fields": {
            "name": "Oregon",
            "abbr": "OR",
            "electoral_votes": 7,
            "popular_votes": 2001336,
            "poll_closing_time": 300,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1037,
        "fields": {
            "name": "Pennsylvania",
            "abbr": "PA",
            "electoral_votes": 20,
            "popular_votes": 6166729,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1038,
        "fields": {
            "name": "Rhode Island",
            "abbr": "RI",
            "electoral_votes": 4,
            "popular_votes": 464144,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1039,
        "fields": {
            "name": "South Carolina",
            "abbr": "SC",
            "electoral_votes": 9,
            "popular_votes": 2103027,
            "poll_closing_time": 60,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1040,
        "fields": {
            "name": "South Dakota",
            "abbr": "SD",
            "electoral_votes": 3,
            "popular_votes": 370093,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1041,
        "fields": {
            "name": "Tennessee",
            "abbr": "TN",
            "electoral_votes": 11,
            "popular_votes": 2508027,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1042,
        "fields": {
            "name": "Texas",
            "abbr": "TX",
            "electoral_votes": 38,
            "popular_votes": 8993166,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1043,
        "fields": {
            "name": "Utah",
            "abbr": "UT",
            "electoral_votes": 6,
            "popular_votes": 1143601,
            "poll_closing_time": 240,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1044,
        "fields": {
            "name": "Vermont",
            "abbr": "VT",
            "electoral_votes": 3,
            "popular_votes": 315067,
            "poll_closing_time": 60,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1045,
        "fields": {
            "name": "Virginia",
            "abbr": "VA",
            "electoral_votes": 13,
            "popular_votes": 3982752,
            "poll_closing_time": 60,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1046,
        "fields": {
            "name": "Washington",
            "abbr": "WA",
            "electoral_votes": 12,
            "popular_votes": 3316996,
            "poll_closing_time": 300,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1047,
        "fields": {
            "name": "Washington DC",
            "abbr": "DC",
            "electoral_votes": 3,
            "popular_votes": 311268,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1048,
        "fields": {
            "name": "West Virginia",
            "abbr": "WV",
            "electoral_votes": 5,
            "popular_votes": 721233,
            "poll_closing_time": 90,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1049,
        "fields": {
            "name": "Wisconsin",
            "abbr": "WI",
            "electoral_votes": 10,
            "popular_votes": 2976150,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.state",
        "pk": 1050,
        "fields": {
            "name": "Wyoming",
            "abbr": "WY",
            "electoral_votes": 3,
            "popular_votes": 255849,
            "poll_closing_time": 180,
            "winner_take_all_flg": 1,
            "election": 20
        }
    }
]

campaignTrail_temp.issues_json = [
    {
        "model": "campaign_trail.issue",
        "pk": 100,
        "fields": {
            "name": "Ideology",
            "description": 0,
            "stance_1": "Very Conservative",
            "stance_desc_1": 0,
            "stance_2": "Conservative",
            "stance_desc_2": 0,
            "stance_3": "Leans Conservative",
            "stance_desc_3": 0,
            "stance_4": "Moderate",
            "stance_desc_4": 0,
            "stance_5": "Leans Liberal",
            "stance_desc_5": 0,
            "stance_6": "Liberal",
            "stance_desc_6": 0,
            "stance_7": "Very Liberal",
            "stance_desc_7": 0,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.issue",
        "pk": 101,
        "fields": {
            "name": "Trade",
            "description": 0,
            "stance_1": "Extreme Open Marketeer",
            "stance_desc_1": 0,
            "stance_2": "Open Marketeer",
            "stance_desc_2": 0,
            "stance_3": "Slightly for Trade",
            "stance_desc_3": 0,
            "stance_4": "Moderate",
            "stance_desc_4": 0,
            "stance_5": "Slightly against Trade",
            "stance_desc_5": 0,
            "stance_6": "Protectionist",
            "stance_desc_6": 0,
            "stance_7": "Very Protectionist",
            "stance_desc_7": 0,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.issue",
        "pk": 102,
        "fields": {
            "name": "Foreign Policy",
            "description": 0,
            "stance_1": "Very Aggressive",
            "stance_desc_1": 0,
            "stance_2": "Aggressive",
            "stance_desc_2": 0,
            "stance_3": "Slightly Aggressive",
            "stance_desc_3": 0,
            "stance_4": "Moderate",
            "stance_desc_4": 0,
            "stance_5": "Slightly Non-Interventionist",
            "stance_desc_5": 0,
            "stance_6": "Non-Interventionist",
            "stance_desc_6": 0,
            "stance_7": "Very Non-Interventionist",
            "stance_desc_7": 0,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.issue",
        "pk": 103,
        "fields": {
            "name": "Social Issues",
            "description": 0,
            "stance_1": "Very Conservative",
            "stance_desc_1": 0,
            "stance_2": "Conservative",
            "stance_desc_2": 0,
            "stance_3": "Leans Conservative",
            "stance_desc_3": 0,
            "stance_4": "Moderate",
            "stance_desc_4": 0,
            "stance_5": "Leans Liberal",
            "stance_desc_5": 0,
            "stance_6": "Liberal",
            "stance_desc_6": 0,
            "stance_7": "Very Liberal",
            "stance_desc_7": 0,
            "election": 20
        }
    },
    {
        "model": "campaign_trail.issue",
        "pk": 104,
        "fields": {
            "name": "Immigration",
            "description": 0,
            "stance_1": "Very Conservative",
            "stance_desc_1": 0,
            "stance_2": "Conservative",
            "stance_desc_2": 0,
            "stance_3": "Leans Conservative",
            "stance_desc_3": 0,
            "stance_4": "Moderate",
            "stance_desc_4": 0,
            "stance_5": "Leans Liberal",
            "stance_desc_5": 0,
            "stance_6": "Liberal",
            "stance_desc_6": 0,
            "stance_7": "Very Liberal",
            "stance_desc_7": 0,
            "election": 20
        }
    }
]

campaignTrail_temp.state_issue_score_json = [
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3000,
        "fields": {
            "state": 1000,
            "issue": 100,
            "state_issue_score": -0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3001,
        "fields": {
            "state": 1000,
            "issue": 101,
            "state_issue_score": -0.35,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3002,
        "fields": {
            "state": 1000,
            "issue": 102,
            "state_issue_score": -0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3003,
        "fields": {
            "state": 1000,
            "issue": 103,
            "state_issue_score": -0.65,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3004,
        "fields": {
            "state": 1000,
            "issue": 104,
            "state_issue_score": -0.55,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3005,
        "fields": {
            "state": 1001,
            "issue": 100,
            "state_issue_score": -0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3006,
        "fields": {
            "state": 1001,
            "issue": 101,
            "state_issue_score": -0.5,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3007,
        "fields": {
            "state": 1001,
            "issue": 102,
            "state_issue_score": 0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3008,
        "fields": {
            "state": 1001,
            "issue": 103,
            "state_issue_score": 0.15,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3009,
        "fields": {
            "state": 1001,
            "issue": 104,
            "state_issue_score": -0.05,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3010,
        "fields": {
            "state": 1002,
            "issue": 100,
            "state_issue_score": -0.55,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3011,
        "fields": {
            "state": 1002,
            "issue": 101,
            "state_issue_score": -0.5,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3012,
        "fields": {
            "state": 1002,
            "issue": 102,
            "state_issue_score": -0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3013,
        "fields": {
            "state": 1002,
            "issue": 103,
            "state_issue_score": 0.15,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3014,
        "fields": {
            "state": 1002,
            "issue": 104,
            "state_issue_score": 0.2,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3015,
        "fields": {
            "state": 1003,
            "issue": 100,
            "state_issue_score": -0.75,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3016,
        "fields": {
            "state": 1003,
            "issue": 101,
            "state_issue_score": -0.35,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3017,
        "fields": {
            "state": 1003,
            "issue": 102,
            "state_issue_score": -0.35,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3018,
        "fields": {
            "state": 1003,
            "issue": 103,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3019,
        "fields": {
            "state": 1003,
            "issue": 104,
            "state_issue_score": -0.4,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3020,
        "fields": {
            "state": 1004,
            "issue": 100,
            "state_issue_score": 0.55,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3021,
        "fields": {
            "state": 1004,
            "issue": 101,
            "state_issue_score": -0.6,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3022,
        "fields": {
            "state": 1004,
            "issue": 102,
            "state_issue_score": 0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3023,
        "fields": {
            "state": 1004,
            "issue": 103,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3024,
        "fields": {
            "state": 1004,
            "issue": 104,
            "state_issue_score": 0.55,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3025,
        "fields": {
            "state": 1005,
            "issue": 100,
            "state_issue_score": 0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3026,
        "fields": {
            "state": 1005,
            "issue": 101,
            "state_issue_score": -0.5,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3027,
        "fields": {
            "state": 1005,
            "issue": 102,
            "state_issue_score": 0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3028,
        "fields": {
            "state": 1005,
            "issue": 103,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3029,
        "fields": {
            "state": 1005,
            "issue": 104,
            "state_issue_score": 0.35,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3030,
        "fields": {
            "state": 1006,
            "issue": 100,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3031,
        "fields": {
            "state": 1006,
            "issue": 101,
            "state_issue_score": -0.5,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3032,
        "fields": {
            "state": 1006,
            "issue": 102,
            "state_issue_score": 0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3033,
        "fields": {
            "state": 1006,
            "issue": 103,
            "state_issue_score": 0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3034,
        "fields": {
            "state": 1006,
            "issue": 104,
            "state_issue_score": 0.5,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3035,
        "fields": {
            "state": 1007,
            "issue": 100,
            "state_issue_score": 0.375,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3036,
        "fields": {
            "state": 1007,
            "issue": 101,
            "state_issue_score": -0.5,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3037,
        "fields": {
            "state": 1007,
            "issue": 102,
            "state_issue_score": 0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3038,
        "fields": {
            "state": 1007,
            "issue": 103,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3039,
        "fields": {
            "state": 1007,
            "issue": 104,
            "state_issue_score": 0.45,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3040,
        "fields": {
            "state": 1008,
            "issue": 100,
            "state_issue_score": -0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3041,
        "fields": {
            "state": 1008,
            "issue": 101,
            "state_issue_score": -0.5,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3042,
        "fields": {
            "state": 1008,
            "issue": 102,
            "state_issue_score": -0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3043,
        "fields": {
            "state": 1008,
            "issue": 103,
            "state_issue_score": 0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3044,
        "fields": {
            "state": 1008,
            "issue": 104,
            "state_issue_score": 0.1,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3045,
        "fields": {
            "state": 1009,
            "issue": 100,
            "state_issue_score": -0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3046,
        "fields": {
            "state": 1009,
            "issue": 101,
            "state_issue_score": -0.45,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3047,
        "fields": {
            "state": 1009,
            "issue": 102,
            "state_issue_score": -0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3048,
        "fields": {
            "state": 1009,
            "issue": 103,
            "state_issue_score": -0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3049,
        "fields": {
            "state": 1009,
            "issue": 104,
            "state_issue_score": 0.1,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3050,
        "fields": {
            "state": 1010,
            "issue": 100,
            "state_issue_score": 0.45,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3051,
        "fields": {
            "state": 1010,
            "issue": 101,
            "state_issue_score": -0.6,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3052,
        "fields": {
            "state": 1010,
            "issue": 102,
            "state_issue_score": 0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3053,
        "fields": {
            "state": 1010,
            "issue": 103,
            "state_issue_score": 0.55,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3054,
        "fields": {
            "state": 1010,
            "issue": 104,
            "state_issue_score": 0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3055,
        "fields": {
            "state": 1011,
            "issue": 100,
            "state_issue_score": -0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3056,
        "fields": {
            "state": 1011,
            "issue": 101,
            "state_issue_score": -0.5,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3057,
        "fields": {
            "state": 1011,
            "issue": 102,
            "state_issue_score": -0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3058,
        "fields": {
            "state": 1011,
            "issue": 103,
            "state_issue_score": -0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3059,
        "fields": {
            "state": 1011,
            "issue": 104,
            "state_issue_score": -0.1,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3060,
        "fields": {
            "state": 1012,
            "issue": 100,
            "state_issue_score": 0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3061,
        "fields": {
            "state": 1012,
            "issue": 101,
            "state_issue_score": -0.25,
            "weight": 0.75
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3062,
        "fields": {
            "state": 1012,
            "issue": 102,
            "state_issue_score": 0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3063,
        "fields": {
            "state": 1012,
            "issue": 103,
            "state_issue_score": 0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3064,
        "fields": {
            "state": 1012,
            "issue": 104,
            "state_issue_score": 0.1,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3065,
        "fields": {
            "state": 1013,
            "issue": 100,
            "state_issue_score": -0.55,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3066,
        "fields": {
            "state": 1013,
            "issue": 101,
            "state_issue_score": -0.25,
            "weight": 0.75
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3067,
        "fields": {
            "state": 1013,
            "issue": 102,
            "state_issue_score": -0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3068,
        "fields": {
            "state": 1013,
            "issue": 103,
            "state_issue_score": -0.25,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3069,
        "fields": {
            "state": 1013,
            "issue": 104,
            "state_issue_score": -0.33,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3070,
        "fields": {
            "state": 1014,
            "issue": 100,
            "state_issue_score": -0.45,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3071,
        "fields": {
            "state": 1014,
            "issue": 101,
            "state_issue_score": -0.55,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3072,
        "fields": {
            "state": 1014,
            "issue": 102,
            "state_issue_score": -0.25,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3073,
        "fields": {
            "state": 1014,
            "issue": 103,
            "state_issue_score": 0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3074,
        "fields": {
            "state": 1014,
            "issue": 104,
            "state_issue_score": -0.3,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3075,
        "fields": {
            "state": 1015,
            "issue": 100,
            "state_issue_score": -0.65,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3076,
        "fields": {
            "state": 1015,
            "issue": 101,
            "state_issue_score": -0.55,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3077,
        "fields": {
            "state": 1015,
            "issue": 102,
            "state_issue_score": -0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3078,
        "fields": {
            "state": 1015,
            "issue": 103,
            "state_issue_score": -0.15,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3079,
        "fields": {
            "state": 1015,
            "issue": 104,
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3080,
        "fields": {
            "state": 1016,
            "issue": 100,
            "state_issue_score": -0.55,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3081,
        "fields": {
            "state": 1016,
            "issue": 101,
            "state_issue_score": -0.25,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3082,
        "fields": {
            "state": 1016,
            "issue": 102,
            "state_issue_score": -0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3083,
        "fields": {
            "state": 1016,
            "issue": 103,
            "state_issue_score": -0.35,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3084,
        "fields": {
            "state": 1016,
            "issue": 104,
            "state_issue_score": -0.45,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3085,
        "fields": {
            "state": 1017,
            "issue": 100,
            "state_issue_score": -0.675,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3086,
        "fields": {
            "state": 1017,
            "issue": 101,
            "state_issue_score": -0.45,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3087,
        "fields": {
            "state": 1017,
            "issue": 102,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3088,
        "fields": {
            "state": 1017,
            "issue": 103,
            "state_issue_score": -0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3089,
        "fields": {
            "state": 1017,
            "issue": 104,
            "state_issue_score": -0.4,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3090,
        "fields": {
            "state": 1018,
            "issue": 100,
            "state_issue_score": 0.25,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3091,
        "fields": {
            "state": 1018,
            "issue": 101,
            "state_issue_score": 0,
            "weight": 0.75
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3092,
        "fields": {
            "state": 1018,
            "issue": 102,
            "state_issue_score": 0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3093,
        "fields": {
            "state": 1018,
            "issue": 103,
            "state_issue_score": 0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3094,
        "fields": {
            "state": 1018,
            "issue": 104,
            "state_issue_score": -0.4,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3095,
        "fields": {
            "state": 1019,
            "issue": 100,
            "state_issue_score": 0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3096,
        "fields": {
            "state": 1019,
            "issue": 101,
            "state_issue_score": -0.25,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3097,
        "fields": {
            "state": 1019,
            "issue": 102,
            "state_issue_score": 0.25,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3098,
        "fields": {
            "state": 1019,
            "issue": 103,
            "state_issue_score": 0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3099,
        "fields": {
            "state": 1019,
            "issue": 104,
            "state_issue_score": 0.1,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3100,
        "fields": {
            "state": 1020,
            "issue": 100,
            "state_issue_score": 0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3101,
        "fields": {
            "state": 1020,
            "issue": 101,
            "state_issue_score": -0.35,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3102,
        "fields": {
            "state": 1020,
            "issue": 102,
            "state_issue_score": 0.55,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3103,
        "fields": {
            "state": 1020,
            "issue": 103,
            "state_issue_score": 0.65,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3104,
        "fields": {
            "state": 1020,
            "issue": 104,
            "state_issue_score": 0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3105,
        "fields": {
            "state": 1021,
            "issue": 100,
            "state_issue_score": 0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3106,
        "fields": {
            "state": 1021,
            "issue": 101,
            "state_issue_score": 0.4,
            "weight": 2
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3107,
        "fields": {
            "state": 1021,
            "issue": 102,
            "state_issue_score": 0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3108,
        "fields": {
            "state": 1021,
            "issue": 103,
            "state_issue_score": 0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3109,
        "fields": {
            "state": 1021,
            "issue": 104,
            "state_issue_score": -0.3,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3110,
        "fields": {
            "state": 1022,
            "issue": 100,
            "state_issue_score": 0.25,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3111,
        "fields": {
            "state": 1022,
            "issue": 101,
            "state_issue_score": 0,
            "weight": 0.75
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3112,
        "fields": {
            "state": 1022,
            "issue": 102,
            "state_issue_score": 0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3113,
        "fields": {
            "state": 1022,
            "issue": 103,
            "state_issue_score": 0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3114,
        "fields": {
            "state": 1022,
            "issue": 104,
            "state_issue_score": -0.25,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3115,
        "fields": {
            "state": 1023,
            "issue": 100,
            "state_issue_score": -0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3116,
        "fields": {
            "state": 1023,
            "issue": 101,
            "state_issue_score": -0.4,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3117,
        "fields": {
            "state": 1023,
            "issue": 102,
            "state_issue_score": -0.55,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3118,
        "fields": {
            "state": 1023,
            "issue": 103,
            "state_issue_score": -0.65,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3119,
        "fields": {
            "state": 1023,
            "issue": 104,
            "state_issue_score": -0.5,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3120,
        "fields": {
            "state": 1024,
            "issue": 100,
            "state_issue_score": -0.65,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3121,
        "fields": {
            "state": 1024,
            "issue": 101,
            "state_issue_score": -0.3,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3122,
        "fields": {
            "state": 1024,
            "issue": 102,
            "state_issue_score": -0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3123,
        "fields": {
            "state": 1024,
            "issue": 103,
            "state_issue_score": -0.05,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3124,
        "fields": {
            "state": 1024,
            "issue": 104,
            "state_issue_score": -0.25,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3125,
        "fields": {
            "state": 1025,
            "issue": 100,
            "state_issue_score": -0.75,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3126,
        "fields": {
            "state": 1025,
            "issue": 101,
            "state_issue_score": -0.5,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3127,
        "fields": {
            "state": 1025,
            "issue": 102,
            "state_issue_score": 0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3128,
        "fields": {
            "state": 1025,
            "issue": 103,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3129,
        "fields": {
            "state": 1025,
            "issue": 104,
            "state_issue_score": -0.2,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3130,
        "fields": {
            "state": 1026,
            "issue": 100,
            "state_issue_score": -0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3131,
        "fields": {
            "state": 1026,
            "issue": 101,
            "state_issue_score": -0.5,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3132,
        "fields": {
            "state": 1026,
            "issue": 102,
            "state_issue_score": -0.35,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3133,
        "fields": {
            "state": 1026,
            "issue": 103,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3134,
        "fields": {
            "state": 1026,
            "issue": 104,
            "state_issue_score": -0.25,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3135,
        "fields": {
            "state": 1027,
            "issue": 100,
            "state_issue_score": -0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3136,
        "fields": {
            "state": 1027,
            "issue": 101,
            "state_issue_score": -0.5,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3137,
        "fields": {
            "state": 1027,
            "issue": 102,
            "state_issue_score": 0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3138,
        "fields": {
            "state": 1027,
            "issue": 103,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3139,
        "fields": {
            "state": 1027,
            "issue": 104,
            "state_issue_score": 0.05,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3140,
        "fields": {
            "state": 1028,
            "issue": 100,
            "state_issue_score": 0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3141,
        "fields": {
            "state": 1028,
            "issue": 101,
            "state_issue_score": 0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3142,
        "fields": {
            "state": 1028,
            "issue": 102,
            "state_issue_score": 0.25,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3143,
        "fields": {
            "state": 1028,
            "issue": 103,
            "state_issue_score": 0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3144,
        "fields": {
            "state": 1028,
            "issue": 104,
            "state_issue_score": -0.4,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3145,
        "fields": {
            "state": 1029,
            "issue": 100,
            "state_issue_score": 0.55,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3146,
        "fields": {
            "state": 1029,
            "issue": 101,
            "state_issue_score": -0.4,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3147,
        "fields": {
            "state": 1029,
            "issue": 102,
            "state_issue_score": 0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3148,
        "fields": {
            "state": 1029,
            "issue": 103,
            "state_issue_score": 0.45,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3149,
        "fields": {
            "state": 1029,
            "issue": 104,
            "state_issue_score": 0.4,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3150,
        "fields": {
            "state": 1030,
            "issue": 100,
            "state_issue_score": 0.15,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3151,
        "fields": {
            "state": 1030,
            "issue": 101,
            "state_issue_score": -0.45,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3152,
        "fields": {
            "state": 1030,
            "issue": 102,
            "state_issue_score": 0.45,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3153,
        "fields": {
            "state": 1030,
            "issue": 103,
            "state_issue_score": 0.45,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3154,
        "fields": {
            "state": 1030,
            "issue": 104,
            "state_issue_score": 0.33,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3155,
        "fields": {
            "state": 1031,
            "issue": 100,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3156,
        "fields": {
            "state": 1031,
            "issue": 101,
            "state_issue_score": -0.15,
            "weight": 0.75
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3157,
        "fields": {
            "state": 1031,
            "issue": 102,
            "state_issue_score": 0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3158,
        "fields": {
            "state": 1031,
            "issue": 103,
            "state_issue_score": 0.45,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3159,
        "fields": {
            "state": 1031,
            "issue": 104,
            "state_issue_score": 0.575,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3160,
        "fields": {
            "state": 1032,
            "issue": 100,
            "state_issue_score": -0.375,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3161,
        "fields": {
            "state": 1032,
            "issue": 101,
            "state_issue_score": -0.4,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3162,
        "fields": {
            "state": 1032,
            "issue": 102,
            "state_issue_score": -0.15,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3163,
        "fields": {
            "state": 1032,
            "issue": 103,
            "state_issue_score": -0.05,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3164,
        "fields": {
            "state": 1032,
            "issue": 104,
            "state_issue_score": -0.1,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3165,
        "fields": {
            "state": 1033,
            "issue": 100,
            "state_issue_score": -0.475,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3166,
        "fields": {
            "state": 1033,
            "issue": 101,
            "state_issue_score": -0.5,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3167,
        "fields": {
            "state": 1033,
            "issue": 102,
            "state_issue_score": -0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3168,
        "fields": {
            "state": 1033,
            "issue": 103,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3169,
        "fields": {
            "state": 1033,
            "issue": 104,
            "state_issue_score": -0.4,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3170,
        "fields": {
            "state": 1034,
            "issue": 100,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3171,
        "fields": {
            "state": 1034,
            "issue": 101,
            "state_issue_score": 0.25,
            "weight": 3
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3172,
        "fields": {
            "state": 1034,
            "issue": 102,
            "state_issue_score": -0.25,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3173,
        "fields": {
            "state": 1034,
            "issue": 103,
            "state_issue_score": -0.05,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3174,
        "fields": {
            "state": 1034,
            "issue": 104,
            "state_issue_score": -0.25,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3175,
        "fields": {
            "state": 1035,
            "issue": 100,
            "state_issue_score": -0.8,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3176,
        "fields": {
            "state": 1035,
            "issue": 101,
            "state_issue_score": -0.45,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3177,
        "fields": {
            "state": 1035,
            "issue": 102,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3178,
        "fields": {
            "state": 1035,
            "issue": 103,
            "state_issue_score": -0.25,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3179,
        "fields": {
            "state": 1035,
            "issue": 104,
            "state_issue_score": -0.1,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3180,
        "fields": {
            "state": 1036,
            "issue": 100,
            "state_issue_score": 0.35,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3181,
        "fields": {
            "state": 1036,
            "issue": 101,
            "state_issue_score": -0.15,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3182,
        "fields": {
            "state": 1036,
            "issue": 102,
            "state_issue_score": 0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3183,
        "fields": {
            "state": 1036,
            "issue": 103,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3184,
        "fields": {
            "state": 1036,
            "issue": 104,
            "state_issue_score": 0.45,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3185,
        "fields": {
            "state": 1037,
            "issue": 100,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3186,
        "fields": {
            "state": 1037,
            "issue": 101,
            "state_issue_score": 0.25,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3187,
        "fields": {
            "state": 1037,
            "issue": 102,
            "state_issue_score": 0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3188,
        "fields": {
            "state": 1037,
            "issue": 103,
            "state_issue_score": 0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3189,
        "fields": {
            "state": 1037,
            "issue": 104,
            "state_issue_score": -0.15,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3190,
        "fields": {
            "state": 1038,
            "issue": 100,
            "state_issue_score": 0.55,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3191,
        "fields": {
            "state": 1038,
            "issue": 101,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3192,
        "fields": {
            "state": 1038,
            "issue": 102,
            "state_issue_score": 0.45,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3193,
        "fields": {
            "state": 1038,
            "issue": 103,
            "state_issue_score": 0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3194,
        "fields": {
            "state": 1038,
            "issue": 104,
            "state_issue_score": 0.55,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3195,
        "fields": {
            "state": 1039,
            "issue": 100,
            "state_issue_score": -0.575,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3196,
        "fields": {
            "state": 1039,
            "issue": 101,
            "state_issue_score": -0.45,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3197,
        "fields": {
            "state": 1039,
            "issue": 102,
            "state_issue_score": -0.55,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3198,
        "fields": {
            "state": 1039,
            "issue": 103,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3199,
        "fields": {
            "state": 1039,
            "issue": 104,
            "state_issue_score": -0.375,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3200,
        "fields": {
            "state": 1040,
            "issue": 100,
            "state_issue_score": -0.45,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3201,
        "fields": {
            "state": 1040,
            "issue": 101,
            "state_issue_score": -0.55,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3202,
        "fields": {
            "state": 1040,
            "issue": 102,
            "state_issue_score": -0.3,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3203,
        "fields": {
            "state": 1040,
            "issue": 103,
            "state_issue_score": -0.25,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3204,
        "fields": {
            "state": 1040,
            "issue": 104,
            "state_issue_score": -0.45,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3205,
        "fields": {
            "state": 1041,
            "issue": 100,
            "state_issue_score": -0.65,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3206,
        "fields": {
            "state": 1041,
            "issue": 101,
            "state_issue_score": -0.35,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3207,
        "fields": {
            "state": 1041,
            "issue": 102,
            "state_issue_score": -0.45,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3208,
        "fields": {
            "state": 1041,
            "issue": 103,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3209,
        "fields": {
            "state": 1041,
            "issue": 104,
            "state_issue_score": -0.5,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3210,
        "fields": {
            "state": 1042,
            "issue": 100,
            "state_issue_score": -0.55,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3211,
        "fields": {
            "state": 1042,
            "issue": 101,
            "state_issue_score": -0.45,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3212,
        "fields": {
            "state": 1042,
            "issue": 102,
            "state_issue_score": -0.45,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3213,
        "fields": {
            "state": 1042,
            "issue": 103,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3214,
        "fields": {
            "state": 1042,
            "issue": 104,
            "state_issue_score": 0.15,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3215,
        "fields": {
            "state": 1043,
            "issue": 100,
            "state_issue_score": -0.9,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3216,
        "fields": {
            "state": 1043,
            "issue": 101,
            "state_issue_score": -0.6,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3217,
        "fields": {
            "state": 1043,
            "issue": 102,
            "state_issue_score": -0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3218,
        "fields": {
            "state": 1043,
            "issue": 103,
            "state_issue_score": -0.25,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3219,
        "fields": {
            "state": 1043,
            "issue": 104,
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3220,
        "fields": {
            "state": 1044,
            "issue": 100,
            "state_issue_score": 0.75,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3221,
        "fields": {
            "state": 1044,
            "issue": 101,
            "state_issue_score": -0.15,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3222,
        "fields": {
            "state": 1044,
            "issue": 102,
            "state_issue_score": 0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3223,
        "fields": {
            "state": 1044,
            "issue": 103,
            "state_issue_score": 0.6,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3224,
        "fields": {
            "state": 1044,
            "issue": 104,
            "state_issue_score": -0.05,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3225,
        "fields": {
            "state": 1045,
            "issue": 100,
            "state_issue_score": 0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3226,
        "fields": {
            "state": 1045,
            "issue": 101,
            "state_issue_score": -0.5,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3227,
        "fields": {
            "state": 1045,
            "issue": 102,
            "state_issue_score": -0.15,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3228,
        "fields": {
            "state": 1045,
            "issue": 103,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3229,
        "fields": {
            "state": 1045,
            "issue": 104,
            "state_issue_score": -0.05,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3230,
        "fields": {
            "state": 1046,
            "issue": 100,
            "state_issue_score": 0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3231,
        "fields": {
            "state": 1046,
            "issue": 101,
            "state_issue_score": -0.5,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3232,
        "fields": {
            "state": 1046,
            "issue": 102,
            "state_issue_score": 0.35,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3233,
        "fields": {
            "state": 1046,
            "issue": 103,
            "state_issue_score": 0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3234,
        "fields": {
            "state": 1046,
            "issue": 104,
            "state_issue_score": 0.2,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3235,
        "fields": {
            "state": 1047,
            "issue": 100,
            "state_issue_score": 0.95,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3236,
        "fields": {
            "state": 1047,
            "issue": 101,
            "state_issue_score": -0.5,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3237,
        "fields": {
            "state": 1047,
            "issue": 102,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3238,
        "fields": {
            "state": 1047,
            "issue": 103,
            "state_issue_score": 0.5,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3239,
        "fields": {
            "state": 1047,
            "issue": 104,
            "state_issue_score": 0.5,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3240,
        "fields": {
            "state": 1048,
            "issue": 100,
            "state_issue_score": -0.7,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3241,
        "fields": {
            "state": 1048,
            "issue": 101,
            "state_issue_score": 0,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3242,
        "fields": {
            "state": 1048,
            "issue": 102,
            "state_issue_score": -0.1,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3243,
        "fields": {
            "state": 1048,
            "issue": 103,
            "state_issue_score": -0.55,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3244,
        "fields": {
            "state": 1048,
            "issue": 104,
            "state_issue_score": -0.625,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3245,
        "fields": {
            "state": 1049,
            "issue": 100,
            "state_issue_score": -0.125,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3246,
        "fields": {
            "state": 1049,
            "issue": 101,
            "state_issue_score": 0.2,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3247,
        "fields": {
            "state": 1049,
            "issue": 102,
            "state_issue_score": 0.05,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3248,
        "fields": {
            "state": 1049,
            "issue": 103,
            "state_issue_score": 0.2,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3249,
        "fields": {
            "state": 1049,
            "issue": 104,
            "state_issue_score": -0.2,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3250,
        "fields": {
            "state": 1050,
            "issue": 100,
            "state_issue_score": -0.85,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3251,
        "fields": {
            "state": 1050,
            "issue": 101,
            "state_issue_score": -0.5,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3252,
        "fields": {
            "state": 1050,
            "issue": 102,
            "state_issue_score": -0.4,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3253,
        "fields": {
            "state": 1050,
            "issue": 103,
            "state_issue_score": -0.35,
            "weight": 1
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 3254,
        "fields": {
            "state": 1050,
            "issue": 104,
            "state_issue_score": -0.75,
            "weight": 1.5
        }
    }
]

campaignTrail_temp.candidate_issue_score_json = [
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1000,
        "fields": {
            "candidate": 200,
            "issue": 100,
            "issue_score": -0.25
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1001,
        "fields": {
            "candidate": 200,
            "issue": 101,
            "issue_score": 0.6
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1002,
        "fields": {
            "candidate": 200,
            "issue": 102,
            "issue_score": 0.5
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1003,
        "fields": {
            "candidate": 200,
            "issue": 103,
            "issue_score": -0.2
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1004,
        "fields": {
            "candidate": 200,
            "issue": 104,
            "issue_score": -0.1
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1005,
        "fields": {
            "candidate": 201,
            "issue": 100,
            "issue_score": 0.7
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1006,
        "fields": {
            "candidate": 201,
            "issue": 101,
            "issue_score": -0.5
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1007,
        "fields": {
            "candidate": 201,
            "issue": 102,
            "issue_score": -0.3
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1008,
        "fields": {
            "candidate": 201,
            "issue": 103,
            "issue_score": 0.7
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1009,
        "fields": {
            "candidate": 201,
            "issue": 104,
            "issue_score": 0.2
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1010,
        "fields": {
            "candidate": 202,
            "issue": 100,
            "issue_score": -0.6
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1011,
        "fields": {
            "candidate": 202,
            "issue": 101,
            "issue_score": -0.6
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1012,
        "fields": {
            "candidate": 202,
            "issue": 102,
            "issue_score": 0.1
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1013,
        "fields": {
            "candidate": 202,
            "issue": 103,
            "issue_score": -0.6
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1014,
        "fields": {
            "candidate": 202,
            "issue": 104,
            "issue_score": -0.7
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1015,
        "fields": {
            "candidate": 203,
            "issue": 100,
            "issue_score": 0.15
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1016,
        "fields": {
            "candidate": 203,
            "issue": 101,
            "issue_score": 0.1
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1017,
        "fields": {
            "candidate": 203,
            "issue": 102,
            "issue_score": -0.4
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1018,
        "fields": {
            "candidate": 203,
            "issue": 103,
            "issue_score": 0.5
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1019,
        "fields": {
            "candidate": 203,
            "issue": 104,
            "issue_score": 0.7
        }
    }
]

campaignTrail_temp.running_mate_issue_score_json = [
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1020,
        "fields": {
            "candidate": 2001,
            "issue": 100,
            "issue_score": -0.25
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1021,
        "fields": {
            "candidate": 2001,
            "issue": 101,
            "issue_score": 0.2
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1022,
        "fields": {
            "candidate": 2001,
            "issue": 102,
            "issue_score": 0.1
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1023,
        "fields": {
            "candidate": 2001,
            "issue": 103,
            "issue_score": -0.3
        }
    },
    {
        "model": "campaign_trail.candidate_issue_score",
        "pk": 1024,
        "fields": {
            "candidate": 2001,
            "issue": 104,
            "issue_score": -0.2
        }
    }
]

campaignTrail_temp.candidate_state_multiplier_json = [
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2500,
        "fields": {
            "candidate": 200,
            "state": 1000,
            "state_multiplier": 0.99
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2501,
        "fields": {
            "candidate": 200,
            "state": 1001,
            "state_multiplier": 0.98
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2502,
        "fields": {
            "candidate": 200,
            "state": 1002,
            "state_multiplier": 1.04
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2503,
        "fields": {
            "candidate": 200,
            "state": 1003,
            "state_multiplier": 1.01
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2504,
        "fields": {
            "candidate": 200,
            "state": 1004,
            "state_multiplier": 0.9
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2505,
        "fields": {
            "candidate": 200,
            "state": 1005,
            "state_multiplier": 0.94
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2506,
        "fields": {
            "candidate": 200,
            "state": 1006,
            "state_multiplier": 0.87
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2507,
        "fields": {
            "candidate": 200,
            "state": 1007,
            "state_multiplier": 0.81
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2508,
        "fields": {
            "candidate": 200,
            "state": 1008,
            "state_multiplier": 0.92
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2509,
        "fields": {
            "candidate": 200,
            "state": 1009,
            "state_multiplier": 0.93
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2510,
        "fields": {
            "candidate": 200,
            "state": 1010,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2511,
        "fields": {
            "candidate": 200,
            "state": 1011,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2512,
        "fields": {
            "candidate": 200,
            "state": 1012,
            "state_multiplier": 0.9
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2513,
        "fields": {
            "candidate": 200,
            "state": 1013,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2514,
        "fields": {
            "candidate": 200,
            "state": 1014,
            "state_multiplier": 0.92
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2515,
        "fields": {
            "candidate": 200,
            "state": 1015,
            "state_multiplier": 1.23
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2516,
        "fields": {
            "candidate": 200,
            "state": 1016,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2517,
        "fields": {
            "candidate": 200,
            "state": 1017,
            "state_multiplier": 1.01
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2518,
        "fields": {
            "candidate": 200,
            "state": 1018,
            "state_multiplier": 0.90
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2519,
        "fields": {
            "candidate": 200,
            "state": 1019,
            "state_multiplier": 0.82
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2520,
        "fields": {
            "candidate": 200,
            "state": 1020,
            "state_multiplier": 0.91
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2521,
        "fields": {
            "candidate": 200,
            "state": 1021,
            "state_multiplier": 0.86
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2522,
        "fields": {
            "candidate": 200,
			"state": 1022,
            "state_multiplier": 0.84
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2523,
        "fields": {
            "candidate": 200,
            "state": 1023,
            "state_multiplier": 1.01
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2524,
        "fields": {
            "candidate": 200,
            "state": 1024,
            "state_multiplier": 1.02
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2525,
        "fields": {
            "candidate": 200,
            "state": 1025,
            "state_multiplier": 1.03
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2526,
        "fields": {
            "candidate": 200,
            "state": 1026,
            "state_multiplier": 1.4
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2527,
        "fields": {
            "candidate": 200,
            "state": 1027,
            "state_multiplier": 0.97
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2528,
        "fields": {
            "candidate": 200,
            "state": 1028,
            "state_multiplier": 0.97
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2529,
        "fields": {
            "candidate": 200,
            "state": 1029,
            "state_multiplier": 0.9
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2530,
        "fields": {
            "candidate": 200,
            "state": 1030,
            "state_multiplier": 0.88
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2531,
        "fields": {
            "candidate": 200,
            "state": 1031,
            "state_multiplier": 0.85
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2532,
        "fields": {
            "candidate": 200,
            "state": 1032,
            "state_multiplier": 0.93
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2533,
        "fields": {
            "candidate": 200,
            "state": 1033,
            "state_multiplier": 1.15
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2534,
        "fields": {
            "candidate": 200,
            "state": 1034,
            "state_multiplier": 0.92
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2535,
        "fields": {
            "candidate": 200,
            "state": 1035,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2536,
        "fields": {
            "candidate": 200,
            "state": 1036,
            "state_multiplier": 0.88
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2537,
        "fields": {
            "candidate": 200,
            "state": 1037,
            "state_multiplier": 0.83
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2538,
        "fields": {
            "candidate": 200,
            "state": 1038,
            "state_multiplier": 0.75
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2539,
        "fields": {
            "candidate": 200,
            "state": 1039,
            "state_multiplier": 0.99
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2540,
        "fields": {
            "candidate": 200,
            "state": 1040,
            "state_multiplier": 1.15
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2541,
        "fields": {
            "candidate": 200,
            "state": 1041,
            "state_multiplier": 1.07
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2542,
        "fields": {
            "candidate": 200,
            "state": 1042,
            "state_multiplier": 1.02
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2543,
        "fields": {
            "candidate": 200,
            "state": 1043,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2544,
        "fields": {
            "candidate": 200,
            "state": 1044,
            "state_multiplier": 0.85
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2545,
        "fields": {
            "candidate": 200,
            "state": 1045,
            "state_multiplier": 0.92
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2546,
        "fields": {
            "candidate": 200,
            "state": 1046,
            "state_multiplier": 0.84
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2547,
        "fields": {
            "candidate": 200,
            "state": 1047,
            "state_multiplier": 1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2548,
        "fields": {
            "candidate": 200,
            "state": 1048,
            "state_multiplier": 0.89
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2549,
        "fields": {
            "candidate": 200,
            "state": 1049,
            "state_multiplier": 0.92
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2550,
        "fields": {
            "candidate": 200,
            "state": 1050,
            "state_multiplier": 0.96
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2551,
        "fields": {
            "candidate": 201,
            "state": 1000,
            "state_multiplier": 0.839
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2552,
        "fields": {
            "candidate": 201,
            "state": 1001,
            "state_multiplier": 0.84
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2553,
        "fields": {
            "candidate": 201,
            "state": 1002,
            "state_multiplier": 1.04
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2554,
        "fields": {
            "candidate": 201,
            "state": 1003,
            "state_multiplier": 0.741
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2555,
        "fields": {
            "candidate": 201,
            "state": 1004,
            "state_multiplier": 1.4
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2556,
        "fields": {
            "candidate": 201,
            "state": 1005,
            "state_multiplier": 0.97
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2557,
        "fields": {
            "candidate": 201,
            "state": 1006,
            "state_multiplier": 0.93
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2558,
        "fields": {
            "candidate": 201,
            "state": 1007,
            "state_multiplier": 0.95
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2559,
        "fields": {
            "candidate": 201,
            "state": 1008,
            "state_multiplier": 1.01
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2560,
        "fields": {
            "candidate": 201,
            "state": 1009,
            "state_multiplier": 1.02
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2561,
        "fields": {
            "candidate": 201,
            "state": 1010,
            "state_multiplier": 1.285
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2562,
        "fields": {
            "candidate": 201,
            "state": 1011,
            "state_multiplier": 0.6
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2563,
        "fields": {
            "candidate": 201,
            "state": 1012,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2564,
        "fields": {
            "candidate": 201,
            "state": 1013,
            "state_multiplier": 1.1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2565,
        "fields": {
            "candidate": 201,
            "state": 1014,
            "state_multiplier": 0.95
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2566,
        "fields": {
            "candidate": 201,
            "state": 1015,
            "state_multiplier": 0.8
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2567,
        "fields": {
            "candidate": 201,
            "state": 1016,
            "state_multiplier": 0.666
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2568,
        "fields": {
            "candidate": 201,
            "state": 1017,
            "state_multiplier": 0.844
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2569,
        "fields": {
            "candidate": 201,
            "state": 1018,
            "state_multiplier": 1.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2570,
        "fields": {
            "candidate": 201,
            "state": 1019,
            "state_multiplier": 1.1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2571,
        "fields": {
            "candidate": 201,
            "state": 1020,
            "state_multiplier": 1.103
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2572,
        "fields": {
            "candidate": 201,
            "state": 1021,
            "state_multiplier": 1.38
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2573,
        "fields": {
            "candidate": 201,
            "state": 1022,
            "state_multiplier": 1.15
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2574,
        "fields": {
            "candidate": 201,
            "state": 1023,
            "state_multiplier": 0.9
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2575,
        "fields": {
            "candidate": 201,
            "state": 1024,
            "state_multiplier": 0.9
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2576,
        "fields": {
            "candidate": 201,
            "state": 1025,
            "state_multiplier": 0.9
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2577,
        "fields": {
            "candidate": 201,
            "state": 1026,
            "state_multiplier": 0.75
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2578,
        "fields": {
            "candidate": 201,
            "state": 1027,
            "state_multiplier": 1.05
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2579,
        "fields": {
            "candidate": 201,
            "state": 1028,
            "state_multiplier": 1.04
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2580,
        "fields": {
            "candidate": 201,
            "state": 1029,
            "state_multiplier": 1.02
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2581,
        "fields": {
            "candidate": 201,
            "state": 1030,
            "state_multiplier": 1.01
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2582,
        "fields": {
            "candidate": 201,
            "state": 1031,
            "state_multiplier": 1.3
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2583,
        "fields": {
            "candidate": 201,
            "state": 1032,
            "state_multiplier": 1.07
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2584,
        "fields": {
            "candidate": 201,
            "state": 1033,
            "state_multiplier": 0.9
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2585,
        "fields": {
            "candidate": 201,
            "state": 1034,
            "state_multiplier": 1.15
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2586,
        "fields": {
            "candidate": 201,
            "state": 1035,
            "state_multiplier": 0.485
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2587,
        "fields": {
            "candidate": 201,
            "state": 1036,
            "state_multiplier": 1.05
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2588,
        "fields": {
            "candidate": 201,
            "state": 1037,
            "state_multiplier": 1.06
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2589,
        "fields": {
            "candidate": 201,
            "state": 1038,
            "state_multiplier": 0.97
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2590,
        "fields": {
            "candidate": 201,
            "state": 1039,
            "state_multiplier": 0.81
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2591,
        "fields": {
            "candidate": 201,
            "state": 1040,
            "state_multiplier": 0.9
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2592,
        "fields": {
            "candidate": 201,
            "state": 1041,
            "state_multiplier": 0.81
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2593,
        "fields": {
            "candidate": 201,
            "state": 1042,
            "state_multiplier": 0.9
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2594,
        "fields": {
            "candidate": 201,
            "state": 1043,
            "state_multiplier": 0.656
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2595,
        "fields": {
            "candidate": 201,
            "state": 1044,
            "state_multiplier": 2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2596,
        "fields": {
            "candidate": 201,
            "state": 1045,
            "state_multiplier": 1.05
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2597,
        "fields": {
            "candidate": 201,
            "state": 1046,
            "state_multiplier": 1.25
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2598,
        "fields": {
            "candidate": 201,
            "state": 1047,
            "state_multiplier": 12
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2599,
        "fields": {
            "candidate": 201,
            "state": 1048,
            "state_multiplier": 0.95
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2600,
        "fields": {
            "candidate": 201,
            "state": 1049,
            "state_multiplier": 1.14
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2601,
        "fields": {
            "candidate": 201,
            "state": 1050,
            "state_multiplier": 0.6
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2602,
        "fields": {
            "candidate": 202,
            "state": 1000,
            "state_multiplier": 0.21
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2603,
        "fields": {
            "candidate": 202,
            "state": 1001,
            "state_multiplier": 0.2323
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2604,
        "fields": {
            "candidate": 202,
            "state": 1002,
            "state_multiplier": 0.12
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2605,
        "fields": {
            "candidate": 202,
            "state": 1003,
            "state_multiplier": 0.3
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2606,
        "fields": {
            "candidate": 202,
            "state": 1004,
            "state_multiplier": 0.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2607,
        "fields": {
            "candidate": 202,
            "state": 1005,
            "state_multiplier": 0.1615
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2608,
        "fields": {
            "candidate": 202,
            "state": 1006,
            "state_multiplier": 0.12
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2609,
        "fields": {
            "candidate": 202,
            "state": 1007,
            "state_multiplier": 0.15
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2610,
        "fields": {
            "candidate": 202,
            "state": 1008,
            "state_multiplier": 0.32
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2611,
        "fields": {
            "candidate": 202,
            "state": 1009,
            "state_multiplier": 0.17
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2612,
        "fields": {
            "candidate": 202,
            "state": 1010,
            "state_multiplier": 0.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2613,
        "fields": {
            "candidate": 202,
            "state": 1011,
            "state_multiplier": 0.2608
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2614,
        "fields": {
            "candidate": 202,
            "state": 1012,
            "state_multiplier": 0.25
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2615,
        "fields": {
            "candidate": 202,
            "state": 1013,
            "state_multiplier": 0.32
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2616,
        "fields": {
            "candidate": 202,
            "state": 1014,
            "state_multiplier": 0.18
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2617,
        "fields": {
            "candidate": 202,
            "state": 1015,
            "state_multiplier": 0.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2618,
        "fields": {
            "candidate": 202,
            "state": 1016,
            "state_multiplier": 0.3
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2619,
        "fields": {
            "candidate": 202,
            "state": 1017,
            "state_multiplier": 0.25
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2620,
        "fields": {
            "candidate": 202,
            "state": 1018,
            "state_multiplier": 0.1754
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2621,
        "fields": {
            "candidate": 202,
            "state": 1019,
            "state_multiplier": 0.1599
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2622,
        "fields": {
            "candidate": 202,
            "state": 1020,
            "state_multiplier": 0.25
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2623,
        "fields": {
            "candidate": 202,
            "state": 1021,
            "state_multiplier": 0.33
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2624,
        "fields": {
            "candidate": 202,
            "state": 1022,
            "state_multiplier": 0.35
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2625,
        "fields": {
            "candidate": 202,
            "state": 1023,
            "state_multiplier": 0.21
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2626,
        "fields": {
            "candidate": 202,
            "state": 1024,
            "state_multiplier": 0.3
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2627,
        "fields": {
            "candidate": 202,
            "state": 1025,
            "state_multiplier": 0.43
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2628,
        "fields": {
            "candidate": 202,
            "state": 1026,
            "state_multiplier": 0.3
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2629,
        "fields": {
            "candidate": 202,
            "state": 1027,
            "state_multiplier": 0.149
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2630,
        "fields": {
            "candidate": 202,
            "state": 1028,
            "state_multiplier": 0.17
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2631,
        "fields": {
            "candidate": 202,
            "state": 1029,
            "state_multiplier": 0.15
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2632,
        "fields": {
            "candidate": 202,
            "state": 1030,
            "state_multiplier": 0.17
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2633,
        "fields": {
            "candidate": 202,
            "state": 1031,
            "state_multiplier": 0.13
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2634,
        "fields": {
            "candidate": 202,
            "state": 1032,
            "state_multiplier": 0.24
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2635,
        "fields": {
            "candidate": 202,
            "state": 1033,
            "state_multiplier": 0.32
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2636,
        "fields": {
            "candidate": 202,
            "state": 1034,
            "state_multiplier": 0.35
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2637,
        "fields": {
            "candidate": 202,
            "state": 1035,
            "state_multiplier": 0.3
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2638,
        "fields": {
            "candidate": 202,
            "state": 1036,
            "state_multiplier": 0.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2639,
        "fields": {
            "candidate": 202,
            "state": 1037,
            "state_multiplier": 0.31
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2640,
        "fields": {
            "candidate": 202,
            "state": 1038,
            "state_multiplier": 0.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2641,
        "fields": {
            "candidate": 202,
            "state": 1039,
            "state_multiplier": 0.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2642,
        "fields": {
            "candidate": 202,
            "state": 1040,
            "state_multiplier": 0.3
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2643,
        "fields": {
            "candidate": 202,
            "state": 1041,
            "state_multiplier": 0.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2644,
        "fields": {
            "candidate": 202,
            "state": 1042,
            "state_multiplier": 0.3
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2645,
        "fields": {
            "candidate": 202,
            "state": 1043,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2646,
        "fields": {
            "candidate": 202,
            "state": 1044,
            "state_multiplier": 0.3209
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2647,
        "fields": {
            "candidate": 202,
            "state": 1045,
            "state_multiplier": 0.1431
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2648,
        "fields": {
            "candidate": 202,
            "state": 1046,
            "state_multiplier": 0.3
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2649,
        "fields": {
            "candidate": 202,
            "state": 1047,
            "state_multiplier": 0.3
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2650,
        "fields": {
            "candidate": 202,
            "state": 1048,
            "state_multiplier": 0.4
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2651,
        "fields": {
            "candidate": 202,
            "state": 1049,
            "state_multiplier": 0.32
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2652,
        "fields": {
            "candidate": 202,
            "state": 1050,
            "state_multiplier": 0.25
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2653,
        "fields": {
            "candidate": 203,
            "state": 1000,
            "state_multiplier": 0.0207
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2654,
        "fields": {
            "candidate": 203,
            "state": 1001,
            "state_multiplier": 0.0544
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2655,
        "fields": {
            "candidate": 203,
            "state": 1002,
            "state_multiplier": 0.044
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2656,
        "fields": {
            "candidate": 203,
            "state": 1003,
            "state_multiplier": 0.0347
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2657,
        "fields": {
            "candidate": 203,
            "state": 1004,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2658,
        "fields": {
            "candidate": 203,
            "state": 1005,
            "state_multiplier": 0.0351
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2659,
        "fields": {
            "candidate": 203,
            "state": 1006,
            "state_multiplier": 0.0286
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2660,
        "fields": {
            "candidate": 203,
            "state": 1007,
            "state_multiplier": 0.0323
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2661,
        "fields": {
            "candidate": 203,
            "state": 1008,
            "state_multiplier": 0.045
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2662,
        "fields": {
            "candidate": 203,
            "state": 1009,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2663,
        "fields": {
            "candidate": 203,
            "state": 1010,
            "state_multiplier": 0.0663
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2664,
        "fields": {
            "candidate": 203,
            "state": 1011,
            "state_multiplier": 0.0369
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2665,
        "fields": {
            "candidate": 203,
            "state": 1012,
            "state_multiplier": 0.0418
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2666,
        "fields": {
            "candidate": 203,
            "state": 1013,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2667,
        "fields": {
            "candidate": 203,
            "state": 1014,
            "state_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2668,
        "fields": {
            "candidate": 203,
            "state": 1015,
            "state_multiplier": 0.0599
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2669,
        "fields": {
            "candidate": 203,
            "state": 1016,
            "state_multiplier": 0.0237
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2670,
        "fields": {
            "candidate": 203,
            "state": 1017,
            "state_multiplier": 0.0284
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2671,
        "fields": {
            "candidate": 203,
            "state": 1018,
            "state_multiplier": 0.0636
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2672,
        "fields": {
            "candidate": 203,
            "state": 1019,
            "state_multiplier": 0.0388
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2673,
        "fields": {
            "candidate": 203,
            "state": 1020,
            "state_multiplier": 0.0247
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2674,
        "fields": {
            "candidate": 203,
            "state": 1021,
            "state_multiplier": 0.0353
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2675,
        "fields": {
            "candidate": 203,
            "state": 1022,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2676,
        "fields": {
            "candidate": 203,
            "state": 1023,
            "state_multiplier": 0.017
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2677,
        "fields": {
            "candidate": 203,
            "state": 1024,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2678,
        "fields": {
            "candidate": 203,
            "state": 1025,
            "state_multiplier": 0.0482
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2679,
        "fields": {
            "candidate": 203,
            "state": 1026,
            "state_multiplier": 0.0312
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2680,
        "fields": {
            "candidate": 203,
            "state": 1027,
            "state_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2681,
        "fields": {
            "candidate": 203,
            "state": 1028,
            "state_multiplier": 0.0263
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2682,
        "fields": {
            "candidate": 203,
            "state": 1029,
            "state_multiplier": 0.0228
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2683,
        "fields": {
            "candidate": 203,
            "state": 1030,
            "state_multiplier": 0.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2684,
        "fields": {
            "candidate": 203,
            "state": 1031,
            "state_multiplier": 0.033
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2685,
        "fields": {
            "candidate": 203,
            "state": 1032,
            "state_multiplier": 0.0085
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2686,
        "fields": {
            "candidate": 203,
            "state": 1033,
            "state_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2687,
        "fields": {
            "candidate": 203,
            "state": 1034,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2688,
        "fields": {
            "candidate": 203,
            "state": 1035,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2689,
        "fields": {
            "candidate": 203,
            "state": 1036,
            "state_multiplier": 0.025
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2690,
        "fields": {
            "candidate": 203,
            "state": 1037,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2691,
        "fields": {
            "candidate": 203,
            "state": 1038,
            "state_multiplier": 0.0259
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2692,
        "fields": {
            "candidate": 203,
            "state": 1039,
            "state_multiplier": 0.0255
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2693,
        "fields": {
            "candidate": 203,
            "state": 1040,
            "state_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2694,
        "fields": {
            "candidate": 203,
            "state": 1041,
            "state_multiplier": 0.0264
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2695,
        "fields": {
            "candidate": 203,
            "state": 1042,
            "state_multiplier": 0.0263
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2696,
        "fields": {
            "candidate": 203,
            "state": 1043,
            "state_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2697,
        "fields": {
            "candidate": 203,
            "state": 1044,
            "state_multiplier": 0.0508
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2698,
        "fields": {
            "candidate": 203,
            "state": 1045,
            "state_multiplier": 0.0227
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2699,
        "fields": {
            "candidate": 203,
            "state": 1046,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2700,
        "fields": {
            "candidate": 203,
            "state": 1047,
            "state_multiplier": 0.227
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2701,
        "fields": {
            "candidate": 203,
            "state": 1048,
            "state_multiplier": 0.07
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2702,
        "fields": {
            "candidate": 203,
            "state": 1049,
            "state_multiplier": 0.0343
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2703,
        "fields": {
            "candidate": 203,
            "state": 1050,
            "state_multiplier": 0.0459
        }
    }
]

campaignTrail_temp.answer_score_global_json = [
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3000,
        "fields": {
            "answer": 5002,
            "candidate": 200,
            "affected_candidate": 203,
            "global_multiplier": -0.5
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3001,
        "fields": {
            "answer": 5003,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": -0.1
        }
    },
	{
        "model": "campaign_trail.answer_score_global",
        "pk": 3001,
        "fields": {
            "answer": 5003,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": 0.5
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3008,
        "fields": {
            "answer": 5013,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.0015
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3009,
        "fields": {
            "answer": 5014,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.0025
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3010,
        "fields": {
            "answer": 5016,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.001
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3034,
        "fields": {
            "answer": 5060,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": -0.016
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3047,
        "fields": {
            "answer": 5083,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3049,
        "fields": {
            "answer": 5085,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.003
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3050,
        "fields": {
            "answer": 5086,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": -0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3051,
        "fields": {
            "answer": 5087,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": -0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3052,
        "fields": {
            "answer": 5089,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3058,
        "fields": {
            "answer": 5097,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.002
        }
    },
	{
        "model": "campaign_trail.answer_score_global",
        "pk": 3999,
        "fields": {
            "answer": 5097,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3059,
        "fields": {
            "answer": 5098,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": -0.001
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3060,
        "fields": {
            "answer": 5099,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": -0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3061,
        "fields": {
            "answer": 5100,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3117,
        "fields": {
            "answer": 5065,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": -0.014
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3120,
        "fields": {
            "answer": 5085,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": -0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3121,
        "fields": {
            "answer": 5087,
            "candidate": 200,
            "affected_candidate": 201,
            "global_multiplier": 0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3174,
        "fields": {
            "answer": 5062,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3175,
        "fields": {
            "answer": 5066,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": -0.001
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3246,
        "fields": {
            "answer": 5001,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": -0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3265,
        "fields": {
            "answer": 5015,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": -0.003
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3266,
        "fields": {
            "answer": 5015,
            "candidate": 200,
            "affected_candidate": 201,
            "global_multiplier": 0.001
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3267,
        "fields": {
            "answer": 5015,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": -0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3268,
        "fields": {
            "answer": 5016,
            "candidate": 200,
            "affected_candidate": 201,
            "global_multiplier": -0.0025
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3269,
        "fields": {
            "answer": 5019,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3280,
        "fields": {
            "answer": 5000,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": -0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3281,
        "fields": {
            "answer": 5001,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20664,
        "fields": {
            "answer": 5022,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.006
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20666,
        "fields": {
            "answer": 5023,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": -0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20667,
        "fields": {
            "answer": 5023,
            "candidate": 200,
            "affected_candidate": 201,
            "global_multiplier": -0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20668,
        "fields": {
            "answer": 5023,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20669,
        "fields": {
            "answer": 5023,
            "candidate": 200,
            "affected_candidate": 203,
            "global_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20670,
        "fields": {
            "answer": 5021,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20671,
        "fields": {
            "answer": 5020,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": 0.3
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20672,
        "fields": {
            "answer": 5020,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20673,
        "fields": {
            "answer": 5018,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20675,
        "fields": {
            "answer": 5017,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": -0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20676,
        "fields": {
            "answer": 5003,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": 0.2
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20677,
        "fields": {
            "answer": 5004,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20691,
        "fields": {
            "answer": 20689,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.001
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20694,
        "fields": {
            "answer": 5061,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20702,
        "fields": {
            "answer": 5062,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20705,
        "fields": {
            "answer": 20703,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.001
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20717,
        "fields": {
            "answer": 20715,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": -0.016
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20719,
        "fields": {
            "answer": 20718,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": -0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20723,
        "fields": {
            "answer": 20721,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20724,
        "fields": {
            "answer": 20721,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": -0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20725,
        "fields": {
            "answer": 20721,
            "candidate": 200,
            "affected_candidate": 201,
            "global_multiplier": -0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20730,
        "fields": {
            "answer": 20728,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": 0.15
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20731,
        "fields": {
            "answer": 20728,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.006
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20732,
        "fields": {
            "answer": 20728,
            "candidate": 200,
            "affected_candidate": 201,
            "global_multiplier": -0.007
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20739,
        "fields": {
            "answer": 20715,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20740,
        "fields": {
            "answer": 5060,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20743,
        "fields": {
            "answer": 20741,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20745,
        "fields": {
            "answer": 20741,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20747,
        "fields": {
            "answer": 20746,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20762,
        "fields": {
            "answer": 5024,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20763,
        "fields": {
            "answer": 5025,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20764,
        "fields": {
            "answer": 5025,
            "candidate": 200,
            "affected_candidate": 201,
            "global_multiplier": -0.011
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20765,
        "fields": {
            "answer": 5025,
            "candidate": 200,
            "affected_candidate": 203,
            "global_multiplier": 0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20772,
        "fields": {
            "answer": 5026,
            "candidate": 200,
            "affected_candidate": 201,
            "global_multiplier": 0.022
        }
    },
	{
        "model": "campaign_trail.answer_score_global",
        "pk": 20772,
        "fields": {
            "answer": 5027,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.008
        }
    },
	{
        "model": "campaign_trail.answer_score_global",
        "pk": 20772,
        "fields": {
            "answer": 5027,
            "candidate": 200,
            "affected_candidate": 201,
            "global_multiplier": -0.009
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20773,
        "fields": {
            "answer": 5127,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20791,
        "fields": {
            "answer": 5129,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20792,
        "fields": {
            "answer": 20752,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20807,
        "fields": {
            "answer": 20751,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": -0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20811,
        "fields": {
            "answer": 5064,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": -0.001
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20823,
        "fields": {
            "answer": 20821,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": -0.006
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20824,
        "fields": {
            "answer": 20821,
            "candidate": 200,
            "affected_candidate": 201,
            "global_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20826,
        "fields": {
            "answer": 20821,
            "candidate": 200,
            "affected_candidate": 203,
            "global_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20829,
        "fields": {
            "answer": 20827,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.004
        }
    },
	{
        "model": "campaign_trail.answer_score_global",
        "pk": 20830,
        "fields": {
            "answer": 20827,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20832,
        "fields": {
            "answer": 20830,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": -0.2
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20833,
        "fields": {
            "answer": 20756,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": -0.016
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20834,
        "fields": {
            "answer": 20754,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": -0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20835,
        "fields": {
            "answer": 20759,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": -0.023
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20861,
        "fields": {
            "answer": 20859,
            "candidate": 200,
            "affected_candidate": 201,
            "global_multiplier": -0.006
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20864,
        "fields": {
            "answer": 20862,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": -0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20871,
        "fields": {
            "answer": 20869,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.006
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20873,
        "fields": {
            "answer": 5085,
            "candidate": 200,
            "affected_candidate": 201,
            "global_multiplier": 0.003
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20908,
        "fields": {
            "answer": 20905,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": -0.003
        }
    },
	{
        "model": "campaign_trail.answer_score_global",
        "pk": 20981,
        "fields": {
            "answer": 20905,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": -0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20911,
        "fields": {
            "answer": 20906,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.006
        }
    },
	{
        "model": "campaign_trail.answer_score_global",
        "pk": 29999,
        "fields": {
            "answer": 20912,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": -0.001
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20919,
        "fields": {
            "answer": 20917,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20920,
        "fields": {
            "answer": 20917,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20924,
        "fields": {
            "answer": 20915,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.006
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20926,
        "fields": {
            "answer": 20914,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.003
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20934,
        "fields": {
            "answer": 20932,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": -0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20937,
        "fields": {
            "answer": 20935,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20938,
        "fields": {
            "answer": 20935,
            "candidate": 200,
            "affected_candidate": 201,
            "global_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20942,
        "fields": {
            "answer": 20874,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": -0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20943,
        "fields": {
            "answer": 20821,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20946,
        "fields": {
            "answer": 20865,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20958,
        "fields": {
            "answer": 5063,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": -0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21023,
        "fields": {
            "answer": 20930,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21025,
        "fields": {
            "answer": 21022,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": -0.003
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21033,
        "fields": {
            "answer": 5022,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": -0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21036,
        "fields": {
            "answer": 20752,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21038,
        "fields": {
            "answer": 20751,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": 0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21039,
        "fields": {
            "answer": 20830,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21040,
        "fields": {
            "answer": 5099,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": -0.03
        }
    },
	{
        "model": "campaign_trail.answer_score_global",
        "pk": 21998,
        "fields": {
            "answer": 5099,
            "candidate": 200,
            "affected_candidate": 201,
            "global_multiplier": -0.002
        }
    },
	{
        "model": "campaign_trail.answer_score_global",
        "pk": 22000,
        "fields": {
            "answer": 5099,
            "candidate": 200,
            "affected_candidate": 203,
            "global_multiplier": 0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21041,
        "fields": {
            "answer": 20859,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.001
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21042,
        "fields": {
            "answer": 20935,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": -0.012
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21043,
        "fields": {
            "answer": 5083,
            "candidate": 200,
            "affected_candidate": 201,
            "global_multiplier": -0.001
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21044,
        "fields": {
            "answer": 5083,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": 0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21045,
        "fields": {
            "answer": 20874,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21046,
        "fields": {
            "answer": 20869,
            "candidate": 200,
            "affected_candidate": 201,
            "global_multiplier": -0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21047,
        "fields": {
            "answer": 20944,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.003
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21052,
        "fields": {
            "answer": 21050,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": -0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21053,
        "fields": {
            "answer": 21050,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21060,
        "fields": {
            "answer": 5017,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21061,
        "fields": {
            "answer": 5018,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21062,
        "fields": {
            "answer": 5019,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": 0.01
        }
    },
	{
        "model": "campaign_trail.answer_score_global",
        "pk": 21999,
        "fields": {
            "answer": 5999,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21063,
        "fields": {
            "answer": 20703,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21064,
        "fields": {
            "answer": 20711,
            "candidate": 200,
            "affected_candidate": 201,
            "global_multiplier": -0.004
        }
    },
	{
        "model": "campaign_trail.answer_score_global",
        "pk": 210644,
        "fields": {
            "answer": 20711,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.001
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21065,
        "fields": {
            "answer": 20746,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21066,
        "fields": {
            "answer": 5025,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21067,
        "fields": {
            "answer": 5063,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": -0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21069,
        "fields": {
            "answer": 5064,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": -0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21070,
        "fields": {
            "answer": 5065,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21071,
        "fields": {
            "answer": 5066,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21072,
        "fields": {
            "answer": 20827,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21073,
        "fields": {
            "answer": 20754,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21074,
        "fields": {
            "answer": 20756,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21075,
        "fields": {
            "answer": 20759,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21076,
        "fields": {
            "answer": 5100,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21077,
        "fields": {
            "answer": 20865,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": -0.005
        }
    },
	{
        "model": "campaign_trail.answer_score_global",
        "pk": 21078,
        "fields": {
            "answer": 208701,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": -0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21078,
        "fields": {
            "answer": 20869,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": -0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21080,
        "fields": {
            "answer": 20906,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21081,
        "fields": {
            "answer": 20932,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": 0.005
        }
    },
	{
        "model": "campaign_trail.answer_score_global",
        "pk": 21082,
        "fields": {
            "answer": 20799,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.001
        }
    },
	{
        "model": "campaign_trail.answer_score_global",
        "pk": 21083,
        "fields": {
            "answer": 1146,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.001
        }
    },
	{
        "model": "campaign_trail.answer_score_global",
        "pk": 111338,
        "fields": {
            "answer": 111337,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.004
        }
    },
	{
        "model": "campaign_trail.answer_score_global",
        "pk": 111339,
        "fields": {
            "answer": 121337,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.003
        }
    },
	{
        "model": "campaign_trail.answer_score_global",
        "pk": 111340,
        "fields": {
            "answer": 121337,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": -0.02
        }
    },
	{
        "model": "campaign_trail.answer_score_global",
        "pk": 10101,
        "fields": {
            "answer": 12337,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": -0.02
        }
    },
	{
        "model": "campaign_trail.answer_score_global",
        "pk": 10102,
        "fields": {
            "answer": 12337,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.003
        }
    },
	{
        "model": "campaign_trail.answer_score_global",
        "pk": 10103,
        "fields": {
            "answer": 13337,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.006
        }
    },
	{
        "model": "campaign_trail.answer_score_global",
        "pk": 10104,
        "fields": {
            "answer": 13337,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": -0.015
        }
    },
	{
        "model": "campaign_trail.answer_score_global",
        "pk": 10105,
        "fields": {
            "answer": 14337,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": -0.01
        }
    },
	{
        "model": "campaign_trail.answer_score_global",
        "pk": 10106,
        "fields": {
            "answer": 14337,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.001
        }
    },
	{
        "model": "campaign_trail.answer_score_global",
        "pk": 10107,
        "fields": {
            "answer": 16833,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.005
        }
    },
	{
        "model": "campaign_trail.answer_score_global",
        "pk": 10108,
        "fields": {
            "answer": 16834,
            "candidate": 200,
            "affected_candidate": 201,
            "global_multiplier": 0.003
        }
    },
	{
        "model": "campaign_trail.answer_score_global",
        "pk": 10109,
        "fields": {
            "answer": 16831,
            "candidate": 200,
            "affected_candidate": 201,
            "global_multiplier": 0.004
        }
    },
	{
        "model": "campaign_trail.answer_score_global",
        "pk": 10110,
        "fields": {
            "answer": 16832,
            "candidate": 200,
            "affected_candidate": 201,
            "global_multiplier": 0.003
        }
    },
	{
        "model": "campaign_trail.answer_score_global",
        "pk": 10111,
        "fields": {
            "answer": 133714,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.001
        }
    },
	{
        "model": "campaign_trail.answer_score_global",
        "pk": 10112,
        "fields": {
            "answer": 133713,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.003
        }
    },
	{
        "model": "campaign_trail.answer_score_global",
        "pk": 10113,
        "fields": {
            "answer": 133712,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.005
        }
    },
	{
        "model": "campaign_trail.answer_score_global",
        "pk": 10114,
        "fields": {
            "answer": 133715,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.001
        }
    },
	{
        "model": "campaign_trail.answer_score_global",
        "pk": 10115,
        "fields": {
            "answer": 1454,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.004
        }
    },
	{
        "model": "campaign_trail.answer_score_global",
        "pk": 10116,
        "fields": {
            "answer": 1455,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.002
        }
    },
	{
        "model": "campaign_trail.answer_score_global",
        "pk": 10117,
        "fields": {
            "answer": 1455,
            "candidate": 200,
            "affected_candidate": 202,
            "global_multiplier": -0.015
        }
    },
	{
        "model": "campaign_trail.answer_score_global",
        "pk": 10118,
        "fields": {
            "answer": 1456,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": -0.001
        }
    },
	{
        "model": "campaign_trail.answer_score_global",
        "pk": 10119,
        "fields": {
            "answer": 1457,
            "candidate": 200,
            "affected_candidate": 200,
            "global_multiplier": 0.006
        }
    }
]

campaignTrail_temp.answer_score_issue_json = [
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2528,
        "fields": {
            "answer": 5040,
            "issue": 102,
            "issue_score": -0.1,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2553,
        "fields": {
            "answer": 5062,
            "issue": 100,
            "issue_score": -0.7,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2554,
        "fields": {
            "answer": 5062,
            "issue": 101,
            "issue_score": -0.6,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2555,
        "fields": {
            "answer": 5062,
            "issue": 102,
            "issue_score": -0.3,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2556,
        "fields": {
            "answer": 5062,
            "issue": 103,
            "issue_score": -0.6,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2557,
        "fields": {
            "answer": 5062,
            "issue": 104,
            "issue_score": -0.4,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2558,
        "fields": {
            "answer": 5063,
            "issue": 101,
            "issue_score": -0.5,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2559,
        "fields": {
            "answer": 5064,
            "issue": 101,
            "issue_score": 0.2,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2561,
        "fields": {
            "answer": 5066,
            "issue": 101,
            "issue_score": 0.5,
            "issue_importance": 4
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2606,
        "fields": {
            "answer": 5097,
            "issue": 100,
            "issue_score": -0.2,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2607,
        "fields": {
            "answer": 5098,
            "issue": 100,
            "issue_score": -0.5,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2608,
        "fields": {
            "answer": 5099,
            "issue": 100,
            "issue_score": 0.1,
            "issue_importance": 1
        }
    },
	{
        "model": "campaign_trail.answer_score_issue",
        "pk": 2699,
        "fields": {
            "answer": 20906,
            "issue": 100,
            "issue_score": -0.4,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2609,
        "fields": {
            "answer": 5100,
            "issue": 100,
            "issue_score": -0.2,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2767,
        "fields": {
            "answer": 5001,
            "issue": 100,
            "issue_score": -0.3,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2768,
        "fields": {
            "answer": 5001,
            "issue": 103,
            "issue_score": -0.3,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2769,
        "fields": {
            "answer": 5002,
            "issue": 100,
            "issue_score": -0.275,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2770,
        "fields": {
            "answer": 5002,
            "issue": 103,
            "issue_score": -0.275,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2781,
        "fields": {
            "answer": 5013,
            "issue": 103,
            "issue_score": -0.65,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2782,
        "fields": {
            "answer": 5014,
            "issue": 103,
            "issue_score": -0.5,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2783,
        "fields": {
            "answer": 5015,
            "issue": 103,
            "issue_score": -0.25,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2784,
        "fields": {
            "answer": 5018,
            "issue": 103,
            "issue_score": -0.2,
            "issue_importance": 1
        }
    },
	{
        "model": "campaign_trail.answer_score_issue",
        "pk": 2784,
        "fields": {
            "answer": 5999,
            "issue": 103,
            "issue_score": 0.3,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2785,
        "fields": {
            "answer": 5019,
            "issue": 103,
            "issue_score": -0.45,
            "issue_importance": 0.5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2786,
        "fields": {
            "answer": 5019,
            "issue": 104,
            "issue_score": -0.55,
            "issue_importance": 0.5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2795,
        "fields": {
            "answer": 5022,
            "issue": 100,
            "issue_score": -0.3,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2796,
        "fields": {
            "answer": 5022,
            "issue": 103,
            "issue_score": -0.3,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 2797,
        "fields": {
            "answer": 5022,
            "issue": 104,
            "issue_score": -0.3,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20674,
        "fields": {
            "answer": 5018,
            "issue": 100,
            "issue_score": 0.1,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20708,
        "fields": {
            "answer": 20706,
            "issue": 101,
            "issue_score": -0.5,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20710,
        "fields": {
            "answer": 20706,
            "issue": 104,
            "issue_score": -0.3,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20713,
        "fields": {
            "answer": 20711,
            "issue": 100,
            "issue_score": -0.4,
            "issue_importance": 0.5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20714,
        "fields": {
            "answer": 20711,
            "issue": 102,
            "issue_score": 0.5,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20735,
        "fields": {
            "answer": 20733,
            "issue": 100,
            "issue_score": -0.5,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20736,
        "fields": {
            "answer": 20733,
            "issue": 102,
            "issue_score": -0.5,
            "issue_importance": 0.5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20737,
        "fields": {
            "answer": 20733,
            "issue": 103,
            "issue_score": -0.5,
            "issue_importance": 0.5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20748,
        "fields": {
            "answer": 20746,
            "issue": 102,
            "issue_score": 0.5,
            "issue_importance": 1.5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20797,
        "fields": {
            "answer": 5071,
            "issue": 100,
            "issue_score": -0.3,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20800,
        "fields": {
            "answer": 20749,
            "issue": 103,
            "issue_score": 0.1,
            "issue_importance": 0.5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20801,
        "fields": {
            "answer": 20749,
            "issue": 100,
            "issue_score": -0.3,
            "issue_importance": 0.5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20804,
        "fields": {
            "answer": 20750,
            "issue": 100,
            "issue_score": -0.6,
            "issue_importance": 0.5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20805,
        "fields": {
            "answer": 20750,
            "issue": 103,
            "issue_score": -0.7,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20809,
        "fields": {
            "answer": 20751,
            "issue": 103,
            "issue_score": 0.5,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20867,
        "fields": {
            "answer": 20865,
            "issue": 100,
            "issue_score": -0.2,
            "issue_importance": 0.5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20872,
        "fields": {
            "answer": 20869,
            "issue": 100,
            "issue_score": -0.2,
            "issue_importance": 1
        }
    },
	{
        "model": "campaign_trail.answer_score_issue",
        "pk": 20872,
        "fields": {
            "answer": 208701,
            "issue": 100,
            "issue_score": 0.4,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20909,
        "fields": {
            "answer": 20905,
            "issue": 100,
            "issue_score": -0.1,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20922,
        "fields": {
            "answer": 20916,
            "issue": 100,
            "issue_score": 0.5,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20927,
        "fields": {
            "answer": 20917,
            "issue": 100,
            "issue_score": 0.9,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20945,
        "fields": {
            "answer": 20944,
            "issue": 100,
            "issue_score": -0.5,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20948,
        "fields": {
            "answer": 20855,
            "issue": 102,
            "issue_score": 0.7,
            "issue_importance": 1
        }
    },
	{
        "model": "campaign_trail.answer_score_issue",
        "pk": 90901,
        "fields": {
            "answer": 9001,
            "issue": 102,
            "issue_score": 0.6,
            "issue_importance": 3
        }
    },
	{
        "model": "campaign_trail.answer_score_issue",
        "pk": 90902,
        "fields": {
            "answer": 90039,
            "issue": 100,
            "issue_score": -0.5,
            "issue_importance": 3
        }
    },
	{
        "model": "campaign_trail.answer_score_issue",
        "pk": 90902,
        "fields": {
            "answer": 90039,
            "issue": 101,
            "issue_score": -0.5,
            "issue_importance": 3
        }
    },
	{
        "model": "campaign_trail.answer_score_issue",
        "pk": 90902,
        "fields": {
            "answer": 90039,
            "issue": 102,
            "issue_score": -0.5,
            "issue_importance": 3
        }
    },
	{
        "model": "campaign_trail.answer_score_issue",
        "pk": 90902,
        "fields": {
            "answer": 90039,
            "issue": 103,
            "issue_score": -0.5,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20949,
        "fields": {
            "answer": 20862,
            "issue": 102,
            "issue_score": -0.2,
            "issue_importance": 0.5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20950,
        "fields": {
            "answer": 20718,
            "issue": 100,
            "issue_score": -0.4,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20951,
        "fields": {
            "answer": 20721,
            "issue": 100,
            "issue_score": 0.1,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20952,
        "fields": {
            "answer": 5127,
            "issue": 103,
            "issue_score": -0.2,
            "issue_importance": 0.25
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20953,
        "fields": {
            "answer": 20752,
            "issue": 100,
            "issue_score": -0.6,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20960,
        "fields": {
            "answer": 20959,
            "issue": 101,
            "issue_score": 0.5,
            "issue_importance": 1
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 20986,
        "fields": {
            "answer": 20962,
            "issue": 103,
            "issue_score": -0.5,
            "issue_importance": 0.5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21018,
        "fields": {
            "answer": 20978,
            "issue": 101,
            "issue_score": -0.1,
            "issue_importance": 0.5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21019,
        "fields": {
            "answer": 20978,
            "issue": 103,
            "issue_score": 0.1,
            "issue_importance": 0.5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21027,
        "fields": {
            "answer": 20703,
            "issue": 100,
            "issue_score": 0,
            "issue_importance": 2
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21028,
        "fields": {
            "answer": 20703,
            "issue": 103,
            "issue_score": -0.1,
            "issue_importance": 0.5
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21030,
        "fields": {
            "answer": 20689,
            "issue": 100,
            "issue_score": -0.6,
            "issue_importance": 3
        }
    },
    {
        "model": "campaign_trail.answer_score_issue",
        "pk": 21035,
        "fields": {
            "answer": 5025,
            "issue": 100,
            "issue_score": 0.2,
            "issue_importance": 0.5
        }
    },
	{
        "model": "campaign_trail.answer_score_issue",
        "pk": 20799,
        "fields": {
            "answer": 5199,
            "issue": 100,
            "issue_score": 0.3,
            "issue_importance": 2
        }
    },
	{ // soft
        "model": "campaign_trail.answer_score_issue",
        "pk": 20800,
        "fields": {
            "answer": 20844,
            "issue": 104,
            "issue_score": 0.6,
            "issue_importance": 2
        }
    },
	{ // middle of the road
        "model": "campaign_trail.answer_score_issue",
        "pk": 20801,
        "fields": {
            "answer": 20847,
            "issue": 104,
            "issue_score": 0.1,
            "issue_importance": 1.5
        }
    },
	{ // hard
        "model": "campaign_trail.answer_score_issue",
        "pk": 20802,
        "fields": {
            "answer": 20836,
            "issue": 104,
            "issue_score": -0.3,
            "issue_importance": 2
        }
    }, 
	{ // softish
        "model": "campaign_trail.answer_score_issue",
        "pk": 20803,
        "fields": {
            "answer": 20851,
            "issue": 104,
            "issue_score": 0.15,
            "issue_importance": 2
        }
    },
	{ // hawk
        "model": "campaign_trail.answer_score_issue",
        "pk": 123,
        "fields": {
            "answer": 111337,
            "issue": 102,
            "issue_score": 0.5,
            "issue_importance": 2
        }
    },
	{ // con
        "model": "campaign_trail.answer_score_issue",
        "pk": 124,
        "fields": {
            "answer": 111337,
            "issue": 100,
            "issue_score": -0.5,
            "issue_importance": 2
        }
    },
	{ // con
        "model": "campaign_trail.answer_score_issue",
        "pk": 125,
        "fields": {
            "answer": 12337,
            "issue": 100,
            "issue_score": -0.5,
            "issue_importance": 1
        }
    },
	{ // con
        "model": "campaign_trail.answer_score_issue",
        "pk": 126,
        "fields": {
            "answer": 13337,
            "issue": 100,
            "issue_score": -0.6,
            "issue_importance": 3
        }
    },
	{ // con
        "model": "campaign_trail.answer_score_issue",
        "pk": 127,
        "fields": {
            "answer": 14337,
            "issue": 100,
            "issue_score": -0.3,
            "issue_importance": 1
        }
    },
	{ // con stuff
        "model": "campaign_trail.answer_score_issue",
        "pk": 128,
        "fields": {
            "answer": 16831,
            "issue": 100,
            "issue_score": -0.6,
            "issue_importance": 2
        }
    },
	{ // patriotic liberalism wow!
        "model": "campaign_trail.answer_score_issue",
        "pk": 129,
        "fields": {
            "answer": 133712,
            "issue": 100,
            "issue_score": 0.4,
            "issue_importance": 3
        }
    },
	{ // patriotic liberalism wow!
        "model": "campaign_trail.answer_score_issue",
        "pk": 130,
        "fields": {
            "answer": 133713,
            "issue": 100,
            "issue_score": 0.1,
            "issue_importance": 3
        }
    },
	{ // cruz
        "model": "campaign_trail.answer_score_issue",
        "pk": 131,
        "fields": {
            "answer": 133714,
            "issue": 100,
            "issue_score": 0.4,
            "issue_importance": 1
        }
    },
	{ // patriotic conservatism wow!
        "model": "campaign_trail.answer_score_issue",
        "pk": 132,
        "fields": {
            "answer": 133715,
            "issue": 100,
            "issue_score": -0.1,
            "issue_importance": 1
        }
    },
	{ // base stuff!
        "model": "campaign_trail.answer_score_issue",
        "pk": 13113,
        "fields": {
            "answer": 1454,
            "issue": 100,
            "issue_score": -0.5,
            "issue_importance": 1
        }
    },
	{
        "model": "campaign_trail.answer_score_issue",
        "pk": 13114,
        "fields": {
            "answer": 1455,
            "issue": 100,
            "issue_score": -0.5,
            "issue_importance": 2
        }
    },
	{ // fuck the base!
        "model": "campaign_trail.answer_score_issue",
        "pk": 13115,
        "fields": {
            "answer": 1456,
            "issue": 100,
            "issue_score": 0.2,
            "issue_importance": 2
        }
    },
	{ // ultra base stuff!
        "model": "campaign_trail.answer_score_issue",
        "pk": 13116,
        "fields": {
            "answer": 1457,
            "issue": 100,
            "issue_score": -0.6,
            "issue_importance": 3
        }
    }
]

campaignTrail_temp.answer_score_state_json = [
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20509,
        "fields": {
            "answer": 5124,
            "state": 1021,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.0025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20510,
        "fields": {
            "answer": 5124,
            "state": 1022,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.0025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20511,
        "fields": {
            "answer": 5124,
            "state": 1049,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.0025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20512,
        "fields": {
            "answer": 5125,
            "state": 1005,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.0025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20513,
        "fields": {
            "answer": 5125,
            "state": 1027,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.0025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20514,
        "fields": {
            "answer": 5126,
            "state": 1037,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.007
        }
    },
	{
        "model": "campaign_trail.answer_score_state",
        "pk": 205155,
        "fields": {
            "answer": 5130,
            "state": 1045,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.0025
        }
    },
	{
        "model": "campaign_trail.answer_score_state",
        "pk": 205156,
        "fields": {
            "answer": 5130,
            "state": 1008,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.0025
        }
    },
	{
        "model": "campaign_trail.answer_score_state",
        "pk": 205157,
        "fields": {
            "answer": 5130,
            "state": 1032,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.0025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20678,
        "fields": {
            "answer": 5004,
            "state": 1011,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20679,
        "fields": {
            "answer": 5004,
            "state": 1043,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20680,
        "fields": {
            "answer": 5004,
            "state": 1005,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20681,
        "fields": {
            "answer": 5004,
            "state": 1050,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20682,
        "fields": {
            "answer": 5004,
            "state": 1015,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20683,
        "fields": {
            "answer": 5004,
            "state": 1035,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20684,
        "fields": {
            "answer": 5004,
            "state": 1042,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20685,
        "fields": {
            "answer": 5004,
            "state": 1001,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20686,
        "fields": {
            "answer": 5004,
            "state": 1018,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20687,
        "fields": {
            "answer": 5004,
            "state": 1014,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20688,
        "fields": {
            "answer": 5004,
            "state": 1049,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20693,
        "fields": {
            "answer": 5061,
            "state": 1008,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20695,
        "fields": {
            "answer": 5061,
            "state": 1014,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20696,
        "fields": {
            "answer": 5061,
            "state": 1002,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20697,
        "fields": {
            "answer": 5061,
            "state": 1049,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20698,
        "fields": {
            "answer": 5061,
            "state": 1021,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20699,
        "fields": {
            "answer": 5061,
            "state": 1037,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20700,
        "fields": {
            "answer": 5061,
            "state": 1028,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20726,
        "fields": {
            "answer": 20721,
            "state": 1014,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20727,
        "fields": {
            "answer": 20721,
            "state": 1008,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20774,
        "fields": {
            "answer": 5127,
            "state": 1009,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20775,
        "fields": {
            "answer": 5127,
            "state": 1032,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20776,
        "fields": {
            "answer": 5127,
            "state": 1012,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20777,
        "fields": {
            "answer": 5127,
            "state": 1000,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20778,
        "fields": {
            "answer": 5127,
            "state": 1019,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20779,
        "fields": {
            "answer": 5127,
            "state": 1023,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20780,
        "fields": {
            "answer": 5127,
            "state": 1042,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20781,
        "fields": {
            "answer": 5127,
            "state": 1017,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20782,
        "fields": {
            "answer": 5127,
            "state": 1021,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20783,
        "fields": {
            "answer": 5127,
            "state": 1031,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20784,
        "fields": {
            "answer": 5127,
            "state": 1029,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20785,
        "fields": {
            "answer": 5127,
            "state": 1007,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20786,
        "fields": {
            "answer": 5127,
            "state": 1008,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.004
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20787,
        "fields": {
            "answer": 5128,
            "state": 1009,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20788,
        "fields": {
            "answer": 5128,
            "state": 1000,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20789,
        "fields": {
            "answer": 5128,
            "state": 1000,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20790,
        "fields": {
            "answer": 5129,
            "state": 1008,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.016
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20794,
        "fields": {
            "answer": 20752,
            "state": 1008,
            "candidate": 200,
            "affected_candidate": 202,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20795,
        "fields": {
            "answer": 20752,
            "state": 1032,
            "candidate": 200,
            "affected_candidate": 202,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20903,
        "fields": {
            "answer": 5125,
            "state": 1030,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.0025
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20965,
        "fields": {
            "answer": 20959,
            "state": 1009,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20966,
        "fields": {
            "answer": 20959,
            "state": 1032,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20967,
        "fields": {
            "answer": 20959,
            "state": 1008,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20968,
        "fields": {
            "answer": 20959,
            "state": 1009,
            "candidate": 200,
            "affected_candidate": 202,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20969,
        "fields": {
            "answer": 20959,
            "state": 1032,
            "candidate": 200,
            "affected_candidate": 202,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20970,
        "fields": {
            "answer": 20959,
            "state": 1008,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20971,
        "fields": {
            "answer": 20962,
            "state": 1022,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20972,
        "fields": {
            "answer": 20962,
            "state": 1021,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20974,
        "fields": {
            "answer": 20962,
            "state": 1049,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20975,
        "fields": {
            "answer": 20962,
            "state": 1022,
            "candidate": 200,
            "affected_candidate": 201,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20976,
        "fields": {
            "answer": 20962,
            "state": 1021,
            "candidate": 200,
            "affected_candidate": 201,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20977,
        "fields": {
            "answer": 20962,
            "state": 1049,
            "candidate": 200,
            "affected_candidate": 201,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20987,
        "fields": {
            "answer": 20979,
            "state": 1028,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20988,
        "fields": {
            "answer": 20979,
            "state": 1049,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20989,
        "fields": {
            "answer": 20979,
            "state": 1021,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20990,
        "fields": {
            "answer": 20979,
            "state": 1022,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20991,
        "fields": {
            "answer": 20979,
            "state": 1049,
            "candidate": 200,
            "affected_candidate": 201,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20992,
        "fields": {
            "answer": 20979,
            "state": 1021,
            "candidate": 200,
            "affected_candidate": 201,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20993,
        "fields": {
            "answer": 20979,
            "state": 1022,
            "candidate": 200,
            "affected_candidate": 201,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20994,
        "fields": {
            "answer": 20979,
            "state": 1009,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20995,
        "fields": {
            "answer": 20979,
            "state": 1032,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20996,
        "fields": {
            "answer": 20979,
            "state": 1008,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20997,
        "fields": {
            "answer": 20979,
            "state": 1009,
            "candidate": 200,
            "affected_candidate": 202,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20998,
        "fields": {
            "answer": 20979,
            "state": 1032,
            "candidate": 200,
            "affected_candidate": 202,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20999,
        "fields": {
            "answer": 20979,
            "state": 1008,
            "candidate": 200,
            "affected_candidate": 202,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21001,
        "fields": {
            "answer": 20979,
            "state": 1018,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21002,
        "fields": {
            "answer": 20978,
            "state": 1027,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21003,
        "fields": {
            "answer": 20978,
            "state": 1002,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21004,
        "fields": {
            "answer": 20978,
            "state": 1005,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21005,
        "fields": {
            "answer": 20978,
            "state": 1030,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.008
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21006,
        "fields": {
            "answer": 20978,
            "state": 1022,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21007,
        "fields": {
            "answer": 20978,
            "state": 1021,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21008,
        "fields": {
            "answer": 20978,
            "state": 1049,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21009,
        "fields": {
            "answer": 20978,
            "state": 1022,
            "candidate": 201,
            "affected_candidate": 200,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21010,
        "fields": {
            "answer": 20978,
            "state": 1049,
            "candidate": 201,
            "affected_candidate": 200,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21011,
        "fields": {
            "answer": 20978,
            "state": 1021,
            "candidate": 201,
            "affected_candidate": 200,
            "state_multiplier": 0.01
        }
    },
	{
        "model": "campaign_trail.answer_score_state",
        "pk": 29011,
        "fields": {
            "answer": 1246,
            "state": 1021,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.01
        }
    },
	{
        "model": "campaign_trail.answer_score_state",
        "pk": 29012,
        "fields": {
            "answer": 1246,
            "state": 1049,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.01
        }
    },
	{
        "model": "campaign_trail.answer_score_state",
        "pk": 29013,
        "fields": {
            "answer": 1246,
            "state": 1034,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.01
        }
    },
	{
        "model": "campaign_trail.answer_score_state",
        "pk": 29011,
        "fields": {
            "answer": 1346,
            "state": 1037,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.01
        }
    },
	{
        "model": "campaign_trail.answer_score_state",
        "pk": 29012,
        "fields": {
            "answer": 1346,
            "state": 1028,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.01
        }
    },
	{
        "model": "campaign_trail.answer_score_state",
        "pk": 29013,
        "fields": {
            "answer": 1346,
            "state": 1018,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.01
        }
    },
	
	{
        "model": "campaign_trail.answer_score_state",
        "pk": 29011,
        "fields": {
            "answer": 1446,
            "state": 1005,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.01
        }
    },
	{
        "model": "campaign_trail.answer_score_state",
        "pk": 29012,
        "fields": {
            "answer": 1446,
            "state": 1027,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.01
        }
    },
	{
        "model": "campaign_trail.answer_score_state",
        "pk": 29013,
        "fields": {
            "answer": 1446,
            "state": 1002,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.01
        }
    },
	
	{
        "model": "campaign_trail.answer_score_state",
        "pk": 29014,
        "fields": {
            "answer": 1146,
            "state": 1009,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.01
        }
    },
	{
        "model": "campaign_trail.answer_score_state",
        "pk": 29015,
        "fields": {
            "answer": 1146,
            "state": 1008,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.01
        }
    },
	{
        "model": "campaign_trail.answer_score_state",
        "pk": 29016,
        "fields": {
            "answer": 1146,
            "state": 1032,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21012,
        "fields": {
            "answer": 20978,
            "state": 1009,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21013,
        "fields": {
            "answer": 20978,
            "state": 1008,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21014,
        "fields": {
            "answer": 20978,
            "state": 1032,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21015,
        "fields": {
            "answer": 20978,
            "state": 1009,
            "candidate": 200,
            "affected_candidate": 201,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21016,
        "fields": {
            "answer": 20978,
            "state": 1008,
            "candidate": 200,
            "affected_candidate": 201,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21017,
        "fields": {
            "answer": 20978,
            "state": 1032,
            "candidate": 200,
            "affected_candidate": 201,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21037,
        "fields": {
            "answer": 20752,
            "state": 1009,
            "candidate": 200,
            "affected_candidate": 200,
            "state_multiplier": 0.005
        }
    }
]

campaignTrail_temp.answer_feedback_json = [
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2500,
        "fields": {
            "answer": 20978,
            "candidate": 200,
            "answer_feedback": "Your running mate is happy with this choice."
        }
    },
	{
        "model": "campaign_trail.answer_feedback",
        "pk": 2598,
        "fields": {
            "answer": 5998,
            "candidate": 200,
            "answer_feedback": "Cruz did well during the debate... except his snide and repeated insinuations that he belongs at the top of the ticket, not you. Clearly, you\'ve upset him a little too much over this campaign."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2501,
        "fields": {
            "answer": 20847,
            "candidate": 200,
            "answer_feedback": "This is a reasonable answer on immigration, moderate enough to appeal to softer states but hard enough to appeal to the southwest and peel away Trump supporters. Hopefully, this will do the trick."
        }
    },
	{
        "model": "campaign_trail.answer_feedback",
        "pk": 2997,
        "fields": {
            "answer": 20851,
            "candidate": 200,
            "answer_feedback": "This is a reasonable answer on immigration, definitely leaning towards the softer end. It will certainly help you with more liberal states like Oregon and Washington, while not doing you any favors in states like Arizona, New Mexico, and New Hampshire."
        }
    },
	{
        "model": "campaign_trail.answer_feedback",
        "pk": 2999,
        "fields": {
            "answer": 20844,
            "candidate": 200,
            "answer_feedback": "This answer certainly leans towards the softer end. It may hurt you with border states like Arizona and New Mexico, and other states that care a lot about the border, but it should help you in more liberal states."
        }
    },
	{
        "model": "campaign_trail.answer_feedback",
        "pk": 2998,
        "fields": {
            "answer": 20836,
            "candidate": 200,
            "answer_feedback": "This is a very strong and conservative answer on illegal immigration. It will certainly help you in states that care a great deal about the border like Arizona, New Mexico, and New Hampshire, as well as whittle away at Trump\'s support, but it won\'t do you favors in more liberal leaning states like Oregon."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2502,
        "fields": {
            "answer": 5125,
            "candidate": 200,
            "answer_feedback": "Your running mate is happy with this choice."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2503,
        "fields": {
            "answer": 5003,
            "candidate": 200,
            "answer_feedback": "Claiming that the only reason you chose Cruz was the 'corrupt bargain' that Trump's goons are so excited about was... not the best response."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2504,
        "fields": {
            "answer": 5004,
            "candidate": 200,
            "answer_feedback": "This was a powerful way to introduce your running mate, and will certainly give you a boost with the states he managed to win in the primaries."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2513,
        "fields": {
            "answer": 5013,
            "candidate": 200,
            "answer_feedback": "It might not be a bad idea to keep hammering away at Hillary. It could help you to make this a contest of who is more unpopular."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2514,
        "fields": {
            "answer": 5014,
            "candidate": 200,
            "answer_feedback": "It might not be a bad idea to keep hammering away at Hillary. It could help you to make this a contest of who is more unpopular."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2515,
        "fields": {
            "answer": 5015,
            "candidate": 200,
            "answer_feedback": "Some think you are too restained on this issue, if that's easy to believe."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2516,
        "fields": {
            "answer": 5016,
            "candidate": 200,
            "answer_feedback": "You raise some eyebrows with this response, but maybe there's a point?"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2517,
        "fields": {
            "answer": 5017,
            "candidate": 200,
            "answer_feedback": "Trump has said something similar, but it\'s not actually clear that the shooter had any Jihadist motivations."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2518,
        "fields": {
            "answer": 5018,
            "candidate": 200,
            "answer_feedback": "The NRA is very unhappy, but this is a powerful way to demonstrate moderate credentials while responding to the crisis."
        }
    },
	{
        "model": "campaign_trail.answer_feedback",
        "pk": 2518,
        "fields": {
            "answer": 5999,
            "candidate": 200,
            "answer_feedback": "This is a very tolerant tone. It\'ll help with centrists, but conservatives are unenthused."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2519,
        "fields": {
            "answer": 5019,
            "candidate": 200,
            "answer_feedback": "This is a standard non-political response to a tragedy like this."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2520,
        "fields": {
            "answer": 5020,
            "candidate": 200,
            "answer_feedback": "Trump is furious and by giving him so much attention, you've supercharged his candidacy. This was not the greatest option."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2521,
        "fields": {
            "answer": 5021,
            "candidate": 200,
            "answer_feedback": "This was a good response, though some feel that you missed out on an opportunity to unify the party by bringing up Sanders."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2522,
        "fields": {
            "answer": 5022,
            "candidate": 200,
            "answer_feedback": "Bringing up Sanders and your appeals to Trump supporters have done much to keep the party unified."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2524,
        "fields": {
            "answer": 5024,
            "candidate": 200,
            "answer_feedback": "No harm, no foul. Your advisors feel you’re leaving something on the table though."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2525,
        "fields": {
            "answer": 5025,
            "candidate": 200,
            "answer_feedback": "Cruz is an effective attack dog, getting down in the mud while you stay clean. Already, you\'ve heard chatter about reforming that old 2008 organization, PUMA."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2526,
        "fields": {
            "answer": 5026,
            "candidate": 200,
            "answer_feedback": "Not only does she say no, the very next day she announces that she'll rally with Sanders in North Carolina. Did you offend her?"
        }
    },
	{
        "model": "campaign_trail.answer_feedback",
        "pk": 2526,
        "fields": {
            "answer": 5027,
            "candidate": 200,
            "answer_feedback": "This works very well. These people aren't Bernie's biggest fans, and they\'re furious about percieved sexism by Sanders and his supporters. A successor to PUMA has already been founded, and this is really hurting Sanders. Cruz is quite unhappy you didn\'t send him in, though."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2536,
        "fields": {
            "answer": 5040,
            "candidate": 200,
            "answer_feedback": "Iraq is pretty unpopular, so coming out against it is good. And your indirect criticism of the Bush administration is noticed, for better or worse."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2550,
        "fields": {
            "answer": 5060,
            "candidate": 200,
            "answer_feedback": "Some notice that you conveniently forget to mention that alongside blocking new illegal arrivals, you support amnesty for illegal immigrants already present. But on the whole, this works well and you\'re pulling back Trump supporters without alienating the center."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2551,
        "fields": {
            "answer": 5061,
            "candidate": 200,
            "answer_feedback": "Some of your advisors think you\'re leaving something on the table here, but others think you made the right choice. Regardless, it\'s always good to get those extra rallies in. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2552,
        "fields": {
            "answer": 5063,
            "candidate": 200,
            "answer_feedback": "This is a very Trumpian pivot from your previous stance in favor of both of these deals. While your new stance is more popular, and will help greatly in the Midwest, it does come off as rather dishonest. Your running mate isn\'t happy with your protectionist tone, either."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2553,
        "fields": {
            "answer": 5064,
            "candidate": 200,
            "answer_feedback": "Many voters don't appreciate a pivot from a position you held so strongly in the primaries, but your new position is likely more popular as a whole."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2554,
        "fields": {
            "answer": 5066,
            "candidate": 200,
            "answer_feedback": "You've certainly come out swinging. Conservative protectionists are increasingly flocking to Trump. But given that both Sanders and Trump are protectionist, maybe there's an opening? Your running mate is happy with this strategy, at least."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2557,
        "fields": {
            "answer": 5071,
            "candidate": 200,
            "answer_feedback": "This makes you seem moderate without angering religious conservatives too much. Liberals aren't very happy, though."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2568,
        "fields": {
            "answer": 5083,
            "candidate": 200,
            "answer_feedback": "This has been remarkably effective. Not a bad turn of events for you."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2570,
        "fields": {
            "answer": 5085,
            "candidate": 200,
            "answer_feedback": "Voters love to see a display of compassion and bipartisanship like this. Trump, meanwhile, seems childish with his angry fits about Sanders being unfit for the Presidency. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2571,
        "fields": {
            "answer": 5086,
            "candidate": 200,
            "answer_feedback": "You are criticized for ducking out of the debate."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2572,
        "fields": {
            "answer": 5087,
            "candidate": 200,
            "answer_feedback": "Sanders defended himself well, and most pundits seem to feel that he came out with a slight edge. It's unlikely to matter, though."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2573,
        "fields": {
            "answer": 5088,
            "candidate": 200,
            "answer_feedback": "Most people seem to feel that the debates were a draw."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2574,
        "fields": {
            "answer": 5089,
            "candidate": 200,
            "answer_feedback": "Bernie came off as idealistic and out of touch. He was particularly damaged by a moment in which he sipped some water and then checked his watch - pundits claimed that it was unpresidential."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2581,
        "fields": {
            "answer": 5097,
            "candidate": 200,
            "answer_feedback": "On the whole, this was a solid response, and your base ate it up. However, the brief mention of entitlement reform has infuriated liberals, and Trump is using it to peel off fiscal moderates from your coalition."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2582,
        "fields": {
            "answer": 5098,
            "candidate": 200,
            "answer_feedback": "While this is popular with conservatives, the Affordable Care Act is actually quite popular with most of the American populace. This will help shore you up in states where Trump is splitting your votes, but it\'s not very popular with most voters."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2583,
        "fields": {
            "answer": 5099,
            "candidate": 200,
            "answer_feedback": "Pivoting towards populism is certainly an <i>interesting</i> strategy, John. We'll see how it turns out."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2584,
        "fields": {
            "answer": 5100,
            "candidate": 200,
            "answer_feedback": "This is a strong attack on Sanders. He hits you on not mentioning entitlements, and says you\'re going to deal with the deficit by hollowing them out, but that\'s just noise. Tax raises aren\'t popular with the American people, and no amount of fearmongering can change that."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2611,
        "fields": {
            "answer": 5127,
            "candidate": 200,
            "answer_feedback": "This works great. Despite his many bizarre statements, Carson is popular and your numbers among African-Americans are rising. Your running mate isn\'t very happy with this path, however. He doesn\'t see the point in trying to court the black vote."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2613,
        "fields": {
            "answer": 5129,
            "candidate": 200,
            "answer_feedback": "Jeb is not only stumping for you in his home state, but directing donors your way as well."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20665,
        "fields": {
            "answer": 5023,
            "candidate": 200,
            "answer_feedback": "This is an oddly aggressive tone for your speech accepting your nomination. At least it won you a rare complement from Trump."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20690,
        "fields": {
            "answer": 20689,
            "candidate": 200,
            "answer_feedback": "This may not have been the most effective opening, but Cruz is certainly flattered. This may help quell any potential revolt if you diverge from his wishes."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20701,
        "fields": {
            "answer": 5062,
            "candidate": 200,
            "answer_feedback": "As intended, this pulls a great deal of support from Trump. Unfortunately, the positions you've taken are unpopular with most Americans."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20704,
        "fields": {
            "answer": 20703,
            "candidate": 200,
            "answer_feedback": "The radicalism of Trump and Sanders turns many off, so sensible centrism may be the way to go."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20707,
        "fields": {
            "answer": 20706,
            "candidate": 200,
            "answer_feedback": "As expected, this helps you in the Midwest and not really anywhere else."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20712,
        "fields": {
            "answer": 20711,
            "candidate": 200,
            "answer_feedback": "This works well. Foreign policy is a weakness for Sanders, and this is a rare issue where you are aligned well with the base. Gingrich calls you afterwards to congratulate you on your remarks."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20716,
        "fields": {
            "answer": 20715,
            "candidate": 200,
            "answer_feedback": "You've successfully cut away at a little bit of Trump's support, without bleeding moderates. Nice going."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20720,
        "fields": {
            "answer": 20718,
            "candidate": 200,
            "answer_feedback": "Hopefully, you can blunt his momentum early on. Maybe if you can take enough support from him and play nice, he\'ll endorse you? As is, he\'s doing everything he can to take you down, and playing nice with Sanders in the process. Unfortunate."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20722,
        "fields": {
            "answer": 20721,
            "candidate": 200,
            "answer_feedback": "This is a powerful strategy. Trump, furious after you stole the nomination, is putting everything he has into tearing you down from the right, even as Sanders attacks you from the left. But if you can seize the majority here, then maybe, just maybe, you can come out on top."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20729,
        "fields": {
            "answer": 20728,
            "candidate": 200,
            "answer_feedback": "Attacking Trump is a bit counterproductive, but this generally works pretty well. Unfortunately, it hasn\'t stopped him from continuing to do his utmost to take you down - often using the kid gloves with Bernie in the process."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20734,
        "fields": {
            "answer": 20733,
            "candidate": 200,
            "answer_feedback": "As expected, this has helped you in some regions and hurt you in others. Unfortunately, it hasn\'t stopped Trump from continuing to do whatever he can to hurt you, even helping Bernie in the process. Unfortunate."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20742,
        "fields": {
            "answer": 20741,
            "candidate": 200,
            "answer_feedback": "This is a standard, non-political answer for such an event. Trump is expected to see a bump in the polls given his campaign's radical rhetoric on the subject of Islamic extremism."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20753,
        "fields": {
            "answer": 20752,
            "candidate": 200,
            "answer_feedback": "This helps your margins in the state, and you take some voters from Trump nationwide, but you have a long way to go."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20755,
        "fields": {
            "answer": 20754,
            "candidate": 200,
            "answer_feedback": "Trump and Sanders have simply continued attacking you on this. Staying silent hasn\'t defused the issue, it\'s simply allowed your opponents to dominate the conversation. Will you be able to come back from this?"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20757,
        "fields": {
            "answer": 20756,
            "candidate": 200,
            "answer_feedback": "Repeating what you said during the primaries? Well, this does defuse the attack to some degree, but it doesn\'t change the fact that you worked there or that you recieved a large bonus in the same year that the company collapsed. You\'ve handled this well, but it\'ll still hurt you."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20760,
        "fields": {
            "answer": 20759,
            "candidate": 200,
            "answer_feedback": "Unfortunately, this scandal is a bit too large to be able to simply ignore and turn the conversation away from. You recieved a large bonus in 2008, shortly before the total collapse of the company. People want answers, and giving them nothing is just making them madder, and allowing your opponents to continue hitting you and dominating the conversation. This was not the best move."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20798,
        "fields": {
            "answer": 20749,
            "candidate": 200,
            "answer_feedback": "Well, that's going a bit further than you did in the primaries. The religious right isn't happy with your explicit refusal to appoint judges to overturn Obergefell, nor is your running mate, but moderates and independents disgruntled with Sanders are beginning to give you another look..."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20802,
        "fields": {
            "answer": 20750,
            "candidate": 200,
            "answer_feedback": "Well, the religious right and the base are certainly happy with you. Unfortunately, nobody else is very happy with this major flipflop."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20806,
        "fields": {
            "answer": 20751,
            "candidate": 200,
            "answer_feedback": "This goes too far for the sort of Democrats you have a chance to win, let alone Republicans, and angers your running mate. It's probably not going to help you."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20810,
        "fields": {
            "answer": 5065,
            "candidate": 200,
            "answer_feedback": "Trade is an important issue, and dodging it comes across as very strange, particularly given that you fought with Trump over it in the primaries. Expect to take a hit in the polls."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20819,
        "fields": {
            "answer": 20818,
            "candidate": 200,
            "answer_feedback": "No harm, no foul."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20822,
        "fields": {
            "answer": 20821,
            "candidate": 200,
            "answer_feedback": "Bringing this up isn't great for your favorability, but it's worse for Sanders. This is probably your best move."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20828,
        "fields": {
            "answer": 20827,
            "candidate": 200,
            "answer_feedback": "While Sanders said some very radical things back in those days, it's been decades and most people don't care. All you've done is distract from the scandal people actually care about, and excited your partisan. This has helped take some support from Trump, however."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20831,
        "fields": {
            "answer": 20830,
            "candidate": 200,
            "answer_feedback": "He said WHAT? And then he did WHAT? Giving Trump attention is usually unwise, but you've really managed to do some damage here. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20858,
        "fields": {
            "answer": 20855,
            "candidate": 200,
            "answer_feedback": "Your running mate expressed that he disagrees with you on live TV. While this won you complements from figures like Condi Rice and Jeb Bush, it has not been a mainstream position for many years. Expect this to hurt you."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20860,
        "fields": {
            "answer": 20859,
            "candidate": 200,
            "answer_feedback": "Thankfully, you\'ve been able to successfully direct this conversation away from stupid things that you used to think 20 years ago, towards stupid things that Bernie Sanders thinks today. This will help you."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20863,
        "fields": {
            "answer": 20862,
            "candidate": 200,
            "answer_feedback": "Unfortunately, that's just not true. Doves won't be too upset about this, but most people aren't going to be happy."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20866,
        "fields": {
            "answer": 20865,
            "candidate": 200,
            "answer_feedback": "Fair enough. You've got a strong record, and you're using it well."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20870,
        "fields": {
            "answer": 20869,
            "candidate": 200,
            "answer_feedback": "Wow, way to use your record to your advantage."
        }
    },
	{
        "model": "campaign_trail.answer_feedback",
        "pk": 208711,
        "fields": {
            "answer": 208701,
            "candidate": 200,
            "answer_feedback": "Fair enough. This is a traditionally liberal thing to say, and many traditional conservatives are even more deflated, but centrists like what they\'re hearing a great deal."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20907,
        "fields": {
            "answer": 20905,
            "candidate": 200,
            "answer_feedback": "You\'re right, John. You\'re totally, completely correct. Trump has pivoted, he has changed, he is doing whatever he can to take you down. But everybody who cares about this knows it already. This outburst isn\'t going to do you any favors."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20910,
        "fields": {
            "answer": 20906,
            "candidate": 200,
            "answer_feedback": "Your ardent supporters are inspired, but for most Americans, the age of Compassionate Conservatism has passed. Will running a campaign built on normalcy in an age of rage really work?"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20913,
        "fields": {
            "answer": 20912,
            "candidate": 200,
            "answer_feedback": "This may be true, but are you going for a clean break? This is hard to justify to your base, and doesn\'t do much outside it."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20918,
        "fields": {
            "answer": 20917,
            "candidate": 200,
            "answer_feedback": "Well, this will certainly help cut Trump's margins down..."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20921,
        "fields": {
            "answer": 20916,
            "candidate": 200,
            "answer_feedback": "This will certainly help your margins in more conservative-leaning states."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20923,
        "fields": {
            "answer": 20915,
            "candidate": 200,
            "answer_feedback": "A strong message for a strong campaign."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20925,
        "fields": {
            "answer": 20914,
            "candidate": 200,
            "answer_feedback": "John, as much as you love that rhetoric, it didn't win you the primary, and it won't win you the general. Talk about something else for once."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20933,
        "fields": {
            "answer": 20932,
            "candidate": 200,
            "answer_feedback": "What happened to light and hope?"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20936,
        "fields": {
            "answer": 20935,
            "candidate": 200,
            "answer_feedback": "Trump looks like a child next to you, Governor."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20940,
        "fields": {
            "answer": 20939,
            "candidate": 200,
            "answer_feedback": "Sanders says that his position has changed. You've done something to bring this up again, but most people don't appreciate your dodging of the question."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20941,
        "fields": {
            "answer": 20874,
            "candidate": 200,
            "answer_feedback": "For once, Trump agrees with you."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21000,
        "fields": {
            "answer": 20979,
            "candidate": 200,
            "answer_feedback": "This is an... interesting strategy."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21024,
        "fields": {
            "answer": 20930,
            "candidate": 200,
            "answer_feedback": "Cruz is generally considered the winner, though it's unlikely this will have much of an impact."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21026,
        "fields": {
            "answer": 21022,
            "candidate": 200,
            "answer_feedback": "Skipping it doesn't make you look very good, and Cruz is furious. Thankfully, most people don't really care."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21034,
        "fields": {
            "answer": 20746,
            "candidate": 200,
            "answer_feedback": "A strong stance against terror. Trump is expected to see a bump in the polls given his campaign's radical rhetoric on the subject of Islamic extremism."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21051,
        "fields": {
            "answer": 21050,
            "candidate": 200,
            "answer_feedback": "You're a Never-Trumper to the core, aren't you?"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21054,
        "fields": {
            "answer": 21049,
            "candidate": 200,
            "answer_feedback": "Hopefully his supporters turn out for you."
        }
    },
	{
        "model": "campaign_trail.answer_feedback",
        "pk": 21799,
        "fields": {
            "answer": 20799,
            "candidate": 200,
            "answer_feedback": "A strong answer, though a rather liberal one."
        }
    },
	{
        "model": "campaign_trail.answer_feedback",
        "pk": 21899,
        "fields": {
            "answer": 5199,
            "candidate": 200,
            "answer_feedback": "Well, that\'s certainly an interesting strategy. We\'ll see how it goes."
        }
    },
	{
        "model": "campaign_trail.answer_feedback",
        "pk": 9108,
        "fields": {
            "answer": 9008,
            "candidate": 200,
            "answer_feedback": "What were you thinking? Not only does he reject, but he very clearly enjoys it - and goes on another unhinged rant about you on Fox the next day. After a chaotic process, you emerge with former Senator Scott Brown as your running mate."
        }
    },
	{
        "model": "campaign_trail.answer_feedback",
        "pk": 9107,
        "fields": {
            "answer": 9007,
            "candidate": 200,
            "answer_feedback": "Unfortunately, he does say no. Perhaps you were a bit optimistic. After a day of chaos, you emerge with former Senator Scott Brown of Massachusetts as your running mate."
        }
    },
	{
        "model": "campaign_trail.answer_feedback",
        "pk": 9106,
        "fields": {
            "answer": 9006,
            "candidate": 200,
            "answer_feedback": "Pataki gladly accepts - he\'s happy for a chance to get back into the ring after the failure of his Presidential bid. Will you two be able to work a miracle?"
        }
    },
	{
        "model": "campaign_trail.answer_feedback",
        "pk": 9105,
        "fields": {
            "answer": 9005,
            "candidate": 200,
            "answer_feedback": "Gingrich accepts, happy for a chance to get back into the ring. Can the two of you work a miracle and finally take back the White House?"
        }
    },
	{
        "model": "campaign_trail.answer_feedback",
        "pk": 9104,
        "fields": {
            "answer": 9004,
            "candidate": 200,
            "answer_feedback": "Senator Rubio firmly explains that while he would have been happy to be tapped at the start of the race, he isn\'t interested in losing. After a chaotic process, you end up with former Speaker of the House John Boehner as your running mate. Good luck, you\'re going to need it."
        }
    },
	{
        "model": "campaign_trail.answer_feedback",
        "pk": 9103,
        "fields": {
            "answer": 9003,
            "candidate": 200,
            "answer_feedback": "Donald is overjoyed to hear you. He makes you beg for his support, only to demand things you can never stomach - like a gross perversion of American foreign policy - and then hang up. You end up with former Governor Pataki, of New York, as your running mate. Good luck."
        }
    },
	{
        "model": "campaign_trail.answer_feedback",
        "pk": 99103,
        "fields": {
            "answer": 90039,
            "candidate": 200,
            "answer_feedback": "Donald is overjoyed to hear you. He makes you beg for his support, and after you offer every concession he might want and prostrate yourself before him, he accepts. Expect some painful rallies, but maybe the two of you can pull this off?"
        }
    },
	{
        "model": "campaign_trail.answer_feedback",
        "pk": 9102,
        "fields": {
            "answer": 9002,
            "candidate": 200,
            "answer_feedback": "Palin likes you and has liked your campaign, and she\'s happy to raise her profile with another bid for the White House. Maybe this situation is still salvageable?"
        }
    },
	{
        "model": "campaign_trail.answer_feedback",
        "pk": 9112,
        "fields": {
            "answer": 9202,
            "candidate": 200,
            "answer_feedback": "Palin explains to you that she likes you, but she just doesn\'t see the maverick Washington Outsider values in you that she would need in order to support you. After a few calls, you end up with former Speaker of the House John Boehner by your side, ready to take the fall with you."
        }
    },
	{
        "model": "campaign_trail.answer_feedback",
        "pk": 9101,
        "fields": {
            "answer": 9201,
            "candidate": 200,
            "answer_feedback": "Condi explains to you that she does not wish to be Vice President, she has never wished to be Vice President, and she does not wish to be Vice President. After a few more calls, you end up with former Speaker Boehner as your Vice President."
        }
    },
	{
        "model": "campaign_trail.answer_feedback",
        "pk": 9111,
        "fields": {
            "answer": 9001,
            "candidate": 200,
            "answer_feedback": "After some discussion on foreign policy, your domestic agenda, and your chances of victory, Condi reluctantly agrees. Good luck."
        }
    },
	{
        "model": "campaign_trail.answer_feedback",
        "pk": 9112,
        "fields": {
            "answer": 111337,
            "candidate": 200,
            "answer_feedback": "Well, this certainly helps you with hawks and neoconservatives. Unfortunately, these are largely already groups that support you, and it does little to make the Republican base more comfortable with you, or to expand your coalition."
        }
    },
	{
        "model": "campaign_trail.answer_feedback",
        "pk": 168341,
        "fields": {
            "answer": 16834,
            "candidate": 200,
            "answer_feedback": "This goes decently well, but most of the best attack dogs in your party are more sympathetic to Trump than they are to you - their broadsides are weaker than expected."
        }
    },
	{
        "model": "campaign_trail.answer_feedback",
        "pk": 168342,
        "fields": {
            "answer": 16833,
            "candidate": 200,
            "answer_feedback": "This goes great. The famed Republican attack machine finally kicks into gear, and as Limbaugh churns out horror and Palin stumps across the country, you can feel things swinging your way."
        }
    },
	{
        "model": "campaign_trail.answer_feedback",
        "pk": 168343,
        "fields": {
            "answer": 16832,
            "candidate": 200,
            "answer_feedback": "President Obama doesn\'t try to argue that he prefers Sanders to Hillary, but instead makes a compelling case for why the Democratic Party should rally around Sanders now that he\'s won the nomination. While this wasn\'t great for Sanders, it\'s still a net negative for you."
        }
    },
	{
        "model": "campaign_trail.answer_feedback",
        "pk": 168344,
        "fields": {
            "answer": 16831,
            "candidate": 200,
            "answer_feedback": "Sanders totally and methodically dismantles your claims. The base appreciates it, but swing voters and the left are firmly on his side. Expect this to hurt you."
        }
    },
	{
        "model": "campaign_trail.answer_feedback",
        "pk": 9113,
        "fields": {
            "answer": 12337,
            "candidate": 200,
            "answer_feedback": "Trump\'s attempts to shift to the right and sweep the base out from under you are increasingly falling flat. This should help you greatly, but it is chipping away at your moderate image as well."
        }
    },
	{
        "model": "campaign_trail.answer_feedback",
        "pk": 123456,
        "fields": {
            "answer": 13337,
            "candidate": 200,
            "answer_feedback": "Well, you\'re really firing up the activist base. This will help you with them a lot, but it'll turn off moderates too. Will it be enough to carry you to victory?"
        }
    },
	{
        "model": "campaign_trail.answer_feedback",
        "pk": 9116,
        "fields": {
            "answer": 14337,
            "candidate": 200,
            "answer_feedback": "Well, this is kind of a boring response, but your record is working. The base is increasingly happy with you, they\'re rallying around you and increasingly abandoning Trump, and maybe you\'ve got a shot at this after all."
        }
    },
	{
        "model": "campaign_trail.answer_feedback",
        "pk": 9117,
        "fields": {
            "answer": 133712,
            "candidate": 200,
            "answer_feedback": "Those who have been with you since the primaries, and independents, and swing voters, are happy with this. The base... is not. This\'ll help you in reach states, but may imperil you in safer states."
        }
    },
	{
        "model": "campaign_trail.answer_feedback",
        "pk": 9118,
        "fields": {
            "answer": 133713,
            "candidate": 200,
            "answer_feedback": "Well, you\'re certainly making that turn towards liberalism official. But you\'re doing it softly, and the base appreciates the concessions. This should help you."
        }
    },
	{
        "model": "campaign_trail.answer_feedback",
        "pk": 9119,
        "fields": {
            "answer": 133714,
            "candidate": 200,
            "answer_feedback": "Cruz is happy to be heard - he\'d like you to campaign a bit more in the southwest and to chill out on some of your... more unorthodox and left wing positions. What will happen if you don\'t is left unsaid."
        }
    },
	{
        "model": "campaign_trail.answer_feedback",
        "pk": 9120,
        "fields": {
            "answer": 133715,
            "candidate": 200,
            "answer_feedback": "Fair enough. Your reputation is still relatively moderate and relatively liberal, but going after Bernie helps ease that with the base, and you\'re still doing fairly well with swing voters."
        }
    },
	{
        "model": "campaign_trail.answer_feedback",
        "pk": 9121,
        "fields": {
            "answer": 1454,
            "candidate": 200,
            "answer_feedback": "Cruz helps you a good deal in repairing relations with the base, particularly with evangelicals."
        }
    },
	{
        "model": "campaign_trail.answer_feedback",
        "pk": 9122,
        "fields": {
            "answer": 1455,
            "candidate": 200,
            "answer_feedback": "While things are getting better with the base, you're still looking at historically low conservative turnout, and Trump is pulling a lot of votes from you. You do manage to get Palin out on the trail for once though, which ought to help you with that crowd."
        }
    },
	{
        "model": "campaign_trail.answer_feedback",
        "pk": 9123,
        "fields": {
            "answer": 1456,
            "candidate": 200,
            "answer_feedback": "This is an interesting strategy. It'll help you in some of the harder to reach states, like Virginia and Oregon and New Hampshire, but it won't do you any favors in the core states that you need to win, and that Trump and Bernie are really challenging you in."
        }
    },
	{
        "model": "campaign_trail.answer_feedback",
        "pk": 9124,
        "fields": {
            "answer": 1457,
            "candidate": 200,
            "answer_feedback": "This will certainly hurt Trump, and help secure some states that ought to be safe, but it'll hurt you in some of the reach goals, and damages some of your unique appeal to moderates."
        }
    }
]

campaignTrail_temp.multiple_endings = true;
endingPicker = (out, totv, aa, quickstats) => {

    function setImage(url) {
        if(url == '' || url == null) return;
        let interval = setInterval(function () {
            img = document.getElementsByClassName("person_image")[0];
            if (img != null) {
                img.src = url;
                clearInterval(interval);
            }
        }, 50);
    }
	if (quickstats[0] >= 538 && !droppedForTrump) { // bigshot
        setImage("https://i.imgur.com/yylhiH0.png");
		return `<h3>KASICH WINS 538</h3>yummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwichyummysandwich`;
	} else if (quickstats[0] == 0 && !droppedForTrump) { // bigshot
        setImage("https://i.imgur.com/J2E6n5b.png");
		return `<h3>KASICH WINS NO ELECTORAL VOTES</h3>Sanders won big sweep big victory.<br></br>Now the country is communist and the United Soviet States.<br></br>This is so sad. Now all our precious bodily fluids will be full of flouride.<br></br>What a shame.`;
	} else if (droppedForTrump && aa[0].candidate == 202 && aa[0].electoral_votes >= 270) { // trump won bc of you
        setImage("https://i.imgur.com/dCH6dob.png");
		return `<h3>TRUMP WINS AFTER KASICH DROPOUT</h3>My God. He did it. After you dropped out for Trump, the unified Republican vote was able to beat Sanders. An Independent nominee has become President of the United States for the first time since Washington - though Trump is expected to switch back to the GOP shortly.<br></br>This is a very unusual circumstance. Nobody is quite sure how exactly Trump is going to run his administration. From what you\'ve heard, his plans range from surprisingly sensible to downright insane. Hopefully the nation prospers under President Trump.<br></br>In the end, all you did was for naught. You and Cruz beat Trump, but in the end you came crawling back and he won anyway. What a shame.`;
	} else if (!droppedForTrump && aa[0].candidate == 202 && aa[0].electoral_votes >= 270) { // trump won bc of you
        setImage("https://i.imgur.com/zZtJe2I.png");
		return `<h3>TRUMP WINS OUTRIGHT, NATION IN SHOCK</h3>My God. He did it. Somehow, impossibly, Donald Trump has managed to beat both you and Sanders and win outright. An Independent nominee has become President of the United States for the first time since Washington.<br></br>This is a very unusual circumstance. Nobody is quite sure how exactly Trump is going to run his administration. From what you\'ve heard, his plans range from downright insane to... downright insane. Things aren\'t looking good, but hopefully he does better than seems likely.<br></br>In the end, all you did was for naught. You and Cruz beat Trump in the primaries, but in the end you couldn\'t beat him in the general election. What a shame.`;
	} else if (droppedForTrump && aa[0].candidate == 201 && aa[0].electoral_votes >= 270) { // sanders beat trump after you dropped
        setImage("https://i.imgur.com/lfWRZyh.png");
		return `<h3>SANDERS BEATS TRUMP</h3>My God.  What have you wrought?<br></br>After your idiotic drop out for Trump, he lost to Sanders. As you should have expected, you beat him for a reason! The very idea that such a chaotic populist monster could ever become President of the United States is laughable.<br></br>In the end, all you did was for naught. You and Cruz beat Trump in the primaries, and even with your people on his side Trump couldn\'t beat Sanders. You gave it all up for nothing. What a shame.`;
	}
	else if(aa[0].electoral_votes < 270 && aa[2].electoral_votes > 0) {
        setImage("https://i.imgur.com/UUUcJn7.png");
        return `<h3>DEADLOCK!</h3>

		In a shock, the electoral college has been deadlocked, and Trump\'s made it in. 
		<br></br>
		You\’ve managed to deadlock the election. Given that Republicans control both chambers of Congress, you and your running mate are swiftly confirmed as the next President and Vice President of the United States. With a friendly Congress, you\’ll surely have an easy time passing your moderate, bipartisan agenda. You\’ll be able to do what you like with trade, and bring your famous fiscal responsibility to the White House. Maybe you\’ll even be able to create a balanced budget by the end of your first term? Even if not, you\’ll definitely get another. There would have to be a serious crises to disrupt your inevitable victory, a global pandemic or a similar catastrophe. Liberals and Trumpists are going to be furious at what they see as a stolen election, but as long as you have a good four years, you should be able to fend them off fine.
		<br></br>
		This is a historic loss for the Progressive Democrats, who have failed, despite all odds, to get their man into the White House. Given Trump\’s splinter campaign, Sanders was expected to beat you, and Democrats are shocked and demoralized. Sanders\' brand of Progressive politics have been discredited by his loss, even as a few of his fellow Democratic Socialists sweep into office on his down ballot coattails. Good luck..`;
    }
	else if (quickstats[0] >= 270 && FUCKYOU && (wasAnsPicked(9001) != true)) { // if you won and you picked a non condi veep
        setImage("https://i.imgur.com/CZPa97z.png");
		return `<h3>UNPRECEDENTED VICTORY FOR REPUBLICANS</h3>

Winning at all would have been impressive... but winning after replacing your Vice-President less than a month before election day? This is nothing less than astounding.
<br></br>
What led to your victory? Well, divisive populism from both the left and the right failed to bring you down. Even when your own running mate tried to take you down, you overcame that. Your vice-presidential choice shocked many, but you were able to win regardless, and now they\'ll help you goverrn for the next four years - or you\'ll just sideline them. Either way, you\'ve made history with a comeback like this.
<br></br>
Thankfully, you\'ll come into office with a majority in both chambers of Congress, so you should have no trouble getting your agenda through. You’ll be able to do what you like with trade, with foreign policy, and with the economy. Maybe you\’ll be able to balance the budget, or at least cut down the deficit? You may have to give up on some of your goals to achieve others. Well, whatever happens, this victory will remain with you forever. You went from the expectation of destruction to this historic win. The nation is shocked, the Democrats tremble, and you are victorious.`;
    } else if (quickstats[0] >= 270 && wasAnsPicked(9001)) { // if you won and you picked Condi
        setImage("https://i.imgur.com/cRUmpqU.png");
		return `<h3>UNPRECEDENTED VICTORY FOR REPUBLICANS</h3>

Winning at all would have been impressive... but winning after replacing your Vice-President less than a month before election day? This is nothing less than astounding.
<br></br>
What led to your victory? Well, divisive populism from both the left and the right failed to bring you down. Even when your own running mate tried to take you down, you overcame that. Condi just took this position to save the Party from humiliation, and she\'s not happy to actually be Vice President. But she\'ll get over it, or you\'ll find somebody new for 2020. Either way, you\'ve made history with the first black woman to be Vice President.
<br></br>
Thankfully, you\'ll come into office with a majority in both chambers of Congress, so you should have no trouble getting your agenda through. You’ll be able to do what you like with trade, with foreign policy (though Condi will certainly want her say there), and with the economy. Maybe you\’ll be able to balance the budget, or at least cut down the deficit? You may have to give up on some of your goals to achieve others. Well, whatever happens, this victory will remain with you forever. You went from the expectation of destruction to this historic win.`;
    } else if (quickstats[0] >= 270 && liberalKasich) { // if you won and you were woke
        setImage("https://i.imgur.com/kxdcaiG.png");
		return `<h3>KASICH WINS AFTER LIBERAL PIVOT</h3>

Winning at all would have been impressive... but winning like this? This is nothing less than shocking.
<br></br>
What led to your victory? Well, you were hopeful and you were tolerant and frankly rather liberal. In the end, your rhetoric of light and hope won you this election. Divisive populism from both the left and the right failed to bring you down.
<br></br>
Thankfully, you\'ll come into office with a majority in both chambers of Congress, so you should have no trouble getting your optimistic and bipartisan agenda through. You’ll be able to do what you like with trade, with foreign policy, and with the economy. Maybe you\’ll be able to balance the budget, or at least cut down the deficit? You may have to give up on some of your goals to achieve others. Well, whatever happens, this victory will remain with you forever. You went from the expectation of destruction to this historic win.`;
    } else if (quickstats[0] < 269 && liberalKasich) { // if you lost and you were woke
        setImage("https://i.imgur.com/AE5X2g4.png");
		return `<h3>KASICH LOSES AFTER LIBERAL PIVOT</h3>

You were expected to lose this election, and your odd strategy just reinforced that expectation. Rightly so, unfortunately.
<br></br>
What led to your loss? Well, you were hopeful and you were tolerant and frankly rather liberal. In the end, your rhetoric of light and hope lost you this election, along with a healthy dose of ideological skepticism. Divisive populism from both the left and the right brought you down.
<br></br>
Thankfully, the Republican Party still holds a majority in both chambers of Congress, so Sanders should have trouble getting his radical socialist agenda through. Even despite that, this is a historic win for the Progressive Democrats, who are finally able to get their champion into the White House. Sanders\' brand of Progressive politics is increasingly becoming normalized, as other Democratic Socialists sweep into office on his down ballot coattails. Hopefully your successor can block him from a second term. For now, it looks like retirement is in your future.`;
    } else if (quickstats[0] >= 270 && conKasich) { // if you won and you were conservative
        setImage("https://i.imgur.com/TFFA58B.png");
		return `<h3>KASICH WINS - COMPASSIONATE AND TRULY CONSERVATIVE</h3>

Well, it seems like your conservative pivot worked. You fired up the base, you held the conservative parts of the nation, and you proved the pollsters and the pundits wrong.
<br></br>
In the end, your pivot in order to cut away at Trump and turn you the base allowed you to win this election. Divisive populism from both the left and the right failed to bring you down.
<br></br>
Thankfully, you\'ll come into office with a majority in both chambers of Congress, so you should have no trouble getting your compassionate and truly conservative agenda through. You’ll be able to do what you like with trade, with foreign policy, and with the economy. Maybe you\’ll be able to balance the budget, or at least cut down the deficit? You\’ll probably have to give up on some goals to achieve others. Well, whatever happens, this victory will remain with you forever. You went from the expectation of destruction to this historic win.`;
    } else if (quickstats[0] < 269 && conKasich) { // if you lost and you were conservative
        setImage("https://i.imgur.com/AE5X2g4.png");
		return `<h3>KASICH LOSES - TOO CONSERVATIVE FOR AMERICA?</h3>

You were expected to lose this election, and despite your pivots to energize the base, you weren\'t able to turn things around.
<br></br>
What led to your loss? Well, your conservative turn in messaging helped bring out a base that was often drawn to Trump, but it often resulted in your taking positions unpopular to the average American. In the end, you couldn\'t shake the legacy of Bush and Romney, and the Trump splinter just added fuel to the fire. Divisive populism from both the left and the right brought you down.
<br></br>
Thankfully, the Republican Party still holds a majority in both chambers of Congress, so Sanders should have trouble getting his radical socialist agenda through. Even despite that, this is a historic win for the Progressive Democrats, who are finally able to get their champion into the White House. Sanders\' brand of Progressive politics is increasingly becoming normalized, as other Democratic Socialists sweep into office on his down ballot coattails. Hopefully the Republican Nominee in '20 can block him from a second term. For now, it looks like retirement is in your future.`;
    } else if (quickstats[0] >= 310 && trumpDropped) { // if you won big and trump dropped out for you
        setImage("https://i.imgur.com/DqBQb8C.png");
		return `<h3>KASICH WINS BIGLY WITH SUPPORT FROM TRUMP</h3>

After Trump dropped out for you, your victory was expected. That doesn\'t make it any less sweet, however - especially given the magnitude!
<br></br>
What led to your victory? By treating Sanders like Donald did, and by compromising your own vision to gain his support, you have managed to convince the Donald to end his war against your campaign, and by doing so brought his supporters back into the fold. Many are surprised that he was willing to back you at all, but you gave a lot for this. Your pivots hurt you, but Bernie was so radical that it didn\'t matter. But in the end, your rhetoric of light and hope didn\'t win you this election. Though you\'re going to be the next president, part of you can\'t help but feel that you\'ve failed.
<br></br>
Thankfully, you still have a majority in both chambers of Congress, so you should have no trouble getting your agenda through. Though given the bones you\'ve thrown to the Trump crowd, you may have to modify what you desire to suit their tastes. You’ll be able to do what you like with foreign policy, and move the economy in a slightly more populist direction. Maybe you\’ll also somehow be able to balance the budget, or at least cut down the deficit? Well, whatever happens, at least you won.`;
    }
	else if (quickstats[0] >= 270 && trumpDropped) { // if you won and trump dropped out for you
        setImage("https://i.imgur.com/DqBQb8C.png");
		return `<h3>KASICH WINS WITH SUPPORT FROM TRUMP</h3>

After Trump dropped out for you, your victory was expected. That doesn\'t make it any less sweet, however.
<br></br>
What led to your victory? By treating Sanders like Donald did, and by compromising your own vision to gain his support, you have managed to convince the Donald to end his war against your campaign, and by doing so brought his supporters back into the fold. Many are surprised that he was willing to back you at all, but you gave a lot for this. Your pivots hurt you, but Bernie was so radical that it didn\'t matter. But in the end, your rhetoric of light and hope didn\'t win you this election. Though you\'re going to be the next president, part of you can\'t help but feel that you\'ve failed.
<br></br>
Thankfully, you still have a majority in both chambers of Congress, so you should have no trouble getting your agenda through. Though given the bones you\'ve thrown to the Trump crowd, you may have to modify what you desire to suit their tastes. You’ll be able to do what you like with foreign policy, and move the economy in a slightly more populist direction. Maybe you\’ll also somehow be able to balance the budget, or at least cut down the deficit? Well, whatever happens, at least you won.`;
    }
else if (quickstats[0] < 270 && trumpDropped) { // if you lost and trump dropped out for you
        setImage("https://i.imgur.com/AE5X2g4.png");
		return `<h3>SANDERS WINS DESPITE TRUMP DROPOUT</h3>

Despite everything, you failed.
<br></br>
What caused this? You pivoted in a direction that Trump liked, you treated Sanders like Trump did, you compromised your own vision to gain Donald\'s support, convinced him to end his war against your campaign, and brought his supporters back into the fold. And after all that, after all you gave for this - you failed. Your pivots hurt you, the Lehman Brothers scandal hurt you, and yet you thought Bernie was so radical that it didn\'t matter. You were wrong. In the end, you abandoned light and hope for divisive rhetoric crafted to win over Trump and his supporters, and you still lost.
<br></br>
Thankfully, the Republican Party still holds a majority in both chambers of Congress, so Sanders should have trouble getting his radical socialist agenda through. Even despite that, this is a historic win for the Progressive Democrats, who are finally able to get their champion into the White House. Sanders\' brand of Progressive politics is increasingly becoming normalized, as other Democratic Socialists sweep into office on his down ballot coattails. Hopefully your successor can block him from a second term. For now, it looks like a sad and shameful retirement is in your future.`;
    }
else if (quickstats[0] >= 270 && quickstats[0] < 300 && aa[2].popular_votes >= 12000000) { // if you won and trump got lots of votes
        setImage("https://i.imgur.com/h7WUUh7.png");
		return `<h3>KASICH WINS, TRUMP OVERPERFORMS</h3>

Well, this is certainly unexpected. You’ve won the election, despite Trump doing better than expected.
<br></br>
How did this happen? Well, it seems that the issues you faced in this election, from strategy to the Lehman Brothers scandal to your trouble with trade were enough to allow Trump to skyrocket in the polling, and come out with a surprising chunk of the vote. Very few expected him to get nearly four times as much of the vote as Nader, and even fewer thought you would still manage to win.This is truly shocking. Trump\’s third party campaign almost cost you the election, and his strong performance may help keep his movement alive for the future. But in the end, his divisive rhetoric failed, and light and hope won the day.
<br></br>
Thankfully, you still have a majority in both chambers of Congress, so you should have no trouble getting your optimistic and bipartisan agenda through. You’ll be able to do what you like with trade, with foreign policy, and with the economy. Maybe you\’ll be able to balance the budget, or at least cut down the deficit? Well, whatever happens, this victory will remain with you forever. You went from the expectation of destruction to this historic win.`;
    } else if (quickstats[0] < 269 && quickstats[0] >= 230 && aa[2].popular_votes >= 12000000) { // if you lost and trump got at least 10.8 mil votes and ending would be WIN or EKES OUT WIN
        setImage("https://i.imgur.com/CaT5mXw.png");
		return `<h3>SANDERS WINS, TRUMP OVERPERFORMS</h3>

Well, this is certainly unfortunate. You’ve lost the election, likely because of Trump doing better than expected.
<br></br>
How did this happen? Well, it seems that the issues you faced in this election, from Trump\’s campaign to the Lehman Brothers scandal to your trouble with trade were enough to allow Trump to take away a surprising chunk of your votes. Very few expected him to get nearly four times as much of the vote as Nader, but everyone knew that a performance like this would be sure to cost you the election. And in the end, that\’s what happened. Trump\’s third party campaign cost you the election, and he has earned the eternal ire of the Republican Party for it. In the end, his divisive rhetoric won out, and light and hope lost the day.
<br></br>
Thankfully, the Republican Party still has a majority in both chambers of Congress, so Sanders should have trouble getting his radical socialist agenda through. Even despite that, this is a historic win for the Progressive Democrats, who are finally able to get their champion into the White House. Sanders\' brand of Progressive politics is increasingly becoming normalized, as other Democratic Socialists sweep into office on his down ballot coattails. Hopefully your successor can block him from a second term - but Trump\’s strong performance may lead to some problems down the road. For now, it looks like retirement is in your future.`;
    } else if(quickstats[0] >= 270 && (quickstats[2]+2500000 < aa[1].popular_votes) && quickstats[0] < 290) {
        setImage("https://i.imgur.com/TMTqEoE.png");
		return `<h3>KASICH WINS, DESTROYED IN POPULAR VOTE</h3>

Well, this is certainly unexpected. You’ve won the election, but managed to lose the popular vote by the largest margin for a winner since the 19th century (or ever, if you\'re going by raw votes).
<br></br>
How did this happen? Well, it seems that the issues you faced in this election, from the Trump splinter campaign to the Lehman Brothers scandal to your trouble with trade were enough to damage your standing with the American people and prevent you from achieving a plurality of vote. But given that you were still popular enough to win, it\’s clear who is really responsible for this. Donald Trump. His third party campaign almost cost you the election, and it cost you the popular vote. But in the end, his divisive rhetoric failed, and light and hope won the day.
<br></br>
Thankfully, you still have a majority in both chambers of Congress, so you should have no trouble getting your optimistic and bipartisan agenda through. You’ll be able to do what you like with trade, with foreign policy, and with the economy. Maybe you\’ll be able to balance the budget, or at least cut down the deficit? Well, whatever happens, this victory will remain with you forever. You went from the expectation of destruction to this historic win.`;
    }
    else if(quickstats[0] < 269 && aa[0].popular_votes < aa[1].popular_votes && quickstats[0] > 230) { // hopefully works finally
        setImage("https://files.catbox.moe/86ukwa.png");
		return `<h3>SANDERS WINS, LOSES POPULAR VOTE</h3>

Well, this is certainly unexpected. You’ve lost the election, but managed to win the popular vote.
<br></br>
How did this happen? Well, nobody is quite sure. it seems that the issues you faced in this election, from the Trump splinter campaign to the Lehman Brothers scandal to your trouble with trade were enough to damage your standing with the American people and prevent you from achieving a victory in the electoral college. But given that you were still popular enough to win a plurality of the population, it\’s not quite clear what really happened. But in the end, most people wanted you. You should have won. And you know why you didn\’t? Donald Trump. His third party campaign cost you the election, if not the popular vote. In the end, his divisive rhetoric won, and light and hope failed to carry the day.
<br></br>
Thankfully, Republicans still have a majority in both chambers of Congress, so Sanders should have trouble getting his radical agenda through. He\’ll have to conform to the wishes of a Congress led by patriotic conservatives. Well, whatever happens, you have at least embarrassed Sanders, and done significantly better than anyone expected. Thank you for your service to the Party and the nation, Governor.`;
    }
	else if(quickstats[0] < 170) {
        setImage("https://files.catbox.moe/a3xtpp.png");
		return `<h3>AMERICA BERNS DOWN</h3>

What happened? Your loss was expected, but this?
<br></br>
The Democrats have taken control of not only the Presidency, but also both chambers of Congress. With such a dramatic reversal, Republican fury has been directed to two men. Donald Trump... and you. Sanders won\’t have much opposition for most of his agenda, though hopefully there will be some little watering-down to get it by the liberals. Sanders and his Democratic Socialism will be in a position to do a lot of damage. If we end up like Venezuela, it'll be because of your actions.
<br></br>
This is a historic win for the Progressive Democrats, who are finally able to get their champion into the White House. And the ridiculous, shocking size of this victory certainly doesn't hurt either - Sanders\' brand of Progressive politics is increasingly becoming normalized, as other Democratic Socialists sweep into office on his down ballot coattails. Hopefully your successor can end his Presidency in 2020, and block him from a second term - but the magnitude of your loss makes that less likely. For now, it looks like retirement is in your future.`;
    }
	else if(quickstats[0] < 230) {
        setImage("https://files.catbox.moe/a3xtpp.png");
        return `<h3>FEELING THE BERN</h3>

The polls were right.
<br></br>
The Democrats have taken control of not only the Presidency, but the Senate as well. Republicans are furious at Trump for the price that he has exacted for your primary victory. Sanders won\’t have much opposition to most of his agenda, though hopefully there will be some little watering-down to get it by the liberals. Sanders and his Democratic Socialism will be in a position to do a lot of damage. If we end up like Venezuela, it'll be because of your actions.
<br></br>
This is a historic win for the Progressive Democrats, who are finally able to get their champion into the White House. And the enormous size of this victory certainly doesn't hurt either - Sanders\' brand of Progressive politics is increasingly becoming normalized, as other Democratic Socialists sweep into office on his down ballot coattails. Hopefully your successor can end his Presidency in 2020, and block him from a second term - but the magnitude of your loss makes that less likely. For now, it looks like retirement is in your future.`;
    }
	else if(quickstats[0] < 245) {
        setImage("https://files.catbox.moe/wq89w5.png");
        return `<h3>SANDERS WINS</h3>

Well, at least you got things close.
<br></br>
The Democrats have taken control of the Presidency. Given these close margins, it\’s clear that there was one man that caused you to lose this: Donald Trump. Thankfully, Sanders will have serious opposition to his agenda in Congress, given Republican majorities in both chambers. He will be greatly limited in the amount of damage he can do before your successor, free from a third party splinter campaign, will inevitably take back the White House. You may not have won, but our nation is safe.
<br></br>
This is a historic win for the Progressive Democrats, who are finally able to get their champion into the White House. And the size of this victory certainly doesn't hurt either - Sanders\' brand of Progressive politics is increasingly becoming normalized, as a handful of other Democratic Socialists sweep into office on his down ballot coattails. Retirement is most likely your future, but given that you performed better than expected, you may be able to run again in 2020..`;
    }
	else if(quickstats[0] < 269) {
        setImage("https://files.catbox.moe/hv32q9.png");
        return `<h3>SANDERS EKES OUT A WIN</h3>

So close - but you just couldn’t make it.
<br></br>
The Democrats have taken control of the Presidency. Given the razor-thin margins, it\’s clear that there was just one man that caused you to lose this: Donald Trump. Thankfully, Sanders will have serious opposition to his agenda in Congress, given Republican majorities in both chambers. He will be greatly limited in the amount of damage he can do before your successor, free from a third party splinter campaign, will inevitably take back the White House. You may not have won, but our nation is safe.
<br></br>
This is a historic win for the Progressive Democrats, who are finally able to get their champion into the White House. The size of this victory has turned many heads, however - given Trump\’s splinter campaign, he was expected to do much better. Sanders\' brand of Progressive politics are being normalized by his victory, as a small handful of other Democratic Socialists sweep into office on his down ballot coattails. Retirement is most likely your future, but given that you performed better than expected, you may be able to run again in 2020.`;
    }
	else if(quickstats[0] == 269) {
        setImage("https://i.imgur.com/UUUcJn7.png");
        return `<h3>DEADLOCK!</h3>

Congratulations, President-Elect.
<br></br>
You\’ve managed to deadlock the election. Given that Republicans control both chambers of Congress, you and your running mate are swiftly confirmed as the next President and Vice President of the United States. With a friendly Congress, you\’ll surely have an easy time passing your moderate, bipartisan agenda. You\’ll be able to do what you like with trade, and bring your famous fiscal responsibility to the White House. Maybe you\’ll even be able to create a balanced budget by the end of your first term? Even if not, you\’ll definitely get another. There would have to be a serious crises to disrupt your inevitable victory, a global pandemic or a similar catastrophe.
<br></br>
This is a historic loss for the Progressive Democrats, who have failed, despite all odds, to get their man into the White House. Given Trump\’s splinter campaign, Sanders was expected to beat you, and Democrats are shocked and demoralized. Sanders\' brand of Progressive politics have been discredited by his loss, even as a few of his fellow Democratic Socialists sweep into office on his down ballot coattails. Good luck..`;
    }
	else if(quickstats[0] >= 380) {
        setImage("https://files.catbox.moe/9g0qho.png");
        return `<h3>KASICH: THE NEW REAGAN</h3>

Congratulations, President-Elect.
<br></br>
You\’ve managed to win the election. And you didn\’t just win, you won a historic victory against that radical socialist. With strong majorities in both chambers of Congress, you\’ll surely have an easy time passing your moderate, bipartisan agenda. You\’ll be able to do what you like with trade, and bring your famous fiscal responsibility to the White House. Maybe you\’ll even be able to create a balanced budget by the end of your first term? Even if not, you\’ll definitely get another. It is hard to see you losing 2020 after managing to overcome such long odds and win by a margin like this.
<br></br>
This is a historic loss for the Progressive Democrats, who have failed, despite all odds, to get their man into the White House. Given Trump\’s splinter campaign, Sanders was expected to beat you, and Democrats are shocked and demoralized. Most Democrats feel that Hillary Clinton would have won this, and the nomination will likely be hers in 2020 if she desires it. Sanders\' brand of Progressive politics have been discredited by his loss, even as a few of his fellow Democratic Socialists sweep into office on his down ballot coattails.`;
    }
	else if(quickstats[0] > 340) {
        setImage("https://files.catbox.moe/9g0qho.png");
        return `<h3>KASICH SWEEPS</h3>

Congratulations, President-Elect.
<br></br>
You\’ve managed to win the election. And you didn\’t just win, you won a massive victory against that radical socialist. With strong majorities in both chambers of Congress, you\’ll surely have an easy time passing your moderate, bipartisan agenda. You\’ll be able to do what you like with trade, and bring your famous fiscal responsibility to the White House. Maybe you\’ll even be able to create a balanced budget by the end of your first term? Even if not, you\’ll definitely get another. It is hard to see you losing 2020 after managing to overcome such long odds and win by a margin like this.
<br></br>
This is a historic loss for the Progressive Democrats, who have failed, despite all odds, to get their man into the White House. Given Trump\’s splinter campaign, Sanders was expected to beat you, and Democrats are shocked and demoralized. Most Democrats feel that Hillary Clinton would have won this, and the nomination will likely be hers in 2020 if she desires it. Sanders\' brand of Progressive politics have been discredited by his loss, even as a few of his fellow Democratic Socialists sweep into office on his down ballot coattails.`;
    }
	else if(quickstats[0] > 300) {
        setImage("https://files.catbox.moe/j7asog.png");
        return `<h3>KASICH VICTORIOUS</h3>

Congratulations, President-Elect.
<br></br>
You\’ve managed to win the election. And you didn\’t just win, you won a powerful victory against that radical socialist. With strong majorities in both chambers of Congress, you\’ll surely have an easy time passing your moderate, bipartisan agenda. You\’ll be able to do what you like with trade, and bring your famous fiscal responsibility to the White House. Maybe you\’ll even be able to create a balanced budget by the end of your first term? Even if not, you\’ll definitely get another. It is hard to see you losing 2020 after managing to overcome such long odds and win by a margin like this.
<br></br>
This is a historic loss for the Progressive Democrats, who have failed, despite all odds, to get their man into the White House. Given Trump\’s splinter campaign, Sanders was expected to beat you, and Democrats are shocked and demoralized. Most Democrats feel that Hillary Clinton would have won this, and the nomination will likely be hers in 2020 if she desires it. Sanders\' brand of Progressive politics have been discredited by his loss, even as a few of his fellow Democratic Socialists sweep into office on his down ballot coattails.`;
    }
	else if(quickstats[0] > 280) {
        setImage("https://files.catbox.moe/xwq1wc.png");
        return `<h3>KASICH WINS</h3>

Congratulations, President-Elect.
<br></br>
You\’ve managed to win the election. And you didn\’t just win, you won by a decent margin, likely by more than one swing state, against that radical socialist. With majorities in both chambers of Congress, you\’ll surely have an easy time passing your moderate, bipartisan agenda. You\’ll be able to do what you like with trade, and bring your famous fiscal responsibility to the White House. Maybe you\’ll even be able to create a balanced budget by the end of your first term? Even if not, you\’ll definitely get another. It is hard to see you losing 2020 after managing to overcome such long odds and win by a margin like this.
<br></br>
This is a historic loss for the Progressive Democrats, who have failed, despite all odds, to get their man into the White House. Given Trump\’s splinter campaign, Sanders was expected to beat you, and Democrats are shocked and demoralized. Most Democrats feel that Hillary Clinton would have won this, and the nomination will likely be hers in 2020 if she desires it. Sanders\' brand of Progressive politics have been discredited by his loss, even as a few of his fellow Democratic Socialists sweep into office on his down ballot coattails.`;
    }
    else if(quickstats[0] > 269) {
        setImage("https://files.catbox.moe/kvdpli.png");
        return `<h3>KASICH EKES OUT A WIN</h3>

Congratulations, President-Elect.
<br></br>
You\’ve barely managed to win the election. With majorities in both chambers of Congress, you\’ll surely have an easy time passing your moderate, bipartisan agenda. You\’ll be able to do what you like with trade, and bring your famous fiscal responsibility to the White House. Maybe you\’ll even be able to create a balanced budget by the end of your first term? Even if not, you\’ll definitely get another. It is hard to see you losing 2020 after managing to overcome such long odds and win by a margin like this.
<br></br>
This is a historic loss for the Progressive Democrats, who have failed, despite all odds, to get their man into the White House. Given Trump\’s splinter campaign, Sanders was expected to beat you, and Democrats are shocked and demoralized. Most Democrats feel that Hillary Clinton would have won this, and the nomination will likely be hers in 2020 if she desires it. Sanders\' brand of Progressive politics have been discredited by his loss, even as a few of his fellow Democratic Socialists sweep into office on his down ballot coattails.`;
    }
}

campaignTrail_temp.jet_data = [{
    "endings_enabled": false,
    "ending_data": {},
    "mapping_enabled": false,
    "mapping_data": {},
    "banner_enabled": false,
    "banner_data": {},
    "cyoa_enabled": false,
    "cyoa_data": {},
    "nicknames": {
        "200": "Kasich",
        "201": "Bernie",
        "202": "Trump",
        "203": "Other"
    }
}]

// stole all this from 56red

vpTable = {
    "John Kasich" : vpname,
    "Bernie Sanders" : "Amy Klobuchar",
    "Donald Trump" : "Virgil Goode",
    "Other Parties" : "Various",
}

vpTableHistorical = {
    "John Kasich" : "Ted Cruz",
    "Bernie Sanders" : "Amy Klobuchar",
    "Donald Trump" : "Virgil Goode",
    "Other Parties" : "Various",
  } 

HistHexcolour=["#ab2d24","#5c9ee0","#eca713","#d616e3"];
HistName=[" John Kasich"," Bernie Sanders"," Donald Trump"," Other Parties"];
HistEV=[283,255,0,0];
HistPV=["63,139,881","61,900,456","10,138,339","2,405,192"];
HistPVP=["45.7%","45.1%","7.4%","1.7%"];

function onGameWindowChangeCandidates() {
        const resultsTableHolder = document.getElementById("overall_details_container");

        if(!resultsTableHolder || resultsTableHolder.classList.contains("done")) {
            return;
        }

        resultsTableHolder.classList.add("done");

        const resultsTable = resultsTableHolder.childNodes[3].childNodes[3].children[0];
        
        for(let i = 0; i < resultsTable.children.length; i++) {
            const row = resultsTable.children[i];
            let name = row.firstChild.innerText;
            row.insertCell(1);
            if(name) {
                name = name.replaceAll("-", "").trim();
                console.log("name is:" + name)
            }

            if(i == 0) {
                row.children[1].innerHTML = `<span style="font-weight:bold">Running Mate<span>`;
            }
            else {
                row.children[1].innerHTML = vpTable[name];
            }
        }

        
        const resultsTableHistorical = resultsTableHolder.childNodes[5].childNodes[3].children[0];
        
        for(let i = 0; i < resultsTableHistorical.children.length; i++) {
            const row = resultsTableHistorical.children[i];
            let name = row.childNodes[1].innerText;
            row.insertCell(1);
            if(name) {
                name = name.replaceAll("-", "").trim();
            }

            if(i == 0) {
                row.children[1].innerHTML = `<span style="font-weight:bold">Running Mate<span>`;
            }
            else {
                row.children[1].innerHTML = vpTableHistorical[name];
            }
        }
}

const gameWindowNode = document.getElementById("game_window");
const candidateWatcherConfig = { attributes: true, childList: true, subtree: true };

const candidateObserver = new MutationObserver(onGameWindowChangeCandidates);
candidateObserver.observe(gameWindowNode, candidateWatcherConfig);