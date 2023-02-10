import React, {useState} from 'react';
import Form from "./components/Form"
import "./index.css"

const api ={
  
  key: "35b5991713a9a5059442e37f0ef572be",
  base:"https://api.openweathermap.org/data/2.5/",
  lat :"35.2272086",
  lon:"-80.8430827"

}


function App() {
  
  const date =()=>{
    let options={year:"numeric",month:"long",day:"numeric"}
  
     let date = new Date();
      date  = date.toLocaleDateString("en-US",options);
      return `${date}`;
  }
 
  
 
  return (
    <div className="App">
       <main>
        <div className="search-box">
          <input type ="text"
                 className="search-bar"
                 placeholder="search..."
                 />
          <div className="Location-box">
            <div className="Location">charlotte</div>
            <div className='date'>{date(new Date())}</div>
          </div>
         </div>
        </main>
    </div>   
  );
}

export default App;
