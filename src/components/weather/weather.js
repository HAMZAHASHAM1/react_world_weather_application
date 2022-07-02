import React, { useEffect, useState } from 'react'

const Weather = ({tempInfo}) => {
    // const {weatherState,setWeatherState}=useState("");
    const {
        temp,
        humidity,
        pressure,
        weathermode,
        name,
        speed,
        country,
        sunset,
    } = tempInfo;
    // useEffect(()=>{
    //     if(weathermode){
    //         switch (weathermode) {
    //             case "Clouds":setWeatherState("wi-day-cloudy");
                    
    //                 break;
    //                 case "Haze":setWeatherState("wi-fog");
                    
    //                 break;
    //                 case "Clear":setWeatherState("wi-day-sunny");
                    
    //                 break;
    //             default:setWeatherState("wi-day-sunny");
    //                 break;
    //         }
    //     }
    // },[weathermode]);
    let sec=sunset;
    let date=new Date(sec * 1000);
    let timeStr= `${date.getHours()}:${date.getMinutes()}`
   
  return (
    <>
    <article className='widget'>
        <div className='weatherIcon'>
            <img src="./images/weather.png" alt="images" className='image' />
            <div className='weather-application'>
            <h1 className='h'>World <br></br> Weather <br></br>Application</h1>
            </div>
        </div>
        <div className='weatherInfo'>
            <div className='temperature'>
            <span>{temp}&deg;</span>
            </div>
            <div className='description'>
                <div className='weatherCondition'>{weathermode}</div>
                <div className='place'>
                {name},<p>  </p>{country}
                </div>
            </div>
        </div>
        <div className='date'>{new Date().toLocaleString()}</div>
        <div className='extra-temp'>
            <div className='temp-info-minmax'>
                <div className='two-sided-section'>
                    <p><i className={"wi wi-sunset"}></i></p>
                    <div className='font'>{timeStr}<br></br>sunset</div>
                </div>
                <div className='two-sided-section'>
                    <p><i className={"wi wi-humidity"}></i></p>
                    <div className='font'>{humidity}<br/>Humidity</div>
                </div>
            </div>
            <div className='weather-extra-info'>
        <div className='two-sided-section'>
                   <p> <i className={"wi wi-rain"}></i></p>
                    <div className='font'>{pressure}<br/>Pressure</div>
                </div>
                <div className='two-sided-section'>
                    <p><i className={"wi wi-strong-wind"}></i></p>
                    <div className='font'>{speed}<br/>Speed</div>
                </div>
        </div>
        </div>
       
        
    </article>
    </>
  )
}

export default Weather