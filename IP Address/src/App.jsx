import { useState ,useEffect} from "react";
import "./App.css";

const App = () => {
  const [ipAddress, setIpAddress] = useState("");
  const [countryName, setCountryName] = useState("");
  const [city,setCity] = useState("");

  useEffect(()=>{
    const getCountryName = async () => {
      const apiKey = "at_9LxpRlKlaFIEJZPC1HI5dFkHUfPI5";
      try {
        const response = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`
        );
        const data = await response.json();
  
        setCountryName(data.location.country);
        setCity(data.location.city);
  
        console.log(data);
      } catch (error) {
        console.error("Error fetching country and City name:", error);
      }
    };
    getCountryName();
  })

  
  const inputHandler = (e) => {
    setIpAddress(e.target.value);
  };


  return (
    <div className="container">
      <h1>IP Address Tracker</h1>
      <input
        type="text"
        placeholder="Enter an IP address"
        value={ipAddress}
        onChange={inputHandler}
      />
     

      <div className="information">
        <h4>Your Current Ip Address 🚀</h4>
        <h2>{ipAddress}</h2>
        <p>Country: {countryName}</p>
        <p>City: {city}</p>
      </div>
    </div>
  );
};

export default App;
