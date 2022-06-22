import React from "react";
// import Contador from "/workspace/react-hello/src/js/component/Counter.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div className="bigCounter">
			<div className="calendar">
			<i className="far fa-clock"></i>
			</div>
			
			<div className="four">{props.digitFour}</div>
			<div className="three">{props.digitThree}</div>
			<div className="two">{props.digitTwo}</div>
			<div className="one">{props.digitOne}</div>
		</div>
	);
};

export default Home;
