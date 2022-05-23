const pokemon = {
  a : '피카츄',
  b : '파이리',
  c : '꼬부기',
  d : '미뇽'
}

let pokemonArr = [];

for(let props in pokemon){
  console.log(pokemon[props]);
  pokemonArr.push(pokemon[props]);
}

console.log(pokemonArr);





