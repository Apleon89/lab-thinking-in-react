import { useState } from 'react';

function SearchBar(props) {
  const [search, setSearch] = useState('');
  const [ onlyInStock, setOnlyInStock ] = useState(false)


  return (
    <div>
      <label htmlFor="search">Search</label>
      <input
        type="text"
        name="search"
        id="search"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
          props.filterProducts(event.target.value, onlyInStock);
        }}
      />
      <br />
      <input
        type="checkbox"
        name="stock"
        id="stock"
        onChange={(event) => {
          setOnlyInStock(!onlyInStock)
          props.onlyStockProducts(!onlyInStock)
        }}
      />
      <label htmlFor="stock">Only show products in stock</label>
    </div>
  );
}

export default SearchBar;
