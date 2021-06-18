import React from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import { Link } from "react-router-dom";

const Footer = () => {

	return (
			<Grid className="Footer__container">
				<Link to={{ pathname: "https://www.flickerbox.com/contact-us/" }} target="_blank">
					<Grid.Row>
						<Grid.Column width={12}>
							<h1>
								Let's talk.
							</h1>
							<h1>
								A quick conversation is all it takes<br />
								to get started
							</h1>
						</Grid.Column>
						<Grid.Column width={4}>
							<Icon name='angle double right' />
						</Grid.Column>
					</Grid.Row>
				</Link>
				<Grid.Row>
						<h2>hello@flickerbox.com</h2>
						<h2>Careers</h2>
				</Grid.Row>
			</Grid>
	);
}

export default Footer;

