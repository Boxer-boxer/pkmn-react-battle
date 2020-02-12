import React from 'react'
import './Enemy.css'

const Enemy = ({enemy_pokemon}) => {
	return(
		<img 
			style={{position: 'absolute', right:'0', top:'0'}} 
			alt='enemy pokemon'
			className='pa4'
			src={enemy_pokemon.sprite_front}
			/>
	);
}

export default Enemy

