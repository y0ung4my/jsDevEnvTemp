import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import WeatherService from './weather-service.js'

function clearFields() {
  $('#city').val("");
  $('#state').val("");
  $('.showErrors').text("");
  $('.showHumidity').text("");
  $('.showTemp').text("");
  $('.showWindSpeed').text("");
}

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    const city = $('#city').val();
    const state = $('#state').val();
    clearFields();

    let promise = WeatherService.getWeather(city);
    promise.then(function(response) {
        const body = JSON.parse(response);
          $('.showHumidity').text(`The humidity in ${city}${state} is ${body.main.humidity}%`);
          $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
          $('.showWindSpeed').text(`The wind speed is ${body.wind.speed} m/s.`);
          $('.showErrors').text("");
      }, function(error) {
        $('.showErrors').text(`There was an error processing your request: ${error}`);
    })

    });
  });