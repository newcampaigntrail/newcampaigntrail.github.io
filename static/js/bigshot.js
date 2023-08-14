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
            }
            var e, t, i;
            do {
                i = (e = 2 * Math.random() - 1) * e + (t = 2 * Math.random() - 1) * t;
            } while (i >= 1 || 0 == i);
            return e * Math.sqrt(-2 * Math.log(i) / i);
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