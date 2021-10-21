import {Box,Text, Flex,Center, Heading, Input,VStack,InputGroup,InputLeftElement,Icon} from "@chakra-ui/react"
import { BsSearch } from "react-icons/bs";
import FAQHeader from "./FAQHeader";
import FAQBody from "./FAQBody";
const FAQ = () => {
    return (
        <Box>
        <FAQHeader/>
        <FAQBody />
        </Box>
        
      );
}
 
export default FAQ;