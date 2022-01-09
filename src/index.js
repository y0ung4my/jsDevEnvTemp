import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import WeatherService from './weather-service.js'
import tempConverter from './tempConverter.js'

function clearFields() {
  $('#city').val("");
  $('#state').val("");
  $('.showErrors').text("");
  $('.showHumidity').text("");
  $('.showTemp').text("");
  $('.showWindSpeed').text("");
}

function getElements(response) {
  if (response.main) {
    $('.showHumidity').text(`The humidity in ${response.name} is ${response.main.humidity}%`);
    $('.showTemp').text(`The temperature ${response.main.temp} degrees Kelvin, or ${tempConverter(response.main.temp)} degrees Fahrenheit.`);
    $('.showWindSpeed').text(`The wind speed is ${response.wind.speed} m/s.`);
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    const city = $('#city').val();
    const state = $('#state').val();
    clearFields();
    WeatherService.getWeather(city, state)
      .then(function(response) {
        getElements(response);
      });
  });
});