import ProductRow from "./ProductRow"

function ProductTable(props) {

  const { products } = props

  return (
    <div>

        <table style={{
          width:'90vh',
          padding:'30px'
        }}>
          <thead>
            <tr style={{
            backgroundColor:'#E6EDEF',
            borderBottom:'1px solid #E6EDEF',
            fontWeight:'bold',
          }}>
              <td>Name</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>
            {products.map(each => <ProductRow key={each.id} product={each} />)}
          </tbody>
        </table>

    </div>
  )
}

export default ProductTable