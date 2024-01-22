"use client";
import React from "react";
import { Button, Typography, Container, Box, IconButton } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


export const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 3, px: 2, bgcolor: "#18BA51", }}>
      <Container maxWidth="xl" style={{ alignItems: "center", display: "flex", flexDirection: "column", rowGap: 20, position:"relative"}} >
        <div style={{ display: "flex", alignItems: "center" }}>
        
          <svg width="33" height="20" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.85882 2.53921L1.65369 10.41C1.12892 11.3951 0.865967 12.4762 0.865967 13.5587C0.865967 14.6414 1.12892 15.7224 1.65369 16.7074L5.85882 24.5784C6.63389 26.0322 8.14968 26.9402 9.79921 26.9402H14.2658V24.7105H14.2644C13.4403 24.7105 12.6824 24.2572 12.2948 23.5304L8.09132 15.6579C7.74001 15.0017 7.56493 14.281 7.56493 13.5587C7.56493 12.8364 7.74001 12.1158 8.09132 11.4597L12.2948 3.58726C12.6824 2.86028 13.4403 2.40709 14.2644 2.40709H14.2658V0.177246H9.79921C8.14968 0.177246 6.63389 1.08541 5.85882 2.53921Z"
              fill="white"
            />
            <path
              d="M31.3423 10.4101L27.1374 2.53927C26.3621 1.0853 24.8465 0.177304 23.197 0.177304H18.7302V2.40698H18.7318C19.5558 2.40698 20.3137 2.86034 20.7012 3.58716L24.9047 11.4596C25.2562 12.1158 25.4309 12.8365 25.4309 13.5588C25.4309 14.2811 25.2562 15.0017 24.9047 15.658L20.7012 23.5303C20.3137 24.2572 19.5558 24.7104 18.7318 24.7104H18.7302V26.9403H23.197C24.8465 26.9403 26.3621 26.0323 27.1374 24.5783L31.3423 16.7075C31.8669 15.7224 32.13 14.6413 32.13 13.5588C32.13 12.4763 31.8669 11.3952 31.3423 10.4101Z"
              fill="white"
            />
          </svg>
          <Typography variant="body1" color="white">Food Delivery</Typography>
        </div>
        <div style={{}}>
          <Button variant="secondary" >Нүүр</Button>
          <Button variant="primary">Холбоо барих</Button>
          <Button variant="primary">Хоолны цэс</Button>
          <Button variant="primary">Үйлчилгээний нөхцөл</Button>
          <Button variant="primary">Хүргэлтийн бүс</Button>
          <Button variant="primary">Нууцлалын бодлого</Button>
        </div>
        <div class="flex">
         <IconButton> <FacebookIcon/> </IconButton>
         <IconButton> <InstagramIcon/> </IconButton>
          <IconButton><TwitterIcon/> </IconButton>
          </div>
       
        <svg  width="1300" height="1" viewBox="0 0 1300 1"  fill="none" xmlns="http://www.w3.org/2000/svg" >
          <line y1="0.5" x2="1300" y2="0.5" stroke="white" />
        </svg>
        <Copyright />
      </Container>
    </Box>
  );
};

function Copyright() {
  return (
    <Typography variant="body2" color="white">
      {"© "}
      {new Date().getFullYear()}
      {"Pinecone Foods LLC"}
      {"."}

      <Typography variant="body2" color= "white" >
        {"Зохиогчийн эрхээр хамгаалагдав"}
        {"."}
      </Typography>
    </Typography>
  );
}


