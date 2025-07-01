import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  function capitalizeFirstLetter(string) {     // String is just the name of the parameter, it has no meaning
    return string.charAt(0).toUpperCase() + string.slice(1);    // charAt(0): 자바스크립트 문자열 내장 함수로 문자열에서 0번째(첫 글자) 를 꺼냄
  } // .toUpperCase(): 자바스크립트 문자열 내장 함수    &     string.slice(1): 역시 문자열 내장 함수로  1번째 인덱스부터 끝까지 잘라서 반환

  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    type: ""
  });
  useEffect(() => {
    document.querySelector('input').focus();  //HTML 문서에서 <input> 요소(= 가장 첫 번째 태그)를 찾고 .focus로  커서를 자동으로 올려서 바로 입력할 수 있게
  }, []);


  const searchPokemon = () => {
    if (!pokemonName.trim()) {
      alert("Ah! You didn't type which Pokémon you're looking for.\n" +
        "Try typing a name of a Pokémon!");
      return;
    }
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      // .then((response) => { console.log(response); });
      // .then(response => console.log(response));
      // .catch(error => console.error('Error:', error) );
      .then((response) => {
        const animatedSprite = response.data.sprites.versions["generation-v"]["black-white"].animated.front_default;
        const defaultSprite = response.data.sprites.front_default;
        setPokemon({
          name: pokemonName,
          species: response.data.species.name,
          // img: response.data.sprites.front_default,
          // img: response.data.sprites.versions["generation-v"]["black-white"].animated.front_default,
          // img: animatedSprite ? animatedSprite : defaultSprite,
          img: animatedSprite || defaultSprite,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          specialAttack: response.data.stats[3].base_stat,
          specialDefense: response.data.stats[4].base_stat,
          speed: response.data.stats[5].base_stat,
          // type: response.data.types[0].type.name
          type: response.data.types.map(t => t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1)).join(' | ')
          // map으로 ["grass", "poison"] 생성(객체 배열 → 문자열 배열)
        })
        setPokemonChosen(true);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
        alert(
          "Hmm... I checked my Pokédex, but I couldn't find that Pokémon.\n" +
          "Are you sure this isn't a name of a Digimon?"
        );
      });
  };

  return (
    <>
      <div className="pokeball-background">
        <div className="pokeball-button"></div>
        <div className='App'>
          <div className='TitleSection'>
            {/* <h1>Pokémon Stats</h1> */}
            <h1 className="title">Peter's Pokédex</h1>
            <input
              type='text'
              onChange={(event) => setPokemonName(event.target.value)}  //	input 에 입력될 때마다 pokemonName 상태에 반영
              onKeyDown={(event) => {                                   // 	키보드를 눌렀을 때 실행되는 함수
                if (event.key === "Enter") {
                  searchPokemon();
                }
              }}
            />
            <button onClick={searchPokemon}>Search Pokémon</button>
          </div>
          <div className='DisplaySection'>
            {!pokemonChosen ? (<h1>Please Choose a Pokémon</h1>
            ) : (
              <>
                {/* <h1>{pokemon.name}</h1> */}
                <h1>{capitalizeFirstLetter(pokemon.name)}</h1>
                <img src={pokemon.img} />
                {/* <h3>Species: {pokemon.species}</h3> */}
                <h3>Name: {capitalizeFirstLetter(pokemon.species)}</h3>
                <h3>Type: {capitalizeFirstLetter(pokemon.type)}</h3>
                <div className="stats-container">
                  <h4>Hp: {pokemon.hp}</h4>
                  <h4>Attack: {pokemon.attack}</h4>
                  <h4>Defense: {pokemon.defense}</h4>
                  <h4>Special-Attack: {pokemon.specialAttack}</h4>
                  <h4>Special-Defense: {pokemon.specialDefense}</h4>
                  <h4>Speed: {pokemon.speed}</h4>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <footer className="footer-note">
        Note: Animated GIFs are only available for Pokémon up to Gen 5. <br />
        Data powered by <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">PokéAPI</a>
      </footer>
    </>
  );
};
export default App;