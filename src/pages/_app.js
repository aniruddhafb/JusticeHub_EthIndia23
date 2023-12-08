import '@/styles/bootstrap.css'
import '@/styles/bootstrap-un.css'
import '@/styles/font-awesome.min.css'

// other imports 
import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }) {
  return(
    <ChakraProvider>
    <Component {...pageProps} />
    </ChakraProvider>
  )
}
