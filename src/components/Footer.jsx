import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa' 

const Footer = () => {
  return (
    <footer className='bg-dark text-center text-white'>
      {/* social media */}
      <section className='mb-4 container p-4'>
        <a
          className='btn btn-outline-light rounded-circle m-1'
          href='https://www.facebook.com/id=1000231393376950/'
          role='button'
        >
          <FaFacebook />
        </a>

        <a
          className='btn btn-outline-light rounded-circle m-1'
          href='https://twitter.com/kgcthu'
          role='button'
        >
          <FaTwitter />
        </a>

        <a
          className='btn btn-outline-light rounded-circle m-1'
          href='https://github.com/zhusupbaeva'
          role='button'
        >
          <FaGithub />
        </a>

        <a
          className='btn btn-outline-light rounded-circle m-1'
          href='https://www.linkedin.com/in/kaung-si-thu-518759224/'
          role='button'
        >
          <FaLinkedin />
        </a>

        <a
          className='btn btn-outline-light rounded-circle m-1'
          href='https://www.instagram.com/zhusupbaeva.a/'
          role='button'
        >
          <FaInstagram />
        </a>
      </section>

      {/* Copyright */}
      <div className='text-center p-3 '>
        © 2022 Copyright by{' '}
        <a
          className='text-white text-decoration-none mb-0'
          href='https://github.com/zhusupbaeva'
        >
          Zhusupbaeva Aizirek
        </a>
      </div>
    </footer>
  )
}

export default Footer
