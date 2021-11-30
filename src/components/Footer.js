import React from 'react'
import { Link } from 'gatsby'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'
import ImageCarousel from './ImageCarousel'
import images from './images.js'


const Footer = class extends React.Component {
  
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered has-text-white-ter">      
          <div className="container has-text-white-ter">
          <address style={{paddingBottom: '1rem'}}>
          <h2 style={{color: '#fff'}}>Besöksadress:</h2>
          <h5 style={{color: '#fff'}}>Hallen: Fagerhultsvägen 61</h5>
          <h5 style={{color: '#fff'}}>Utebanan: Bockövägen 16</h5>
        </address>    
            <div className="columns" 
              style={{ 
                maxWidth: '100vw',
                borderTop: '1px solid #fff', 
                marginTop: '1rem',
                paddingTop: '1rem' 
               }}>                                   
              <div className="column is-4">
                <section className="menu">                  
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Hem
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        Om klubben & kontakt
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        Tennis i Hindås
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact/">
                        Bli medlem
                      </Link>
                    </li>              
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Händer i klubben
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://www.facebook.com/groups/193826577350411">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://www.instagram.com/hindas_tennisklubb/">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>                       
            </div>
          </div>  
          <div
            style={{ 
              display: 'flex',
              flexDirection: 'column',
              width: '400px',
              margin: '3rem auto'
            }}>
            <ImageCarousel images={images} /> 
          </div>        
        </div>
      </footer>
    )
  }
}

export default Footer
