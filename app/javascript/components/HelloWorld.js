import React from "react"
import PropTypes from "prop-types"
import Post, { Person } from './Post'
import PostDemo from './PostDemo';
import NewComponent from './my_subdirectory/NewComponent';

class HelloWorld extends React.Component {
  renderPost = (posts) => {
    return (
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
      </section>)
  }

  render () {
    const { posts } = this.props;
    return (
      <React.Fragment>
        <p>Greeting!!! {this.props.greeting}</p>
        <hr/>
        {/* <NewComponent /> */}
        {this.renderPost(posts)}
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string,
  posts: PropTypes.array
};
export default HelloWorld
