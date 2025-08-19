import { Box, Button, Center, HStack } from "@chakra-ui/react";

export const Bloco1: React.FC = () =>{
    return (
            <HStack
            align={"center"}
            h={"25%"}
            bg="blue.500"
            width={"85%"}
            borderRadius={"lg"}
            boxShadow={"sm"}
            marginTop={"3%"}
            >
                <Box>
                    CLientes:
                    Clique para mudar o cliente exibido.
                </Box>
                <Box
                h={"10%"}
                >
                </Box>
                <Box>
                    <Button
                    variant={"outline"}
                    _hover={{outlineColor: "red.700"}}
                    >
                    Aperte para novo cliente.
                    </Button>
                </Box>
            </HStack>

    );
}