"use client";

import  {Button} from "@/components/core/Button";
import  {Input} from "@/components/core/Input";
import { Box, Container, Stack, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import {Header} from "@/components/header"
import {Footer} from "@/components/footer"


import React from "react";


function Switchtostep3() {
  window.location.href = 'http://localhost:3000/PassReco/step3';
}

 

const StepTwo= () => {
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
          Нууц үг сэргээх 2
        </Typography>
        <Stack width="100%" sx={{ mb: "2rem" }}>
          <Input label="Имэйл хаягаа оруулна уу" />
         
        </Stack>

        <Stack flex="row" width="100%" justifyContent="flex-end">
          <Button label="Үргэлжлүүлэх" btnType="outlined" onClick={Switchtostep3}  />
        </Stack>
      </Box>
      <Footer/>
    </Container>

  );
};

export default StepTwo;