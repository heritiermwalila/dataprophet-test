import React, { useState } from 'react'

import '../styles/Search.css';
import { ToggleColumns } from './ToggleColumns';
import { ProductList } from './ProductList';
import { FilterForm } from './FilterForm';

export const Search = (props) => {
  const [price, setPrice] = useState({ priceFrom: '', priceTo: '' });

  const [columns, setColumns] = useState({
    id: true,
    name: true,
    department: true,
    price: true,
    currency: true,
  });
  const onPriceInputChange = (name, value) => {
    // TODO: implement price change handler
    setPrice(prev => ({...prev, [name]: value}))
  }

  const onCheckboxClick = (name, checked) => {
    // TODO: implement checkbox click handler
    console.log("HERE", {...columns, [name]: checked});
    setColumns(prev => ({...prev, [name]: checked}))

  }

  const filterProducts = React.useMemo(() => {
    
      // TODO: implement handler for filtering products by price range
      let products = props.products
      if(price.priceFrom && price.priceTo){
        products = products.filter(product => {
          if(product.price >=price.priceFrom && product.price <=price.priceTo){
            return product
          }
        })
      }
      
      if(price.priceFrom && !price.priceTo){
        products = products.filter(product => {
          if(product.price >= price.priceFrom){
            return product
          }
        })
      }
      
      if(price.priceTo && !price.priceFrom){
        products = products.filter(product => {
          if(product.price <= price.priceTo){
            return product
          }
        })
      }
  
      return products
    
  }, [price])

  let displayedProducts = filterProducts
  return (
    <div className="Products">
      <FilterForm
        priceFrom={price.priceFrom}
        priceTo={price.priceTo}
        onPriceInputChange={onPriceInputChange} />

      <ToggleColumns
        onCheckboxClick={onCheckboxClick}
        columns={columns} />

      <ProductList
        products={displayedProducts}
        columns={columns} />
    </div>
  );
}

export default Search;
