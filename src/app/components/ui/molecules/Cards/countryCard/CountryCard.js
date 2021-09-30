import React, { useState, useEffect, useContext } from "react";
import "./style.css";
import { H3, Paragraph, H4 } from "../../../atoms/typography/Typography";
import Input from "../../../atoms/input/Input";
import Divider from "../../../atoms/divider/Divider";
import AuthContext from "../../../../../api/context";
import request, { headers } from "../../../../../api/request";

const CountryCard = () => {
  const { user, setUser } = useContext(AuthContext);
  const [currency, setCurrencies] = useState(1);
  const [countryDetails, setCountryDetails] = useState([]);
  const [loading, setLoading] = useState("Search");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    handleSubmit();
  }, []);

  useEffect(() => {
    Searching();
  }, [search, countryDetails]);

  const Searching = () => {
    setFilteredCountries(
      countryDetails.filter((nation) =>
        nation.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  const handleCurrencyChange = (e) => {
    setCurrencies(e.target.value);
  };

  const handleSearchleChange = (e) => {
    setSearch(e.target.value);
  };

  const regex = "[a-zA-Z]";

  const handleSubmit = async () => {
    setLoading("Searching...");
    try {
      // const response = await request.get(`https://api.countrylayer.com/v2/all?access_key=25ac4c16424c793f20f33cb5c8ca4293`,);
      const response = await request.get(
        `country/${regex}`,
        headers(user.token)
      );
      setCountryDetails(response.data.payload);
      setLoading("Search");
    } catch (error) {
      setCountryDetails([]);
    }
  };
  console.log("the countruies", countryDetails);
  return (
    <div className="container">
      <Input
        label="Search for a Country"
        onChange={handleSearchleChange}
        name="country"
      />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {search != "" && filteredCountries.length > 0 ? (
          filteredCountries.map((c, i) => (
            <div
              class="card card-shadow"
              style={{ width: "20rem", margin: "1rem" }}
            >
              <div class="card-body">
                <div class="card-title">
                  <H3 children={c.name} />
                </div>
                <Divider />
                <div class="card-text">
                  <Paragraph>
                    <span style={{ fontWeight: "bold" }}>Capital:</span>{" "}
                    {c.capital}
                  </Paragraph>
                  <Paragraph>
                    <span style={{ fontWeight: "bold" }}>Tel Code:</span>{" "}
                    {c.phone}
                  </Paragraph>
                  <Paragraph>
                    <span style={{ fontWeight: "bold" }}>Flag:</span> {c.emoji}
                  </Paragraph>
                </div>
                <Divider />
                <H4 children="Language(s)" />
                {c.languages.map(l => (
                  <Paragraph>
                     {l}
                  </Paragraph>
                ))}
                <div>
                  <Paragraph>
                    <span style={{ fontWeight: "bold" }}>Currency:</span>{" "}
                    {c.currency}
                  </Paragraph>

                  <H4 children="Currency Converter" />
                  <div
                    class="card-text"
                    style={{ width: "100%", display: "flex" }}
                  >
                    <Input
                      type="number"
                      onChange={handleCurrencyChange}
                      label={c.currency}
                      width="45%"
                      value={currency}
                    />
                    <Input
                      type="number"
                      label="To SEK"
                      width="45%"
                      readOnly="true"
                      value={currency * c.currencyToSEK}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="not-found">
            <H3 fontSize="40px" color="grey" children="No Country found ):" />
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryCard;
