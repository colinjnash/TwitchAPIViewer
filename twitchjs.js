$(document).ready(function() {

    "use strict";

    var chanList = ["ESL_SC2", "OgamingSC2", "luminosity", "giantwaffle", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb"];
    var online = [];
    var offline = [];


    function onlineOffline() {

        chanList.forEach(function(name) {

            var streams = 'https://wind-bow.gomix.me/twitch-api/streams/' + name;

            $.ajax({
                    url: streams,
                    type: 'GET',
                    dataType: 'JSONP',

                })
                .success(function(obj) {
                    if (obj.stream !== null) {
                        online.push(name);

                    } else offline.push(name);

                });


        });
    }

console.log(online);

    function getInfo() {

        chanList.forEach(function(name) {

         
            console.log(name);


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

                    $('.online').append(
                        '<div class="username" id="' + data.display_name + '"><img class="logo" src="' + data.logo + '"></img><p class="userinput">' + data.display_name + '</p></div>');


                });



        });

    }

    onlineOffline();
    getInfo();

});