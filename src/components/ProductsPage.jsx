import { useState } from 'react'
import dataJson from '../data.json'
import ProductTable from './ProductTable';
import SearchBar from './SearchBar'

function ProductsPage() {

    const [ products ] = useState(dataJson)
    const [ productsToDisplay, setProductsToDisplay ] = useState(products)

    const onlyStockProducts = (checkboxValue) => {
      if( checkboxValue) {
        const onlyStockProducts = products.filter( each => each.inStock === checkboxValue)
        setProductsToDisplay(onlyStockProducts)
      } else {
        setProductsToDisplay(products)
      }
    }

    const filterProducts = (searchInput, checkboxValue) =>{
      if (!checkboxValue){
        const filterProducts = products.filter( each => each.name.includes(searchInput))
        setProductsToDisplay(filterProducts)
      } else {
        const filterProducts = products.filter( each => each.name.includes(searchInput) && each.inStock === checkboxValue)
        setProductsToDisplay(filterProducts)
      }
    }

  return (
    <div>

        <SearchBar filterProducts={filterProducts} onlyStockProducts={onlyStockProducts}/>

        <ProductTable products={productsToDisplay}/>

    </div>
  )
}

export default ProductsPage