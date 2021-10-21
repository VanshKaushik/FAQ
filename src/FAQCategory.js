import {Box,useToast,Image} from "@chakra-ui/react"
const FAQCategory= (props) => 

{ 

    return ( 
        <Box w={["300px"]} h="270px"  justifyContent='center' alignContent='center' alignItems='center'
        onClick={()=> alert("You have clicked")}
        _hover={{
           boxShadow:"xl",
          }}
        >
        <Image    src={props.im}></Image>
        </Box>
    );
}
export default FAQCategory;