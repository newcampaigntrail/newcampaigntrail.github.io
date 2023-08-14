

function findCandidate(pk) {
    let n = e.candidate_json.find(f=>f.pk === pk);
    let i = e.candidate_json.indexOf(n);
    return [i, `${n.fields.first_name} ${n.fields.last_name}`];
}

function findAnswer(pk) {
    let n = e.answers_json.find(f=>f.pk === pk);
    let i = e.answers_json.indexOf(n);
    return [i, n.fields.description];
}

function findIssue(pk) {
    let n = e.issues_json.find(f=>f.pk === pk);
    let i = e.issues_json.indexOf(n);
    return [i, n.fields.name];
}

function findState(pk) {
    let n = e.states_json.find(f=>f.pk === pk);
    let i = e.states_json.indexOf(n);
    return [i, n.fields.name];
}

function benefitCheck(objectid) {
    let question = e.questions_json[e.question_number]
    let answers = e.answers_json.filter(f=>f.fields.question === question.pk).map(f=>f.pk);

    if (document.getElementById("question_form")) {
        answers = Array.from(document.getElementsByClassName("game_answers")).map(f=>Number(f.value));
    }

    answerid = answers[objectid];
    
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

    mods = ""
    for (_ = 0; _ < effects.length; _++) {
        if (effects[_][0] == "global") {
            affected = findCandidate(effects[_][1].fields.candidate)
            affected1 = findCandidate(effects[_][1].fields.affected_candidate)
            name = affected[1]
            name2 = affected1[1]
            multiplier = effects[_][1].fields.global_multiplier.toString()
            mods += "<em>Global:</em> Affects " + name2 + " for " + name + " by " + multiplier + "<br>"
        }
        if (effects[_][0] == "issue") {
            affected = findIssue(effects[_][1].fields.issue)
            name = affected[1]
            multiplier = effects[_][1].fields.issue_score.toString()
            multiplier1 = effects[_][1].fields.issue_importance.toString()
            mods += "<em>Issue:</em> Affects " + name + " by " + multiplier + " with a importance of " + multiplier1 + "<br>"
        }
        if (effects[_][0] == "state") {
            affected = findState(effects[_][1].fields.state)
            candidatething = findCandidate(effects[_][1].fields.affected_candidate)
            candidatething2 = findCandidate(effects[_][1].fields.candidate)
            name1 = affected[1]
            test5 = candidatething[1]
            test6 = candidatething2[1]
            multiplier = effects[_][1].fields.state_multiplier.toString()
            mods += "<em>State:</em> Affects " + test5 + " for " + test6 + " in " + name1 + " by " + multiplier + "<br>"
        }
    }
    answerfeedback = "";
    for (let index = 0; index < campaignTrail_temp.answer_feedback_json.length - 1; index++) {
        if (answerid == campaignTrail_temp.answer_feedback_json[index].fields.answer) {
            answerfeedback = "<em>" + campaignTrail_temp.answer_feedback_json[index].fields.answer_feedback + "</em>"
            break;
        }
    }
    return `<h2>Answer</h2>"<em>${findAnswer(answerid)[1]}</em>"<br><h4>Feedback</h4>"${answerfeedback}"<br><h4>Effects</h4>${mods}`
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
    var sliderValue = Math.sqrt(multiplier) * 1000;
    document.getElementById("difficultySlider").value = sliderValue;
    campaignTrail_temp.difficulty_level_multiplier = multiplier;
}

function updateSliderValue(newVal) {
    var sliderValue = Math.sqrt(newVal) * 1000;
    document.getElementById("difficultySlider").value = sliderValue;
}

function benefitChecker() {
    let question = e.questions_json[e.question_number];
    let answers = e.answers_json.filter(f => f.fields.question === question.pk);

    questionlength = answers.length;

    let nnn = ""
    for (v = 0; v < questionlength; v++) {
        const n = benefitCheck(v)
        nnn += n
    }

    $("#dialogue")[0].innerHTML = nnn
    $("#dialogue").dialog({
        draggable: false,
        maxHeight: 600,
        maxWidth: 500,
        minWidth: 500,
    }).parent().draggable();
}

function getTooltipContent(objectid) {
    let answers = Array.from(document.getElementsByClassName("game_answers")).map(f=>Number(f.value));

    answerid = answers[objectid];
    
    effects = []
    for (let i in campaignTrail_temp.answer_score_global_json) {
        if (campaignTrail_temp.answer_score_global_json[i].fields.answer == answerid) {
            effects.push(["global", campaignTrail_temp.answer_score_global_json[i]])
        }
    }
    for (let i in campaignTrail_temp.answer_score_state_json) {
        if (campaignTrail_temp.answer_score_state_json[i].fields.answer == answerid) {
            effects.push(["state", campaignTrail_temp.answer_score_state_json[i]])
        }
    }
    for (let i in campaignTrail_temp.answer_score_issue_json) {
        if (campaignTrail_temp.answer_score_issue_json[i].fields.answer == answerid) {
            effects.push(["issue", campaignTrail_temp.answer_score_issue_json[i]])
        }
    }

    mods = ""
    for (_ = 0; _ < effects.length; _++) {
        if (effects[_][0] == "global") {
            affected = findCandidate(effects[_][1].fields.candidate)
            affected1 = findCandidate(effects[_][1].fields.affected_candidate)
            name = affected[1]
            name2 = affected1[1]
            multiplier = effects[_][1].fields.global_multiplier.toString()
            mods += "<em>Global:</em> Affects " + name2 + " for " + name + " by " + multiplier + "<br>"
        }
        if (effects[_][0] == "issue") {
            affected = findIssue(effects[_][1].fields.issue)
            name = affected[1]
            multiplier = effects[_][1].fields.issue_score.toString()
            multiplier1 = effects[_][1].fields.issue_importance.toString()
            mods += "<em>Issue:</em> Affects " + name + " by " + multiplier + " with a importance of " + multiplier1 + "<br>"
        }
        if (effects[_][0] == "state") {
            affected = findState(effects[_][1].fields.state)
            candidatething = findCandidate(effects[_][1].fields.affected_candidate)
            candidatething2 = findCandidate(effects[_][1].fields.candidate)
            name1 = affected[1]
            test5 = candidatething[1]
            test6 = candidatething2[1]
            multiplier = effects[_][1].fields.state_multiplier.toString()
            mods += "<em>State:</em> Affects " + test5 + " for " + test6 + " in " + name1 + " by " + multiplier + "<br>"
        }
    }

    return `<h4>Effects</h4>${mods}`
}

// tooltip adder

const tooltip_add = () => {
    if ($("#question_form").val() != "set") {
        $("#question_form").val("set")
        let answers = Array.from(document.getElementsByClassName("game_answers"));
        for (let i in answers) {
            const newHTM = `   <div class="tooltip"><b>[?]</b><span class="tooltiptext">${getTooltipContent(i)}</span></div> `;
            $("#question_form input")[i].outerHTML = newHTM + $("#question_form input")[i].outerHTML;
        }
    }
}

const tooltip_obs = new MutationObserver((mutationsList, observer) => {
    if (document.querySelector("#question_form") && nct_stuff.tooltips && e.bigshot_mode) {
        tooltip_add();
    }
});

tooltip_obs.observe(document.body, { childList: true, subtree: true });

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

    let pollmap = $("#view_electoral_map")[0];
    let resume = $("#resume_questions_button")[0];

    if (pollmap) {
        pollmap.click();
        window.setTimeout(() => { $("#resume_questions_button").click() }, 20);
        return;
        
    } else if (resume) {
        resume.click();
        return;
    }

});

$("#bigshot_ender").click((e) => {
    e.preventDefault();

    let question_count = campaignTrail_temp.global_parameter_json[0].fields.question_count;

    campaignTrail_temp.question_number = question_count - 1;

    let sfx = $('#sfxMeme')[0];
    sfx.volume = 0.1;
    sfx.play();

    let continue_button = $("#answer_select_button")[0];
    let resume = $("#resume_questions_button")[0];

    campaignTrail_temp.answer_feedback_flg = 0;

    if (continue_button) {
        $(".game_answers")[0].click();
        continue_button.click();
        return;
        
    } else if (resume) {
        resume.click();
        window.setTimeout(() => { 
            $(".game_answers")[0].click();
            $("#answer_select_button").click();
        }, 20);
        return;
    }
})

duplicate_globals = {};

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

// https://stackoverflow.com/questions/8816729/javascript-equivalent-for-inverse-normal-function-eg-excels-normsinv-or-nor
function NormSInv(p) {
    var a1 = -39.6968302866538, a2 = 220.946098424521, a3 = -275.928510446969;
    var a4 = 138.357751867269, a5 = -30.6647980661472, a6 = 2.50662827745924;
    var b1 = -54.4760987982241, b2 = 161.585836858041, b3 = -155.698979859887;
    var b4 = 66.8013118877197, b5 = -13.2806815528857, c1 = -7.78489400243029E-03;
    var c2 = -0.322396458041136, c3 = -2.40075827716184, c4 = -2.54973253934373;
    var c5 = 4.37466414146497, c6 = 2.93816398269878, d1 = 7.78469570904146E-03;
    var d2 = 0.32246712907004, d3 = 2.445134137143, d4 = 3.75440866190742;
    var p_low = 0.02425, p_high = 1 - p_low;
    var q, r;
    var retVal;

    if ((p < 0) || (p > 1))
    {
        alert("NormSInv: Argument out of range.");
        retVal = 0;
    }
    else if (p < p_low)
    {
        q = Math.sqrt(-2 * Math.log(p));
        retVal = (((((c1 * q + c2) * q + c3) * q + c4) * q + c5) * q + c6) / ((((d1 * q + d2) * q + d3) * q + d4) * q + 1);
    }
    else if (p <= p_high)
    {
        q = p - 0.5;
        r = q * q;
        retVal = (((((a1 * r + a2) * r + a3) * r + a4) * r + a5) * r + a6) * q / (((((b1 * r + b2) * r + b3) * r + b4) * r + b5) * r + 1);
    }
    else
    {
        q = Math.sqrt(-2 * Math.log(1 - p));
        retVal = -(((((c1 * q + c2) * q + c3) * q + c4) * q + c5) * q + c6) / ((((d1 * q + d2) * q + d3) * q + d4) * q + 1);
    }

    return retVal;
}

$("#optimalRNG").change((a) => {
    a.preventDefault();

    let checkbox = a.target;
    let checked = checkbox.checked;

    if (checked) {
        if ($("#disableRNG")[0].checked) {
            duplicate_globals = JSON.parse(JSON.stringify(campaignTrail_temp.global_parameter_json[0]));
        }
        $("#disableRNG")[0].checked = true;
        $("#disableRNG")[0].disabled = true;
        $("#disableRNG").trigger('change');
        $("#percentileSlider")[0].disabled = false;

        F = (cand) => {
            if (cand === campaignTrail_temp.candidate_id) { 
                let mult = NormSInv(Number($("#percentileValue").text())/100);
                return mult;
            } else {
                let mult = NormSInv(Number($("#percentileValue").text())/100) * -1;
                return mult;
            }
        } // return the specified percentile of results.

    } else {
        $("#disableRNG")[0].disabled = false;
        $("#percentileSlider")[0].disabled = false;

        F = () => {
            var e, t, i;
            do {
                i = (e = 2 * Math.random() - 1) * e + (t = 2 * Math.random() - 1) * t;
            } while (i >= 1 || 0 == i);
            return e * Math.sqrt(-2 * Math.log(i) / i);
        };
    }
});

nct_stuff.tooltips = true;
$("#effectTooltips").change((a) => {
    a.preventDefault();

    let checkbox = a.target;
    let checked = checkbox.checked;

    if (checked) {
        nct_stuff.tooltips = true;
        tooltip_add();
    } else {
        nct_stuff.tooltips = false;
    }
});

$("#percentileSlider").on("input", (e) => {
    let slider = e.target;
    let value = slider.value;
    $("#percentileValue").text(value);
});

$("#skiptoquestion").keydown((e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        $("#bigshotSkipBtn").click();
    }
});