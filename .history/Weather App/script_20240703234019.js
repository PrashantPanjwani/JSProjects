//api -> https://api.weatherapi.com/v1/current.json?key=ac5352b0e9114754b1d145639243006&q=London&aqi=no
let form = document.querySelector('form');
let input = document.querySelector('input');
let temperature = document.querySelector('#temperature');
let CityN = document.querySelector('#CityName');
let DateTime = document.querySelector('#DateTime');
let WeatherImg = document.querySelector('#Weather_Image');
let weatherC = document.querySelector('#Condition');

form.addEventListener('submit',function(e){
    e.preventDefault();
    const cityName = input.value;
    getWeather(cityName);
})

async function getWeather(cityName){
    try{
        //Getting data by calling api and storing required data in variables.
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=ac5352b0e9114754b1d145639243006&q=${cityName}&aqi=yes`);
        const data = await response.json();
        let Temp_celsius = data.current.temp_c;
        let Weather_Conditions = data.current.condition.text;
        let condition_image = data.current.condition.icon;
        let locationName = data.location.name;
        let locationTime = data.location.localtime;
        UpdateWeather(Temp_celsius,Weather_Conditions,condition_image,locationName,locationTime);

    }
    catch(error){
        alert("Please enter valid location");
    }
}

function UpdateWeather(Temp_celsius,Weather_Conditions,condition_image,locationName,locationTime){
    temperature.innerText = Temp_celsius;
    CityN.innerText = locationName;
    DateTime.innerText = locationTime;
    WeatherImg.src = "https:"+condition_image;
    //weatherC.innerText = Weather_Conditions;
    
}

//getWeather('Vadodara');
