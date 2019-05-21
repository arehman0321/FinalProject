/* global $ */


$('button').click(function(){
    var userIpt = $('input').val();
    var url = "https://api.soundcloud.com/tracks?q=" + userIpt + "&client_id=5aa8e389ba4e24b6106af5159ab3e344";
    
    $.ajax({
        url: url,
        method: "GET",
        success: function(response) {
            
            var num = response.length;
            
            for (var a = 0; a < num; a++){
                var imgUrl = response[a].artwork_url;
                $('#images').append("<img src='" + imgUrl + "'>");
            
                
                
                
                var name = response[a].title;
                $('#songs').append("<h5>" + name + "</h5");
                
                
                var id = response[a].id;
                $("#links").append("<iframe width='80%' height='300' scrolling='yes' frameborder='yes' allow='autoplay' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" + id + "&auto_play=false'></iframe>");
                
                
                var artist = response[a].user.username;
                $('#artists').append("<h3>User: " + artist + "</h3>");
                
                var length = response[a].duration;
                var newLength = length/1000;
                var newLength2 = newLength/60;
                $('#lengths').append("<h4>" + newLength2 + "</h4>");
            }
            
            
        }
    });
});