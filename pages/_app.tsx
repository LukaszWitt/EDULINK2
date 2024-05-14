import Background from "@/components/Background";
import "@/styles/globals.css";
import { Box } from "@mui/material";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (<Box sx={{backgroundColor: 'pink'}}><Component {...pageProps} />
  {/* <Background path= '/images/grafika2.webp'/> */}

          </Box> 
)
}