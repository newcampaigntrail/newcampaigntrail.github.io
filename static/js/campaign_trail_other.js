document.body.addEventListener("keydown", (event) => {
    // opening menu selection
    if (document.querySelector("#game_start")) {
        if (event.key == "Enter") {
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
    }
})