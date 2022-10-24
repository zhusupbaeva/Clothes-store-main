import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import SingleItem from '../components/SingleItem'
import { items } from '../data'

const Product = () => {
  const { productType } = useParams()
  // const { productGender } = useParams()
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <Container className='my-4 shadow-lg p-3 mb-5 bg-white rounded  '>
      <h3 className='mb-4'>{capitalizeFirstLetter(productType)}</h3>
      <Row xs={1} md={2} lg={5} className='g-4 '>
        {items
          .filter((item) => item.type  === productType )
          .map((item) => (
            <Col key={item.id}>
              <SingleItem {...item} className='shadow-lg p-3 mb-5 bg-white rounded'/>
            </Col>
          ))}
      </Row>
    </Container>
  )
}

export default Product
