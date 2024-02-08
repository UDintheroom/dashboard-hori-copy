import Routers from "./Routers"
// import './assets/scss/style.scss'
import { ChakraProvider } from '@chakra-ui/react'
import { ThemeProvider } from "styled-components"
import theme from './theme/theme'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Routers />
      </ThemeProvider>
    </ChakraProvider>
  )
}

export default App;
