// advance search ->   done
// Infininit scroll
// pagination

import { useEffect, useRef, useState } from "react";
import classes from "./advance-search.module.css";

const AdvanceSearch = () => {
  const [products, setProducts] = useState([]);
  const [filterdProducts, setFilteredProducts] = useState([]);

  // keeping track of all filters
  const [filters, setFilters] = useState({
    searchTerm: "",
    category: "",
    minPrice: 0,
    maxPrice: Infinity,
  });
  let time;

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const prods = await res.json();
      setProducts(prods.products);
      setFilteredProducts(prods.products);
    };
    fetchProducts();
  }, []);

  // Apply ALL filters together
  const applyFilters = (updatedFilters) => {
    const foundItems = products.filter((item) => {
      const matchesSearch =
        updatedFilters.searchTerm === "" ||
        item.title
          ?.toLowerCase()
          .includes(updatedFilters.searchTerm.toLowerCase()) ||
        item.description
          ?.toLowerCase()
          .includes(updatedFilters.searchTerm.toLowerCase()) ||
        item.category
          ?.toLowerCase()
          .includes(updatedFilters.searchTerm.toLowerCase());

      const matchesCategory =
        updatedFilters.category === "" ||
        item.category.toLowerCase() === updatedFilters.category.toLowerCase();

      const matchesPrice =
        item.price >= updatedFilters.minPrice &&
        item.price <= updatedFilters.maxPrice;

      console.log("matchesSearch", matchesSearch);
      console.log("matchesCategory", matchesCategory);
      console.log("matchesPrice", matchesPrice);

      return matchesSearch && matchesCategory && matchesPrice;
    });
    console.log("foundItems", foundItems);
    setFilteredProducts(foundItems);
  };

  const handleOnChange = (e) => {
    clearTimeout(time);
    time = setTimeout(() => {
      const updatedFilters = { ...filters, searchTerm: e.target.value };
      setFilters(updatedFilters);
      applyFilters(updatedFilters);
    }, 300);
  };

  const handleCategoryChange = (e) => {
    const updatedFilters = { ...filters, category: e.target.value };
    setFilters(updatedFilters);
    applyFilters(updatedFilters);
  };

  const handlePriceFilter = (e) => {
    const name = e.target.name;
    const updatedFilters = {
      ...filters,
      [name === "min" ? "minPrice" : "maxPrice"]:
        parseFloat(e.target.value) || 0,
    };
    setFilters(updatedFilters);
  };

  const applyPriceFilter = () => {
    applyFilters(filters);
  };

  return (
    <>
      <SearchBar handleOnChange={handleOnChange} />
      <CustomeFilter
        handleCategoryChange={handleCategoryChange}
        handlePriceFilter={handlePriceFilter}
        applyPriceFilter={applyPriceFilter}
      />
      {filterdProducts.map((item) => {
        return <SingleProduct key={item.id} item={item} />;
      })}
    </>
  );
};

const CustomeFilter = ({
  handleCategoryChange,
  handlePriceFilter,
  applyPriceFilter,
}) => {
  return (
    <>
      <span>
        <label htmlFor="category">Filter By Category- </label>
        <select name="category" id="category" onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          <option value="beauty">Beauty</option>
          <option value="fragrances">Fragrances</option>
          <option value="furniture">Furniture</option>
          <option value="groceries">Groceries</option>
        </select>
      </span>

      <div className={classes.priceFilter}>
        <h3>Filter by price</h3>
        <div className={classes.priceInputs}>
          <input
            type="number"
            placeholder="Min Price."
            name="min"
            onChange={handlePriceFilter}
          />
          <input
            type="number"
            placeholder="Max Price."
            name="max"
            onChange={handlePriceFilter}
          />
        </div>
        <button type="button" onClick={applyPriceFilter}>
          Apply
        </button>
      </div>
    </>
  );
};

const SearchBar = ({ handleOnChange }) => {
  return (
    <input
      style={{ padding: "10px", margin: "10px", fontSize: "15px" }}
      type="text"
      onChange={handleOnChange}
      placeholder="Type to search...."
    />
  );
};

const SingleProduct = ({ item }) => {
  return (
    <div style={{ border: "1px solid #A3A3A3" }}>
      <span>{item.title}</span>
      <h5>{item.description}</h5>
      <img width="100px" height="100px" src={item.images[0]} alt={item.title} />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <span>
          <b>Brand</b> - {item.brand}
        </span>
        <span>
          <b>Category</b> - {item.category}
        </span>
        <span>
          <b>Rating</b> - {item.rating}
        </span>
        <span>
          <b>Price</b> - ${item.price}
        </span>
      </div>
    </div>
  );
};

export default AdvanceSearch;
