import React from 'react'

const PKMNMenu = ({getPokemonSelection}) => {
	return(
			<div className='absolute bottom-0 Menu-overlap bg-white flex flex-wrap justify-center items-center center ba br2 bw1 w-60'>
				<div className='grow pointer tl pa1 w-100'> 
					<input onClick={getPokemonSelection} type='button' value='BLASTOISE'  /> 
				</div>
				<div className='grow pointer tl pa1 w-100'> 
					<input onClick={getPokemonSelection} type='button' value='CHARIZARD' />
				</div>
				<div className='grow pointer tl pa1 w-100'> 
					<input onClick={getPokemonSelection} type='button' value='VENUSAUR'  />
				</div>
				<div className='grow pointer tl pa1 w-100'> 
					<input onClick={getPokemonSelection} type='button' value='PIKACHU'  />
				</div>
			</div>
		);
}

export default PKMNMenu



