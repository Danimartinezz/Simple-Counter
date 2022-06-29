import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";


const SimpleCounter = (props) => {
	return (
		<div className="bigCounter">
			<div className="calendar">
			<i className="far fa-clock"></i>
			</div>
			
			<div className="four">{props.digitFour % 10}</div>
			<div className="three">{props.digitThree % 10}</div>
			<div className="two">{props.digitTwo % 10}</div>
			<div className="one">{props.digitOne % 10}</div>
		</div>
	);
};
export default SimpleCounter;



SimpleCounter.propTypes ={
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number,
};

