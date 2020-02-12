import React from 'react'

const Menu = ({onFightClick, onBagClick, onPKMNclick, onRunClick}) => {
	return(
		<div className='z0 bg-white absolute bottom-0 right-0 flex flex-wrap justify-center items-center right ba br2 bw1 w-50'>
			<div onClick={onFightClick} className='grow pointer tl pa3 w-50'> 
				<p>Fight </p>
			</div>
			<div onClick={onBagClick} className='grow pointer tl pa3 w-50'> 
				<p>Bag </p>
			</div>
			<div onClick={onPKMNclick} className='grow pointer tl pa3 w-50'> 
				<p>PKMN </p>
			</div>
			<div onClick={onRunClick} className='dim tl pa3 w-50'> 
				<p>Run </p>
			</div>
		</div>
	);
}

export default Menu
