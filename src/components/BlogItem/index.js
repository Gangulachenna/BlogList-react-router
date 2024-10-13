// Write your JS code here

import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <li className="blogItem-container">
      <div className="blog-item">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
      </div>
      <div>
        <p className="date">{publishedDate}</p>
      </div>
    </li>
  )
}

export default BlogItem
