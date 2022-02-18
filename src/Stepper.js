import React, { useState, useEffect } from "react";
import "./Stepper.css";

const Stepper = ({ step }) => {
	console.log("step passed=", step);

	let selectPayment = step;
	console.log("selectPayment=", selectPayment);

	const [payment, setPayment] = useState(selectPayment);
	console.log("passed", payment);

	useEffect(() => {
		if (selectPayment > 0) {
			setPayment(selectPayment);
			console.log("useEffect called :)");
		}
		return () => {
			const items = document.getElementsByClassName("step-counter");
			items[payment].className += " style";
			const installItems =
				document.getElementsByClassName("step-counter").length;
			console.log("Installment total =", installItems);
		};
	}, [payment, selectPayment]);

	//snippetize this code

	return (
		<div className="stepper-wrapper">
			<div className="stepper-item">
				<div className="step-counter one"></div>
			</div>
			<div className="stepper-item">
				<div className="step-counter two"></div>
			</div>
			<div className="stepper-item">
				<div className="step-counter three"></div>
			</div>
			<div className="stepper-item">
				<div className="step-counter four"></div>
			</div>
		</div>
	);
};

export default Stepper;
