"use client";

import  {Button} from "@/components/Core/Button";
import  {Input} from "@/components/Core/Input";
import { Box, Container, Stack, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import {Header} from "@/components/header"
import {Footer} from "@/components/Footer"

import React from "react";
import { text } from "stream/consumers";
import { start } from "repl";


const Locations = () => {
  return (

   <Container>
       <Header/>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          margin: "auto ",
          px: "2.1rem",
          maxWidth: "450px",
          height: "calc(100vh - 90px)",
        }}
      >
        <Typography
          align="center"
          gutterBottom
          sx={{ fontSize: "28px", fontWeight: "700",  }}
        >
          Нэвтрэх
        </Typography>
        <Box>
        <img
        src="map.png"
        alt={"image"}
        loading="lazy"
      />
       </Box>

       <Stack sx={{display:"flex",
       flexDirection:"row",
    
     }}>
       <Box>
       <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
         <path d="M8.18645 2.60351C9.15292 -0.00834179 12.8471 -0.00833988 13.8136 2.60351L14.8427 5.38482C15.1466 6.20598 15.794 6.85341 16.6152 7.15727L19.3965 8.18645C22.0083 9.15292 22.0083 12.8471 19.3965 13.8136L16.6152 14.8427C15.794 15.1466 15.1466 15.794 14.8427 16.6152L13.8136 19.3965C12.8471 22.0083 9.15292 22.0083 8.18644 19.3965L7.15727 16.6152C6.85341 15.794 6.20598 15.1466 5.38482 14.8427L2.60351 13.8136C-0.00834179 12.8471 -0.00833988 9.15292 2.60351 8.18645L5.38482 7.15727C6.20598 6.85341 6.85341 6.20598 7.15727 5.38482L8.18645 2.60351Z" fill="#18BA51"/>
         </svg>
         </Box>
          <Typography sx={{display:"flex",
           alignItems: "start",
           justifyContent:"start",
            marginLeft:"4px"
        }}
        >Хүргэлтийн бүс дэх хаягууд</Typography>
        </Stack>
       



        <Stack flex="row" width="100%" justifyContent="flex-end">

        </Stack>
      </Box>
      <Footer/>
    </Container>

  );
};

export default Locations;