import React, { useState } from "react";
import { Sidenav, Nav } from "rsuite";
import logo from "../../images/icons/logo/logo.png";
import dashboard from "../../images/icons/dashboard.png";
import settings from "../../images/icons/settings.png";
import wallet from "../../images/icons/wallet.png";
import transaction from "../../images/icons/transaction.png";
import UserDashboard from "./UserDashboard";

const Navbar = () => {
	const [state, setState] = useState({
		activeKey: "1"
	});
	const handleSelect = (eventKey) => {
		setState({
			activeKey: eventKey !== "0" ? eventKey : "1"
		});
	};
	return (
		<div>
			<div className="navBar">
				<Sidenav
					expanded={false}
					activeKey={state.activeKey}
					onSelect={handleSelect}
				>
					<Sidenav.Body>
						<Nav id="navBar" className="navShadow">
							<Nav.Item
								eventKey="0"
								icon={
									<img
										alt="logo"
										src={logo}
										style={{ opacity: 1 }}
									/>
								}
							>
								Home
							</Nav.Item>
							<Nav.Item
								eventKey="1"
								icon={<img alt="logo" src={dashboard} />}
							>
								Dashboard
							</Nav.Item>
							<Nav.Item
								eventKey="2"
								icon={<img alt="logo" src={wallet} />}
							>
								Wallet
							</Nav.Item>
							<Nav.Item
								eventKey="3"
								icon={<img alt="logo" src={transaction} />}
							>
								Transactions
							</Nav.Item>
							<Nav.Item
								eventKey="4"
								icon={<img alt="logo" src={settings} />}
							>
								Settings
							</Nav.Item>
						</Nav>
					</Sidenav.Body>
				</Sidenav>
			</div>
			<div className="rightView">
				<div className="rightBody">
					<UserDashboard></UserDashboard>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
