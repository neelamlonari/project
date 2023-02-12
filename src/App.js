import React, {useState} from 'react';
import "./index.css"

const api ={
  
  key: "35b5991713a9a5059442e37f0ef572be",
  base:"https://api.openweathermap.org/data/2.5/",
  lat :"35.2272086",
  lon:"-80.8430827"

}
 



function App() {
  const [query,setQuery]= useState('');
  const [weather,setWeather]= useState({});

  const search = evt =>{
    if(evt.key === "Enter"){
      fetch(`${api.base}/weather?q=${query}&appid=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
      })
      }
    }
   
  
  const date =()=>{
    let options={year:"numeric",month:"long",day:"numeric"}
  
     let date = new Date();
      date  = date.toLocaleDateString("en-US",options);
      return `${date}`;
  }
  return (
    <div  className={(typeof weather.main !="undefined") ?
     ((weather.main.temp > 16) ? 'App warm' : 'App'):'App'}>
      <main>
        <div className="search-box">
          <input type ="text"
                 className="search-bar"
                 placeholder="search..."
                 onChange = {e => setQuery(e.target.value)}
                 value = {query}
                 onKeyUp={search}
                 />
        </div>
        {(typeof weather.main !="undefined") ?(
        <div>
          <div className="Location-box">
            <div className="Location">{weather.name} {weather.sys.country}</div>
            <div className='date'>{date(new Date())}</div>
          </div>
            < div className= "weather-box">
            <div className= "temp">{Math.round(weather.main.temp/10)}°c</div>
            <div className='weather'>{weather.weather[0].main}</div>
          </div>
          < div className= "wind-box">
            <div className = "wind">{Math.round(weather.wind.speed)}</div>
          </div>
        </div>
        ):('')}
      </main>
     </div>
    );
}

export default App;
