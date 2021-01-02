import React, { useState } from "react";
import { Sidenav, Nav, Icon } from "rsuite";

const BaseNavbar = () => {
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
			<div>
				<Sidenav
					expanded={false}
					activeKey={state.activeKey}
					onSelect={handleSelect}
				>
					<Sidenav.Body>
						<Nav id="navBar">
							<Nav.Item
								eventKey="0"
								icon={<Icon icon="dashboard" />}
							>
								Home
							</Nav.Item>
							<Nav.Item
								eventKey="1"
								icon={<Icon icon="dashboard" />}
							>
								Dashboard
							</Nav.Item>
							<Nav.Item eventKey="2" icon={<Icon icon="group" />}>
								User Group
							</Nav.Item>
							<Nav.Item eventKey="3" icon={<Icon icon="magic" />}>
								Advanced
							</Nav.Item>
							<Nav.Item
								eventKey="4"
								icon={<Icon icon="gear-circle" />}
							>
								Settings
							</Nav.Item>
						</Nav>
					</Sidenav.Body>
				</Sidenav>
			</div>
		</div>
	);
};

export default BaseNavbar;
