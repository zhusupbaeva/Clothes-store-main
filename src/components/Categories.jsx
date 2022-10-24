import { Container, Row } from 'react-bootstrap'
import { categories } from '../data'
import Category from './Category'

const Categories = () => {
  return (
    <Container className='mt-5'>
      <h3 style={{ fontWeight: '600' }} className='mb-4'>Category</h3>
      <Row xs={1} md={2} lg={4} className='g-4 '>
        {categories.map((item) => (
          <Category className='shadow-lg p-3 mb-5 bg-white rounded'
            key={item.id}
            img={item.img}
            title={item.title}
            url={item.url}
          />
        ))}
      </Row>
    </Container>
  )
}

export default Categories
