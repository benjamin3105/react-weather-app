import React from "react"

export default function Weather({data}) {

    return (
        <main>
            <p>{data.location.name}, {data.location.country}</p>
            <img src={data.current.condition.icon} />
            <p>{data.current.condition.text}</p>
            <p>{data.current.temp_c}° degrees</p>
            <p>{data.current.vis_km} km sight</p>
            <p>{data.current.humidity} humidity</p>
            <p>{data.current.wind_dir} wind {data.current.wind_kph} km/u  </p>
        </main>
    )
}
