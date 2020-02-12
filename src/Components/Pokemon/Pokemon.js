import React from 'react'
import './Pokemon.css'

const Pokemon = ({pokemon}) => {
	return( 
			<div>
				<img 
				alt = 'pokemon'
				className="absolute bottom-2 pokemon"
				src={pokemon.sprite_back}
					/>
			</div>
	);
}

export default Pokemon

