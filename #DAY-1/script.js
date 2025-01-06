const container = document.querySelector('.container');
const searchBox = document.querySelector('.search-box');
const weatherBox = document.querySelector('.weather-box');
const weatherDetail = document.querySelector('.weather-detail');
const error404 = document.querySelector('.not-found');


searchBox.addEventListener('click', () => 
{
    const APIKey  = '2d6481f56222fe08440642b01020d832';
    const city =  document.querySelector('.search-box input').value;

    
    if(city === '')
        
{
        return ;
}
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`).then(response => 
            response.json()).then(json => 
{ 
                if (json.cod ==='404')
                {
                    container.style.height = '400px';
                    weatherBox.style.display = 'none';
                    weatherDetail.style.display = 'none';
                    error404.style.display = '';
                    error404.classList.add('fade-in');
                    return response; ///////////////////
                }

                error404.style.display = 'none';
                    error404.classList.remove('fade-in');

                    const img = document.querySelector('.weather-box img');
                    const temp = document.querySelector('.weather-box .temp');
                    const description = document.querySelector('.weather-box .description');
                    const humity = document.querySelector('.weather-detail .humidity span');
                    const wind = document.querySelector('.weather-detail .wind span');
                 
                    // switch(json.weather[0].main){
                    //     case 'Clear':
                    //         img.src = 'sunny.jpg';
                    //         break;
                    //     case 'Clouds':
                    //         img.src = '4102326_cloud_sun_sunny_weather_icon.png';
                    //         break;
                    //     case 'Rain':
                    //         img.src = '1342929_citycons_cloud_rain_rainy_weather_icon.png';
                    //         break;
                    //     case 'Snow':
                    //         img.src = 'snowy_6566033.png';
                    //         break;
                    //         case 'Haze':
                    //             img.src = '2682832_cloud_day_forecast_sun_weather_icon.png';
                    //             break;
                    //     default:
                    //         img.src = 'img/sunny.svg';
                    // }
                    
                    temp.innerHTML = `${Math.floor(json.main.temp - 273)}<spam>°C</spam>`;///////////////////////////////
                    description.innerHTML =`${json.weather[0].description}`;
                    humity.innerHTML = `${json.main.humidity}`;
                    wind.innerHTML = `${json.wind.speed}`;//////////////////////////////

                    weatherBox.style.display = '';
                    weatherDetail.style.display = '';
                    weatherBox.classList.add('fade-in');
                    weatherDetail.classList.add('fade-in');
                    container.style.height = '600px';



})

})     