import { Grid, Typography } from '@mui/material'

const App = () => (
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
)

export default App;