import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";

function simulateNetworkRequest() {
	return new Promise((resolve) => setTimeout(resolve, 2000));
}

function LoadingButton(props) {
	const [isLoading, setLoading] = useState(false);
	const [payLoad, setPayLoad] = useState("PAY NOW");
	const [paid, setPaid] = useState(false);

	useEffect(() => {
		if (isLoading) {
			simulateNetworkRequest().then(() => {
				setLoading(false);
				setPayLoad("PAID");
				setPaid(true);
			});
		}
	}, [isLoading]);

	const handleClick = () => {
		setLoading(true);
	};

	return (
		<Button
			className={`pay ${paid ? "paid" : ""}`}
			disabled={isLoading}
			onClick={!isLoading ? handleClick : null}
		>
			{isLoading ? "Processing…" : payLoad}
		</Button>
	);
}

//render(<LoadingButton />);

export default LoadingButton;
