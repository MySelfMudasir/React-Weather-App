import React from 'react'

const iconURL = "http://openweathermap.org/img/wn/"

const WeatherBox = ({ weather }) => {
    return (
        <div className="weather-box">
            <div className="temp">
                <div className="main-temp">
                    {Math.round(weather.main.temp)}°C
                </div>
                <div className="min-max-temp">
                    <div className="min-temp">
                        Max : {Math.round(weather.main.temp_max)}°C
                    </div>
                    <div className="max-temp">
                        Min : {Math.round(weather.main.temp_min)}°C
                    </div>
                </div>
                <div className="feels-temp">
                    Feels Like : {Math.round(weather.main.feels_like)}°C
                </div>
            </div>
            <div className="weather-icon">
                <img 
                    src={`${iconURL}${weather.weather[0].icon}@2x.png`} 
                    alt={weather.weather[0].main}
                />
            </div>
            <div className="weather">
                {weather.weather[0].main}
            </div>
        </div> 
    )
}

export default WeatherBox
