import React,{useState,useEffect,useContext} from "react";
import "./style.css"
import {H3, Paragraph, H4} from "../../../atoms/typography/Typography";
import Input from "../../../atoms/input/Input";
import Divider from "../../../atoms/divider/Divider";
import AuthContext from "../../../../../api/context";
import request,{headers} from "../../../../../api/request";


const CountryCard = () => {
  const {user, setUser} = useContext(AuthContext);
  const [country, setCountry] = useState("");
  const [currency, setCurrencies] = useState(1);
  const [countryDetails, setCountryDetails] = useState([]);
  const [loading, setLoading] = useState("Search");
  const [error, setError] = useState(null);


// useEffect(() => {handleSubmit()},[]); 
const handleCurrencyChange = (e) => {
  setCurrencies(e.target.value)}

const handleChange = (e) => {
  setCountry(e.target.value)}

 const handleSubmit = async () => {
    setLoading("Searching...");
    try {
      const response = await request.get(`/country/${country}`, headers(user.token));
      setCountryDetails(response.data.payload);
      setLoading("Search");
    } catch (error) {
      setCountry([]);
    }
  };
  
  console.log("country respnse: ", countryDetails);

  return (
    <div className="container">
      <Input label=""Search for a Country value={country} onChange={handleChange} name="country"/>
      <button onClick={handleSubmit} >{loading}</button>
      <div style={{ display:"flex", flexWrap: "wrap"}}>
      {countryDetails.length>0 ?
        countryDetails.map((c,i) => (<div class="card card-shadow" style={{width: "20rem", margin:"1rem"}}>
          <div class="card-body">
            <div class="card-title"><H3 children={c.name}/></div>
            <Divider />
            <div class="card-text">
              <Paragraph><span style={{fontWeight:"bold"}}>Population:</span> {c.population}</Paragraph>
            </div>
            
              {c.currencies.length>0 ? 
                c.currencies.map((curr) =>(
                  <div>
                    <Paragraph><span style={{fontWeight:"bold"}}>Currency:</span> {curr.name}</Paragraph>
                    <Paragraph ><span style={{fontWeight:"bold"}}>Currency Code|Symbol:</span> {curr.code} | {curr.symbol}</Paragraph>
                    <Divider />
                    <H4 children="Currency Converter"/>
                   <div class="card-text" style={{width:"100%",display:"flex"}}>
                   
                      <Input type="number" onChange={handleCurrencyChange} label={curr.code} width="45%" value={currency}/>
                      <Input type="number" label="" width="45%" readOnly="true" value={currency*c.currencyToSEK}/>
                    </div>
                  </div>))
              :(<div>No currencies detail</div>)}

            
            
          </div>
      </div>)
         ) :(<H3 children="No Country found" />)}
    </div>
    </div>
  );
};

export default CountryCard;