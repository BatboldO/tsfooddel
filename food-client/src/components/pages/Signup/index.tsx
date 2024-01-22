"use client";

import  {Button} from "@/components/core/Button";
import  {Input} from "@/components/core/Input";
import { Box, Container, Stack, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import {Header} from "@/components/header"
import {Footer} from "@/components/footer"
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import Checkbox from '@mui/material/Checkbox';

import React from "react";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function goToHome() {
    window.location.href = 'http://localhost:3000/';
}

export function SwitchtoLogin() {
    window.location.href = 'http://localhost:3000/Login';
}


const SignupPage = () => {
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
         Бүртгүүлэх
        </Typography>
        <Stack width="100%" sx={{ mb: "2rem" }}>
          <Input label="Нэр" />
          <Input label="Имэйл" />
          <Input label="Хаяг" />
          <Input label="Нууц үг" showPassword />
          <Input label="Нууц үгээ баталгаажуулна уу" showPassword />
          
        </Stack>
        <Checkbox {...label} />
        <Typography marginBottom={12} >Үйлчилгээний нөхцөл зөвшөөрөх</Typography>
        <Stack flex="row" width="100%" justifyContent="flex-end">
          <Button label="Бүртгүүлэх" onClick={(goToHome)}  />
        </Stack>
        <Stack sx={{ my: "2rem" }}>
          <Typography>Эсвэл</Typography>
        </Stack>
        <Stack flex="row" width="100%" justifyContent="flex-end">
          <Button label="Нэвтрэх" btnType="outlined" onClick={(SwitchtoLogin)} />
        </Stack>
      </Box>
      <Footer/>
    </Container>

  );
};


export default SignupPage;