const input = document.getElementById("celsius");
const output = document.getElementById("output");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");

function result() {
    temp = input.value;
    
    if (toFahrenheit.checked) {
        temp = temp * 9 / 5 + 32;
        output.innerHTML = temp.toFixed(1) + "°F";
    }
    else if (toCelsius.checked) {
        temp = (temp - 32) * 5 / 9;
        output.innerHTML = temp.toFixed(1) + "°C";
        Math.round(temp);
    }
    
    
    event.preventDefault();
}
