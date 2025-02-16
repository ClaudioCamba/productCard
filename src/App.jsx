import { useState } from 'react'
import './style/App.css'
import productImgDesktop from './assets/image-product-desktop.jpg'
import productImgMobile from './assets/image-product-mobile.jpg'

function App() {
  
  return (
    <main>
      <section id='product-cards-container'>
        <article className="product-card">
          <div className="product-card-image">
            <picture>
              <source media='(min-width: 633px)' srcSet={productImgDesktop} />
              <source media='(max-width: 632px)' srcSet={productImgMobile} />
              <img src={productImgMobile} loading="lazy" alt='A Chanel perfume bottle lying on its side with the logo facing upward, surrounded by leaves.' />
            </picture>
          </div>
          <div className="product-card-info">
            <small className="card-label">Perfume</small>
            <h5 className="card-title">Gabrielle Essence Eau De Parfum</h5>
            <p className="card-desc">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
            <div className='card-price'><span className='card-current-price'>$149.99</span><span className='card-old-price'>$169.99</span></div>
            <button type="button" className='card-add-to-cart-btn'><span>Add to Cart</span></button>
          </div>
        </article>
      </section>
    </main>
  )
}

export default App
