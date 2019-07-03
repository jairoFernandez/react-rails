import React from "react"
import PropTypes from "prop-types"

export class Person {
  constructor(name){
    this.name = name;
  }
}

class Post extends React.Component {

  render () {
    return (
      <React.Fragment>
      <section className="section">
        <div className="container">
          <div className="card columns">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">{this.props.title}</p>
                </div>
              </div>

              <div className="content">
                {this.props.publishedBy.name}<br/>
                {this.props.published ? 'Published' : 'No published'} <br/>
              </div>
            </div>
          </div>        
        </div>
        </section>
      </React.Fragment>
    );
  }
}

Post.propTypes = {
  title: PropTypes.string,
  published: PropTypes.bool,
  publishedBy: PropTypes.instanceOf(Person)
};
export default Post
