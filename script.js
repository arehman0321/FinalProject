/* global $ */


$('button').click(function(){
    var userIpt = $('#search_term').val();
    var url = "https://api.soundcloud.com/tracks?q=" + userIpt + "&client_id=5aa8e389ba4e24b6106af5159ab3e344";
    
    $.ajax({
        url: url,
        method: "GET",
        success: function(response) {
            
        }
    });
});