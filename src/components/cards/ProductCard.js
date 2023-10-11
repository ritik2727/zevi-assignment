import React, { useState } from "react";

import "./productcard.css";

import HeartSolid from "../../assets/Heart2.svg";
import HeartOutline from "../../assets/Heart.svg";

const ProductCard = (props) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const [showHoverText, setShowHoverText] = useState(false);
  const PRODUCT = props.product;

  const getRatingString = (rating) => {
    const yellowStar = '★';
    const emptyStar = '☆';
  
    if (rating === 1) return `${yellowStar}${emptyStar.repeat(4)}`;
    else if (rating === 2) return `${yellowStar}${yellowStar}${emptyStar.repeat(3)}`;
    else if (rating === 3) return `${yellowStar.repeat(3)}${emptyStar.repeat(2)}`;
    else if (rating === 4) return `${yellowStar.repeat(4)}${emptyStar}`;
    else if (rating === 5) return `${yellowStar.repeat(5)}`;
  
    return '';
  };

  return (
    <div className="card-container">
      <div
        onMouseOver={() => setShowHoverText(true)}
        onMouseOut={() => setShowHoverText(false)}
        className="image-container"
      >
        <img className="image" src={PRODUCT.imgUrl} />
        <img
          className={isFavourite ? "favourite-solid" : "favourite-outline"}
          src={isFavourite ? HeartSolid : HeartOutline}
          onClick={() => setIsFavourite(!isFavourite)}
        />
        <div className={showHoverText ? "hover-text" : "hide"}>
          View Product
        </div>
      </div>
      <div className="text-container">
        <div className="product-name">{PRODUCT.productName}</div>
        <div>
          <div>
            <s>
              {PRODUCT.currencyPrefix}
              {PRODUCT.originalPrice}
            </s>
          </div>
          <div className="discounted-price">
            {PRODUCT.currencyPrefix}
            {PRODUCT.discountedPrice}
          </div>
        </div>
        <div style={{color:'#fdd33d'}}>
          {getRatingString(PRODUCT.rating)}<span style={{color:'black'}}>({PRODUCT.noOfReviews})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
