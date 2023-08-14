document.body.addEventListener("keydown", (event) => {
    // handle hotkeys to select answers
    
    if (!document.querySelector("#question_form")) return;

    if (event.key == "Enter") {
        if ($("#ok_button")[0]) {
            $("#ok_button").click();
            return;
        }
        $("#answer_select_button").click();
        return;
    }

    let answers = Array.from($(".game_answers"));
    let selection = Number(event.key) - 1;
    if (!answers[selection]) {
        return;
    }
    answers[selection].click();
})

