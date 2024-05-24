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



// const Page = () => {
//   return (
//     <Box
//       sx={{
//         position: "absolute",
//         top: "0",
//         left: "0",
//         backgroundSize: "cover",
//         backgroundImage: `url("/images/grafika3.webp")`,
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         width: "100%",
//         height: "100%",
//       }}
//     >
//       <Background path="/images/grafika3.webp" />
//     </Box>
//   );
// };

// export default Page;