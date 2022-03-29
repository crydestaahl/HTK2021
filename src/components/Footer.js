import React from 'react'
import { Link } from 'gatsby'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import ImageCarousel from './ImageCarousel'
import images from './images.js'
import appstore from '../../static/img/appstore.png'
import googleplay from '../../static/img/googleplay.png'

const Footer = class extends React.Component {
  
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered has-text-white-ter">      
          <div className="container has-text-white-ter">
          <address style={{paddingBottom: '1rem'}}>
          <h2 style={{color: '#fff'}}>Besöksadress:</h2>
          <h5 style={{color: '#fff'}}>Fagerhultsvägen 61</h5>
        {/*  <h5 style={{color: '#fff'}}>Utebanan: Bockövägen 16</h5> */} 
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
                      <Link className="navbar-item" to="/omochkontakt">
                        Om klubben & kontakt
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/tennisihindas">
                        Tennis i Hindås
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/blimedlem">
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
            
              <section>          
                <ul className="menu-list">                
                  <li>
                    <a className="store-item-apple" href="https://apps.apple.com/se/app/matchi/id720782039" target="_blank">
                      <img src={appstore} alt="link to app store" style={{
                        height: '80px',
                      }}></img>
                    </a>
                  </li>
                  <li>
                    <a className="store-item-google" href="https://play.google.com/store/apps/details?id=com.matchi&gl=SE" target="_blank">
                      <img 
                        src={googleplay} 
                        alt="link to google play"
                        style={{
                          height: '47px',
                        }}></img>
                    </a>
                  </li>              
                </ul>
              </section>
            
              <div className="column is-4 social" style={{ marginTop: '3rem' }}>
                <a title="facebook" href="https://www.facebook.com/groups/193826577350411">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em'}}
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
          <div className="img-carousel">
            <ImageCarousel images={images} /> 
          </div>        
        </div>
      </footer>
    )
  }
}

export default Footer
