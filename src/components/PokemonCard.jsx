import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PokemonCard(props) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
      .then((response) => response.json())
      .then((json) => {
        setPokemon(json);
      })
      .catch((error) => {
        console.log("Not found:", error);
      });
  }, []);

  return (
    <article className="grid grid-cols-2 p-4 items-center border-2 border-black">
      {!pokemon.sprites && <p>Cargando</p>}
      <div>
        <Link to={`/${props.name}`}>
          {
            <img
              src={pokemon.sprites?.other["official-artwork"]?.front_default}
              alt=""
            />
          }
        </Link>
      </div>
      <div>
        <p className="text-xl font-bold p-6">{props.name}</p>
      </div>
    </article>
  );
}
