import React from "react"
import PropTypes from "prop-types"
import Post, { Person } from './Post'

class HelloWorld extends React.Component {
  render () {
    const { posts } = this.props;
    console.log(this.props)
    return (
      <React.Fragment>
        Greeting!!! {this.props.greeting}
        <hr/>
        <section className="section">
          <div className="container is-fluid">
            {posts && posts.map(post => {
              return (<Post
                key={post.id}
                title={post.title}
                published={post.published}
                publishedBy={new Person(post.publishedBy.name)}
              />)
            })}
        </div>
      </section>
          
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string,
  posts: PropTypes.array
};
export default HelloWorld
