import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokemonDetailCard from "../components/PokemonDetailCard";

export default function PokemonDetail() {
  const [pokemon, setPokemon] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
      .then((response) => response.json())
      .then((json) => {
        setPokemon(json);
      })
      .catch((error) => {
        console.log("Not found:", error);
      });
  }, [params.name]);

  return (
    <article>
      {
        <div>
          <img
            src={pokemon.sprites?.other["official-artwork"]?.front_default}
            alt=""
          />
          <p>{pokemon.name}</p>
          <p></p>
        </div>
      }
    </article>
  );
}
