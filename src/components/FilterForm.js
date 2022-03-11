import React from 'react'

export const FilterForm = (props) => {

  const onPriceInputChange = (e) => {
    // TODO: implement handler
    props.onPriceInputChange(e.target.name, e.target.value)
  }

  // TODO: bind handlers and props
  return (
    <div>
      <label htmlFor="priceFrom">Price From:</label>
      <input
        type="number"
        id="priceFrom"
        name="priceFrom"
        placeholder="Price from..." onChange={onPriceInputChange} />
      <label htmlFor="priceTo">Price To:</label>
      <input
        type="number"
        id="priceTo"
        name="priceTo"
        placeholder="Price to..." onChange={onPriceInputChange}/>
    </div>
  )
}
