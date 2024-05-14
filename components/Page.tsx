import * as React from "react";
import grafika from "../public/images/grafika2.webp";
import { Box } from "@mui/material";
import Image from "next/image";
import Background from "./Background";

const Page = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Background path="/images/grafika3.webp" />
    </Box>
  );
};

export default Page;
