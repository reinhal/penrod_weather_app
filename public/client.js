'use strict';

const API_BASE_URL= 'api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = "b9269a56aa1a4f25631ef8fca2ac5132";

// function displayWeather () {
//     return '<div class="weather-container">' +
//     '<div class="slds-grid slds-wrap">' +
//         '<div class="slds-size_4-of-4 weather-div">' +
//             '<article class="slds-card weather-card">' +
//                 '<div class="slds-card__header slds-grid">' +
//                     '<header class="slds-media slds-media_center slds-has-flexi-truncate">' +
//                         '<div class="slds-media__figure">' +
//                         '</div>' +
//                     <div class="slds-media__body" style="position: relative;">
//                         <h2 class="slds-card__header-title card-header" style="text-align: center; padding-top: 25px;">Weather at the Milwaukee Penrod Offices</h2>
//                         <div class="button-div">
//                             <button class="slds-button slds-button_neutral close-button">Close</button>
//                         </div>
//                     </div>
//                 </header>
//             </div>
//             <hr>
//             <div class="slds-card__body slds-card__body_inner slds-grid slds-wrap">
//                 <div class="slds-no-flex slds-size_1-of-3 icon-div">
//                     <img class="weather-icon" src="/IBMWeatherIcons_v1/icon36.png">
//                 </div>
//                 <div class="weather-info slds-size_2-of-3 weather-details">
//                     <h3 class="weather-title">17˚ F | Super Cold</h3>
//                     <ul>
//                         <li>Max / Min Temp: 20˚ / 7˚ F</li>
//                         <li>Humidity: 46%</li>
//                     </ul>
//                 </div>
//             </div>
//         </article>
//     </div>
// </div>'
//}


function handleGetWeather (res) {
    $('.city-button').click(function(e) {
        e.preventDefault();
        let location = $(".city-button").val();
        $.ajax({
            "url": API_BASE_URL + location + '&APPID=' + API_KEY,
            "method": "GET",
            "success":  console.log('success', res)
        });
    });
}

$(function() {
    handleGetWeather();
});