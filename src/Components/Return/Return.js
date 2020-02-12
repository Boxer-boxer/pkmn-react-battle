import React from 'react'

const ReturnBtn = ({onReturnMenu}) => {
	return(
		<div className="absolute bottom-0 right-0 Menu-overlap w-40">
			<div className=" bg-white flex flex-wrap justify-center items-center center ba br2 bw1 w-70">
				<div onClick={onReturnMenu} className='grow pointer pa1'> 
					<p className="pa2">Cancel</p>
				</div>
			</div>
		</div>
	);
}

export default ReturnBtn



