import { Col, Container, Row } from 'react-bootstrap'
import SingleItem from '../components/SingleItem'
import { items } from '../data'

const Products = () => {
  // sort by price
  return (
    <Container className='my-4 shadow-lg p-3 mb-5 bg-white rounded '>
      <h3 className='mb-4'>All Products</h3>

      <Row xs={2} md={2} lg={5} className='g-4'>
        {items.map((item) => (
          <Col key={item.id}>
            <SingleItem {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Products
