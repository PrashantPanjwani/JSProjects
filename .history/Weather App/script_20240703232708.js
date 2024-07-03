//api -> https://api.weatherapi.com/v1/current.json?key=ac5352b0e9114754b1d145639243006&q=London&aqi=no
let form = document.querySelector('form');
let input = document.querySelector('input');
let temperature = document.querySelector('#temperature');
let weatherDetails = document.querySelector('weather-details');
form.addEventListener('submit',function(e){
    e.preventDefault();
    const cityName = input.value;
    getWeather(cityName);
    // if(){

    // }
    // else{

    // }
})

async function getWeather(cityName){
    try{
        //Getting data by calling api and storing required data in variables.
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=ac5352b0e9114754b1d145639243006&q=${cityName}&aqi=yes`);
        const data = await response.json();
        let Temp_celsius = data.current.temp_c;
        let Weather_Conditions = data.current.condition;
        let condition_image = data.current.condition.icon;
        let locationName = data.location.name;
        let locationTime = data.location.localtime;


    }
    catch(error){
        alert("Please enter valid location");
    }
}

//getWeather('Vadodara');
