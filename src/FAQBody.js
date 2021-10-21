import {Box,Text, Flex,Center,SimpleGrid,useToast,Button, Heading, Input,VStack,InputGroup,InputLeftElement,Icon} from "@chakra-ui/react"
import FAQCategory from "./FAQCategory";
import im from './assets/Auto Layout Vertical.png'
import im1 from './assets/Auto Layout Vertical (1).png'
import im2 from './assets/Auto Layout Vertical (2).png'
import im3 from './assets/Auto Layout Vertical (3).png'
import im4 from './assets/Auto Layout Vertical (4).png'
import im5 from './assets/Auto Layout Vertical (5).png'
import{EmailIcon} from '@chakra-ui/icons'
import { BsPerson } from "react-icons/bs";
const FAQBody = () => {
    return ( 
        <Box bg="yellow">
             <Heading  pt='30px' textAlign='center' fontSize= {["md","md","xl","xl"]} size= {["md","md","xl","xl"]}  justifyContent='center'>
            How can we help you?
            </Heading>
            <Text textAlign={['center','center','center']}  fontSize= {["sm","sm","lg","lg"]}>Choose the category to find the help you need  </Text>
            
            <VStack pt="40px" pb="40px" spacing={1} >
            <SimpleGrid columns= {[1,1,3,3]} spacing="20px">
               
                
                       <FAQCategory im={im}   />
                       <FAQCategory  im={im1}  />
                       <FAQCategory  im={im3} />
                       <FAQCategory  im={im3}  />
                       <FAQCategory  im={im4}/>
                       <FAQCategory  im={im5}  />
                  
            </SimpleGrid>

            </VStack>
                <br/>
                <Text textAlign='center' lineHeight='41px'  font='Cera Pro' fontSize= "2xl">Need More Help ?  </Text><br/>
                <Center  >
                <Box
                    
                    display="flex"
                    height= '80px'
                    flexDirection = {["column", "column","row","row"]} 
                    width=  {["md","md","lg","lg"]}
                    textAlign='center'    justifyContent='center'  backgroundColor='#F4F6F6'
                >
                    <Button textAlign='center' pl='12px' height="100%" width=  {["md","md","lg","lg"]} backgroundColor='#F4F6F6' alignItems='center' justifyContent='center' alignContent='center' justifyItems='center' borderRadius='rounded'>
                        <EmailIcon ml='6px'  w={6} h={8}/>
                        <Text fontSize={['16px','16px','22px','22px']}  p='8px'> Send us an email</Text>
                        
                    </Button>
                   
                    <Button textAlign='center' pl='12px'  width=  {["md","md","lg","lg"]} height="100%" alignItems='center' backgroundColor='#F4F6F6' alignContent='center' borderRadius='rounded'>
                      <BsPerson size='20px' />
                       <Text fontSize={['16px','16px','22px','22px']} p='8px'> Contact Us</Text>
                    </Button>
                    
                </Box>
                </Center>
        </Box>
     );
}
 
export default FAQBody;
