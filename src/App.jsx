import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {


  const apiKey = import.meta.env.VITE_KEY;

  const [userCity,setUserCity] = useState('colombo');

  const [weatherData,setWeatherdata] = useState({});

  const allIcons = {
    "1d": "./src/assets/images/clear.png",
    "1n": "./src/assets/images/clear.png",
    "2d": "./src/assets/images/cloud.png",
    "2n": "./src/assets/images/cloud.png",
    "3d": "./src/assets/images/cloud.png",
    "3n": "./src/assets/images/cloud.png",
    "4d": "./src/assets/images/drizzle.png",
    "4n": "./src/assets/images/drizzle.png",
    "9d": "./src/assets/images/rain.png",
    "9n": "./src/assets/images/rain.png",
    "10d": "./src/assets/images/rain.png",
    "10n": "./src/assets/images/rain.png",
    "13d": "./src/assets/images/snow.png",
    "13n": "./src/assets/images/snow.png"


  }


  useEffect(() => {
    getData();
  },[])




  async function getData(){

    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=${apiKey}&units=metric`);
      setWeatherdata(response.data);
      console.log(weatherData);

    } catch (error) {
      alert("No City Found");
    }
  }
  







  return (
    <>
      <div className="wrapper  d-flex  min-vh-100 justify-content-center align-items-center">

        <div className="weather-app  d-flex flex-column justify-content-center align-items-center gap-1 " >
        
          <div className="d-flex gap-2 mt-3">

            <input class="form-control px-2 py-1" type="text" placeholder="type here"  aria-label="Type location here"  onChange={(e) => setUserCity(e.target.value)} />
            
            <button className="btn btn-light btn-ctm px-1 py-1  d-flex justify-content-center align-items-center "   aria-label="Search" onClick={getData}><i class='bx bx-search fs-4'></i></button>

          </div>

          <div className="img-wrapper mt-2">

            {/* <img src="./src/assets/img.png" className=" img-fluid" alt="" /> */}
            {/* <img src={allIcons[weatherData.weather[0].icon]} className=" img-fluid" alt="" /> */}

            {/* {console.log(weatherData?.weather[0])} */}
{/* 
            {weatherData.weather && weatherData.weather[0] && (
              <img src={allIcons[weatherData.weather[0].icon]} className="img-fluid" alt="Weather icon" />
            )} */}











          </div>

          <h2 className='  display-5 fw-bolder text-white'>{weatherData.main?.temp || 0}<span>&deg;</span>C</h2>
          <h2 className='  h4  fw-bold text-white'>{weatherData?.name}</h2>
          <h2 className='  h5  fw-bold text-white'>{weatherData.sys?.country}</h2>


          <div className=" row  w-100  justify-content-center align-items-center pb-3">


            <div className="col-sm-6 ">
              <div className="row justify-content-center align-items-center text-center">

                <div className='info-img-container m-1'>
                  <img src="./src/assets/humidity.png" alt="" className=' img-fluid' />
                </div>
                <p>{weatherData.main?.humidity} %</p>
                <p className='fw-bold'>Humidity</p>
              </div>
            </div>


            <div className="col-sm-6 ">
              <div className="row justify-content-center align-items-center text-center">

                <div className='info-img-container m-1'>
                  <img src="./src/assets/wind.png" alt="" className=' img-fluid' />
                </div>
                <p>{weatherData.wind?.speed} m/s</p>

                <p className='fw-bold'>Wind</p>

              </div>



            </div>


          </div>


        </div>








      </div>

    </>
  )
}

export default App
