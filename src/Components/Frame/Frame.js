import React from 'react'

const Frame = (props) => {
	return(
		<div className='ba br2 bw1 relative bg-white fl w-80-m w-50-l' style={{height:'450px'}}>
			{props.children}
		</div>
	);
}

export default Frame

