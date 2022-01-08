export default function tempConverter(tempInKelvin) {
  let fahrenheit = ((900/500) * ((tempInKelvin*100) - 27315) + 3200)/100;
  return fahrenheit;
}