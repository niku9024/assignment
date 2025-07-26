

let searchCity = document.getElementById('city');
let sbtn = document.getElementById('ser')

let down_cp = document.getElementById('downn');
// let old_code = down_cp.innerHTML;

// data manipulation
let city = document.getElementById('cit');
let temp = document.getElementById('temp');
let condition = document.getElementById('condition');
let humidity = document.getElementById('hum');
let wind = document.getElementById('wind');
let icon = document.getElementById('icon');

    



function fetApi(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity.value}&appid=ba18395f6c4f5b1a97c3ba6f92488991&units=metric`).then((res)=>{
    res.json().then((data)=>{
        console.log(searchCity.value);
        console.log(data);   
        city.innerText=`City : ${data.name}`
        temp.innerText=`Temperature : ${data.main.temp} C`
        condition.innerText=`Weather condition : ${data.weather[0].main}`
        humidity.innerText=`Humidity : ${data.main.humidity}`
        wind.innerText=`Wind Speed : ${data.wind.speed}`
        icon.innerText=`Weather icon : ${data.weather[0].icon}`
    }).catch((err)=>{
        
        down_cp.innerHTML=`<h1 style="color:red;"> City not found </h1>`
    })
        

    })
}

// search city

sbtn.addEventListener("click",fetApi)