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
      const data = response.data
      console.log(response.data)
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

        // useEffect(() => {
            axios.get(`https://api.weatherapi.com/v1/current.json?key=1e3bd8102d2841fe840132113222502&q=${city}&aqi=no`)
            .then(function (response) {
            // handle success
            const data = response.data
            console.log(data)
            setData(response.data)
            })
            .catch(function (error) {
            // handle error
            console.log(error)
            })
            .then(function () {
            // always executed
            })
        // }, [])
    }

    function handleChange() {
      setCityName(cityNameRef.current?.value)
      console.log(cityname)
    }

    if (!data) return "No data!"

    return (
        <div className="App">
            <Header />
            <input ref={cityNameRef} onChange={handleChange} className="input-city" type="text" placeholder="Search city..." />
            <button className="button search-city" onClick={handleSubmit} >Weather in {cityname ? cityname : <span>...</span>}</button>
            <Weather data={data} />

            

        </div>
    )
}

export default App
