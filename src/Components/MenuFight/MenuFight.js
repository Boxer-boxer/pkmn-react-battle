import React from 'react'

const MenuFight = ({pokemon, onAttack}) => {
	return(
		<div>
			<div className='absolute bottom-0 Menu-overlap bg-white flex flex-wrap justify-center items-center center ba br2 bw1 w-80'>	
				<div className='grow pointer tl pa3 w-50'> 
					<button onClick={onAttack} type='button' value={pokemon.attack_1.power}> {pokemon.attack_1.move} </button>
				</div>
				<div className='grow pointer tl pa3 w-50'> 
					<button onClick={onAttack} type='button' value={pokemon.attack_2.power}> {pokemon.attack_2.move} </button>
				</div>
				<div className='grow pointer tl pa3 w-50'> 
					<button onClick={onAttack} type='button' value={pokemon.attack_3.power}> {pokemon.attack_3.move} </button>
				</div>
				<div className='grow pointer tl pa3 w-50'> 
					<button onClick={onAttack} type='button' value={pokemon.attack_4.power}> {pokemon.attack_4.move} </button>
				</div>
			</div>

		</div>
	);
}

export default MenuFight
