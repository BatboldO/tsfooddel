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
import {useFormik} from "formik"
import * as yup from "yup"
import { UserContext } from "@/context/userProvider"
import React, { useContext } from "react";

 
const validationSchema = yup.object({
  name: yup
  .string()
  .required("zaaval boglo"),
  email: yup
  .string()
  .max(100, "email hayag ni 100 temdegtees hetrehgui bolohiig anhaarna uu")
  .required("email hayagiig zaaval oruulna uu")
  .email("huchintei email hayag baih yostoi"),
  // .matches(/^[@\s]+@[^@\s,]*/, "ta zuvhun gmail hayag oruulna uu"),
  address: yup
  .string()
  .required(),
  password: yup
  .string()
  .min(6, "nuuts ug hamgiin bagadaa 6 temdegt baih yostoi")
  .required("password talbariig zaaval boglono uu"),
 
});

const SignupPage = () => {
 
  const formik = useFormik({
    onSubmit: ({ email, password }) => {
      console.log("EMAIL", email);
      console.log("PASS", password);
     
    },
    initialValues: {name:"",  email: "", address:"", password: "" ,repass:"" },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema,
  });




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
          <Input name="name" label="Нэр"  onChange={formik.handleChange}
            errorText={formik.errors.name} />
          <Input name="email" label="И-Мэйл"  onChange={formik.handleChange}
            errorText={formik.errors.email}  />
          <Input name="address" label="Хаяг" onChange={formik.handleChange}
            errorText={formik.errors.address} />
          <Input name="password" label="Нууц үг" showPassword  onChange={formik.handleChange}
            errorText={formik.errors.password}/>
          <Input name="password" label="Нууц үг давтах" showPassword onChange={formik.handleChange}
            errorText={formik.errors.repass} />
        </Stack>

        <Stack sx={{ mb: "1rem" }}>
          <FormControlLabel
            control={<Checkbox name="jason" />}
            label="Үйлчилгээний нөхцөл зөвшөөрөх"
          />
        </Stack>

        <Stack flex="row" width="100%" justifyContent="flex-end">
          <Button label="Бүртгүүлэх" onClick={formik.handleSubmit}/>
        </Stack>
      </Box>
    </Container>
  );
};

export default SignupPage;
