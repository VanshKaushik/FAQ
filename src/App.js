import { ChakraProvider } from '@chakra-ui/react';

import FAQ from './FAQ';

function App() {
  return (
    <div className="App">
      
      <ChakraProvider>
    
      <FAQ></FAQ>
      </ChakraProvider> 
      
    </ div>
  );
}

export default App;
