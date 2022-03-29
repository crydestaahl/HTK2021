import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/thumb-logo.jpg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="HindåsTK" style={{ width: '64px', height: '64px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="menuitem"
              tabIndex={0}
              onKeyPress={() => this.toggleHamburger()}
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">          
            </div>
            <div className="navbar-end has-text-centered">
            <Link className="navbar-item" to="/tennisihindas">
                Tennis i Hindås
              </Link>
              <Link className="navbar-item" to="/blog">
                Händer i klubben
              </Link>
              <Link className="navbar-item" to="/blimedlem">
                Bli medlem
              </Link>
              <Link className="navbar-item" to="/skola">
                Träna tennis
              </Link>
              <Link className="navbar-item" to="/omochkontakt">
                Om klubben & Kontakt
              </Link>
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
              <a title="facebook" className="navbar-item" href="https://www.facebook.com/groups/193826577350411">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1.5em', height: '1.5em'}}
                  />
              </a>
              <a title="instagram" className="navbar-item" href="https://www.instagram.com/hindas_tennisklubb/">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1.5em', height: '1.5em' }}
                  />
              </a>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
