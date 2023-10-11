import React from "react";

export default function TrendBox({trendsData,suggestionData,setSearch}) {
  return (
    <div className="search-box-card">
      <div>
        <h3> Latest trends</h3>
        <div className="trends-card-view">
          {trendsData.map((element, index) => (
            <div
              className="trends-card-container"
              onClick={() => setSearch(element.description)}
            >
              <img src={element.imgUrl} alt="Representative Image" />
              <div>{element.description}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3> Popular Suggestions</h3>
        <div>
          {suggestionData.map((element, index) => (
            <div
              className="suggestions"
              key={index}
              onClick={() => setSearch(element)}
            >
              {element}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
