sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'mtlklrp/test/integration/FirstJourney',
		'mtlklrp/test/integration/pages/TravelList',
		'mtlklrp/test/integration/pages/TravelObjectPage'
    ],
    function(JourneyRunner, opaJourney, TravelList, TravelObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('mtlklrp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTravelList: TravelList,
					onTheTravelObjectPage: TravelObjectPage
                }
            },
            opaJourney.run
        );
    }
);