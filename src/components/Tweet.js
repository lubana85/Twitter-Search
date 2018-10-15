import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tweet extends Component {
    /**
     * render
     * @returns {*}
     */
  render() {

    const { text, url }  = this.props;
    return (
     <div className="tweet">
        <a href={url} className="link">
        <br/>
        {text}
        </a>
    </div>
    );
  }
}

Tweet.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  url: PropTypes.string,
};
Tweet.defaultProps = {
    text: '',
    url: '',
};

export default Tweet;
