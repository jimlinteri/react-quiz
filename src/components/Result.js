import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function Result(props) {
  return (
  <ReactCSSTransitionGroup
    className="container result"
    component="div"
    transitionName="fade"
    transitionEnterTimeout={800}
    transitionLeaveTimeout={500}
    transitionAppear
    transitionAppearTimeout={500}
  >
    <div>
      You are <strong>{props.quizResult}</strong> by heart!
    </div>
    <div>
      <br></br>
      <a href="">Play again!</a>
    </div>
  </ReactCSSTransitionGroup>
);
}
  Result.propTypes = {
    quizResult: PropTypes.string.isRequired,
  };

export default Result;
