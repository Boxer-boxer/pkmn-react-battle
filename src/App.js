import React from 'react';
import 'tachyons';
import './App.css';

import Menu from './Components/Menu/Menu.js'
import MenuFight from './Components/MenuFight/MenuFight.js'
import ReturnBtn from './Components/Return/Return.js'
import MenuBag from './Components/MenuBag/MenuBag.js'
import PKMNMenu from './Components/PKMNMenu/PKMNMenu.js'
import Frame from './Components/Frame/Frame.js'
import Pokemon from './Components/Pokemon/Pokemon.js'
import Enemy from './Components/Enemy/Enemy.js'
import Status from './Components/Status/Status.js'

const db = [
  {
    id: 0,
    sprite_front: 'https://cdn.bulbagarden.net/upload/9/95/Spr_1y_009.png',
    sprite_back: 'https://cdn.bulbagarden.net/upload/6/65/Spr_b_g1_009.png',
    name:'BLASTOISE',
    HP:100,
    Max_HP:100,
    attack_1: 
      {
        move:'Hydro Pump',
        power: 120,
        pp: 5
      },
    attack_2:
      {
        move:'Rapid Spin',
        power: 30,
        pp: 15
      },
    attack_3:
      {
        move:'Water Gun',
        power: 50,
        pp: 20
      },
    attack_4:
      {
        move:'Hyper Beam',
        power: 120,
        pp: 5
      }

  },
  {
    id: 1,
    sprite_front: 'https://cdn.bulbagarden.net/upload/f/f2/Spr_1y_006.png',
    sprite_back: 'https://cdn.bulbagarden.net/upload/0/06/Spr_b_g1_006.png',
    name:'CHARIZARD',
    HP:90,
    Max_HP:90,
    attack_1: 
      {
        move:'Fire Blast',
        power: 120,
        pp: 5
      },
    attack_2:
      {
        move:'Fire Spin',
        power: 30,
        pp: 15
      },
    attack_3:
      {
        move:'Flamethrower',
        power: 50,
        pp: 20
      },
    attack_4:
      {
        move:'Stomp',
        power: 120,
        pp: 5
      }
  },
  {
    id: 2,
    sprite_front: 'https://cdn.bulbagarden.net/upload/c/c0/Spr_1y_003.png',
    sprite_back: 'https://cdn.bulbagarden.net/upload/4/43/Spr_b_g1_003.png',
    name:'VENUSAUR',
    HP: 130,
    Max_HP:130,
    attack_1: 
      {
        move:'Solar Beam',
        power: 120,
        pp: 5
      },
    attack_2:
      {
        move:'Razor Leaf',
        power: 30,
        pp: 15
      },
    attack_3:
      {
        move:'Something Nature-y',
        power: 450,
        pp: 20
      },
    attack_4:
      {
        move:'Say Blah',
        power: 120,
        pp: 5
      }
  },
  {
    id: 3,
    sprite_front: 'https://cdn.bulbagarden.net/upload/7/77/Spr_1y_025.png',
    sprite_back: 'https://cdn.bulbagarden.net/upload/4/48/Spr_b_g1_025.png',
    name:'PIKACHU',
    HP: 90,
    Max_HP: 90,
    attack_1: 
      {
        move:'Thunder',
        power: 120,
        pp: 5
      },
    attack_2:
      {
        move:'Thunderbolt',
        power: 30,
        pp: 15
      },
    attack_3:
      {
        move:'Quick Attack',
        power: 50,
        pp: 20
      },
    attack_4:
      {
        move:'Volt Tackle',
        power: 120,
        pp: 5
      }
  }
]

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      changePokemon: false,
      player_round: 1,
      enemy_round: 0,
      action: '',
      pokemon: {
        id:3,
        sprite_front: 'https://cdn.bulbagarden.net/upload/7/77/Spr_1y_025.png',
        sprite_back: 'https://cdn.bulbagarden.net/upload/4/48/Spr_b_g1_025.png',
        name: 'PIKACHU',
        HP: 90,
        Max_HP:90, 
        attack_1: {
            move: 'Thunder',
            power: 120,
            pp: 5 
        },
        attack_2: {
            move: 'Thunderbolt',
            power: 30,
            pp: 20 
        },
        attack_3: {
            move: 'Quick Attack',
            power: 50,
            pp: 20 
        },
        attack_4: {
            move: 'Volt Tackle',
            power: 120,
            pp: 5 
          },
      },
      enemy_pokemon: {
        id: 0,
        sprite_front: 'https://cdn.bulbagarden.net/upload/9/95/Spr_1y_009.png',
        sprite_back: 'https://cdn.bulbagarden.net/upload/6/65/Spr_b_g1_009.png',
        name:'BLASTOISE',
        HP:100,
        Max_HP:100,
        attack_1: 
          {
            move:'Hydro Pump',
            power: 120,
            pp: 5
          },
        attack_2:
          {
            move:'Rapid Spin',
            power: 30,
            pp: 15
          },
        attack_3:
          {
            move:'Water Gun',
            power: 50,
            pp: 20
          },
        attack_4:
          {
            move:'Hyper Beam',
            power: 120,
            pp: 5
          }
      },
    }
  }


  loadPokemon = (data) => {   
    this.setState({ 
      pokemon: {
        sprite_front: data.sprite_front,
        sprite_back: data.sprite_back,
        name: data.name,
        HP: data.HP,
        Max_HP: data.HP,
        attack_1: {
          move: data.attack_1.move,
          power: data.attack_1.power,
          pp: data.attack_1.pp
        },
        attack_2: {
          move: data.attack_2.move,
          power: data.attack_2.power,
          pp: data.attack_2.pp
        },
        attack_3: {
          move: data.attack_3.move,
          power: data.attack_3.power,
          pp: data.attack_3.pp
        },
        attack_4: {
          move: data.attack_4.move,
          power: data.attack_4.power,
          pp: data.attack_4.pp
        }
      }
    })
  }

  loadEnemy = (data) => {
    this.setState({
      enemy_pokemon: {
        id: data.id,
        sprite_front: data.sprite_front,
        sprite_back: data.sprite_back,
        name: data.name,
        HP: data.HP,
        Max_HP: data.HP,
        attack_1: {
          move: data.attack_1.move,
          power: data.attack_1.power,
          pp: data.attack_1.pp
        },
        attack_2: {
          move: data.attack_2.move,
          power: data.attack_2.power,
          pp: data.attack_2.pp
        },
        attack_3: {
          move: data.attack_3.move,
          power: data.attack_3.power,
          pp: data.attack_3.pp
        },
        attack_4: {
          move: data.attack_4.move,
          power: data.attack_4.power,
          pp: data.attack_4.pp
        }
      }
    })
  }

  getPokemonSelection = (event) => {
    const selectedPokemon = db.filter(data => data.name === event.target.value)
    this.loadPokemon(selectedPokemon[0])
    this.setState({ changePokemon: false})
    this.setState({action:''})
    this.increasePlayerRound()
  }

  onUserItem = (event) => {
    if(event.target.value === 'Potion' && this.state.pokemon.HP <= this.state.pokemon.Max_HP-20) {
      this.state.pokemon.HP += 20;
      this.increasePlayerRound()
      this.setState({action:''})
      this.enemyAttack()
    } else if(this.state.pokemon.Max_HP - this.state.pokemon.HP < 20
      && this.state.pokemon.Max_HP - this.state.pokemon.HP > 0) {
      this.state.pokemon.HP += (this.state.pokemon.Max_HP - this.state.pokemon.HP)
      this.increasePlayerRound()
      this.setState({action:''})
      this.enemyAttack()
    }
  }

  onReturnMenu = (event) => {
    this.setState({action:''})
  }

  onFightClick = (event) => {
    this.setState({ action: 'fight'})
  }

  onBagClick = (event) => {
    this.setState({ action: 'bag'})
  }

  onPKMNclick = (event) => {
    this.setState({ action: 'PKMN'})
  }

  onRunClick = (event) => {
    this.setState({ action: 'run'})
  }

  changeEnemy = (id) => {
    if(id < 4) {
      const selectedEnemy = db.filter(data => data.id === id)
      this.loadEnemy(selectedEnemy[0])
      } else {
        console.log('You won!!')
      }
  }

  detectHP = (pkmn) => {
    if (pkmn.HP <= 0) {
      this.setState({changePokemon: true})
    }
    console.log(this.state.changePokemon)
  }

  increasePlayerRound = () => {
    let round = this.state.player_round
    round++
    this.setState({player_round:round})
  }

  increaseEnemyRound = () => {
    let round = this.state.player_round
    round++
    this.setState({enemy_round:round})
    this.getReport()
  }

  enemyAttack = () => {
    if(this.state.enemy_round < this.state.player_round 
        && this.state.enemy_pokemon.HP > 0) {
      const attack = [this.state.enemy_pokemon.attack_1.power,
                      this.state.enemy_pokemon.attack_2.power,
                      this.state.enemy_pokemon.attack_3.power,
                      this.state.enemy_pokemon.attack_4.power]
      let playerHP = this.state.pokemon.HP
      let result = playerHP - attack[Math.floor((Math.random() * 4))]
      this.setState(
      {
        HP: Object.assign(this.state.pokemon, {
          HP: result
        })
      },
      )
      this.increaseEnemyRound()
      this.detectHP(this.state.pokemon)

    }
  }

  onAttack = (event) => {
    this.increasePlayerRound()
    const attack = event.target.value/2
    const enemyHP = this.state.enemy_pokemon.HP
    const result = enemyHP - attack
    this.setState(
    {
      HP: Object.assign(this.state.enemy_pokemon, {
        HP: result,
      })
    },
    )
    if(this.state.enemy_pokemon.HP <= 0){
      let id = this.state.enemy_pokemon.id + 1
      this.changeEnemy(id)
    }
    this.setState({action:''})
    this.enemyAttack()
  }

  getReport = () => {
    console.log('Player HP:' + this.state.pokemon.HP)
    console.log('Enemy HP: ' + this.state.enemy_pokemon.HP)
    console.log('Round Player:' + this.state.player_round)
    console.log('Round Enemy:'+  this.state.enemy_round)
  }

  removePokemon = (pkmn) => {
    if(pkmn.HP <= 0) {

    }
  }

  render() {
    let menu;

    if(this.state.action === 'fight' && this.state.changePokemon===false) {
      menu = <div>
              <MenuFight 
                onAttack={this.onAttack}
                pokemon={this.state.pokemon}
                />
              <ReturnBtn onReturnMenu={this.onReturnMenu}/>
            </div>
    } else if(this.state.action === 'bag' && this.state.changePokemon===false) {
      menu = <div>
              <MenuBag 
                onUserItem={this.onUserItem}/>
              <ReturnBtn onReturnMenu={this.onReturnMenu}/>
            </div>
    } else if(this.state.action === 'PKMN' || this.state.changePokemon===true) {
      menu = <div>
              <PKMNMenu 
                  getPokemonSelection={this.getPokemonSelection}
                  pokemon={this.state.pokemon.name}
                  />
              <ReturnBtn onReturnMenu={this.onReturnMenu}/>
            </div>
    } else if(this.state.action === 'run') {
      menu = <div className='right'>
                <p className='RunMSG absolute right-0 z-5'> I didn't program that... sorry. </p>
            </div>
    }

    return (
      <div> 
        <Frame>
          <Enemy 
            enemy_pokemon={this.state.enemy_pokemon} />
          <Pokemon 
            pokemon={this.state.pokemon}/>
          <Status 
            enemy_pokemon={this.state.enemy_pokemon}
            pokemon={this.state.pokemon}/>
          <Menu 
              onFightClick={this.onFightClick}
              onBagClick={this.onBagClick}
              onPKMNclick={this.onPKMNclick}
              onRunClick={this.onRunClick}
              />
          {menu}
        </Frame>
      </div>
    );
  }  
}

export default App;
