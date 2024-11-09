import { useState } from 'react'

import LocationBox from './components/LocationBox'
import WeatherBox from './components/WeatherBox'
import './styles/app.scss'

const mainURL = 'https://api.openweathermap.org/data/2.5/weather'
const apiID = `appid=${process.env.REACT_APP_ACCESS_KEY}`

const App = () => {
    const [query, setQuery] = useState('')
    const [weather, setWeather] = useState({})

    const searchWeather = e => {
        if(e.key === "Enter") {
            fetch(`${mainURL}?q=${query}&units=metric&${apiID}`)
            .then(res => res.json())
            .then(result => {
                setWeather(result)
                console.log(result);
            })
        }
    }

    return (
        <div className={(typeof weather.main != "undefined") 
            ? ((weather.main.temp > 16) 
            ? 'app warm' : 'app') 
            : 'app'}
        >
            <main>
                <div className="search-box">
                    <input 
                        type="text"
                        className="search-bar"
                        placeholder="Search..."
                        onChange={e => setQuery(e.target.value)}
                        value={query}
                        onKeyPress={searchWeather}
                    />
                </div>
                {(typeof weather.main != "undefined") ? (
                <div>
                    <LocationBox weather={weather} />
                    <WeatherBox  weather={weather} />
                </div>
                ) : ''}
            </main>
        </div>
    )
}

export default App

