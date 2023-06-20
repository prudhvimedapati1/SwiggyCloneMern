import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer__container'>
      <Link to={'/'} className='footer__home'><h2>SwiggyClone</h2></Link>

      <div className="footer__socials">
        <a href="https://www.facebook.com/prudhvimedapati" target='_blank' className='footer__social'>Facebook</a>
        <a href="https://www.instagram.com/prudhvimedapati/" target='_blank' className='footer__social'>Instagram</a>
        <a href="https://twitter.com/prudhvimedapati" target='_blank' className='footer__social'>Twitter</a>
      </div>

      <div className="footer__copyright">
        <small>&copy; SwiggyClone. All rights reserved</small>
      </div>
    </div>
  )
}

export default Footer