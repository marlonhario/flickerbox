import React from 'react';
import { Header, Content, Footer } from "./components";

const Flickerbox = ({mainIndex, content}) => {

	return (
		<div className={`App__container`}>
			<Header {...mainIndex} />
			<Content {...content} />
			<Footer />
		</div>
	);
}

export default Flickerbox;