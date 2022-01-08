import tempConverter from '../src/tempConverter.js';

describe("temp converter", () => {

  test('should convert Kelvin to Fahrenheit', () => {
    const tempInKelvin = 300;
    expect(tempConverter(tempInKelvin)).toEqual(80.33);
  });

});
