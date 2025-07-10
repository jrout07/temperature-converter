function convertTemperature() {
  const input = document.getElementById("tempInput").value;
  const unit = document.getElementById("unitSelect").value;
  const outputDiv = document.getElementById("output");

  if (input === "" || isNaN(input)) {
    outputDiv.innerHTML = "Please enter a valid number!";
    return;
  }

  const temp = parseFloat(input);
  let celsius, fahrenheit, kelvin;
  let result = "";

  if (unit === "celsius") {
    celsius = temp;
    fahrenheit = (temp * 9/5) + 32;
    kelvin = temp + 273.15;
    result = `${celsius.toFixed(2)}°C is equal to ${fahrenheit.toFixed(2)}°F and ${kelvin.toFixed(2)}K.`;
  } else if (unit === "fahrenheit") {
    fahrenheit = temp;
    celsius = (temp - 32) * 5/9;
    kelvin = celsius + 273.15;
    result = `${fahrenheit.toFixed(2)}°F is equal to ${celsius.toFixed(2)}°C and ${kelvin.toFixed(2)}K.`;
  } else if (unit === "kelvin") {
    kelvin = temp;
    celsius = temp - 273.15;
    fahrenheit = (celsius * 9/5) + 32;
    result = `${kelvin.toFixed(2)}K is equal to ${celsius.toFixed(2)}°C and ${fahrenheit.toFixed(2)}°F.`;
  }

  outputDiv.innerHTML = `<p>${result}</p>`;
}
