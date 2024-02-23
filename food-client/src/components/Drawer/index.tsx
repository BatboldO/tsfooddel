import { Box, Button, Divider, Drawer, Typography } from "@mui/material";
import { FaChevronLeft } from "react-icons/fa";

import React from "react";
import { DrawerCard } from "../DrawerCard";
import { yellow } from "@mui/material/colors";

interface IDrawerProps {
  open: boolean;
  handleClose: () => void;
}

const MyDrawer = ({ handleClose, open }: IDrawerProps) => {
  return (
    <>
      <React.Fragment>
        <Drawer open={open} onClose={handleClose} anchor="right">
          <Box width={584} p={5}>
            <Box
              pb={5}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <FaChevronLeft />
              <Typography fontWeight={600}>Таны сагс</Typography>
              <Typography></Typography>
            </Box>
            <Divider />
            <DrawerCard />
          </Box>
          <Box display= "flex" justifyContent="flex-start" >
            <Divider />
            <Box display="flex"  flexDirection="column" >
              <Typography color="grey">Нийт төлөх дүн</Typography>
             <Typography color="black">34,800₮</Typography>
             </Box>
             <Box marginLeft={10} display="flex" justifyContent="flex-end" >
             <Button variant="contained" color="success" >Захиалах</Button>
             </Box>
          </Box>
          <Divider />
        </Drawer>
      </React.Fragment>
    </>
  );
};

export default MyDrawer;
