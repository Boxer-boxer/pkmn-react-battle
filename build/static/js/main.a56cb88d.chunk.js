(this["webpackJsonppkm-battle"]=this["webpackJsonppkm-battle"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(3),c=a.n(r),p=(a(14),a(2),a(4)),l=a(5),m=a(7),i=a(6),s=a(8),u=(a(15),function(e){var t=e.onFightClick,a=e.onBagClick,n=e.onPKMNclick,r=e.onRunClick;return o.a.createElement("div",{className:"z0 bg-white absolute bottom-0 right-0 flex flex-wrap justify-center items-center right ba br2 bw1 w-50"},o.a.createElement("div",{onClick:t,className:"grow pointer tl pa3 w-50"},o.a.createElement("p",null,"Fight ")),o.a.createElement("div",{onClick:a,className:"grow pointer tl pa3 w-50"},o.a.createElement("p",null,"Bag ")),o.a.createElement("div",{onClick:n,className:"grow pointer tl pa3 w-50"},o.a.createElement("p",null,"PKMN ")),o.a.createElement("div",{onClick:r,className:"dim tl pa3 w-50"},o.a.createElement("p",null,"Run ")))}),k=function(e){var t=e.pokemon,a=e.onAttack;return o.a.createElement("div",null,o.a.createElement("div",{className:"absolute bottom-0 Menu-overlap bg-white flex flex-wrap justify-center items-center center ba br2 bw1 w-80"},o.a.createElement("div",{className:"grow pointer tl pa3 w-50"},o.a.createElement("button",{onClick:a,type:"button",value:t.attack_1.power}," ",t.attack_1.move," ")),o.a.createElement("div",{className:"grow pointer tl pa3 w-50"},o.a.createElement("button",{onClick:a,type:"button",value:t.attack_2.power}," ",t.attack_2.move," ")),o.a.createElement("div",{className:"grow pointer tl pa3 w-50"},o.a.createElement("button",{onClick:a,type:"button",value:t.attack_3.power}," ",t.attack_3.move," ")),o.a.createElement("div",{className:"grow pointer tl pa3 w-50"},o.a.createElement("button",{onClick:a,type:"button",value:t.attack_4.power}," ",t.attack_4.move," "))))},_=function(e){var t=e.onReturnMenu;return o.a.createElement("div",{className:"absolute bottom-0 right-0 Menu-overlap w-40"},o.a.createElement("div",{className:" bg-white flex flex-wrap justify-center items-center center ba br2 bw1 w-70"},o.a.createElement("div",{onClick:t,className:"grow pointer pa1"},o.a.createElement("p",{className:"pa2"},"Cancel"))))},d=function(e){var t=e.onUserItem;return o.a.createElement("div",{className:"z5 absolute bottom-0 Menu-overlap bg-white flex flex-wrap justify-center items-center center ba br2 bw1 w-60"},o.a.createElement("div",{className:"grow pointer tl pa1 w-100"},o.a.createElement("input",{type:"button",value:"Potion",onClick:t})),o.a.createElement("div",{className:"grow pointer tl pa1 w-100"},o.a.createElement("input",{type:"button",value:"Poison",onClick:t})),o.a.createElement("div",{className:"grow pointer tl pa1 w-100"},o.a.createElement("p",null,"- ")),o.a.createElement("div",{className:"grow pointer tl pa1 w-100"},o.a.createElement("p",null,"- ")))},w=function(e){var t=e.getPokemonSelection;return o.a.createElement("div",{className:"absolute bottom-0 Menu-overlap bg-white flex flex-wrap justify-center items-center center ba br2 bw1 w-60"},o.a.createElement("div",{className:"grow pointer tl pa1 w-100"},o.a.createElement("input",{onClick:t,type:"button",value:"BLASTOISE"})),o.a.createElement("div",{className:"grow pointer tl pa1 w-100"},o.a.createElement("input",{onClick:t,type:"button",value:"CHARIZARD"})),o.a.createElement("div",{className:"grow pointer tl pa1 w-100"},o.a.createElement("input",{onClick:t,type:"button",value:"VENUSAUR"})),o.a.createElement("div",{className:"grow pointer tl pa1 w-100"},o.a.createElement("input",{onClick:t,type:"button",value:"PIKACHU"})))},v=function(e){return o.a.createElement("div",{className:"ba br2 bw1 relative bg-white fl w-80-m w-50-l",style:{height:"450px"}},e.children)},b=(a(16),function(e){var t=e.pokemon;return o.a.createElement("div",null,o.a.createElement("img",{alt:"pokemon",className:"absolute bottom-2 pokemon",src:t.sprite_back}))}),g=(a(17),function(e){var t=e.enemy_pokemon;return o.a.createElement("img",{style:{position:"absolute",right:"0",top:"0"},alt:"enemy pokemon",className:"pa4",src:t.sprite_front})}),h=function(e){var t=e.pokemon,a=e.enemy_pokemon;return o.a.createElement("div",null,o.a.createElement("div",{className:"z0 bg-white absolute top-0 left-0 flex flex-wrap justify-center items-center right ba br2 bw1 w-50"},o.a.createElement("div",{className:"tl pa2 w-100"},o.a.createElement("p",null," ",a.name," "),o.a.createElement("p",null," HP: ",a.HP," / ",a.Max_HP," "))),o.a.createElement("div",{className:"z0 bg-white absolute bottom-0 left-0 flex flex-wrap justify-center items-center right ba br2 bw1 w-50"},o.a.createElement("div",{className:"tl pa2 w-100"},o.a.createElement("p",null," ",t.name," "),o.a.createElement("p",null," HP: ",t.HP," / ",t.Max_HP," "))))},P=[{id:0,sprite_front:"https://cdn.bulbagarden.net/upload/9/95/Spr_1y_009.png",sprite_back:"https://cdn.bulbagarden.net/upload/6/65/Spr_b_g1_009.png",name:"BLASTOISE",HP:100,Max_HP:100,attack_1:{move:"Hydro Pump",power:120,pp:5},attack_2:{move:"Rapid Spin",power:30,pp:15},attack_3:{move:"Water Gun",power:50,pp:20},attack_4:{move:"Hyper Beam",power:120,pp:5}},{id:1,sprite_front:"https://cdn.bulbagarden.net/upload/f/f2/Spr_1y_006.png",sprite_back:"https://cdn.bulbagarden.net/upload/0/06/Spr_b_g1_006.png",name:"CHARIZARD",HP:90,Max_HP:90,attack_1:{move:"Fire Blast",power:120,pp:5},attack_2:{move:"Fire Spin",power:30,pp:15},attack_3:{move:"Flamethrower",power:50,pp:20},attack_4:{move:"Stomp",power:120,pp:5}},{id:2,sprite_front:"https://cdn.bulbagarden.net/upload/c/c0/Spr_1y_003.png",sprite_back:"https://cdn.bulbagarden.net/upload/4/43/Spr_b_g1_003.png",name:"VENUSAUR",HP:130,Max_HP:130,attack_1:{move:"Solar Beam",power:120,pp:5},attack_2:{move:"Razor Leaf",power:30,pp:15},attack_3:{move:"Something Nature-y",power:450,pp:20},attack_4:{move:"Say Blah",power:120,pp:5}},{id:3,sprite_front:"https://cdn.bulbagarden.net/upload/7/77/Spr_1y_025.png",sprite_back:"https://cdn.bulbagarden.net/upload/4/48/Spr_b_g1_025.png",name:"PIKACHU",HP:90,Max_HP:90,attack_1:{move:"Thunder",power:120,pp:5},attack_2:{move:"Thunderbolt",power:30,pp:15},attack_3:{move:"Quick Attack",power:50,pp:20},attack_4:{move:"Volt Tackle",power:120,pp:5}}],E=function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(m.a)(this,Object(i.a)(t).call(this))).loadPokemon=function(t){e.setState({pokemon:{sprite_front:t.sprite_front,sprite_back:t.sprite_back,name:t.name,HP:t.HP,Max_HP:t.HP,attack_1:{move:t.attack_1.move,power:t.attack_1.power,pp:t.attack_1.pp},attack_2:{move:t.attack_2.move,power:t.attack_2.power,pp:t.attack_2.pp},attack_3:{move:t.attack_3.move,power:t.attack_3.power,pp:t.attack_3.pp},attack_4:{move:t.attack_4.move,power:t.attack_4.power,pp:t.attack_4.pp}}})},e.loadEnemy=function(t){e.setState({enemy_pokemon:{id:t.id,sprite_front:t.sprite_front,sprite_back:t.sprite_back,name:t.name,HP:t.HP,Max_HP:t.HP,attack_1:{move:t.attack_1.move,power:t.attack_1.power,pp:t.attack_1.pp},attack_2:{move:t.attack_2.move,power:t.attack_2.power,pp:t.attack_2.pp},attack_3:{move:t.attack_3.move,power:t.attack_3.power,pp:t.attack_3.pp},attack_4:{move:t.attack_4.move,power:t.attack_4.power,pp:t.attack_4.pp}}})},e.getPokemonSelection=function(t){var a=P.filter((function(e){return e.name===t.target.value}));e.loadPokemon(a[0]),e.setState({changePokemon:!1}),e.setState({action:""}),e.increasePlayerRound()},e.onUserItem=function(t){"Potion"===t.target.value&&e.state.pokemon.HP<=e.state.pokemon.Max_HP-20?(e.state.pokemon.HP+=20,e.increasePlayerRound(),e.setState({action:""}),e.enemyAttack()):e.state.pokemon.Max_HP-e.state.pokemon.HP<20&&e.state.pokemon.Max_HP-e.state.pokemon.HP>0&&(e.state.pokemon.HP+=e.state.pokemon.Max_HP-e.state.pokemon.HP,e.increasePlayerRound(),e.setState({action:""}),e.enemyAttack())},e.onReturnMenu=function(t){e.setState({action:""})},e.onFightClick=function(t){e.setState({action:"fight"})},e.onBagClick=function(t){e.setState({action:"bag"})},e.onPKMNclick=function(t){e.setState({action:"PKMN"})},e.onRunClick=function(t){e.setState({action:"run"})},e.changeEnemy=function(t){if(t<4){var a=P.filter((function(e){return e.id===t}));e.loadEnemy(a[0])}else console.log("You won!!")},e.detectHP=function(t){t.HP<=0&&e.setState({changePokemon:!0}),console.log(e.state.changePokemon)},e.increasePlayerRound=function(){var t=e.state.player_round;t++,e.setState({player_round:t})},e.increaseEnemyRound=function(){var t=e.state.player_round;t++,e.setState({enemy_round:t}),e.getReport()},e.enemyAttack=function(){if(e.state.enemy_round<e.state.player_round&&e.state.enemy_pokemon.HP>0){var t=[e.state.enemy_pokemon.attack_1.power,e.state.enemy_pokemon.attack_2.power,e.state.enemy_pokemon.attack_3.power,e.state.enemy_pokemon.attack_4.power],a=e.state.pokemon.HP-t[Math.floor(4*Math.random())];e.setState({HP:Object.assign(e.state.pokemon,{HP:a})}),e.increaseEnemyRound(),e.detectHP(e.state.pokemon)}},e.onAttack=function(t){e.increasePlayerRound();var a=t.target.value/2,n=e.state.enemy_pokemon.HP-a;if(e.setState({HP:Object.assign(e.state.enemy_pokemon,{HP:n})}),e.state.enemy_pokemon.HP<=0){var o=e.state.enemy_pokemon.id+1;e.changeEnemy(o)}e.setState({action:""}),e.enemyAttack()},e.getReport=function(){console.log("Player HP:"+e.state.pokemon.HP),console.log("Enemy HP: "+e.state.enemy_pokemon.HP),console.log("Round Player:"+e.state.player_round),console.log("Round Enemy:"+e.state.enemy_round)},e.removePokemon=function(e){e.HP},e.state={changePokemon:!1,player_round:1,enemy_round:0,action:"",pokemon:{id:3,sprite_front:"https://cdn.bulbagarden.net/upload/7/77/Spr_1y_025.png",sprite_back:"https://cdn.bulbagarden.net/upload/4/48/Spr_b_g1_025.png",name:"PIKACHU",HP:90,Max_HP:90,attack_1:{move:"Thunder",power:120,pp:5},attack_2:{move:"Thunderbolt",power:30,pp:20},attack_3:{move:"Quick Attack",power:50,pp:20},attack_4:{move:"Volt Tackle",power:120,pp:5}},enemy_pokemon:{id:0,sprite_front:"https://cdn.bulbagarden.net/upload/9/95/Spr_1y_009.png",sprite_back:"https://cdn.bulbagarden.net/upload/6/65/Spr_b_g1_009.png",name:"BLASTOISE",HP:100,Max_HP:100,attack_1:{move:"Hydro Pump",power:120,pp:5},attack_2:{move:"Rapid Spin",power:30,pp:15},attack_3:{move:"Water Gun",power:50,pp:20},attack_4:{move:"Hyper Beam",power:120,pp:5}}},e}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e;return"fight"===this.state.action&&!1===this.state.changePokemon?e=o.a.createElement("div",null,o.a.createElement(k,{onAttack:this.onAttack,pokemon:this.state.pokemon}),o.a.createElement(_,{onReturnMenu:this.onReturnMenu})):"bag"===this.state.action&&!1===this.state.changePokemon?e=o.a.createElement("div",null,o.a.createElement(d,{onUserItem:this.onUserItem}),o.a.createElement(_,{onReturnMenu:this.onReturnMenu})):"PKMN"===this.state.action||!0===this.state.changePokemon?e=o.a.createElement("div",null,o.a.createElement(w,{getPokemonSelection:this.getPokemonSelection,pokemon:this.state.pokemon.name}),o.a.createElement(_,{onReturnMenu:this.onReturnMenu})):"run"===this.state.action&&(e=o.a.createElement("div",{className:"right"},o.a.createElement("p",{className:"RunMSG absolute right-0 z-5"}," I didn't program that... sorry. "))),o.a.createElement("div",null,o.a.createElement(v,null,o.a.createElement(g,{enemy_pokemon:this.state.enemy_pokemon}),o.a.createElement(b,{pokemon:this.state.pokemon}),o.a.createElement(h,{enemy_pokemon:this.state.enemy_pokemon,pokemon:this.state.pokemon}),o.a.createElement(u,{onFightClick:this.onFightClick,onBagClick:this.onBagClick,onPKMNclick:this.onPKMNclick,onRunClick:this.onRunClick}),e))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.a56cb88d.chunk.js.map