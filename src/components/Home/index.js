import React, { useState } from "react";
import { Input, SearchBarContainer, Icon, InfoWrapper } from "./HomeElements";
import { Button } from "../ButtonElements";
import InfoSection from "../InfoSection/index";
import InfoCard from "../InfoCard/index";

const Home = () => {
  const [hover, setHover] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [countryList, setCountryList] = useState([]);

  const onHover = () => {
    setHover(!hover);
  };

  const search = () => {
    if (searchQuery) {
      const url = `http://localhost:3001/api/v1/country/` + searchQuery;

      let requestOptions = {
        headers: { Authorization: window.sessionStorage.getItem("token") },
      };

      fetch(url, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data.status) {
            console.log("data", data);
            setCountryList(data.data);
          } else {
            alert("Please login again");
          }
        });
    } else {
      alert("Please enter country name");
    }
  };

  return (
    <>
      <SearchBarContainer>
        <Icon>Brand</Icon>
        <Input
          type="text"
          placeholder="Type country name for it's details"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        ></Input>
        <Button
          to="/"
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          primary="true"
          dark="true"
          onClick={search}
        >
          Search
        </Button>
      </SearchBarContainer>
      <InfoWrapper>
        {countryList.map((country, index) => (
          <div>
            <InfoCard key={index} {...country} />
          </div>
        ))}
      </InfoWrapper>
    </>
  );
};

export default Home;
