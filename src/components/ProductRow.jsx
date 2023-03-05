

function ProductRow(props) {

    const { product } = props

    const inStock = { color:'black'}
    const noStock = { color:'red'}

    const isInStock = product.inStock ? inStock : noStock

  return (
    <tr style={isInStock}>
        <td>{product.name}</td>
        <td>{product.price}</td>
    </tr>
  )
}

export default ProductRow