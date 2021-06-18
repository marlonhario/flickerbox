import React from 'react';

const Header = ({
	scrollDown,
	offsetY,
	display, 
	setDisplay,
	menuLink
}) => {


	return (
		<div className={`Header__container scroll${scrollDown ? offsetY > 0 ? '-down' : '' : '-up'} ${offsetY > 67 ? 'display' : 'transparent' }`}>
			<div className="Flicker__container">	
				<div className="flicker">
					<div className="Flicker__box">
					</div>
					Flickerbox
				</div>
				<div className={`menu ${display ? 'show' : 'hide'}`}>
					<div className={`nav-items ${display ? '' : 'hide'}`}>
						<ul>
							{menuLink.map(({href, title}, index) => (
								<a key={index} href={href}><li>{title}</li></a>
							))}
						</ul>
					</div>
					<i onClick={() => setDisplay(!display)} className="fas fa-plus"></i>
				</div>
			</div>
		</div>
	);
}

export default Header;