import React, { useState } from "react";
import "./App.css";
import { fetchWeather } from "./api/fetchWeather";

import {
  Wrapper,
  InputSearch
} from "./components/mainCointainer/mainCointainer";

import {
  CityCard,
  HeaderCard,
  SupCard,
  CityTemp,
  CardInfo,
  CardImage,
  CardDesc,
  CardSpan
} from "./components/CityCard/CityCard";

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState("");

  const search = async ({ key }) => {
    if (key === "Enter") {
      const data = await fetchWeather(query);
      setWeather(data);
      setQuery("");
    }
  };

  return (
    <Wrapper>
      <InputSearch
        type="text"
        placeholder="Enter the city"
        onChange={({ target }) => setQuery(target.value)}
        value={query}
        onKeyPress={search}
      />
      {weather.main && (
        <CityCard>
          <HeaderCard>
            <CardSpan>{weather.name}</CardSpan>
            <SupCard country>{weather.sys.country}</SupCard>
          </HeaderCard>
          <CityTemp>
            {Math.round(weather.main.temp)}
            <SupCard>&deg;c</SupCard>
          </CityTemp>
          <CardInfo>
            <CardImage
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <CardSpan desc>{weather.weather[0].description}</CardSpan>
          </CardInfo>
        </CityCard>
      )}
    </Wrapper>
  );
};

export default App;
