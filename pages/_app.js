// import "@/styles/globals.css"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import "../styles/index.css"

const theme = extendTheme({
  colors: {
    black: "#000",
    white: "#fff",
    primary: "#403e3e",
    secondary: "#39E278",
    gray: {
      50: "#f9f0f0",
      100: "#dad7d8",
      200: "#bfbebe",
      300: "#a5a3a4",
      400: "#8c898a",
      500: "#737070",
      600: "#595757",
      700: "#403e3e",
      800: "#282525",
      900: "#130a0a",
    },
  },
  styles: {
    global: {
      body: {
        bg: "primary",
        color: "white",
      },
    },
  },
})

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
