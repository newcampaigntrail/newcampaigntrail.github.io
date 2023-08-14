var hotkey_handler = (event) => {
    if (nct_stuff.bigshot_activation) {
        nct_stuff.bigshot_activation = false;
        return;
    }
    
    // opening menu selection
    if (document.querySelector("#game_start")) {
        if (event.key == "Enter" || event.key == "ArrowRight") {
            $("#game_start").click();
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