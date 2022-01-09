export default class WeatherService {  
  static async getWeather(city, state) {
    try {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=${process.env.API_KEY}`)
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      } catch(error) {
        return error;
      }
  }
}
