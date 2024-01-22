"use client";

import  {Button} from "@/components/core/Button";
import  {Input} from "@/components/core/Input";
import { Box, Container, Stack, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import {Header} from "@/components/header"
import {Footer} from "@/components/footer"

import React from "react";

function goToHome() {
  window.location.href = 'http://localhost:3000/';
}
function SwitchtoSignup() {
  window.location.href = 'http://localhost:3000/Signup';
}
function SwitchtoForgotPass() {
  window.location.href = 'http://localhost:3000/PassReco/step1';
}

const LoginPage = () => {
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
        <Stack width="100%" sx={{ mb: "2rem" }}>
          <Input label="Имэйл" />
          <Input label="Нууц үг" showPassword />
          {/* <Button label="Нууц үг сэргээх" btnType="text" /> */}
          <Button label="Нууц үг сэргээх"  onClick={SwitchtoForgotPass}/>
           
         
        </Stack>

        <Stack flex="row" width="100%" justifyContent="flex-end">
          <Button label="Нэвтрэх"  onClick={goToHome}/>
        </Stack>
        <Stack sx={{ my: "2rem" }}>
          <Typography>Эсвэл</Typography>
        </Stack>
        <Stack flex="row" width="100%" justifyContent="flex-end">
          <Button label="Бүртгүүлэх" btnType="outlined" onClick={SwitchtoSignup} />
        </Stack>
      </Box>
      <Footer/>
    </Container>

  );
};

export default LoginPage;