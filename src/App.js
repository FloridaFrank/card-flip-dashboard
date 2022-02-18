import tableLogo from "./images/table-logo.png";
import confetti from "./images/confetti.png";
import PurchaseCard from "./PurchaseCard";
import "./App.css";

function App() {
	return (
		<>
			<div className="App">
				<div className="header">
					<div className="project">
						<img src={tableLogo} alt="certgy payment processing" />

						<div className="nav-links">
							<span className="help">Help</span>
							<span>Log Out</span>
						</div>
					</div>
					<div className="confetti">
						<img src={confetti} alt="confetti" width="150" />
					</div>
				</div>
				<div className="main">
					<div className="panel-wrapper">
						<h1 className="title">Purchases</h1>
						<div className="purchases">
							{cards.map((card) => (
								<PurchaseCard key={card.id} card={card} />
							))}
						</div>
					</div>
				</div>
				<footer>
					<span>Terms & Conditions</span>
					<span>Privacy Policy</span>
					<span>Certegy &copy;2022</span>
				</footer>
			</div>
		</>
	);
}

export default App;

const cards = [
	{
		id: "1",
		merchant: "Happy Feet",
		purchaseDate: "11/23/2021",
		purchaseAmount: "$329.00",
		bank: "Chase xxx1234",
		outstandingBalance: "$125.55",
		nextPaymentDate: "01/21/2022",
		//Back panel
		back: "Card 1 Back",
	},
	{
		id: "2",
		merchant: "Skechers",
		purchaseDate: "11/22/2021",
		purchaseAmount: "$249.00",
		bank: "Wells Fargo xxx1965",
		outstandingBalance: "$75.25",
		nextPaymentDate: "01/23/2022",
		//Back panel
		back: "Card 2 Back",
	},
	{
		id: "3",

		merchant: "Target",
		purchaseDate: "11/24/2021",
		purchaseAmount: "$249.00",
		bank: "Capital One xxx5834",
		outstandingBalance: "$81.25",
		nextPaymentDate: "01/27/2022",
		//Back panel
		back: "Card 3 Back",
	},
];
// paurchase_date
// amount_charged
// amount_due
// date_due
// balance
