"use client";

import { Button, Input } from "@/components";
import { Box, Container, Stack, Typography } from "@mui/material";
import {ChangeEvent, useState }from "react"



const LoginPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

 
  // const MyStepper = () => {
  //   const [activeStep, setActiveStep] = useState(1);
  //   const [user, setUser] = useState({
  //     email: "",
  //     password: "",
  //     otp: "",
  //   });
  

  // const handleAllChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  // const handleClick = () => {
  //   window.location.href = "http://localhost:3000"
  // }
 

  
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          margin: "auto ",
          px: "2.1rem",
          maxWidth: "450px",
          padding: "5rem 0",
        }}
      >
        <Typography
          align="center"
          gutterBottom
          sx={{ fontSize: "28px", fontWeight: "700" }}
        >
          Нэвтрэх
        </Typography>
        <Stack width="100%" sx={{ mb: "2rem" }}>
          <Input name="email"label="Имэйл"  />
          <Input  name="password" label="Нууц үг" showPassword  />
          <Button label="Нууц үг сэргээх" btnType="text" href="/forgot-pass" />
          {/* <Typography variant="button" align="right">
            Нууц үг сэргээх
          </Typography> */}
        </Stack>

        <Stack flex="row" width="100%" justifyContent="flex-end">
          <Button label="Нэвтрэх"/>
        </Stack>
        <Stack sx={{ my: "2rem" }}>
          <Typography>Эсвэл</Typography>
        </Stack>
        <Stack flex="row" width="100%" justifyContent="flex-end">
          <Button label="Бүртгүүлэх" btnType="outlined" href="/signup" />
        </Stack>
      </Box>
    </Container>
  );
};


export default LoginPage;
