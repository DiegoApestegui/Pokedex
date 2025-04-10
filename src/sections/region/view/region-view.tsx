import axios from 'axios';
import { useState, useContext, useEffect } from 'react';
import { DataContext } from 'src/context/DataContext';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';

import { _products } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';

import { ProductItem } from '../product-item';
// ----------------------------------------------------------------------

export function RegionView() {

    const {region,setRegion} = useContext(DataContext)
    const [pokemons, setPokemons] = useState([]);
    //region.url

    //nombre numero imgen

    function cambiarPalabraEnURL(url:string, palabraActual:string, nuevaPalabra:string) {
      return url.replace(palabraActual, nuevaPalabra);
    }
    const nuevaURL = cambiarPalabraEnURL(region.url, 'region', 'generation');
    
    //console.log(nuevaURL);

    type Item ={
      name: [];
    }
    type pokemon = {
      name: string;
      number: string;
      img: string;
    }

    useEffect(() => {

      axios.get(nuevaURL)
      .then(response => {
        setPokemons(response.data.pokemon_species.map((item:Item) => (item.name)))
        console.log(pokemons);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    }, []);
  return (
    <DashboardContent>     

      <Typography variant="h4" sx={{ mb: 5 }}>
        Region {region.name} {region.url}
      </Typography>
      <Box
        sx={{
          mb: 5,
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap-reverse',
          justifyContent: 'flex-end',
        }}
      >
        <Box
          sx={{
            my: 1,
            gap: 1,
            flexShrink: 0,
            display: 'flex',
          }}
        >
        </Box>
      </Box>
      <Grid container spacing={3}>
        {_products.map((product) => (
          <Grid key={product.id} size={{ xs: 12, sm: 6, md: 3 }}>
            <ProductItem product={product} />
          </Grid>
        ))}
      </Grid>

      <Pagination count={10} color="primary" sx={{ mt: 8, mx: 'auto' }} />
    </DashboardContent>
  );
}
