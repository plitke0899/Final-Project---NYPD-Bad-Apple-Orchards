var config = {
    style: 'mapbox://styles/pcl8810/clvz1nzu807k901ph943s956l', //Monochrome Dark with some Precincts added in
    accessToken: 'pk.eyJ1IjoicGNsODgxMCIsImEiOiJjbHVsdTR6ejcxNXZmMmlwNXdyeTd0M3BtIn0.Wfxq0XUmk0Ua2GsUNlQPSg',
    showMarkers: true,
    markerColor: '#1b6ef5',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Bad Apple Orchards',
    subtitle: 'The Most Aggressive Precincts in the NYPD',
    byline: 'By Patrick Litke',
    footer: 'Source: CCRB data & my own analysis (more: https://public.tableau.com/app/profile/patrick.litke/viz/LitkeFinalProject/CCRBDATASTORY?publish=yes#WelcomeQuestionnaire), etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'opening-cityview',
            alignment: 'left',
            hidden: false,
            title: 'Spoiled Bunches',
            //image: './path/to/image/source.png', - had trouble getting images to display, commented out to reduce page clutter; will try to add back in for final project version
            description: 'The New York Police Department is the largest law enforcement agency in the United States. It is also among the most heavily scrutinized; five separate city agencies have varying degrees of oversight over it, and with good reason - the Department has a long history of discrimination and brutality. Here, we will examine the most notorious and aggressive precincts in the City of New York.',
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
                     layer: 'seventy-five-pct-bound',
                     opacity: 1,
                 },
                 {
                    layer: 'seventy-five-pct-fill',
                    opacity: 0,
                },
                 {
                    layer: 'forty-pct-bound',
                    opacity: 1,
                },
                {
                    layer: 'forty-pct-fill',
                    opacity: 0,
                },
                {
                    layer: 'fourteen-pct-bound',
                    opacity: 1,
                },
                {
                    layer: 'fourteen-pct-fill',
                    opacity: 0,
                },
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
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
            id: '40th Precinct',
            alignment: 'left',
            hidden: false,
            title: '40th Precinct - South Bronx',
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
                    layer: 'forty-pct-fill',
                    opacity: 0.4
                },
                {
                    layer: 'forty-pct-bound',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'forty-pct-fill',
                    opacity: 0
                },
                {
                    layer: 'forty-pct-bound',
                    opacity: 0
                }
            ]
        },
        {
            id: '14th Precinct',
            alignment: 'fully',
            hidden: false,
            title: '14th Precinct - Times Square',
            //image: './path/to/image/source.png',
            description: 'One of the most iconic areas of the city is also among the most heavily policed: Times Square. Despite having a much smaller population than other precincts, the 14th Precinct (also called Midtown South) accounts for a massive share of criminal and civil summonses - and over 400 complaints to the Civilian Complaint Review Board in the past five years.',
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
        }
    ]
};