export default function tempConverter(tempInKelvin) {
  let fahrenheit = parseFloat((((900/500) * ((tempInKelvin*100) - 27315) + 3200)/100).toFixed(2));
  return fahrenheit;
}