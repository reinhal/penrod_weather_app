'use strict';

const API_BASE_URL= 'api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = 'b9269a56aa1a4f25631ef8fca2ac5132';

function handleGetWeather () {
    $('.city-button').click(function(e) {
        e.preventDefault();
        let location = $(".city-button").val();
        $.ajax({
            "url": API_BASE_URL + location + '&units=imperial&APPID=' + API_KEY,
            "method": "GET",
            "success":  console.log('success')
        });
    });
}

$(function() {
    handleGetWeather();
});


"api.openweathermap.org/data/2.5/weather?q=Milwaukee,us&units=imperial&APPID=b9269a56aa1a4f25631ef8fca2ac5132"
"api.openweathermap.org/data/2.5/weather?q=Milwaukee,us&APPID=b9269a56aa1a4f25631ef8fca2ac5132"