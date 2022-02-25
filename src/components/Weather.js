import React from "react"

export default function Weather({data}) {

    return (
    <main>
        <p>{data.location.country}</p>
        <p>{data.location.name}</p>
        <img src={data.current.condition.icon} />
        <p>{data.current.condition.text}</p>
        <p>{data.current.temp_c}°</p>
        <p>{data.current.vis_km} km zicht</p>
        <p>{data.current.wind_dir} wind {data.current.wind_kph} km/u  </p>
       
    </main>
    )
}
