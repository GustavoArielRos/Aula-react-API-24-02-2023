import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Index'
import PokemonCard from '../components/PokemonCard/Index'

export default function Home() {
  
  /*uso o "useState" quando tenho algo que será modificado quando alguma ação ocorrer */
  /*antes da ação e ele tem uma forma e dps da ação ele tem outra forma*/
  const [pokemons, setPokemons] = useState([]);
  /*pegar a API no componente "Home" */
  
  /*use o "useEffect" sempre que tiver trabalhando com API */
  useEffect(() => {
    getPokemons();
  }, []);
  
  const getPokemons = () => {
    
    var endpoints = [];

    for(var i = 1 ; i < 50 ; i++){
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    /*cada item do array endpoints vai se chamar endpoint */
    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));


    /*"then()" -> quando retorna algo("quando dar certo") , então faça tal coisa */
    /*"catch()" -> quando não retornar("deu errado"), então faça tal coisa*/
    /*axios
      .get("https://pokeapi.co/api/v2/pokemon?Limit=50")
      .then((res) => setPokemons(res.data.results))
      .catch((err) => console.log(err));*/
  };
  
  /* função para conseguir pesquisar o pokemon */
  /* vai percorrer o array de pokemom */
  const pokemonFilter = (name) => {
    var filteredPokemons = []
    /* quando a barra de pesquisa estiver vazia aparece todos os pokemons */
    if (name === ""){
      getPokemons();
    }
    /* quando tiver um nome na barra de pesquisa */
    for(var i in pokemons){
      if(pokemons[i].data.name.includes(name)){
        filteredPokemons.push(pokemons[i]);
      }
    }
    setPokemons(filteredPokemons);

  }

  return (
    <div>
      {/*Cada componente deve ser criado assim de forma separada */}
      {/*No caso estamos usando 2 */}
      <Navbar pokemonFilter={pokemonFilter}/>

      {/*Definindo o tamanho do componente */}
      <Container maxWidth="xg">{/* quando colocado "false" ele faz um tamanho padrão */}
        {/* No caso vou colocar 4 vezes o pokemoncard(vai aparecer 4 vezes esse componente na pagina) */}
        {/*"Grid" -> .O tamanho da tela vai de 1 a 12 espaços
                     .E você diz qual pedaço de 1 a 12 você quer
                     .No caso vamos ocupar 3 espaços de 12*/}
        <Grid container spacing={3}>
          {pokemons.map((pokemon, key) => (/*o "map" vai fazer percorrer todos os itens da "lista pokemon" e os itens da "lista key", o "map" é tipo um "for" */
            <Grid item xs={2} key={key}>    
                <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types}/> {/*para cada item que ele percorrer da "lista pokemon" ele vai retornar o seu "name" */}
            </Grid>
          ))}

        </Grid>
        
      </Container>
      
      
    </div>
  )
}
