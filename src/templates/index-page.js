import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import logo from '../../static/img/thumb-logo.png'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `bottom left`,
        backgroundAttachment: `fixed`,   
      }}
    >
      
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          position: 'relative',
          top: '-10rem'
        }}
      >
        <Link to="/" className="navbar-item" title="Logo">
          <img src={logo} alt="HindåsTK" style={{ width: '64px', height: '64px' }} />
        </Link>
        <div className="jumbo-heading">
          <h3
            className="has-text-weight-bold is-size-4-mobile is-size-5-tablet is-size-4-widescreen heading-font"
            style={{                  
              color: 'white',
              lineHeight: '1',
              padding: '0.25em',
            }}
          >
            {subheading}
          </h3>

          <h1
            className="has-text-weight-bold is-size-1-mobile is-size-2-tablet is-size-1-widescreen heading-font "
            style={{      
              color: 'white',
              lineHeight: '1',
              padding: '0.25em',
              marginTop: '0.5rem',
            }}
          >
            {title}
          </h1>
        </div>
        <div className="columns btn-index">
          <div className="column">
            <div className="buttons">
            <a href="https://www.matchi.se/facilities/hindastk"><button className="button">Boka bana</button></a>
            </div>
          </div>
          <div className="column">
            <div className="buttons">
            <a href="/blimedlem"><button className="button">Bli medlem</button></a>
            </div>
          </div>        
        </div>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                 {/*
                <div className="content">
               
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                 
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                */}
                <div className="columns">
                  <div className="column is-12 heading-news">
                    <h3 className="has-text-weight-semibold is-size-2 ">
                      {heading}
                    </h3>
                  </div>
                </div>
               
               
                <div className="column is-12">              
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Alla inlägg
                    </Link>
                  </div>
                </div>
                <div className="column is-12 heading-news">
                    <h3 className="has-text-weight-semibold is-size-2 ">
                      TENNIS I HINDÅS
                    </h3>
                  </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered" style={{marginBottom:'2rem'}}>
                    <Link className="btn" to="/products">
                      Läs mer
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1600, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
            link
          }
          heading
          description
        }
      }
    }
  }
`
