## What is this?
This is an archive of the source code of the site for the American election simulator known as The Campaign Trail. In it, players simulate various contested elections throughout American history, making choices and answering questions in order to improve their chances at winning. The original site is rarely updated, so this backup has been made with features added for easier modding. 

## How do I load a mod?
Select the "Mod Loader" button on the bottom-right of the main page and either choose from one of many presets, or in the case of a custom mod, paste both blocks of code associated with it. Press submit, start the game, and make sure to select the year you loaded from the list of scenarios.

## How do I make a mod?
Plan out all the information (questions, candidates, etc.) in detail and then follow [this guide](https://imgur.com/a/Tj9I2Br) to input what you have into the game's code. Do those steps for the main page (Code 1) and the first question page (Code 2).

## What do the numbers inside the game's code mean?
- pk: Identifier for the game to reference an object

## How do I credit myself in the mod window?
Paste the following into your Code 1 block: `campaignTrail_temp.credits = '';` with your username being placed inside of the quotation marks. 

## How do issue_scores work?
Issues are handled by various jsons in the Code 2 block. In temp_issues_json issues are split up by stances which range from 1-7 (most opposed to least opposed). When representing these in decimal scores, they range from -1.0 to 1.0. The closer to -1.0 you are, the closer you are to stance 1. 
- Each state's score can be defined in state_issue_score_json
- Each answer's score can be defined in answer_issue_score_json
- Each candidate's score can be defined in candidate_issue_score_json
- Each running mate's score can be defined in running_mate_issue_score_json
