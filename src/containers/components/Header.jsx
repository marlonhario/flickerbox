import React from 'react';

const Header = ({
	scrollDown,
	offsetY
}) => {

	return (
		<div className={`Header__container scroll${scrollDown ? offsetY > 0 ? '-down' : '' : '-up'} ${offsetY > 67 ? 'display' : 'transparent' }`}>
			<div className="Flicker__container">	
				<div className="Flicker__box">
				</div>
				Flickerbox
			</div>
		</div>
	);
}

export default Header;