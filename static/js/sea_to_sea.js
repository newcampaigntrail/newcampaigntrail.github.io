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
                image: "/static/sea_to_sea/2020/biden/lobbies/our_revolution.png",
                description: "A group created by allies of Bernie Sanders' 2016 primary campaign that seeks to promote progressive candidates and policies.",
                issue_tie: 110,
                issue_link: score => score,
                fund_base: 600000,
                opinion: 40
            },
            {
                pk: 7001,
                name: "AFL–CIO",
                image: "/static/sea_to_sea/2016/clinton/lobbies/aflcio.png",
                description: "The American Federation of Labour and Congress of Industrial Organizations is the largest federation of trade unions in the United States.",
                issue_tie: 111,
                issue_link: score => score,
                fund_base: 700000,
                opinion: 50
            },
            {
                pk: 7002,
                name: "Emily's List",
                image: "/static/sea_to_sea/2020/biden/lobbies/emily.png",
                description: "Bolstered by Democratic fundraiser and philanthropist Karla M. Jurveston, Emily's List seeks to promote women's reproductive healthcare in the United States.",
                issue_tie: 112,
                issue_link: score => score,
                fund_base: 700000,
                opinion: 60
            },
            {
                pk: 7003,
                name: "American-Arab Anti-Discrimination League",
                image: "/static/sea_to_sea/2020/biden/lobbies/adc.png",
                description: "An advocacy group for Arab-American interests, the ADC has recently taken an interest in opposing support for the state of Israel.",
                issue_tie: 113,
                issue_link: score => score,
                fund_base: 400000,
                opinion: 40
            },
            {
                pk: 7004,
                name: "Black Lives Matter",
                image: "/static/sea_to_sea/2020/biden/lobbies/blm.png",
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
                image: "/static/sea_to_sea/2020/trump/lobbies/aipac.png",
                description: "The most prominent organization for promoting the US-Israel alliance, AIPAC seeks to further the close relationship, and is the most important and well-funded group in doing so.",
                issue_tie: 113,
                issue_link: score => score * -1,
                fund_base: 800000,
                opinion: 55
            },
            {
                pk: 7001,
                name: "PhRMA",
                image: "/static/sea_to_sea/2020/trump/lobbies/phrma.png",
                description: "One of the most influential lobbies, 'big pharma' as it is derisevely known has been the most signficant roadblock against liberal attempts at reforming US healthcare policy.",
                issue_tie: 112,
                issue_link: score => score * -1,
                fund_base: 700000,
                opinion: 40
            },
            {
                pk: 7002,
                name: "National Rifle Association",
                image: "/static/sea_to_sea/2020/trump/lobbies/nra.png",
                description: `Touting itself as the "oldest civil rights advocacy group still in operation,' the NRA is the fearsome overlord of the mighty gun lobby, fiercely opposing any and all new regulations on US gun ownership.`,
                issue_tie: 110,
                issue_link: score => score * -1,
                fund_base: 700000,
                opinion: 60
            },
            {
                pk: 7003,
                name: "Chamber of Commerce",
                image: "/static/sea_to_sea/2020/trump/lobbies/commerce.png",
                description: `Representing a bevy of industry leaders across the United States, the Chamber of Commerce is the most influential defender of free market economics, and keen to support candidates who adhere to those values.`,
                issue_tie: 111,
                issue_link: score => score * -1,
                fund_base: 1000000,
                opinion: 40
            },
            {
                pk: 7004,
                name: "SBA List",
                image: "/static/sea_to_sea/2020/trump/lobbies/sba.png",
                description: `A group of pro-life women who seek to restrict abortion acces in the United States.`,
                issue_tie: 114,
                issue_link: score => score * -1,
                fund_base: 600000,
                opinion: 60
            }
        ]
    },
    {
        pk: 20,
        candidate: 200,
        fundraising_effect: 1,
        ad_effect: 1,
        opponent_visit_effect: 1,
        staff: [
            {
                pk: 6000,
                name: "Kelyanne Conway",
                image: "/static/sea_to_sea/2016/trump/conway.png",
                description: "<p><em>Spin Doctor</em>: Opponent's visiting effectiveness is cut in half.</p><p>A good friend of yours and a backer of Ted Cruz in the primaries, Kellyanne Conway is an ambitious strategist willing to work on behalf of the campaign as its manager and in backing 'alternative facts.'</p>",
                cost: 25000000,
                hired: false,
                execute: () => {
                    let our_info = campaignTrail_temp.shining_info.find(f=>f.pk === e.election_id&&f.candidate===e.candidate_id);
                    our_info.opponent_visit_effect *= 0.5;
                }
            },
            {
                pk: 6001,
                name: "Steve Bannon",
                image: "/static/sea_to_sea/2016/trump/bannon.png",
                description: "<p><em>Firebrand</em>: Provides a permanent increase to the effectiveness of visits.</p><p>One of the founders of Breitbart News, Steve Bannon is a darling of the far-right, and has been a crucial ally of your's during the primary.  He's previously been accused of spouting racism and anti-semitism, but who cares?  They spread the same sort of stuff around about you, after all.</p>",
                cost: 23000000,
                hired: false,
                execute: () => {
                    e.shining_data.visit_multiplier += 0.2;
                }
            },
            {
                pk: 6002,
                name: "Omarosa Manigault",
                image: "/static/sea_to_sea/2016/trump/manigault.png",
                description: "<p><em>Media Manager</em>: Increases the effectiveness of ad campaigns.</p><p>Known simply by 'Omarosa,' Omarosa was a contestant on the first season of your hit, ratings-getting, award-winning reality TV show The Apprentice, and has been a friend of your's since.</p>",
                cost: 15000000,
                hired: false,
                execute: () => {
                    let our_info = campaignTrail_temp.shining_info.find(f=>f.pk === e.election_id&&f.candidate===e.candidate_id);
                    our_info.ad_effect *= 1.2;
                }
            },
            {
                pk: 6003,
                name: "Rudy Giuliani",
                image: "/static/sea_to_sea/2016/trump/giuliani.png",
                description: "<p><em>Smooth Talker</em>: Permanently improves your RNG.</p><p>The former mayor of New York City who grew to national fame after 9/11, Rudy Giuliani is hoping to inject that same patriotic magic that's fueled his career since into your longshot campaign.</p>",
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
                name: "Corey Lewandowski",
                image: "/static/sea_to_sea/2016/trump/lewandowski.png",
                description: "<p><em>Kingmaker</em>: Upon being hired your relationship with all lobbies with which you already have a positive relationship will be increased by 10.</p><p>A former lobbyist and a strong conservative, Corey Lewandowski is an experienced political operative, though his competency in front of the press has been put into doubt in the past.</p>",
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
                pk: 6005,
                name: "Nigel Farage",
                image: "/static/sea_to_sea/2016/trump/farage.png",
                description: "<p><em>Debate Coach</em>: Will highlight the best debate answer.</p><p>Nigel Farage is a member of the European Parliament, founder of UKIP and was the architect of the UK's vote to leave the European Union last year, and is one of the few commentators who predict you've got a shot, and as something of a charismatic himself, is willing to fly in to coach you in the coming debate.</p>",
                cost: 20000000,
                hired: false,
                execute: () => {
                    e.answers_json.find(f=>f.pk===5089).fields.description = `<span style='color:green'>${e.answers_json.find(f=>f.pk===5089).fields.description}</span>`
                }
            },
            {
                pk: 6006,
                name: "Steven Mnuchin",
                image: "/static/sea_to_sea/2016/trump/mnuchin.png",
                description: "<p><em>Fundraiser</em>: Permanently increases the effectiveness of fundraising.</p><p>A Wall Street guy and a hedge fund manager, Steve Mnuchin is willing to bankroll your campaign. In return he'll want a job in a hypothetical Trump Administration, of course.</p>",
                cost: 15000000,
                hired: false,
                execute: () => {
                    let our_info = campaignTrail_temp.shining_info.find(f=>f.pk === e.election_id&&f.candidate===e.candidate_id);
                    our_info.fundraising_effect *= 1.2;
                }
            },
            {
                pk: 6007,
                name: "Scott Walker",
                image: "/static/sea_to_sea/2016/trump/walker.png",
                description: "<p><em>Surrogate</em>: Provides a small, automatic boost in the states of Wisconsin, Minnesota and Michigan.</p><p>The incumbent governor of Wisconsin, Scott Walker was one of your rivals for the Republican nomination this year, and now is a hesitant supporter.  In bringing him on board, you're hoping he'll be able to swing the states of Wisconsin, Minnesota and Michigan.</p>",
                cost: 15000000,
                hired: false,
                execute: () => {
                    const states_list = ["Wisconsin", "Minnesota", "Michigan"];
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
                name: "NumbersUSA",
                image: "/static/sea_to_sea/2016/trump/lobbies/numbers.png",
                description: "NumbersUSA is a right-wing group of activists who oppose new immigration to the New United States, and have sought to bolster their influence with Republican policymaking with your candidacy.",
                issue_tie: 104,
                issue_link: score => score * -1,
                fund_base: 550000,
                opinion: 60
            },
            {
                pk: 7001,
                name: "SBA List",
                image: "/static/sea_to_sea/2020/trump/lobbies/sba.png",
                description: `A group of pro-life women who seek to restrict abortion acces in the United States.`,
                issue_tie: 103,
                issue_link: score => score * -1,
                fund_base: 600000,
                opinion: 50
            },
            {
                pk: 7002,
                name: "AIPAC",
                image: "/static/sea_to_sea/2020/trump/lobbies/aipac.png",
                description: "The most prominent organization for promoting the US-Israel alliance, AIPAC seeks to further the close relationship, and is the most important and well-funded group in doing so.",
                issue_tie: 102,
                issue_link: score => score * -1,
                fund_base: 800000,
                opinion: 40
            },
            {
                pk: 7003,
                name: "Club for Growth",
                image: "/static/sea_to_sea/2016/trump/lobbies/cfg.png",
                description: "The Club For Growth is a conservative PAC that supports open markets.",
                issue_tie: 101,
                issue_link: score => score * -1,
                fund_base: 700000,
                opinion: 40
            },
            {
                pk: 7003,
                name: "National Rifle Association",
                image: "/static/sea_to_sea/2020/trump/lobbies/nra.png",
                description: `Touting itself as the "oldest civil rights advocacy group still in operation,' the NRA is the fearsome overlord of the mighty gun lobby, fiercely opposing any and all new regulations on US gun ownership.`,
                issue_tie: 100,
                issue_link: score => score * -1,
                fund_base: 700000,
                opinion: 60
            }
        ]
    },
    {
        pk: 20,
        candidate: 201,
        fundraising_effect: 1,
        ad_effect: 1,
        opponent_visit_effect: 1,
        staff: [
            {
                pk: 6000,
                name: "John Podesta",
                image: "/static/sea_to_sea/2016/clinton/podesta.png",
                description: "<p><em>Loyalist</em>: Upon being hired, the Loyalist provides a small, permanent boost to all positive global effects.</p><p>Your husband's former Chief of Staff, John Podesta is a competent bureaucrat and Democratic Party operative.</p>",
                cost: 20000000,
                hired: false,
                execute: () => {
                    e.answer_score_global_json.forEach(f=>{if(f.fields.global_multiplier > 0)f.fields.global_multiplier*=1.1});
                }
            },
            {
                pk: 6001,
                name: "Jim Margolis",
                image: "/static/sea_to_sea/2016/clinton/margolis.png",
                description: "<p><em>Media Manager</em>: Increases the effectiveness of ad campaigns.</p><p>A top aide to Barack Obama in both his election campaigns, Jim Margolis is a top communications director, and would be sure to up your media game, which could be useful against an opponent like Donald Trump.</p>",
                cost: 15000000,
                hired: false,
                execute: () => {
                    let our_info = campaignTrail_temp.shining_info.find(f=>f.pk === e.election_id&&f.candidate===e.candidate_id);
                    our_info.ad_effect *= 1.2;
                }
            },
            {
                pk: 6002,
                name: "Donna Brazile",
                image: "/static/sea_to_sea/2016/clinton/brazile.png",
                description: "<p><em>Kingmaker</em>: Upon being hired your relationship with all lobbies with which you already have a positive relationship will be increased by 10.</p><p>The former acting chair of the DNC, Donna Brazile is a good friend of yours, and 'helped' in your primary win against democratic socalist upstart Bernie Sanders.</p>",
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
                pk: 6003,
                name: "Bill Clinton",
                image: "/static/sea_to_sea/2016/clinton/clinton.png", // (lol)
                description: "<p><em>Smooth Talker</em>: Permanently improves your RNG.</p><p>The 42nd president of the United States and your husband, Bill Clinton has had a... troubled relationship with you, but separation was never an option for you two; not considering who you both are.  Some of your advisors are urging you to bring Bill closer and make him a more instrumental part of the campaign. Willy's slickness could be of use.</p>",
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
                name: "Dan Schwerin",
                image: "/static/sea_to_sea/2016/clinton/schwerin.png",
                description: "<p><em>Speechwriter</em>: Provides a small, permanent boost to all positive statewide effects.</p><p>All the best leaders have great speechwriters, and Dan Schwerin is an up-and-coming talent in that field, and a great writer in his own right.  He helped you with writing your memoir, Hard Choices and is now willing to come back on board to help you win this election.</p>",
                cost: 20000000,
                hired: false,
                execute: () => {
                    e.answer_score_state_json.forEach(f=>{if(f.fields.state_multiplier > 0)f.fields.state_multiplier*=1.1});
                }
            },
            {
                pk: 6005,
                name: "Debbie Wasserman Schultz",
                image: "/static/sea_to_sea/2016/clinton/schultz.png",
                description: "<p><em>Workhorse</em>: Upon being hired, the Workhorse will max out your relationship with the lobby mentioned in her description.</p><p>Debbie Wasserman Schultz is a good friend of yours, and also worked to 'help' in your victory against Bernie Sanders in the primaries.  As chair of the DNC, she could even further cement your relationship with the powerful campaign fund.</p>",
                cost: 20000000,
                hired: false,
                execute: () => {
                    let our_info = campaignTrail_temp.shining_info.find(f=>f.pk === e.election_id&&f.candidate===e.candidate_id);
                    our_info.lobby.find(f=>f.name==="Democratic National Committee").opinion = 100;
                }
            },
            {
                pk: 6006,
                name: "Jake Sullivan",
                image: "/static/sea_to_sea/2016/clinton/sullivan.png",
                description: "<p><em>Wonk</em>: How each answer will effect your relationship with lobbies will now be displayed.</p><p>An expert of matters of foreign policy, Jake Sullivan is a young operative ready to make his mark in Washington, and help with cementing your positions on the policies of the day.</p>",
                cost: 30000000,
                hired: false,
                execute: () => {
                    // this one will definitely look like shit with bigshot tooltips!
                    e.answers_json.forEach(f=>{
                        let content = ``;
                        let issue_effs = e.answer_score_issue_json.filter(_f=>_f.fields.answer===f.pk);
                        let our_info = campaignTrail_temp.shining_info.find(f=>f.pk === e.election_id&&f.candidate===e.candidate_id);
                        for (let i in issue_effs) {
                            for (let z in our_info.lobby) {
                                if (our_info.lobby[z].issue_tie !== issue_effs[i].fields.issue) continue
                                const op_raw = our_info.lobby[z].issue_link(issue_effs[i].fields.issue_score * issue_effs[i].fields.issue_importance) * 10;
                                content += `Affects ${our_info.lobby[z].name} by ${Math.floor(op_raw)}<br>`
                            }
                        }
                        
                        let tooltip = `<div class="tooltip"><b>[?]</b><span class="tooltiptext">${content}</span></div>`;
                        f.fields.description += ` ${tooltip}`;
                    })
                }
            },
            {
                pk: 6007,
                name: "Ken Salazar",
                image: "/static/sea_to_sea/2016/clinton/salazar.png",
                description: "<p><em>Surrogate</em>: Provides a small, automatic boost in the states of Colorado, New Mexico, Arizona, Utah and Nevada.</p><p>Ken Salazar is the former senator from Colorado, and once was Obama's Secretary of the Interior. He remains widely popular in his home state and in the Southwest generally, and is willing to campaign on your behalf in the region.</p>",
                cost: 25000000,
                hired: false,
                execute: () => {
                    const states_list = ["Colorado", "New Mexico", "Arizona", "Utah", "Nevada"];
                    for (let i in states_list) {
                        const state = e.states_json.find(f=>f.fields.name===states_list[i]);
                        const state_mult = e.candidate_state_multiplier_json.find(f=>f.fields.state === state.pk && f.fields.candidate === e.candidate_id);
                        state_mult.fields.state_multiplier *= 1.007
                    }
                }
            },
            {
                pk: 6008,
                name: "Evan McMullin",
                image: "/static/sea_to_sea/2016/clinton/mcmullin.png",
                description: "<p><em>Trojan Horse</em>: Upon hiring the Trojan Horse, Evan McMullin receives a large, automatic boost to his numbers in Utah at the expense of Donald Trump.</p><p>Evan McMullin is an independent candidate for president out of the state of Utah, and seeks to win enough center-right and independent voters in the state to snag its electoral votes and deadlock the election.  While nominally an independent, McMullin's and your goals could align, and some targeted funding (made discreetly, of course!) could go a long way to bolstering his candidacy.</p>",
                cost: 90000000,
                hired: false,
                execute: () => {
                    const state_pk = e.states_json.find(f=>f.fields.name==="Utah").pk;
                    e.candidate_state_multiplier_json.find(f=>f.fields.state===state_pk&&f.fields.candidate===200).fields.state_multiplier *= 0.6
                    e.candidate_state_multiplier_json.find(f=>f.fields.state===state_pk&&f.fields.candidate===201).fields.state_multiplier *= 0.5
                }
            }
        ],
        lobby: [
            {
                pk: 7000,
                name: "Immigrants' List",
                image: "/static/sea_to_sea/2016/clinton/lobbies/list.png",
                description: "A nascent PAC, the Immigrants' List is a bipartisan group seeking to protect immigration in the country.",
                issue_tie: 104,
                issue_link: score => score,
                fund_base: 550000,
                opinion: 50
            },
            {
                pk: 7001,
                name: "Emily's List",
                image: "/static/sea_to_sea/2020/biden/lobbies/emily.png",
                description: "Bolstered by Democratic fundraiser and philanthropist Karla M. Jurveston, Emily's List seeks to promote women's reproductive healthcare in the United States.",
                issue_tie: 103,
                issue_link: score => score,
                fund_base: 700000,
                opinion: 60
            },
            {
                pk: 7002,
                name: "AIPAC",
                image: "/static/sea_to_sea/2020/trump/lobbies/aipac.png",
                description: "The most prominent organization for promoting the US-Israel alliance, AIPAC seeks to further the close relationship, and is the most important and well-funded group in doing so.",
                issue_tie: 102,
                issue_link: score => score * -1,
                fund_base: 800000,
                opinion: 60
            },
            {
                pk: 7003,
                name: "AFL–CIO",
                image: "/static/sea_to_sea/2016/clinton/lobbies/aflcio.png",
                description: "The American Federation of Labour and Congress of Industrial Organizations is the largest federation of trade unions in the United States.",
                issue_tie: 101,
                issue_link: score => score,
                fund_base: 700000,
                opinion: 45
            },
            {
                pk: 7003,
                name: "Democratic National Committee",
                image: "/static/sea_to_sea/2016/clinton/lobbies/dnc.png",
                description: `The DNC is what got you this far, and now it wants you to finish the job against who no doubt will be an easy opponent.  It's willing to bankroll your campaign, too, just make sure not to screw it up.`,
                issue_tie: 100,
                issue_link: score => score,
                fund_base: 900000,
                opinion: 80
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