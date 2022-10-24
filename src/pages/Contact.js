import { Form, Row, Col, Button, Container } from 'react-bootstrap'

const Contact = () => {
  return (
    <Container className='my-4'>
      <h1>Contact Us</h1>
      <Form>
        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formGridEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
          </Form.Group>

          <Form.Group as={Col} controlId='formGridPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>
        </Row>

        <Form.Group className='mb-3' controlId='formGridAddress1'>
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder='1234 Main St' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formGridAddress2'>
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder='Apartment, studio, or floor' />
        </Form.Group>

        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formGridCity'>
            <Form.Label>City</Form.Label>
            <Form.Control placeholder='City' />
          </Form.Group>

          {/* <Form.Group as={Col} controlId='formGridZip'>
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group> */}
        </Row>

        <Form.Group className='mb-3' controlId='formGridAddress2'>
          <Form.Label>Questions </Form.Label>
          <Form.Control placeholder='Questions' />
        </Form.Group>

        <Form.Group className='mb-3' id='formGridCheckbox'>
          <Form.Check type='checkbox' label='Check me out' />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default Contact
