$(document).ready(function() {

    "use strict";

    var chanList = ["ESL_SC2", "OgamingSC2", "luminosity", "giantwaffle", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb"];
    var online = [];
    var offline = [];


    function chanInfo() {

        chanList.forEach(function(name) {

            var streams = 'https://wind-bow.gomix.me/twitch-api/streams/' + name;
            var status;
            $.ajax({
                    url: streams,
                    type: 'GET',
                    dataType: 'JSONP',
                 

                })
                .success(function(data) {


                    if (data.stream === null) {
                        status = "Offline";

                    } else if (data.stream === undefined) {
                        status = "offline";
                    } 

                    else status = "online";

                       $.ajax({
                    url: 'https://wind-bow.gomix.me/twitch-api/channels/' + name,
                    type: 'GET',
                    dataType: 'JSONP',
                  

                })
                .success(function(data) {
                    console.log("success");
                    if (data.logo === null) {
                        data.logo = "http://www.freeiconspng.com/uploads/no-image-icon-32.png";

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