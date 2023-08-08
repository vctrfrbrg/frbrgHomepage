import * as React from 'react';
import { Grid, Typography } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';

const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const darkTheme = createTheme({
    palette: {
      mode: prefersDarkMode ? 'dark' : 'light',
    },
  });

  return(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Grid 
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      height={"80vh"}
      minHeight={"600px"}
    >
      <Grid item textAlign={"center"}>
        <Typography variant='h2'>FRBRG Ventures</Typography>
      </Grid>
      <Grid item>
        <Typography>© 2023</Typography>
      </Grid>
    </Grid>
    </ThemeProvider>
  )
};

export default App;
