import { useEffect, useState } from "react";

const names = ["akash", "sagar", "sachin", "ganu", "sanket"];

const SearchFilter = () => {
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const [searchItem, setSearchItem] = useState("");
  //   const handleFilterNames = (name) => {

  const filterdNames = names.filter((item) =>
    item.toLowerCase().includes(searchItem.toLowerCase()),
  );
  // setFilterdNames(fName);
  //   };

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Called");
      setDebouncedSearch(searchItem);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchItem]);

  return (
    <>
      <input type="text" onChange={(t) => setSearchItem(t.target.value)} />
      <h1>All filterd Data is below....</h1>
      {/* {filterdNames.length < 0 && <h2>No data found...</h2>} */}
      {filterdNames.map((item) => (
        <h3> {item}</h3>
      ))}
    </>
  );
};

export default SearchFilter;
