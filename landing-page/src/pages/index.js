import { Inter } from 'next/font/google'
import { Typography, Grid } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      height={"96vh"}
    >
      <Grid item xs={3}>
        <Typography variant="h1">FRBRG Ventures</Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography>©2023</Typography>
      </Grid>
    </Grid>
  )
}
