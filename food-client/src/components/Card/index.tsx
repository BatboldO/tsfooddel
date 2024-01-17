"use client"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Box from '@mui/material/Box';

  const FoodCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image="egg.png"
        alt="egg dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.primary" fontWeight="bold">
        Өглөөний хоол
        </Typography>
        <Box sx= {{display:"flex", gap:2}}>
        <Typography  fontWeight="bold "color="green">4,800₮ </Typography>
        <Typography style={{textDecoration:"line-through"}}>6,800₮</Typography>
        </Box>
      </CardContent>
    </Card>
  )};

  export default FoodCard;
