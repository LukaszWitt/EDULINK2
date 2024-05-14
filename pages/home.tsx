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
        <Grid
          item
          xs={12}
          display={"flex"}
          justifyContent={"center"}
          marginTop={"90px"}
        >
          <Slider />
        </Grid>
      </Grid>
    </Box>
  );
}
