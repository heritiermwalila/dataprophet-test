import React from 'react'

export const ProductList = (props) => {
  const [headers, setHeaders] = React.useState(['ID', 'Name', 'Department', 'Price'])
  // TODO: display appropriate header
  // TODO: display only chosen columns
  // TODO: display products as new table rows

  React.useEffect(() => {
    if(!props.columns['id']){
      const headersCp = [...headers]
      
      setHeaders(headersCp.filter(h => h != 'ID'))
    }
  }, [headers, setHeaders, props.columns])


  const renderTr = React.useCallback(() => {


    return props.products.map(product => {
     
      return <tr key={product.id}>
      {props.columns['id'] && <td>{product.id}</td>}
      <td>{product.name}</td>
      <td>{product.department}</td>
      <td>{product.currency}{product.price}</td>
    </tr>
    })


  }, [props.products, props.columns])



 

  return (
    <div id="product-list">
      <header>
        <strong>Product List (0 items)</strong>
      </header>
      <table>
        <thead>
          
          <tr>
          {
            headers.map(header => <th key={header}>{header}</th>)
          }
          </tr>
        </thead>
        <tbody>
        {
           renderTr()
        }
        </tbody>
      </table>
    </div>
  )
}
