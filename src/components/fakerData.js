import { faker } from "@faker-js/faker";

const MAX_RATING = 5;
const MIN_RATING = 1;

const getTrendsData = () => {
  const trendsData = [];

  for (let i = 0; i < 5; i++) {
    const imgUrl = faker.image.urlLoremFlickr({
      category: "people",
      width: 300,
      height: 400,
    });
    const description = faker.commerce.productName();
    trendsData.push({
      imgUrl: imgUrl,
      description: description,
    });
  }

  return trendsData;
};

const getSuggestionData = () => {
  const suggestionData = [];

  for (let i = 0; i < 5; i++) {
    const suggestion = faker.commerce.productName();
    suggestionData.push(suggestion);
  }

  return suggestionData;
};

const getProductData = () => {
  const productData = [];

  for (let i = 0; i < 20; i++) {
    const imgUrl = faker.image.urlLoremFlickr({
      category: "people",
      width: 300,
      height: 400,
    });
    const productName = faker.commerce.productName();
    // Hard-coded the value for demo purposes
    const currencyPrefix = "Rs.";
    const originalPrice = faker.commerce.price({ min: 100, max: 5000 });
    const discountedPrice = faker.commerce.price({
      min: 100,
      max: Number(originalPrice),
    });
    const rating = Math.round(
      Math.random() * (MAX_RATING - MIN_RATING) + MIN_RATING
    );
    const noOfReviews = Math.floor(Math.random() * 1000 + 1);
    const isFavourite = false;
    const setDisplayActive = true;

    productData.push({
      imgUrl: imgUrl,
      productName: productName,
      currencyPrefix: currencyPrefix,
      originalPrice: originalPrice,
      discountedPrice: discountedPrice,
      rating: rating,
      noOfReviews: noOfReviews,
      isFavourite: isFavourite,
      setDisplayActive: setDisplayActive,
    });
  }

  return productData;
};

export const TrendsData = getTrendsData();
export const SuggestionData = getSuggestionData();
export const ProductData = getProductData();
