import * as React from "react";
// import { PaletteMode, ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Navbar from "@/components/navbar";
import AppAppBar from "@/components/navbar";
import Page from "@/components/Page";
import Slider from "../components/Slider";
import { Grid } from "@mui/material";
import Pricing from "@/components/Pricing";
import CardFlip from "../components/CardFlip";
import { Height } from "@mui/icons-material";
import { color } from "framer-motion";
import Background from "@/components/Background";

export default function MyApp() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        minWidth: "200px",
        maxWidth: "1200px",
        width: "80%",
        mx: "auto",
      }}
    >
      <AppAppBar />

        <Box>
          <Grid container justifyContent={"center"} alignItems={"center"}>
            <Grid
              item
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              maxWidth={"100%"}
            >
              <Page />
            </Grid>
            </Grid>

        </Box>
           
           
          <Box>
            <Grid
              item
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              marginTop={"90px"}
            >
              <Slider />
            </Grid>
           </Box> 
          
          
          <Box>
            <Grid container justifyContent={'center'}  sx={{
            minHeight:'70vh',
          }}>
            
            <Grid item xs={6} padding={2} display={'flex'} justifyContent={'center'}>
              <CardFlip
                frontIcon={<div>Ikona 1</div>}
                frontText={<div>Tekst 1</div>}
                backText={<div>Tekst 1 na odwrocie</div>}
                backButtonText="Przycisk 1"
              />
            </Grid>

            <Grid sx={{
              backgroundColor: 'black'
            }} item xs={6}  padding={2} display={'flex'} justifyContent={'center'}>
              <CardFlip
                frontIcon={<div>Ikona 1</div>}
                frontText={<div>Tekst 1</div>}
                backText={<div>Tekst 1 na odwrocie</div>}
                backButtonText="Przycisk 1"
              />
            </Grid>

            </Grid>
          </Box>

          <Box>
            <Grid
              item
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              marginTop={"90px"}
            >
              <Pricing />
            </Grid>
           </Box>
         </Box>
        
        
        
      );
    }
