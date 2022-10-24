
import { Container } from 'react-bootstrap'
import Img_25  from './../styles/image_25.png'
import styles from './About.module.css'

const About = () => {
  return (
    <Container style={{ height: '100%' }} className={styles.container} >
      <div className={styles.text} >
      <h2 style={{ fontWeight: '700' }}>About</h2>
      <h1 style={{ fontWeight: '700' }} >US</h1>
      <h4>Lorem ipsumLorem ipsumLorem ipLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem ipsumLorem ipsumLorem ipsum </h4>
      </div>
      <img className={styles.img} src={ Img_25 } alt='image'/>
    </Container>
  )
}

export default About


// className='d-flex flex-row justify-content-space-between align-items-center bg-dark text-center text-white'