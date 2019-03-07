'use strict';

// const API_BASE_URL= 'https://api.openweathermap.org/data/2.5/weather?q=';
// const API_KEY = "b9269a56aa1a4f25631ef8fca2ac5132"; // this should be hidden and secure

let weatherURL = '/weather';

function displayWeather (weather, temp, min, max) {
    return '<div class="weather-container">' +
    '<div class="slds-grid slds-wrap">' +
        '<div class="slds-size_4-of-4 weather-div">' +
            '<article class="slds-card weather-card">' +
                '<div class="slds-card__header slds-grid">' +
                    '<header class="slds-media slds-media_center slds-has-flexi-truncate">' +
                        '<div class="slds-media__figure">' +
                        '</div>' +
                    '<div class="slds-media__body" style="position: relative;">' +
                        '<h2 class="slds-card__header-title card-header">Weather at the ' + weather.name + ' Penrod Offices</h2>' +
                        '<div class="button-div">' +
                            '<button class="slds-button slds-button_neutral close-button" onClick="closeWeatherDisplay()">Close</button>' +
                        '</div>' +
                    '</div>' +
                '</header>' +
            '</div>' +
            '<hr>' +
            '<div class="slds-card__body slds-card__body_inner slds-grid slds-wrap">' +
                '<div class="slds-no-flex slds-size_1-of-3 icon-div">' +
                    '<img class="weather-icon" id="icon" src="/IBMWeatherIcons_v1/icon36.png">' +
                '</div>' +
                '<div class="weather-info slds-size_2-of-3 weather-details">' +
                    '<h3 class="weather-title">' + temp +'˚ F | ' + weather.weather[0].main +'</h3>' +
                    '<ul>' +
                        '<li>Max / Min Temp: ' + max +'˚ / '+ min +'˚ F</li>' +
                        '<li>Humidity: '+ weather.main.humidity +'%</li>' +
                    '</ul>' +
                '</div>' +
            '</div>' +
        '</article>' +
    '</div>' +
'</div>'
}

function closeWeatherDisplay() {
    $('.close-button').click(function() {
        $('.weather-results').empty();
        $('.container').removeClass('hide');
        document.getElementById('background').style.display = "none";
    });
}

function getBackgroundPicture(weather) {
    if (weather.name == 'Milwaukee') {
        document.getElementById('background').style.backgroundImage = "url('/city-images/milwaukee.jpg')";
    } else if (weather.name == 'Chicago') {
        document.getElementById('background').style.backgroundImage = "url('/city-images/chicago.jpg')";
    } else if (weather.name == 'Dallas') {
        document.getElementById('background').style.backgroundImage = "url('/city-images/dallas.jpg')";
    } else {
        document.getElementById('background').style.backgroundImage = "url('/city-images/minneapolis.jpg')";
    }
}

function getWeatherIcon(weather) {
    if (weather.weather[0].main == 'Clear') {
        document.getElementById('icon').src = "/IBMWeatherIcons_v1/icon36.png";
    } else if (weather.weather[0].main == 'Rain') {
        document.getElementById('icon').src = "/IBMWeatherIcons_v1/icon9.png";
    } else if (weather.weather[0].main == 'Cloudy') {
        document.getElementById('icon').src = "/IBMWeatherIcons_v1/icon26.png";
    } else if (weather.weather[0].main == 'Snow') {
        document.getElementById('icon').src = "/IBMWeatherIcons_v1/icon42.png";
    } else if (weather.weather[0].main == 'Windy') {
        document.getElementById('icon').src = "/IBMWeatherIcons_v1/icon24.png";
    }
}

function handleGetLocation() {
    $('.city-button').click(function(e) {
        e.preventDefault();
        let location = $(this).val();
        console.log(location);
        document.getElementById('background').style.display = "block";
        getWeather(location);
    });
}


function getWeather(location) {
    $.ajax({
        "url": weatherURL,
        // "url": API_BASE_URL + location + '&units=imperial&APPID=' + API_KEY,
        "method": "GET",
        "data": JSON.stringify({location}),
        "success":  function(res) {
            let weather = res;
            getBackgroundPicture(weather);
            $(".weather-results").empty().append(function () {
                let temp = Math.ceil(weather.main.temp);
                let min = Math.ceil(weather.main.temp_min);
                let max = Math.ceil(weather.main.temp_max);
                return displayWeather(weather, temp, min, max);
            });
            $('.container').addClass('hide');
            getWeatherIcon(weather);
        }
    });
}

$(function() {
    handleGetLocation();
    getWeather();
    closeWeatherDisplay();
});