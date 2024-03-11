"use client";

import {
    Container,
    Grid,
    Skeleton,
    Stack,
    Typography,
    Box,
    Divider,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    OutlinedInput,
    FormHelperText,
    SelectChangeEvent,
    Checkbox,
    FormControlLabel,
    FormGroup
  } from "@mui/material";
  import React, { ReactNode, useState } from "react";
  import Link from "next/link";
  import { useContext } from "react";
  import FoodCard from "@/components/DrawerCard/FoodCard";
  import { Button } from "@/components";
import { useFormik } from "formik";
import { userInfo } from "os";
import  * as Yup from "yup"
 

 export const DrawerLocation = ({ basket, handleOrder }: any) => {
     function handleChange(event: SelectChangeEvent<{ new(): Location; prototype: Location; }>, child: ReactNode): void {
         throw new Error("Function not implemented.");
     }
     const { basket } = useContext(UserContext);
     const formik = useFormik({
        onSubmit: ({ user, foods}) => {
          console.log("ID", userInfo);
          console.log("FOODS", foods);
          basket(user, foods);
        },
        initialValues: { user: "", foods: "" , address:""},
        validateOnChange: false,
        validateOnBlur: false,
        validationSchema,
      });
    
    return ( 
    <Container>
 <Stack direction={"row"}>
  <Stack 
   boxShadow={3}
   bgcolor={"white"}
   py={10}
   px={5}
   direction={"column"}
   height={"93%"}
   width={"100%"}
   justifyContent={"space-between"}
   alignItems={"start"}
   >
    <Typography>Hayagiin medeelel oruulna uu</Typography>
    <Typography sx={{ textDecorationColor:"blue" }}>Huleegdej baina</Typography>
    <Grid padding={"15px"}>
 <FormControl 
  sx={{ margin: '30px' }}
  fullWidth
 >
  <InputLabel id="demo-simple-select-label">Duureg</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={Location}
    label="Duureg Songono uu"
    onChange={handleChange}
  >
    <MenuItem value={10}>BZD</MenuItem>
    <MenuItem value={20}>HUD</MenuItem>
    <MenuItem value={30}>SBD</MenuItem>
  </Select>
</FormControl>

<FormControl  sx={{ margin: '30px' }} fullWidth >
  <InputLabel id="demo-simple-select-label">Khoroo</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={Location}
    label="Khoroo Songono uu"
    onChange={handleChange}
  >
    <MenuItem value={10}>1</MenuItem>
    <MenuItem value={20}>13</MenuItem>
    <MenuItem value={30}>11</MenuItem>
  </Select>
</FormControl>
<FormControl  sx={{ margin: '30px' }} fullWidth>
  <InputLabel id="demo-simple-select-label">Bair</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={Location}
    label="Bair Songono uu"
    onChange={handleChange}
  >
    <MenuItem value={10}>1A</MenuItem>
    <MenuItem value={20}>2A</MenuItem>
    <MenuItem value={30}>3A</MenuItem>
  </Select>
</FormControl>
<Typography>Nemelt medeelel oruulna uu</Typography>
<form noValidate autoComplete="off">
  <FormControl sx={{ width: '25ch' }}>
    <OutlinedInput placeholder="Orts, davhar, ortsnii kod" />
    <FormHelperText />
  </FormControl>
</form>
<Typography>Utasnii Dugaar</Typography>
<form noValidate autoComplete="off">
  <FormControl sx={{ width: '25ch' }}>
    <OutlinedInput placeholder="Utasnii Dugaaraa oruulna uu" />
    <FormHelperText />
  </FormControl>
</form>
<Typography>Tulbur Toloh</Typography>
<FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="Belneer" />
  <FormControlLabel control={<Checkbox defaultChecked />} label="Kartaar" />
</FormGroup>
</Grid>

 </Stack>
      <Stack
        direction={"column"}
        height={"93%"}
        width={"100%"}
        justifyContent={"space-between"}
        sx={{ marginLeft: '50px', marginTop:"30px" }}
      >
        <Box
          alignSelf={"center"}
          height={"100%"}
          width={"100%"}
          overflow={"auto"}
        >
          {basket?.foods.map((food: any) => (
            <FoodCard key={food._id} selectedFood={food} />
          ))}
        </Box>
        <Divider />
        <Grid
          width={"100%"}
          container
          bottom={0}
          boxShadow={3}
          bgcolor={"white"}
          py={10}
          px={5}
        >
          <Grid
            item
            xs={6}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            pl={5}
          >
            <Typography variant="body1">Нийт төлөх дүн</Typography>
            <Typography variant="h6" fontWeight={600}>
              {basket?.totalPrice.toLocaleString()}₮
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Button label={"Захиалах"} onClick={handleOrder} />
          </Grid>
        </Grid>
      </Stack>
      </Stack>
      </Container>
    );
  };
  