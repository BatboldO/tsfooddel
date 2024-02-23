import { Grid, Typography } from "@mui/material";
import React from "react";
import { FoodCard } from "./Card";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const FoodList = () => {
  return (
    <Grid container>
    <Grid xs={3}>
    <FoodCard data={{ name: "Lunch", price: 4000, img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWNlJTIwY3JlYW18ZW58MHx8MHx8fDA%3D" }} />
    </Grid>
    <Grid xs={3}>
    <FoodCard data={{ name: "Breakfast", price: 2000, img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJyZWFrZmFzdHxlbnwwfHwwfHx8MA%3D%3D" }}/>
    </Grid>
    <Grid xs={3}>
    <FoodCard data={{ name: "Dinner", price: 9000, img: "https://images.unsplash.com/photo-1542691457-cbe4df041eb2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnJlYWtmYXN0fGVufDB8fDB8fHww" }} />
    </Grid>
    <Grid xs={3}>
    <FoodCard data={{ name: "Steak", price: 10000, img: "https://plus.unsplash.com/premium_photo-1669559809547-6e4c4fe41371?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGJyZWFrZmFzdHxlbnwwfHwwfHx8MA%3D%3D" }} />
    </Grid>
    <Grid container spacing={0}>
       </Grid>
  </Grid>
  );
};

export default FoodList;

{/* <Grid item xs={10} columns={4}
>
   <Typography> <AutoAwesomeIcon></AutoAwesomeIcon> хямдралтай</Typography>
 <FoodCard data={{ name: "Breakfast", price: 2000, img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJyZWFrZmFzdHxlbnwwfHwwfHx8MA%3D%3D" }} />
 <FoodCard data={{ name: "Lunch", price: 4000, img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWNlJTIwY3JlYW18ZW58MHx8MHx8fDA%3D" }} />
 <FoodCard data={{ name: "Dinner", price: 9000, img: "https://images.unsplash.com/photo-1542691457-cbe4df041eb2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnJlYWtmYXN0fGVufDB8fDB8fHww" }} />
 <FoodCard data={{ name: "Steak", price: 10000, img: "https://plus.unsplash.com/premium_photo-1669559809547-6e4c4fe41371?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGJyZWFrZmFzdHxlbnwwfHwwfHx8MA%3D%3D" }} />
 <Typography>  <AutoAwesomeIcon></AutoAwesomeIcon>  үндсэн хоол</Typography>
 <FoodCard data={{ name: "Breakfast", price: 2000, img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJyZWFrZmFzdHxlbnwwfHwwfHx8MA%3D%3D" }} />
 <FoodCard data={{ name: "Lunch", price: 4000, img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWNlJTIwY3JlYW18ZW58MHx8MHx8fDA%3D" }} />
 <FoodCard data={{ name: "Dinner", price: 9000, img: "https://images.unsplash.com/photo-1542691457-cbe4df041eb2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnJlYWtmYXN0fGVufDB8fDB8fHww" }} />
 <FoodCard data={{ name: "Steak", price: 10000, img: "https://plus.unsplash.com/premium_photo-1669559809547-6e4c4fe41371?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGJyZWFrZmFzdHxlbnwwfHwwfHx8MA%3D%3D" }} />
  <Typography>  <AutoAwesomeIcon></AutoAwesomeIcon> салат</Typography>
  <FoodCard data={{ name: "Breakfast", price: 2000, img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJyZWFrZmFzdHxlbnwwfHwwfHx8MA%3D%3D" }} />
 <FoodCard data={{ name: "Lunch", price: 4000, img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWNlJTIwY3JlYW18ZW58MHx8MHx8fDA%3D" }} />
 <FoodCard data={{ name: "Dinner", price: 9000, img: "https://images.unsplash.com/photo-1542691457-cbe4df041eb2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnJlYWtmYXN0fGVufDB8fDB8fHww" }} />
 <FoodCard data={{ name: "Steak", price: 10000, img: "https://plus.unsplash.com/premium_photo-1669559809547-6e4c4fe41371?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGJyZWFrZmFzdHxlbnwwfHwwfHx8MA%3D%3D" }} />
  <Typography>  <AutoAwesomeIcon></AutoAwesomeIcon>  амттан</Typography>
  <FoodCard data={{ name: "Breakfast", price: 2000, img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJyZWFrZmFzdHxlbnwwfHwwfHx8MA%3D%3D" }} />
 <FoodCard data={{ name: "Lunch", price: 4000, img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWNlJTIwY3JlYW18ZW58MHx8MHx8fDA%3D" }} />
 <FoodCard data={{ name: "Dinner", price: 9000, img: "https://images.unsplash.com/photo-1542691457-cbe4df041eb2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnJlYWtmYXN0fGVufDB8fDB8fHww" }} />
 <FoodCard data={{ name: "Steak", price: 10000, img: "https://plus.unsplash.com/premium_photo-1669559809547-6e4c4fe41371?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGJyZWFrZmFzdHxlbnwwfHwwfHx8MA%3D%3D" }} />
  
</Grid> */}