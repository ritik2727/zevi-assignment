import logo from "./assets/logo.png";
import "./App.css";
import { useEffect, useState } from "react";
import searchLogo from "./assets/search.svg";
import { faker } from "@faker-js/faker";
import {
  ProductData,
  SuggestionData,
  TrendsData,
} from "./components/fakerData";
import TrendBox from "./components/TrendBox/TrendBox";
import SearchItem from "./components/SearchItem/SearchItem";

function App() {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const [trendsData, setTrendsData] = useState([]);
  const [suggestionData, setSuggestionData] = useState([]);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    setTrendsData(TrendsData);
    setSuggestionData(SuggestionData);
    setProductData(ProductData);
  }, []);

  return (
    <div className="App">
      <div className="logo-container">
        <img src={logo} className="logo" alt="logo" />
      </div>

      <div
        onClick={() => setShowSuggestions(!showSuggestions)}
        className="search-container"
      >
        <input
          type="text"
          autoFocus
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
        <button onClick={() => setShowResults(!showResults)}>
          <img src={searchLogo} alt="search" />
        </button>
      </div>
      <div>
        {showResults ? (
          <SearchItem productData={productData} search={search} />
        ) : search.length !== 0 || showSuggestions ? (
          <TrendBox
            trendsData={trendsData}
            setSearch={setSearch}
            suggestionData={suggestionData}
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;
