var config = {
    style: 'mapbox://styles/pcl8810/clw6wry0f09a301ql9jpcguzc', //Monochrome Dark + Precincts + red roads (to emphasize police violence)
    accessToken: 'pk.eyJ1IjoicGNsODgxMCIsImEiOiJjbHVsdTR6ejcxNXZmMmlwNXdyeTd0M3BtIn0.Wfxq0XUmk0Ua2GsUNlQPSg',
    showMarkers: true,
    markerColor: '#d40217',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Bad Apple Harvest',
    subtitle: 'How NYPD Mental Health Response Hurts Everyone',
    byline: 'By Patrick Litke',
    footer: 'Source: OIG-NYPD CIT Report, CCRB data & my own analysis (more: https://public.tableau.com/app/profile/patrick.litke/viz/LitkeFinalProject/CCRBDATASTORY?publish=yes#WelcomeQuestionnaire), etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'opening-cityview',
            alignment: 'left',
            hidden: false,
            title: 'Spoiled Bunches',
            //image: './path/to/image/source.png', - had trouble getting images to display, commented out to reduce page clutter; will try to add back in for final project version
            description: 'The New York Police Department is the largest law enforcement agency in the United States. It is also among the most heavily scrutinized; five separate city agencies have varying degrees of oversight over it, and with good reason - the Department has a long history of discrimination and brutality. People in mental health crises are exceptionally vulnerable in encounters. Scroll down to learn more',
            location: {
                center: [-73.95362, 40.76294],
                zoom: 9.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                    layer: 'precinct-bound-lines',
                    opacity: 1,
                 }, 
                 {
                    layer: 'sbrook-mh-pcts-fill',
                    opacity: 0,
                 },
                 {
                    layer: '73pct-fill',
                    opacity: 0,
                 },
                 {
                    layer: '71pct-fill',
                    opacity: 0,
                 },
           
            ],
            onChapterExit: [
               /* {
                     layer: 'precinct-bound-lines',
                     opacity: 0
                }, */
                {
                    layer: 'sbronx-actual-fill',
                    opacity: 0
                },
                {
                    layer: 'sbrook-mh-pcts-fill',
                    opacity: 0.4
                },
                
            ]
        },
        {
            id: 'South Brooklyn',
            alignment: 'right',
            hidden: false,
            title: 'South Brooklyn',
            //image: './path/to/image/source.png',
            description: 'South Brooklyn is subject to some of the most violent, aggressive policing in the city. Of 11 people killed by police in mental health crises since 2018, 6 were killed in the 71st and 73rd Precincts',
            location: {
                center: [-73.92775, 40.66607],
                zoom: 13,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'sbrook-mh-pcts-fill',
                    opacity: 0.4
                }, 
                
            ],
            onChapterExit: [
                {
                    layer: 'sbrook-mh-pcts-fill',
                    opacity: 0.4
                }, 
            ]
        },
        {
            id: 'Saheed Vassell',
            alignment: 'right',
            hidden: false,
            title: 'Saheed Vassell',
            image: 'https://www.brooklynpaper.com/wp-content/uploads/2022/09/ny-1532726857-olia001mpo-snap-image-700x664.jpg',
            description: 'Saheed Vassell, a bipolar man who had struggled since seeing his best friend die in 2008, was killed by police on 4/4/2018. He was unarmed.',
            location: {
                center: [-73.931642, 40.664385],
                zoom: 13,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'sbrook-mh-pcts-fill',
                    opacity: 0.4
                }, 
                
            ],
            onChapterExit: [
                {
                    layer: 'sbrook-mh-pcts-fill',
                    opacity: 0.4
                }, 
            ]
        },
        {
            id: 'Kwesi Ashun',
            alignment: 'right',
            hidden: false,
            title: 'Kwesi Ashun',
            image: 'https://i.dailymail.co.uk/1s/2019/10/27/04/20216782-7618077-Friends_and_family_of_Ashun_above_were_outraged_at_his_death_wai-a-23_1572149453651.jpg',
            description: 'Kwesi Ashun, a schizophrenic man who lived with his parents, was killed in a struggle with police on 10/25/2019. He was unarmed.',
            location: {
                center: [-73.906570, 40.667772],
                zoom: 13,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'sbrook-mh-pcts-fill',
                    opacity: 0.4
                }, 
                
            ],
            onChapterExit: [
                {
                    layer: 'sbrook-mh-pcts-fill',
                    opacity: 0
                }, 
            ]
        },
        {
            id: '75th Precinct',
            alignment: 'right',
            hidden: false,
            title: '75th Precinct - East New York',
            //image: './path/to/image/source.png', [see above comments on images]
            description: 'The 75th Precint, covering East New York, has far and away the most CCRB complaints of any precinct at 757. The once-thriving manufacturing hub is now economically depressed and subject to both high rates of violent crime and heavy-handed Broken Windows policing; summonses issued there are found defective nearly 50% more often than elsewhere in the city even as volumes continue to rise.',
            location: {
                center: [-73.88142, 40.67109],
                zoom: 13,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'seventy-five-pct-fill',
                    opacity: 0.4
                },
                {
                    layer: 'seventy-five-pct-bound',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'seventy-five-pct-fill',
                    opacity: 0
                },
                {
                    layer: 'seventy-five-pct-boundary',
                    opacity: 0
                }
            ]
        },
        {
            id: 'South Bronx',
            alignment: 'left',
            hidden: false,
            title: 'South Bronx',
            //image: './path/to/image/source.png',
            description: 'The South Bronx has a reputation for violence, and so does the 40th precinct which covers the largest portion of it. With a population that is disproportionately poor and overwhelmingly Black and Hispanic, the area has long had a tense relationship with law enforcement, and saw intense riots during the 2020 George Floyd Uprisings. It has seen nearly 500 CCRB complaints over the past 5 years.',
            location: {
                center: [-73.9246282, 40.8104515],
                zoom: 13,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'sbronx-actual-fill',
                    opacity: 0.4
                },

            ],
            onChapterExit: [
                {
                    layer: 'sbronx-actual-fill',
                    opacity: 0.4
                },

            ]
        },
        {
            id: 'Kawaski Trawick',
            alignment: 'left',
            hidden: false,
            title: 'Kawaski Trawick',
            image: 'https://img.assets-c3.propublica.org/images/articles/20201204-kawaski-bio-1200x630.jpg',
            description: 'Kawaski Trawick, a bisexual Black man, was shot and killed in his own home by police on 4/14/2019. He was not armed. Despite a CCRB finding that the officers should be removed from the force, NYPD has indicated they will not be punished.',
            location: {
                center: [-73.902267, 40.855698],
                zoom: 13,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'sbronx-actual-fill',
                    opacity: 0.4
                },
              
            ],
            onChapterExit: [
                {
                layer: 'sbronx-actual-fill',
                    opacity: 0
                }
            ]
        },
        {
            id: '14th Precinct',
            alignment: 'right',
            hidden: false,
            title: '14th Precinct - Times Square',
            //image: './path/to/image/source.png',
            description: 'One of the most iconic areas of the city is also among the most heavily policed: Times Square. Despite having a much smaller population than other precincts, the 14th Precinct (also called Midtown South) accounts for a massive share of criminal and civil summonses - and over 400 complaints to the Civilian Complaint Review Board in the past five years. People in crisis are frequently forcibly removed from the area and separated from their belongings and resources.',
            location: {
                center: [-73.98572, 40.75787],
                zoom: 13,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'fourteen-pct-fill',
                    opacity: 0.4
                },
                {
                    layer: 'fourteen-pct-bound',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'fourteen-pct-fill',
                    opacity: 0
                },
                {
                    layer: 'fourteen-pct-bound',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Ending',
            alignment: 'fully',
            hidden: false,
            title: 'The Future of Mental Health in New York',
            //image: './path/to/image/source.png',
            description: 'In 2017, the Department of Investigation reported that NYPD training on mental health crises was inadequate and that those few officers who were trained were rarely sent to crisis calls. NYPD agreed in principle to fix the issues identified. To date, only half of Officers have received Crisis Intervention Training.',
            location: {
                center: [-73.95362, 40.76294],
                zoom: 9.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'precinct-bound-lines',
                    opacity: 0
                },
                
            ],
            onChapterExit: [
                {
                    layer: 'fourteen-pct-fill',
                    opacity: 0
                },
                {
                    layer: 'fourteen-pct-bound',
                    opacity: 0
                }
            ]
        }
    ]
};