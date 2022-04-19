import Img from "gatsby-image"


<div class="card" key={post.id}>
  <div class="card-image">
    <figure class="image is-4by3">
      <a href={post.fields.slug}>
      <div className="featured-thumbnail">
      <PreviewCompatibleImage
        imageInfo={{
          image: post.frontmatter.featuredimage,
          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
        }}
      />
    </div>
      </a>
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">{post.frontmatter.title}</p>
        <p class="subtitle is-6">@johnsmith</p>
      </div>
    </div>

    <div class="content">
      {post.frontmatter.description}
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br />
      <time datetime="2016-1-1">{post.frontmatter.date}</time>
    </div>
  </div>
</div>