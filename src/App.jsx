import React, { useEffect } from "react";
import Pagination from "./components/Pagination";

const LIMIT = 10;


function App() {

  function fetchProducts(skip, limit) {
    fetch(`https://dummyjson.com/products?skip=${skip}&limit=${limit}`)
      .then(res => res.json())
      .then(console.log);
  }

  useEffect(() => {
    fetchProducts(0, LIMIT)
  }, [])

  function onPageChange(page) {
    fetchProducts(LIMIT * (page - 1), LIMIT)
  }

  return (
    <Pagination total={59} perPage={LIMIT} onPageChange={onPageChange} />
  );
}

export default App;