import React from 'react';

const Scroll = (props) => {
	return (
			<div style={{overflow: 'Scroll', border: '1px solid navy', height: '500px' }}> 
				{props.children}
			</div>
		);
}

export default Scroll;
