import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline index-info">
    {gridItems.map((item) => (
      <div key={item.text} className="column " style={{marginBottom: '3rem', whidth: '33%'}}>
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                width: '100%',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <p className="featured-p" style={{margin:'0 1rem'}}>{item.text} <br/><a href={item.link} style={{color: '#b71020'}}>Läs mer...</a></p>
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
      link: PropTypes.string,
    })
  ),
}

export default FeatureGrid
