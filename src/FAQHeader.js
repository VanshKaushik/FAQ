
import {Box,Text, Flex,Center, Heading, Input,VStack,InputGroup,InputLeftElement,Icon} from "@chakra-ui/react"
import { BsSearch } from "react-icons/bs";
const FAQHeader = () => {
    return ( 
        <Box
      alignContent="center"
      justify="space-between"
      textAlignVertical='center'
      alignItems="center"
      wrap="wrap"
      bg="red"
      
      justifyContent='center'
     
      color="white"
      height= "360px">
         
          <VStack spacing={12}>
          <Heading mt='90px' size= "xl" letterSpacing={"tighter"} justifyContent='center'>
          Frequently Asked Questions
        </Heading>
        <InputGroup alignContent='center' justifyContent='center' width={["sm","sm","lg","lg"]}  bg="white" alignItems='center' bg='red' >
        <InputLeftElement top='3px' children={<BsSearch color ="gray" size="20px" />} />
        <Input   placeholder="What are you looking for?"   width={["sm","sm","lg","lg"]} size={"sm","sm","lg","lg"} justifyContent='center' bg="white" />
     </InputGroup>
        
          </VStack>
          
          </Box>

     );
}
 
export default FAQHeader
  