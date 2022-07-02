// https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=481b18bda70d6ef65ffba4061f768dfc
import React, { useEffect, useState } from 'react';
import "./style.css"
import Weather from './weather';

const Temperature = () => {
    const [searchInfo,setSearchInfo]=useState("Karachi");
    const [tempInfo,setTempInfo]=useState({});
    const getWeatherInfo=async()=>{
        try {
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchInfo}&units=metric&appid=481b18bda70d6ef65ffba4061f768dfc`;
            const res=await fetch(url);
            const data = await res.json();
            const {temp,humidity,pressure}=data.main;
            const{main:weathermode}=data.weather[0];
            const {name} =data;
            const {speed} = data.wind;
            const {country,sunset}=data.sys;

            const WeatherInfo ={
                temp,
                humidity,
                pressure,
                weathermode,
                name,
                speed,
                country,
                sunset,
            }
            setTempInfo(WeatherInfo);
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(()=>{
        getWeatherInfo();
    },[]);
  return (
    <>
    <div className='background'>
        {/* <img src="./images/gif.vlc" alt="images" /> */}
    </div>
    <div className='wrap'>
        <div className='search'>
            <input type="search" placeholder ="Search..." autoFocus id='search' className='searchTerm'
            value={searchInfo} onChange={(e)=>setSearchInfo(e.target.value)}
            />

        <button className='searchButton' type='button' onClick={getWeatherInfo}>Search</button>
        </div>
    </div>
    <div className='widget-div'>
    
    </div>
    <Weather tempInfo={tempInfo}/>
    
    </>
  )
}

export default Temperature