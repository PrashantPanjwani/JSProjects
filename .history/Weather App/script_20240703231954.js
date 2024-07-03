//api -> https://api.weatherapi.com/v1/current.json?key=ac5352b0e9114754b1d145639243006&q=London&aqi=no
let form = document.querySelector('form');
let input = document.querySelector('input');
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
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=ac5352b0e9114754b1d145639243006&q=${cityName}&aqi=yes`);
    const data = await response.json();
    console.log(data);
    let Temp_celcius = data.current.temp_c;
    let Weather_Conditions = data.current.condition;
    

}

//getWeather('Vadodara');
