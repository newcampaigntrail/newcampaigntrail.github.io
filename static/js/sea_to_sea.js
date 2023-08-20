e=campaignTrail_temp

e.shining_info = [
    {
        pk: 21,
        candidate: 300,
        fundraising_effect: 1,
        ad_effect: 1,
        opponent_visit_effect: 1,
        staff: [
            {
                pk: 6000,
                name: "Bob Baur",
                image: "/static/sea_to_sea/2020/biden/baur.png",
                description: "<p><em>Debate Coach</em>: Will highlight the best debate answer.</p><p>An attorney for the campaign and a White House Counsel for the Obama Administration who's willing to prep you for the debates against Donald Trump, which could be chaotic if you are unable to command the stage.</p>",
                cost: 20000000,
                hired: false,
                execute: () => {
                    // this will only work to highlight base 2020 biden's best debate answer. if you want to use this code for another scenario, you'll need to change the answer pk.
                    e.answers_json.find(f=>f.pk===6078).fields.description = `<span style='color:green'>${e.answers_json.find(f=>f.pk===6078).fields.description}</span>`
                }
            },
            {
                pk: 6001,
                name: "Ron Klain",
                image: "/static/sea_to_sea/2020/biden/klain.png",
                description: "<p><em>Kingmaker</em>: Upon being hired your relationship with all lobbies with which you already have a positive relationship will be increased by 10.</p><p>A longtime advisor of yours, Ron Klain is eager to get into the White House, and will use his connections in Washington to get you there.</p>",
                cost: 10000000,
                hired: false,
                execute: () => {
                    let our_info = campaignTrail_temp.shining_info.find(f=>f.pk === e.election_id&&f.candidate===e.candidate_id);
                    our_info.lobby.forEach(f=>{
                        if (f.opinion > 50) {
                            f.opinion += 10;
                            f.opinion = Math.min(100, f.opinion);    
                        }
                    });
                }
            },
            {
                pk: 6002,
                name: "Jeffrey Katzenberg",
                image: "/static/sea_to_sea/2020/biden/katzenberg.png",
                description: "<p><em>Fundraiser</em>: Permanently increases the effectiveness of fundraising.</p><p>The former CEO of Dreamworks, Katzenberg has spent his whole life bringing dreams to life. You've always dreamed of the White House, haven't you?  With a little cash, he can help that dream come true.</p>",
                cost: 15000000,
                hired: false,
                execute: () => {
                    let our_info = campaignTrail_temp.shining_info.find(f=>f.pk === e.election_id&&f.candidate===e.candidate_id);
                    our_info.fundraising_effect *= 1.2;
                }
            },
            {
                pk: 6003,
                name: "Pete Buttigieg",
                image: "/static/sea_to_sea/2020/biden/buttigieg.png",
                description: "<p><em>Smooth Talker</em>: Permanently improves your RNG.</p><p>One of your chief rivals for the nomination, Pete Buttigieg dropped out before Super Tuesday to endorse your candidacy.  In return, he wants a job in the White House. Until then, he's willing to stump for you.</p>",
                cost: 20000000,
                hired: false,
                execute: () => {
                    F = (cand) => {
                        var e, t, i;
                        do {
                            i = (e = 2 * Math.random() - 1) * e + (t = 2 * Math.random() - 1) * t
                        } while (i >= 1 || 0 == i);
                        if (cand === campaignTrail_temp.candidate_id)
                            return (e * Math.sqrt(-2 * Math.log(i) / i) + 0.5);
                        else
                            return (e * Math.sqrt(-2 * Math.log(i) / i) - 0.25);
                    }
                }
            },
            {
                pk: 6004,
                name: "Kate Bedingfield",
                image: "/static/sea_to_sea/2020/biden/bedingfield.png",
                description: "<p><em>Media Manager</em>: Increases the effectiveness of ad campaigns.</p><p>The former spokeswoman and vice president of corporate communications at the Motion Picture Association of America, Kate Bedingfield knows the media biz better than anyone on your campaign, and could aid in your media strategy, especially in the midst of this national lockdown.</p>",
                cost: 15000000,
                hired: false,
                execute: () => {
                    let our_info = campaignTrail_temp.shining_info.find(f=>f.pk === e.election_id&&f.candidate===e.candidate_id);
                    our_info.ad_effect *= 1.2;
                }
            },
            {
                pk: 6005,
                name: "Charles Dolan Jr.",
                image: "/static/sea_to_sea/2020/biden/dolan.png",
                description: "<p><em>Spin Doctor</em>: Opponent's visit effectiveness is cut in half.</p><p>A longtime ally of the Clintons, Dolan is a master of spin, and is interested in helping you take down Trump.</p>",
                cost: 25000000,
                hired: false,
                execute: () => {
                    let our_info = campaignTrail_temp.shining_info.find(f=>f.pk === e.election_id&&f.candidate===e.candidate_id);
                    our_info.opponent_visit_effect *= 0.5;
                }
            },
            {
                pk: 6006,
                name: "Julián Castro",
                image: "/static/sea_to_sea/2020/biden/castro.png",
                description: "<p><em>Surrogate</em>: Provides a small boost in the state of Texas.</p><p>A popular congressman from San Antonio, Julián Castro would be willing to campaign throughout his home state of Texas in support of your candidacy.</p>",
                cost: 15000000,
                hired: false,
                execute: () => {
                    const states_list = ["Texas"]; 
                    for (let i in states_list) {
                        const state = e.states_json.find(f=>f.fields.name===states_list[i]);
                        const state_mult = e.candidate_state_multiplier_json.find(f=>f.fields.state === state.pk && f.fields.candidate === e.candidate_id);
                        state_mult.fields.state_multiplier *= 1.05
                    }
                }
            },
            {
                pk: 6007,
                name: "Gretchen Whitmer",
                image: "/static/sea_to_sea/2020/biden/whitmer.png",
                description: "<p><em>Surrogate</em>: Provides a small boost in the states of Michigan, Wisconsin, Ohio and Indiana.</p><p>The incumbent, popular governor of Michigan, Gretchen Whitmer is as much a darling of liberals as she is loathed by conservatives.  Still, she would be willing to campaign throughout Michigan and its neighboring states in support of your campaign.</p>",
                cost: 20000000,
                hired: false,
                execute: () => {
                    const states_list = ["Michigan", "Wisconsin", "Ohio", "Indiana"]; 
                    for (let i in states_list) {
                        const state = e.states_json.find(f=>f.fields.name===states_list[i]);
                        const state_mult = e.candidate_state_multiplier_json.find(f=>f.fields.state === state.pk && f.fields.candidate === e.candidate_id);
                        state_mult.fields.state_multiplier *= 1.02
                    }
                }
            }
        ],
        lobby: [
            {
                pk: 7000,
                name: "Our Revolution",
                image: "/static/sea_to_sea/2020/biden/_our_revolution.png",
                description: "A group created by allies of Bernie Sanders' 2016 primary campaign that seeks to promote progressive candidates and policies.",
                issue_tie: 110,
                issue_link: score => score,
                fund_base: 600000,
                opinion: 40
            },
            {
                pk: 7001,
                name: "AFL–CIO",
                image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/AFL-CIO-seal.svg/225px-AFL-CIO-seal.svg.png",
                description: "The American Federation of Labour and Congress of Industrial Organizations is the largest federation of trade unions in the United States.",
                issue_tie: 111,
                issue_link: score => score,
                fund_base: 700000,
                opinion: 50
            },
            {
                pk: 7002,
                name: "Emily's List",
                image: "/static/sea_to_sea/2020/biden/_emily.png",
                description: "Bolstered by Democratic fundraiser and philanthropist Karla M. Jurveston, Emily's List seeks to promote women's reproductive healthcare in the United States.",
                issue_tie: 112,
                issue_link: score => score,
                fund_base: 700000,
                opinion: 60
            },
            {
                pk: 7003,
                name: "American-Arab Anti-Discrimination League",
                image: "/static/sea_to_sea/2020/biden/_adc.png",
                description: "An advocacy group for Arab-American interests, the ADC has recently taken an interest in opposing support for the state of Israel.",
                issue_tie: 113,
                issue_link: score => score,
                fund_base: 400000,
                opinion: 40
            },
            {
                pk: 7004,
                name: "Black Lives Matter",
                image: "/static/sea_to_sea/2020/biden/_blm.png",
                description: "Since its formation in 2013, Black Lives Matter has made its lot in Washington supporting social justice for African-Americans.",
                issue_tie: 114,
                issue_link: score => score,
                fund_base: 800000,
                opinion: 45
            },
        ]
    },
    {
        pk: 21,
        candidate: 301,
        fundraising_effect: 1,
        ad_effect: 1,
        opponent_visit_effect: 1,
        staff: [
            {
                pk: 6000,
                name: "Lara Trump",
                image: "/static/sea_to_sea/2020/trump/trump.png", // (lol)
                description: "<p><em>Media Manager</em>: Increases the effectiveness of ad campaigns.</p><p>The wife of your second son, Eric, Lara Trump was a former TV producer for Inside Edition, and could bolster the campaign's efforts blanketing the airwaves.</p>",
                cost: 15000000,
                hired: false,
                execute: () => {
                    let our_info = campaignTrail_temp.shining_info.find(f=>f.pk === e.election_id&&f.candidate===e.candidate_id);
                    our_info.ad_effect *= 1.2;
                }
            },
            {
                pk: 6001,
                name: "Cliff Sims",
                image: "/static/sea_to_sea/2020/trump/sims.png",
                description: "<p><em>Speechwriter</em>: Provides a small, permanent boost to all positive statewide effects.</p><p>Despite you and him having a rocky relationship, Sims is nonetheless a talented a talented speechwriter, and could strengthen your campaigning—as long as you stay on prompter.</p>",
                cost: 20000000,
                hired: false,
                execute: () => {
                    e.answer_score_state_json.forEach(f=>{if(f.fields.state_multiplier > 0)f.fields.state_multiplier*=1.1});
                }
            },
            {
                pk: 6002,
                name: "Chris Christie",
                image: "/static/sea_to_sea/2020/trump/christie.png",
                description: "<p><em>Debate Coach</em>: Will highlight the best debate answer.</p><p>Chris Christie is the former governor of New Jersey, and made a splash in the 2016 Primaries working on behalf of your first campaign.  While relations with him have grown cold since then, he's still the best debater in the business, and willing to coach you in preparation for your debates against Joe Biden.</p>",
                cost: 20000000,
                hired: false,
                execute: () => {
                    e.answers_json.find(f=>f.pk===6189).fields.description = `<span style='color:green'>${e.answers_json.find(f=>f.pk===6189).fields.description}</span>`
                }
            },
            {
                pk: 6003,
                name: "Jared Kushner",
                image: "/static/sea_to_sea/2020/trump/kushner.png",
                description: "<p><em>Workhorse</em>: Upon being hired, the Workhorse will max out your relationship with the lobby mentioned in his description.</p><p>The husband of your first daughter, Ivanka, Jared Kushner is a Jewish businessman who has served faithfully in the administration as your czar on Israel policy, most notably being the architect of the Abraham Accords.  Bringing him into the campaign would bolster relationship with Jewish voters, and the powerful AIPAC.</p>",
                cost: 15000000,
                hired: false,
                execute: () => {
                    let our_info = campaignTrail_temp.shining_info.find(f=>f.pk === e.election_id&&f.candidate===e.candidate_id);
                    our_info.lobby.find(f=>f.name==="AIPAC").opinion = 100;
                }
            },
            {
                pk: 6004,
                name: "Kimberly Guilfoyle",
                image: "/static/sea_to_sea/2020/trump/guilfoyle.png",
                description: "<p><em>Firebrand</em>: Provides a permanent increase to the effectiveness of visits.</p><p>The newly wed wife of your first son, Don Jr., Kimberly Guilfoyle is a passionate supporter of the campaign, and is sure to rile up the MAGA base.</p>",
                cost: 23000000,
                hired: false,
                execute: () => {
                    e.shining_data.visit_multiplier += 0.2;
                }
            },
            {
                pk: 6005,
                name: "Kayleigh McEnany",
                image: "/static/sea_to_sea/2020/trump/mcenany.png",
                description: "<p><em>Smooth Talker</em>: Permanently improves your RNG.</p><p>Your latest Press Secretary, Kayleigh McEnany has served in the role for nearly the entirety of the COVID Pandemic, but has mostly made her fame in spats with the press during questioning.</p>",
                cost: 20000000,
                hired: false,
                execute: () => {
                    F = (cand) => {
                        var e, t, i;
                        do {
                            i = (e = 2 * Math.random() - 1) * e + (t = 2 * Math.random() - 1) * t
                        } while (i >= 1 || 0 == i);
                        if (cand === campaignTrail_temp.candidate_id)
                            return (e * Math.sqrt(-2 * Math.log(i) / i) + 0.5);
                        else
                            return (e * Math.sqrt(-2 * Math.log(i) / i) - 0.25);
                    }
                }
            },
            {
                pk: 6006,
                name: "Sheldon Adelson",
                image: "/static/sea_to_sea/2020/trump/adelson.png",
                description: "<p><em>Fundraiser</em>: Permanently increases the effectiveness of fundraising.</p><p>The chairman and CEO of Las Vegas Sands, Sheldon Adelson is a billionaire gambling tycoon.  Despite the economic hit on the gambling industry, Adelson is willing and ready to bankroll your campaign.</p>",
                cost: 15000000,
                hired: false,
                execute: () => {
                    let our_info = campaignTrail_temp.shining_info.find(f=>f.pk === e.election_id&&f.candidate===e.candidate_id);
                    our_info.fundraising_effect *= 1.2;
                }
            },
            {
                pk: 6007,
                name: "Betsy DeVos",
                image: "/static/sea_to_sea/2020/trump/devos.png",
                description: "<p><em>Surrogate</em>: Provides a small, automatic boost in the state of Michigan.</p><p>Betsy DeVos is a scion of the powerful DeVos family of Michigan politics, and has served since 2017 as your controversial Secretary of Education. In hiring her, you'll be hoping you can use her influence to bring Michigan into your column a second time.</p>",
                cost: 20000000,
                hired: false,
                execute: () => {
                    const states_list = ["Michigan"]; 
                    for (let i in states_list) {
                        const state = e.states_json.find(f=>f.fields.name===states_list[i]);
                        const state_mult = e.candidate_state_multiplier_json.find(f=>f.fields.state === state.pk && f.fields.candidate === e.candidate_id);
                        state_mult.fields.state_multiplier *= 1.05
                    }
                }
            }
        ],
        lobby: [
            {
                pk: 7000,
                name: "AIPAC",
                image: "/static/sea_to_sea/2020/trump/_aipac.png",
                description: "The most prominent organization for promoting the US-Israel alliance, AIPAC seeks to further the close relationship, and is the most important and well-funded group in doing so.",
                issue_tie: 113,
                issue_link: score => score * -1,
                fund_base: 800000,
                opinion: 55
            },
            {
                pk: 7001,
                name: "PhRMA",
                image: "/static/sea_to_sea/2020/trump/_phrma.png",
                description: "One of the most influential lobbies, 'big pharma' as it is derisevely known has been the most signficant roadblock against liberal attempts at reforming US healthcare policy.",
                issue_tie: 112,
                issue_link: score => score * -1,
                fund_base: 700000,
                opinion: 40
            },
            {
                pk: 7002,
                name: "National Rifle Association",
                image: "/static/sea_to_sea/2020/trump/_nra.png",
                description: `Touting itself as the "oldest civil rights advocacy group still in operation,' the NRA is the fearsome overlord of the mighty gun lobby, fiercely opposing any and all new regulations on US gun ownership.`,
                issue_tie: 110,
                issue_link: score => score * -1,
                fund_base: 700000,
                opinion: 60
            },
            {
                pk: 7003,
                name: "Chamber of Commerce",
                image: "/static/sea_to_sea/2020/trump/_commerce.png",
                description: `Representing a bevy of industry leaders across the United States, the Chamber of Commerce is the most influential defender of free market economics, and keen to support candidates who adhere to those values.`,
                issue_tie: 111,
                issue_link: score => score * -1,
                fund_base: 1000000,
                opinion: 40
            },
            {
                pk: 7004,
                name: "SBA List",
                image: "/static/sea_to_sea/2020/trump/_sba.png",
                description: `A group of pro-life women who seek to restrict abortion acces in the United States.`,
                issue_tie: 114,
                issue_link: score => score * -1,
                fund_base: 600000,
                opinion: 60
            }
        ]
    }
]

e.opponent_visits = []

/*
F = (cand) => {
    var e, t, i;
    do {
        i = (e = 2 * Math.random() - 1) * e + (t = 2 * Math.random() - 1) * t
    } while (i >= 1 || 0 == i);
    if (cand === campaignTrail_temp.candidate_id)
        return (e * Math.sqrt(-2 * Math.log(i) / i) + 0.5);
    else
        return (e * Math.sqrt(-2 * Math.log(i) / i) - 0.25);
}
*/