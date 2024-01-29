"use client";

import { Button, Input } from "@/components";
import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  Stack,
  Typography,
} from "@mui/material";

import React from "react";

const SignupPage = () => {
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
          Бүртгүүлэх
        </Typography>
        <Stack width="100%" sx={{ mb: "1rem" }}>
          <Input name="name" label="Нэр" />
          <Input name="email" label="И-Мэйл"  />
          <Input name="address" label="Хаяг" />
          <Input name="password" label="Нууц үг" showPassword />
          <Input name="repass" label="Нууц үг давтах" showPassword />
        </Stack>

        <Stack sx={{ mb: "1rem" }}>
          <FormControlLabel
            control={<Checkbox name="jason" />}
            label="Үйлчилгээний нөхцөл зөвшөөрөх"
          />
        </Stack>

        <Stack flex="row" width="100%" justifyContent="flex-end">
          <Button label="Бүртгүүлэх" />
        </Stack>
      </Box>
    </Container>
  );
};

export default SignupPage;
