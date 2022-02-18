import React, { useRef, useState } from "react";
import { BsBank } from "react-icons/bs";
import LoadingButton from "./LoadingButton";
import Stepper from "./Stepper";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";
import Confetti from "react-confetti";
import useWindowResize from "./util/useWindowResize";
import certLogoFooter from "./images/table-logo-footer-trans.png";
import flipbtn from "./images/flip-btn.png";
import caretdown from "./images/caret-down.png";
import caretup from "./images/caret-up.png";
import "./PurchaseCard.css";
//import Expire from "./Expire";

const PurchaseCard = ({ card }) => {
	const ref = useRef();
	const [step, setStep] = useState(0);
	const [show, setShow] = useState(false);
	const [paid, setPaid] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const handlePaid = () => setPaid(true);

	const bnplColors = [
		"#9ce8c2",
		"#60d399",
		"#b9e2fe",
		"#4fb3f6",
		"#bdc7fb",
		"#6d83f3",
		"#ff7968",
		"#ffe8e5",
		"#fedd8e",
		"#fbbe2e",
	];
	const { width } = useWindowResize();
	console.log({ width });

	let newWidth = width - 45;
	console.log({ newWidth });
	return (
		<>
			<div className="card">
				<Flippy
					flipOnHover={false}
					flipOnClick={false}
					flipDirection="vertical"
					ref={ref}
				>
					<FrontSide
						onClick={() => {
							ref.current.toggle();
							setStep(1);
						}}
						className="front"
					>
						<div className="left-column">
							<div className="card-cols">
								<ul>
									<li className="merchant">{card.merchant}</li>
									<li>
										Purchase Date:{" "}
										<span className="emp">{card.purchaseDate}</span>
									</li>
									<li>
										Purchase Amount:{" "}
										<span className="emp">{card.purchaseAmount}</span>
									</li>
									<li>
										<BsBank />
										&nbsp;
										<span className="bank">{card.bank}</span>
									</li>
								</ul>
							</div>
						</div>

						<span className="right-column">
							<div className="card-cols">
								<div className="purchase-status">
									Outstanding Balance
									<br />
									<span className="cash-cta">$1256.11</span>
								</div>
								<div className="purchase-status">
									Next Payment Date <br />
									<span className="cash-cta">Janaury 19, 2022</span>
								</div>
							</div>
						</span>
						<span className="flip-btn">
							<img src={caretup} alt="flip purchase" />
						</span>
					</FrontSide>

					<div className="back">
						<BackSide>
							<div className="install-hd-row">
								<span className="purchase">Happy Feet</span>
							</div>
							<div>
								<div className="install-wrapper">
									<div className="column">
										<div className="left-column-back">
											<span className="install-headers">Payment Date</span>
											<ul>
												<li className="inli">January 14, 2022</li>
												<li className="inli">January 28, 2022</li>
												<li className="inli">February 11, 2022</li>
												<li className="inli">February 24, 2022</li>
											</ul>
										</div>
									</div>
									<div className="column">
										<div className="middle-column-back">
											<span className="install-headers">Amount Due</span>

											<ul>
												<li className="inli-m">$25.00</li>
												<li className="inli-m">$25.00</li>
												<li className="inli-m">$25.00</li>
												<li className="inli-m">$25.00</li>
											</ul>
										</div>
									</div>
									<div className="column">
										<div className="right-column-back">
											<span className="install-headers">Select to Pay</span>
											<ul>
												<li className="inli-r">
													<button className="paid pay1">PAID</button>
												</li>
												<li
													className="inli-r"
													onClick={() => {
														setStep(2);
														handleShow();
													}}
												>
													<LoadingButton />
												</li>
												<li
													className="inli-r"
													onClick={() => {
														setStep(3);
														handleShow();
													}}
												>
													<LoadingButton />
												</li>
												<li
													className="inli-r"
													onClick={() => {
														setStep(4);
														handleShow();
														handlePaid();
													}}
												>
													<LoadingButton />
												</li>
											</ul>
										</div>
									</div>
									<div className="column in-out">
										<span>
											<img
												src={caretdown}
												alt="toggle purchase & installments"
												onClick={() => {
													ref.current.toggle();
												}}
											/>
											{/*<button className="close">X</button>*/}
										</span>
									</div>
								</div>

								<div className="step-wrapper">
									<Stepper step={step} />
								</div>
							</div>
							<Modal
								show={show}
								onHide={handleClose}
								backdrop="true"
								keyboard="False"
							>
								<Modal.Header closeButton>
									<Modal.Title>Your Payment was successful</Modal.Title>
								</Modal.Header>
								<Modal.Body>
									<div class="pay-confirm-wrapper">
										<div class="blue-column">
											<ul>
												<li>PAYMENT DATE</li>
												<li>PAYEE</li>
												<li>BANK ACCOUNT</li>
												<li>PAYMENT AMOUNT</li>
												<li> PAYMENT NUMBER</li>
											</ul>
										</div>

										<div class="green-column">
											<ul>
												<li>01/11/2022</li>
												<li>Happy Feet</li>
												<li>Chase xxxx1128</li>
												<li>$67.00</li>
												<li> 2, of 4</li>
											</ul>
										</div>
									</div>
								</Modal.Body>
								<Modal.Footer>
									<img src={certLogoFooter} alt="Certegy logo" />
								</Modal.Footer>
							</Modal>
						</BackSide>
					</div>
				</Flippy>
			</div>
			{paid ? (
				<Confetti
					numberOfPieces={850}
					recycle={false}
					colors={bnplColors}
					opacity={90}
					friction={0.99}
					gravity={0.1}
					width={newWidth}
				/>
			) : null}
		</>
	);
};

export default PurchaseCard;
