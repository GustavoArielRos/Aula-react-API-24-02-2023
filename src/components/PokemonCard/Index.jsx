import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function PokemonCard({ name, image,types }) { /*prop nome e imagem e tipe do pokemon sendo colocada */
  
  /*fazendo uma função para "identificar" o tipo */
  /*há pokemons que tem 2 tipos */
  /*é melhor "lapidar" a pesquisa do tipo numa função para não ficar com muito informação no "html" do return */
  const typeHandler = () => {
    /*caso o pokemon tenha 2 tipos */
    if (types[1]) {
      return types[0].type.name + " " + types[1].type.name;
    }
    /*caso o pokemon tenha 1 tipo */
    return types[0].type.name;
  };


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {/*joguei a função do tipo aqui */}
            {typeHandler()}
          </Typography>
          {/*<Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            </Typography>*/}
        </CardContent>
      </CardActionArea>
      {/*<CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        </CardActions>*/}
    </Card>
  );
}