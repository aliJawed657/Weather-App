
navigator.geolocation.getCurrentPosition((location) => {


fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=4f600ec3b173500377967610056d2c6e&units=metric`)
    .then(res => res.json())
    .then((res) => {
        // console.log(res)
        document.getElementById("humidity").innerHTML = Math.round(res.main.humidity) + "%"
        document.getElementById("city").innerHTML = res.name
        document.getElementById("wind").innerHTML = Math.round(res.wind.speed) + "km/h"
        document.getElementById("celcius").innerHTML = Math.round(res.main.temp) + "°C"
        document.getElementById("date").innerHTML = new Date().toLocaleDateString("de-DE");
        document.getElementById("curr").innerHTML = res.sys.country
        console.log(res.weather[0].main);
        
        if (res.weather[0].main == "Clear"){
            document.getElementById("weather-icon").src = "clear-day.svg"
        }
        else if (res.weather[0].main == "Clouds"){
            document.getElementById("weather-icon").src = "clouds.png"
        }
        else if (res.weather[0].main == "Cloudy"){
            document.getElementById("weather-icon").src = "cloudy.svg"
        }
        else if (res.weather[0].main == "Drizzle"){
            document.getElementById("weather-icon").src = "drizzle.svg"
        }
        else if (res.weather[0].main == "dust"){
            document.getElementById("weather-icon").src = "dust.svg"
        }
        else if (res.weather[0].main == "fog"){
            document.getElementById("weather-icon").src = "fog.svg"
        }
        else if (res.weather[0].main == "Haze"){
            document.getElementById("weather-icon").src = "haze.svg"
        }
        else if (res.weather[0].main == "humidity"){
            document.getElementById("weather-icon").src = "humidity.png"
        }
        else if (res.weather[0].main == "mist"){
            document.getElementById("weather-icon").src = "mist.svg"
        }
        else if (res.weather[0].main == "Smoke"){
            document.getElementById("weather-icon").src = "smoke.svg"
        }
        else if (res.weather[0].main == "Snow"){
            document.getElementById("weather-icon").src = "snow.svg"
        }
        else if (res.weather[0].main == "Thunderstorm"){
            document.getElementById("weather-icon").src = "thunderstorms.svg"
        }
        else if (res.weather[0].main == "tornado"){
            document.getElementById("weather-icon").src = "tornado.svg"
        }
        else if (res.weather[0].main == "Wind"){
            document.getElementById("weather-icon").src = "wind-speed.png"
        }
        
    })
})
function changelocation() {
    let weather = document.getElementById("weatherlocation").value
    console.log(weather)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=4f600ec3b173500377967610056d2c6e&units=metric`)
        .then(res => res.json())
        .then((res)=> {
            console.log(res)
            document.getElementById("humidity").innerHTML = res.main.humidity
            document.getElementById("city").innerHTML = res.name
            document.getElementById("wind").innerHTML = res.wind.speed
            document.getElementById("celcius").innerHTML = res.main.temp
            document.getElementById("curr").innerHTML = res.sys.country
            console.log(res.weather[0].main);
            if (res.weather[0].main == "Clear"){
                document.getElementById("weather-icon").src = "clear-day.svg"
            }
            else if (res.weather[0].main == "Clouds"){
                document.getElementById("weather-icon").src = "clouds.png"
            }
            else if (res.weather[0].main == "Cloudy"){
                document.getElementById("weather-icon").src = "cloudy.svg"
            }
            else if (res.weather[0].main == "Drizzle"){
                document.getElementById("weather-icon").src = "drizzle.svg"
            }
            else if (res.weather[0].main == "dust"){
                document.getElementById("weather-icon").src = "dust.svg"
            }
            else if (res.weather[0].main == "fog"){
                document.getElementById("weather-icon").src = "fog.svg"
            }
            else if (res.weather[0].main == "Haze"){
                document.getElementById("weather-icon").src = "haze.svg"
            }
            else if (res.weather[0].main == "humidity"){
                document.getElementById("weather-icon").src = "humidity.png"
            }
            else if (res.weather[0].main == "mist"){
                document.getElementById("weather-icon").src = "mist.svg"
            }
            else if (res.weather[0].main == "smoke"){
                document.getElementById("weather-icon").src = "smoke.svg"
            }
            else if (res.weather[0].main == "Snow"){
                document.getElementById("weather-icon").src = "snow.svg"
            }
            else if (res.weather[0].main == "Thunderstorm"){
                document.getElementById("weather-icon").src = "thunderstorms.svg"
            }
            else if (res.weather[0].main == "tornado"){
                document.getElementById("weather-icon").src = "tornado.svg"
            }
            else if (res.weather[0].main == "Wind"){
                document.getElementById("weather-icon").src = "wind-speed.png"
            }
            weatherlocation.value = ""
        })
}


