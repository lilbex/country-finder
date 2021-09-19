import React from "react";
import CountryCard from "../../ui/molecules/Cards/countryCard/CountryCard";
import AuthNav from "../../ui/molecules/navBar/AuthNav";
import SearchInput from "../../ui/atoms/input/Input"
import "./style.css";

const HomeTemplate = () => {
  return (
    <div className="jumbotron">
      <nav><AuthNav /></nav>
      <div className="container" style={{maxWidth:"80%"}}>
        <div class="card-section">
            <CountryCard />
        </div>
      </div>
    </div>
  );
};

export default HomeTemplate;
