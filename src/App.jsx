import { useState } from 'react'
import './style/App.css'
import productImgDesktop from './assets/image-product-desktop.jpg'
import productImgMobile from './assets/image-product-mobile.jpg'

function App() {
  
  return (
    <main>
      <section id='product-cards-container'>
        <div className="product-card">
          <div className="product-card-image">
            <picture>
              <source media='(min-width: 768px)' srcSet={productImgDesktop} />
              <source media='(max-width: 767px)' srcSet={productImgMobile} />
              <img src={productImgMobile} alt='Perfume bottle' />
            </picture>
          </div>
          <div className="product-card-info">
            <small className="card-label">Perfume</small>
            <h5 className="card-title">Gabrielle Essence Eau De Parfum</h5>
            <p className="card-desc">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
            <p><span className='card-price'>$149.99</span><span className='card-old-price'>$169.99</span></p>
            <button type="button" className='card-add-to-cart'>Add to Cart</button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
