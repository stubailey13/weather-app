let result = document.getElementById("result");
const searchBtn = document.getElementById("searchBtn");
let cityName = document.getElementById("citySearch")

//Function to fetch weather details
function getWeather() {
    let cityName = citySearch.value
//when input field empty:
if (cityName.length == 0) {
    result.innerHTML = `<h3>Please enter a city name</h3>`
}
//When city input is filled
else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`
    cityName.value = "";
    fetch(url)
    .then((resp) => resp.json())
    //if valid -> Return and format results
    .then((data) => {
        result.innerHTML = `
        <h2>${data.name}</h2>
        <h1>${data.main.temp} &#176;</h1>
        <h4 class="desc">${data.weather[0].description}</h4>
        <div class="temp-container">
            <div>
                <h4 class="title">min</h4>
                <h4 class="temp">${data.main.temp_min}&#176;</h4>
            </div>
            <div>
                <h4 class="title">max</h4>
                <h4 class="temp">${data.main.temp_max}&#176;</h4>
            </div>
        </div>`;
      }) // <h4 class="weather">${data.weather[0].main}</h4>
      //If city name is NOT valid
      .catch(() => {
        result.innerHTML = `<h3 class="msg">City not found</h3>`;
        console.error();
      });
  };
}
searchBtn.addEventListener("click", getWeather);
// window.addEventListener("load", getWeather);





        