import { useEffect } from "react";
import { useState } from "react";
import PokemonCard from "../components/PokemonCard";

export default function App() {
  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=30")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setPokemones(json.results);
      })
      .catch((error) => {
        console.log("Error fetching Pokemanes:", error);
      });
  }, []);

  return (
    <main>
      <div className="bg-zinc-300 grid grid-cols-3">
        {pokemones.map((pokemon, index) => {
          return <PokemonCard key={`pokemon-${index}`} name={pokemon.name} />;
        })}
      </div>
    </main>
  );
}
