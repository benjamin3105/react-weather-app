import './App.css'
import Header from './components/Header'
import Weather from './components/Weather'
import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'

function App() {

    const [data, setData] = useState(null)
    const [cityname, setCityName] = useState()
    const cityNameRef = useRef() 

    useEffect(() => {
      axios.get(`https://api.weatherapi.com/v1/current.json?key=1e3bd8102d2841fe840132113222502&q=utrecht&aqi=no`)
      .then(function (response) {
      // handle success
      setData(response.data)
      })
      .catch(function (error) {
      // handle error
      console.log(error)
      })
      .then(function () {
      // always executed
      })
   }, [])

    function handleSubmit() {

        const city = cityNameRef.current?.value

        axios.get(`https://api.weatherapi.com/v1/current.json?key=1e3bd8102d2841fe840132113222502&q=${city}&aqi=no`)
        .then(function (response) {
        // handle success
        setData(response.data)
        })
        .catch(function (error) {
        // handle error
        console.log(error)
        setData()
        })
        .then(function () {
        // always executed
        })
    }

    function handleChange() {
      setCityName(cityNameRef.current?.value)
    }

    if (!data) return ( 
        <div className="App">
            <h2>No weather information!</h2>
        </div>
    )

    return (
        <div className="App">
            <Header />
            <input ref={cityNameRef} onChange={handleChange} className="input-city" type="text" placeholder="Search city, region or country..." />
            <button className="button search-city" onClick={handleSubmit} >Weather in {cityname ? cityname : <span>...</span>}</button>
            <Weather data={data} />            
        </div>
    )
}

export default App
