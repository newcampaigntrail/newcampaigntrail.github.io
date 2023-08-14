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

duplicate_globals = JSON.parse(JSON.stringify(campaignTrail_temp.global_parameter_json[0]));

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

$("#optimalRNG").change((a) => {
    a.preventDefault();

    let checkbox = a.target;
    let checked = checkbox.checked;

    if (checked) {
        $("#disableRNG")[0].checked = true;
        $("#disableRNG")[0].disabled = true;
        $("#disableRNG").trigger('change');

        F = () => 2.605314956446283; // return 99.5th percentile of results.

    } else {
        $("#disableRNG")[0].disabled = false;
        F = () => {
            var e, t, i;
            do {
                i = (e = 2 * Math.random() - 1) * e + (t = 2 * Math.random() - 1) * t
            } while (i >= 1 || 0 == i);
            return e * Math.sqrt(-2 * Math.log(i) / i)
        }
    }
})

$("#skiptoquestion").keydown((e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        $("#bigshotSkipBtn").click();
    }
});