$(document).ready(function(){
    var csrftoken = csrfToken();
    var cached_results = {}
    var campaignTrail = campaignTrail_temp;
    cached_results['overall'] = campaignTrail.data_overall;

    var temp_get_state_result_data = function(state_abbr) {
        $.ajax({
            type: "POST",
            url: "/campaign-trail/results-summary-election-state/",
            beforeSend: function(xhr) {
                xhr.setRequestHeader ("X-CSRFToken", csrftoken);
            },
            data: {
                election_id: campaignTrail.election_id,
                candidate_ids: JSON.stringify(campaignTrail.candidate_ids),
                difficulty_level_id: campaignTrail.difficulty_level_id,
                state_abbr: state_abbr
            },
            dataType: "json",
            success: function(data) {
                cached_results[state_abbr] = data;
                response_html = temp_get_state_result_html(data);
                $("#summary_election_results_table").html(response_html);
            }
        });    
    }
    
    var temp_get_state_result_html = function(data) {
        var response_html = "<table><tr><th>Candidate</th><th>PV Avg.</th><th>PV % Avg.</th><th>EV Avg.</th><th>Win %</th><th>PV Range</th></tr>";
        for (var i=0; i<data.length; i++) {
            response_html += (
                '<tr><td style="text-align: left;"><span style="background-color: ' 
                + data[i]['color_hex']
                + '; color: '
                + data[i]['color_hex']
                + ';">----</span> '
                + data[i]['name']
                + '</td><td>'
                + numberWithCommas(data[i]['popular_votes_avg'].toFixed(0))
                + '</td><td>'
                + (data[i]['popular_vote_pct_avg']).toFixed(1)
                + '</td><td>'
                + data[i]['electoral_votes_avg'].toFixed(1)
                + '</td><td>'
                + (data[i]['winning_pct']).toFixed(1)
                + '</td><td>'
                + numberWithCommas(data[i]['popular_votes_min'])
                + ' - ' 
                + numberWithCommas(data[i]['popular_votes_max'])
                + '</td></tr>'
                );
        }
        response_html += '</table>';
        return response_html;
    };
    
    var temp_get_overall_result_data = function() {
        var data = campaignTrail.data_overall;
        var response_html = "<table><tr><th>Candidate</th><th>Win %</th><th>EV Avg.</th><th>PV Avg.</th><th>PV % Avg.</th><th>EV Range</th><th>PV Range</th></tr>";
        for (var i=0; i<data.length; i++) {
            response_html += (
                '<tr><td style="text-align: left;"><span style="background-color: ' 
                + data[i]['color_hex']
                + '; color: '
                + data[i]['color_hex']
                + ';">----</span> '
                + data[i]['name']
                + '</td><td>'
                + data[i]['winning_pct'].toFixed(1)
                + '</td><td>'
                + data[i]['electoral_votes_avg'].toFixed(1)
                + '</td><td>'
                + numberWithCommas(data[i]['popular_votes_avg'])
                + '</td><td>'
                + data[i]['popular_vote_pct_avg'].toFixed(2)
                + '</td><td>'
                + numberWithCommas(data[i]['electoral_votes_min']) 
                + ' - ' 
                + numberWithCommas(data[i]['electoral_votes_max'])
                + '</td><td>'
                + numberWithCommas(data[i]['popular_votes_min']) 
                + ' - ' 
                + numberWithCommas(data[i]['popular_votes_max'])
                + '</td></tr>'
                );
        }
        response_html += '</table>';
        $("#summary_election_results_table").html(response_html);
    }
    
    // Shade US map with winner of each state
    var temp_click_function = function(event, data) {
        var state_abbr = data.name;
        $("#summary_election_results_select").val(state_abbr);
        temp_get_state_result_data(state_abbr);
    };
    
    var map_options = {
        stateStyles: {fill: '#EAFDFF'}
        ,stateHoverStyles: {fill: '#EAFDFF'}
        ,stateSpecificStyles: campaignTrail.state_specific_styles                
        ,stateSpecificHoverStyles: campaignTrail.state_specific_styles
        // If user clicks, display information about the state in question
        ,click: temp_click_function
    };
    $("#summary_election_map_container").usmap(map_options);

    // Update results table if player changes it around
    $("#summary_election_results_select").change(function() {
        var state_abbr = $("#summary_election_results_select").val();
        
        // If state is a specific state, go to DB and load that data. Also cache it
        if (Object.keys(cached_results).indexOf(state_abbr) == -1) {
            temp_get_state_result_data(state_abbr);
        }
        else {
            if (state_abbr == 'overall') {
                temp_get_overall_result_data();
            }
            else {
                // If here, state should be a cached result so just pull from cached_results var
                var data = cached_results[state_abbr];
                var response_html = temp_get_state_result_html(data);
                $("#summary_election_results_table").html(response_html);
            }
        }
    });
});


// POST requests will be thrown back in your face if you don't do this stuff
    // https://docs.djangoproject.com/en/dev/ref/contrib/csrf/#how-to-use-it
    // because of cross-site request forgery concerns
function csrfToken() {
    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    var csrftoken = getCookie('csrftoken');
    return csrftoken;
}


// http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}
