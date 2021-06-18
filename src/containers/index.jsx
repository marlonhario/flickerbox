import React from 'react';
import { Header, Content, Footer } from "./components";

const Flickerbox = ({header, content}) => {
	return (
		<div className={`App__container`}>
			<Header {...header} />
			<Content {...content} />
			<Footer />
		</div>
	);
}

export default Flickerbox;