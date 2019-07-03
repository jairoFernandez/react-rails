import React from "react"
import PropTypes from "prop-types"
class NewComponent extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting new component: {this.props.greeting}
      </React.Fragment>
    );
  }
}

NewComponent.propTypes = {
  greeting: PropTypes.string
};
export default NewComponent
