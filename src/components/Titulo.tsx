import {Box, HStack} from "@chakra-ui/react"

export const Titulos: React.FC = () =>{
    return(
        <HStack>
            <Box
                width={"95%"}
                h={"18%"}
                as="nav"
                bg="white" 
                paddingX={"2%"}
                borderRadius="lg"       
                boxShadow="sm" 
                marginTop={"3%"}   
                
                >
                    <h1 style={{fontSize: "2rem", fontWeight: "bold"}}>
                        Clientes:
                        Clique para mudar o cliente exibido
                    </h1>
            </Box>
            <Box

        </HStack>
        

    );
}