import React from 'react'
import Layout from '../../components/Layout'
import BlogRollOld from '../../components/BlogRollAllPosts'
import BlogRollAllPosts from '../../components/BlogRollAllPosts'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/brands-people.jpeg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              color: 'white',
              padding: '1rem',
            }}
          >
            Händer i klubben
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRollAllPosts />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
