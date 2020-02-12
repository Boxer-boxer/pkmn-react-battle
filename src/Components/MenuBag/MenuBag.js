import React from 'react'

const MenuBag = ({onUserItem}) => {
	return(
		<div className='z5 absolute bottom-0 Menu-overlap bg-white flex flex-wrap justify-center items-center center ba br2 bw1 w-60'>
			<div className='grow pointer tl pa1 w-100'> 
				<input type='button' value="Potion" onClick={onUserItem}/>
			</div>
			<div className='grow pointer tl pa1 w-100'> 
				<input type='button' value="Poison" onClick={onUserItem}/>
			</div>
			<div className='grow pointer tl pa1 w-100'> 
				<p>- </p>
			</div>
			<div className='grow pointer tl pa1 w-100'> 
				<p>- </p>
			</div>
		</div>
	);
}

export default MenuBag



