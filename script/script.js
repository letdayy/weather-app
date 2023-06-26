// apis que vão ser utilizadas
const apiKey =  "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=aca9661b5b2b2a018a1f2605d662fe19";
const apiWeatherConditions = "http://openweathermap.org/img/wn/01d@2x.png";

// input de pesquisa e botão
const inputCity = document.querySelector("#input-city");
const btnSearch = document.querySelector(".btn-search");

// informações vindas do html que serão inseridas por javascript
const cityName = document.querySelector();
const temperature = document.querySelector();
const description = document.querySelector();
const weatherIcon = document.querySelector();
const coyntryIcon = document.querySelector();
const umidityIcon = document.querySelector();
const windIcon = document.querySelector();


// função que mostra o clima da cidade que foi escrita na pesquisa
const cityWeather = (city) => {
    console.log(city);
}

// função que executa a função ao clique do botão
btnSearch.addEventListener("click", (event) => {
    event.preventDefault();

    const city = inputCity.value;
})