import React from "react"
import PropTypes from "prop-types"
import Post, { Person } from './Post'

class HelloWorld extends React.Component {
  render () {
    console.log(this.props)
    return (
      <React.Fragment>
        Greeting!!! {this.props.greeting}
        <hr/>
        <section className="section">
          <div className="container is-fluid">
            <Post
              title={"Clean code"}
              published={true}
              publishedBy={new Person("Uncle bob")}
            />
            <Post
              title={"Clean code"}
              published={true}
              publishedBy={new Person("Uncle bob")}
            />
        </div>
      </section>
          
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
