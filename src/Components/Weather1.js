import react, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStreetView } from '@fortawesome/free-solid-svg-icons'

function Weather1() {


    const [search,setSearch]=useState("");
    const [city,setCity]=useState();
    useEffect(()=>{

        const fetchData=async ()=>{

            const API_KEY=`745c32b2b37d77788d4e8461cbb47c00`;
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${API_KEY}`
            const response=await fetch(url);
            const data=await response.json();
            console.log(data.main);
            setCity(data.main);
        }
        fetchData();
    },[search])
  return (
    <>
     
      <div className="main_div">
        <div className="sub_div">
          <h1>Weather App</h1>
         
          <div className="input_div">
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Enter city"/>
          </div>

        {
            //first time it will not have any values so gives error so use this!
            !city ? <p style={{display:"flex",justifyContent:"center",alignContent:"center",marginTop:"130px"}}>No Data found</p> 
                  : (
                <>
                    <div className="info_div">
                        <FontAwesomeIcon icon={faStreetView} className="icon"/>
                        <div className="location"><p className="location_class">{search}</p></div>
                    </div>

                        <div className="temp">
                                <h2>{city.temp}</h2>
                        </div>
                    <div className="min_max_temp">
                            <p>Min:{city.temp_min}|Max:{city.temp_max}</p>
                    </div>
                </>
                    )
        }
          
        </div>   
          

      </div>
    
    </>
    
  );
}

export default Weather1;
