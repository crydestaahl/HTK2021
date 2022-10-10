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
              <h1>Bli medlem hos oss</h1>

              <p>För att ansöka om medlemskap, vänligen fyll i formuläret nedan. För medlemsfrågor, maila <a href="mailto:medlem@hindastennisklubb.net">medlem@hindastennisklubb.net</a> <br /><br />

              Priser medlemskap<br />
              
              Familj: 500kr<br />
              
              Senior: 300kr<br />
              
              Junior: 150kr (t.o.m året man fyller 18)</p>

              <form
                name="medlemsansokan"
                method="post"
                action="/blimedlem/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="medlemsansokan" value="medlemsansokan" />
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
                  <label className="label" htmlFor={'medlemsansokan'}>
                    Medlemstyp
                  </label>
                  <div className="control">
                    <input
                      className="radio"
                      type={'radio'}
                      name={'medlemsansokan'}
                      onChange={this.handleChange}
                      id={'vuxen'}
                      required={true}
                      value={"Vuxen"}
                    />
                    <label for={'vuxen'} style={{marginLeft:'1rem'}}>Vuxen</label>
                  </div>
                  <div className="control">
                    <input
                      className="radio"
                      type={'radio'}
                      name={'medlemsansokan'}
                      onChange={this.handleChange}
                      id={'junior'}
                      required={true}
                      value={"Junior"}
                    />
                    <label for={'junior'} style={{marginLeft:'1rem'}}>Junior 0-18 år</label>
                  </div>
                  <div className="control">
                    <input
                      className="radio"
                      type={'radio'}
                      name={'medlemsansokan'}
                      onChange={this.handleChange}
                      id={'familj'}
                      required={true}
                      value={"Familj"}
                    />
                    <label for={'familj'} style={{marginLeft:'1rem'}}>Familj</label>
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'socialnumber'}>
                    Födelsedatum
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
                    Message
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                      placeholder="Vid familjemedlemskap behöver vi personnummer och namn för samtliga familjemedlemmar."
                    />
                  </div>
                </div>
                <div className="field">
                  <button className="button is-link submit-btn" type="submit">
                    <b>Skicka ansökan</b>
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
