$(document).ready(function() {

    "use strict";

    var chanList = ["ESL_SC2", "OgamingSC2", "luminosity", "giantwaffle", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb"];
    
    //variables below removed from code not able to function in ASYNC environment.
    //(Two AJAX calls, in line after each other.)


    // var online = [];
    // var offline = [];


    function chanInfo() {

        //Use chanList and iterate through users in array.

        chanList.forEach(function(name) {

            var streams = 'https://wind-bow.gomix.me/twitch-api/streams/' + name;
            var status;
            $.ajax({
                    url: streams,
                    type: 'GET',
                    dataType: 'JSONP',
                 

                })
                .success(function(data) {

                    //Check and assign online or offline status.

                    if (data.stream === null) {
                        status = "Offline";

                    } else if (data.stream === undefined) {
                        status = "offline";
                    } 

                    else status = "online";

                    //Run another AJAX request to receive user data. AJAX request is wrapped in success function in order to avoid deferrments.
                       $.ajax({
                    url: 'https://wind-bow.gomix.me/twitch-api/channels/' + name,
                    type: 'GET',
                    dataType: 'JSONP',
                  

                })
                .success(function(data) {
                    console.log("success");

                    //Check and Replace if there is no logo.
                    if (data.logo === null) {
                        data.logo = "http://www.freeiconspng.com/uploads/no-image-icon-32.png";

                        //Check and Replace status if null.

                    }
                    if (data.status === null) {

                        data.status = "Nothing to say.";
                    }


                    if (status == "online") {

                    $('.online').append(
                        '<div class="username" id="' + data.display_name + '"><img class="logo" src="' + data.logo + '"></img><p class="userinput">' + data.display_name + '</p><br>' + "Status: " + data.status + '</div>');
}

else   $('.offline').append(
                        '<div class="username" id="' + data.display_name + '"><img class="logo" src="' + data.logo + '"></img><p class="userinput">' + data.display_name + '</p><br>' + "Status: " + data.status + '</div>');

                });
               

                });


         

        });
    }









    chanInfo();

});