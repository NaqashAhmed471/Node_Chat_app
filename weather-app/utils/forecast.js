const request = require("request");

const forecast = (lati, longi, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=3ce6d5933eb9d0606d49da2d40b2f9c2&query=${longi},-${lati}&units=f`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (response.body.error) {
      callback("Can't find data try another search!", undefined);
    } else {
      const { weather_descriptions, temperature, feelslike } =
        response.body.current;

      callback(
        undefined,
        `${weather_descriptions}  It is currently  ${temperature} degrees out. It feels like ${feelslike} degrees out`
      );
    }
  });
};

module.exports = forecast;
