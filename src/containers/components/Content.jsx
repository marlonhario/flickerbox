import React from 'react';
import { Grid, Segment, Image } from 'semantic-ui-react'

const Content = ({
	technologyPartners, 
	companyImages
}) => {


	return (
	<div className="Content__container">
		<h1 className="technology-leader">
			We partner with the<br />
			technology leaders of today<br /> 
			and tomorrow
		</h1>
		<Grid columns='equal'>
			{technologyPartners.map((value) => (
					<Grid.Row {...value.attributes}>
						{value.columns.map((column) => (
							<Grid.Column {...column.attributes}>
								{column.hrefTag.length ? column.hrefTag.map((href) =>(
										<a {...href.attributes}> 
											<Segment>
												<h1>{href.title}</h1>
												<h2>{href.subTitle}</h2>
											</Segment>
										</a>
									)): ''}
							</Grid.Column>
						))}
					</Grid.Row>
			))}
		</Grid>


		<Grid className="companies">
			<Grid.Row className="first-row">
				<h2 className="technology-leader">
					We've worked with some<br />
					great companies
				</h2>
			</Grid.Row>
			{[...Array(7).keys()].map(function(i) {
				return (
					<Grid.Row className="second-row" columns={9}>
						{companyImages.map((value) => (
							<Grid.Column className={`display`}>
								<Image src={value} />
							</Grid.Column>
						))}
					</Grid.Row>
				);
			})}
		</Grid>
	</div>
	);
}

export default Content;