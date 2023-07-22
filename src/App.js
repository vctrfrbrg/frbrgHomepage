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
      height={"96vh"}
    >
      <Grid item>
        <Typography variant='h1'>FRBRG Ventures</Typography>
      </Grid>
      <Grid item>
        <Typography>© 2023</Typography>
      </Grid>
    </Grid>
    </ThemeProvider>
);

export default App;
