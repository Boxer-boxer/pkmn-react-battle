import React from 'react'

const Status = ({pokemon, enemy_pokemon}) => {
	return(
		<div>
			<div className='z0 bg-white absolute top-0 left-0 flex flex-wrap justify-center items-center right ba br2 bw1 w-50'>
				<div className='tl pa2 w-100'> 
	 				<p> {enemy_pokemon.name} </p>
	 				<p> HP: {enemy_pokemon.HP} / {enemy_pokemon.Max_HP} </p>
				</div>
			</div>
			<div className='z0 bg-white absolute bottom-0 left-0 flex flex-wrap justify-center items-center right ba br2 bw1 w-50'>
				<div className='tl pa2 w-100'> 
	 				<p> {pokemon.name} </p>
	 				<p> HP: {pokemon.HP} / {pokemon.Max_HP} </p>
				</div>
			</div>
		</div>
	);
}

export default Status

