import React, { useState, useEffect } from 'react';


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Contador = () => {
	const [count, setCount] = useState(0);
	useEffect(() => {
		const myTimeout = setTimeout(myGreeting, 1000);
		console.log("Ha cambiado el valor de Count")
		console.log("count", count)
	  });
	  function myGreeting() {
		setCount(count + 1)
	  }
	  return (
		<div>
		  <p>You clicked {count} times</p>
		  <button onClick={() => setCount(count + 1)}>
			Click me
		  </button>
		</div>
	  );
};

export default Contador;
