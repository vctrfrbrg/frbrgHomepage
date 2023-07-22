import { Grid, Typography } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => (
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
);

export default App;
