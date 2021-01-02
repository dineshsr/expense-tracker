import React, { useState } from "react";
import { Sidenav, Nav, Icon } from "rsuite";
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
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Est dolore, rem corrupti velit magni tempore natus, quisquam
					dolorem voluptas numquam quaerat et! Animi sapiente sit
					perspiciatis voluptatibus ea, nesciunt asperiores! Lorem
					ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
					facilis quia et nemo laudantium iure autem quae sapiente
					tenetur harum. Sed minima esse maxime ut dolor eius unde
					architecto aliquid. Lorem ipsum, dolor sit amet consectetur
					adipisicing elit. Earum voluptates praesentium ducimus fugit
					quis libero reprehenderit maxime quisquam ratione laborum?
					Aperiam accusamus molestias fugiat doloremque harum magnam
					voluptas, corrupti dolor? Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Labore in suscipit distinctio,
					temporibus voluptatibus eligendi similique autem. Facere,
					repellat nobis facilis sapiente necessitatibus officiis!
					Dolore minus quos quas doloremque vero. Lorem, ipsum dolor
					sit amet consectetur adipisicing elit. Sed explicabo
					mollitia perspiciatis accusamus rem nostrum numquam adipisci
					soluta, ex consequuntur, laborum id doloribus! Labore amet
					iusto nisi fuga, pariatur suscipit! Lorem ipsum dolor sit
					amet consectetur adipisicing elit. Perferendis maiores
					consectetur eaque, doloremque repellendus cumque adipisci
					tempore vero excepturi modi corrupti debitis saepe soluta
					aspernatur, laudantium libero necessitatibus sit eveniet.
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Est ex cum minima excepturi rerum quo, accusamus aliquam
					deserunt necessitatibus id in? Voluptatum, accusamus
					nesciunt? Omnis tempore harum eum.
				</div>
			</div>
		</div>
	);
};

export default Navbar;
