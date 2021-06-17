import React from 'react';
import { Grid } from 'semantic-ui-react'

const Footer = () => {

	return (
			<Grid className="Footer__container">
				<a href="https://www.flickerbox.com/contact-us/">
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
							<i class='fas fa-angle-double-right'></i>
						</Grid.Column>
					</Grid.Row>
				</a>
				<Grid.Row>
						<h2>hello@flickerbox.com</h2>
						<h2>Careers</h2>
				</Grid.Row>
			</Grid>
	);
}

export default Footer;