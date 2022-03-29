import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  render() {
    return (
      <Layout>
        <section className="section" style={{ margin: '1rem' }}>
          <div className="container">
            <div className="content">
              <h1>Träna tennis</h1>

              <p>Klubben anordnar tennisskola för barn och ungdomar samt för vuxna. Träningen leds av klubbens utbildade tränare. För att gå i tennisskola krävs medlemskap i föreningen.<br /><br />
             
              <h3>Våra tränare:</h3>
              Michal Mlocinski<br />
              
              Klaudia Mlocinska<br />
              
              Linn Bergman<br />
              
              Christoffer Rydeståhl</p>

              <h1>Intresseanmälan tenniskola</h1>

              <form
                name="tennisskola"
                method="post"
                action="/skola/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="tennisskola" value="tennisskola" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'name'}>
                    För- och efternamn
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>            
                <div className="field">
                  <label className="label" htmlFor={'socialnumber'}>
                    Personnummer
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'socialnumber'}
                      onChange={this.handleChange}
                      id={'socialnumber'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'address'}>
                    Adress
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'address'}
                      onChange={this.handleChange}
                      id={'address'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'postaddress'}>
                    Postnummer och ort
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'postaddress'}
                      onChange={this.handleChange}
                      id={'postaddress'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'tel'}>
                    Telefonnummer
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'tel'}
                      onChange={this.handleChange}
                      id={'tel'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'email'}>
                    Email
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'message'}>
                    Tidigare erfarenheter
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <button className="button is-link submit-btn" type="submit">
                    Skicka ansökan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
