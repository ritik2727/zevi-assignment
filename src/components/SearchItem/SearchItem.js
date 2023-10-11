import React, { useEffect, useState } from "react";

import ArrowUpSVG from "../../assets/angle-right 1.svg";
import ArrowDownSVG from "../../assets/angle-right 1.svg";

import ProductCard from "../cards/ProductCard";

import "./searchitem.css";

const SearchResultsSection = (props) => {
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    rating: [false, false, false, false, false],
    price: [false, false, false],
  });
  const [displayData, setDisplayData] = useState(props.productData);
  const [expandFilter, setExpandFilter] = useState({
    rating: true,
    price: true,
  });

  useEffect(() => {
    setFilteredData(props.productData);

    const newFilterData = props.productData.filter((element) => {
      // Filter by rating
      const ratingFilter = filters.rating.every(
        (isChecked, i) => !isChecked || element.rating === i + 1
      );

      // Filter by price
      const priceFilter =
        (!filters.price[0] || Number(element.discountedPrice) < 500) &&
        (!filters.price[1] ||
          (Number(element.discountedPrice) >= 1000 &&
            Number(element.discountedPrice) <= 3000));

      return ratingFilter && priceFilter;
    });

    setDisplayData(newFilterData);
  }, [filters, props.productData]);

  return (
    <div className="search-results-section">
      <h3>Search Results</h3>
      <div>
        <div className="filter-section">
          <div className="filter-header">
            <div>RATINGS</div>
            <img
              onClick={() =>
                setExpandFilter({
                  ...expandFilter,
                  rating: !expandFilter.rating,
                })
              }
              src={expandFilter.rating ? ArrowUpSVG : ArrowDownSVG}
              alt="show/hide"
            />
          </div>
          <div className={!expandFilter.rating ? "hide" : "show"}>
            <ul>
              <li>
                <input
                  type="checkbox"
                  onChange={() => {
                    const newFilters = [...filters.rating];
                    newFilters[4] = !newFilters[4];
                    setFilters({ ...filters, rating: newFilters });
                  }}
                />
                <div className="rating-div">★★★★★</div>
              </li>
              <li>
                <input
                  type="checkbox"
                  onChange={() => {
                    const newFilters = [...filters.rating];
                    newFilters[3] = !newFilters[3];
                    setFilters({ ...filters, rating: newFilters });
                  }}
                />
                <div className="rating-div">★★★★☆</div>
              </li>

              <li>
                <input
                  type="checkbox"
                  onChange={() => {
                    const newFilters = [...filters.rating];
                    newFilters[2] = !newFilters[2];
                    setFilters({ ...filters, rating: newFilters });
                  }}
                />
                <div className="rating-div">★★★☆☆</div>
              </li>

              <li>
                <input
                  type="checkbox"
                  onChange={() => {
                    const newFilters = [...filters.rating];
                    newFilters[1] = !newFilters[1];
                    setFilters({ ...filters, rating: newFilters });
                  }}
                />
                <div className="rating-div">★★☆☆☆</div>
              </li>

              <li>
                <input
                  type="checkbox"
                  onChange={() => {
                    const newFilters = [...filters.rating];
                    newFilters[0] = !newFilters[0];
                    setFilters({ ...filters, rating: newFilters });
                  }}
                />
                <div className="rating-div">★☆☆☆☆</div>
              </li>
            </ul>
          </div>

          <div className="filter-header">
            <div>PRICE RANGE</div>
            <img
              onClick={() =>
                setExpandFilter({ ...expandFilter, price: !expandFilter.price })
              }
              src={expandFilter.price ? ArrowUpSVG : ArrowDownSVG}
              alt="show/hide"
            />
          </div>
          <div className={!expandFilter.price ? "hide" : "show"}>
            <ul>
              <li>
                <input
                  type="checkbox"
                  onChange={() => {
                    const newFilters = [...filters.price];
                    newFilters[0] = !newFilters[0];
                    setFilters({ ...filters, price: newFilters });
                  }}
                />
                <div className="content">Under 500</div>
              </li>
              <li>
                <input
                  type="checkbox"
                  onChange={() => {
                    const newFilters = [...filters.price];
                    newFilters[1] = !newFilters[1];
                    setFilters({ ...filters, price: newFilters });
                  }}
                />
                <div className="content">1000 to 3000</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="product-section">
          {displayData.length === 0
            ? "NO RESULTS FOUND. TRY CHANGING THE FILTERS."
            : [...displayData].map((element, index) =>
                element.setDisplayActive ? (
                  <ProductCard key={index} product={element} />
                ) : null
              )}
        </div>
      </div>
    </div>
  );
};

export default SearchResultsSection;
