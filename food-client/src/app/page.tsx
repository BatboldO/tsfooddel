
import React from "react"
import {Grid, Button, Typography} from "@mui/material";


export default function Home() {
  return(
    <main>
    <Grid container>  
    <Grid item xs ={12} >
      <Typography variant= "h2">
      Login</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
      <Button variant="contained" color="secondary"> Click</Button>
      </Grid>
    </Grid>
 
    </main>
  )
     };