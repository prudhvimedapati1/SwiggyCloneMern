import React from 'react'
import ReactDom from 'react-dom'
import './modal.css'



export default function Modal({ children, onClose }) {

  return ReactDom.createPortal(
    <>
      <div className='modal__overlay' />
      <div className='modal__styles'>
        <button className='close__button' onClick={onClose}> X </button>
        {children}
      </div>
    </>,
    document.getElementById('cart-root')
  )
}
