import { Box, Flex } from "@chakra-ui/react";

const Header = () => {
  return (
      <Flex
            as="header"
                  align="center"
                        justify="space-between"
                              wrap="wrap"
                                    padding="1.5rem"
                                          bgGradient="linear(to-r, black, white)"
                                                color="white"
                                                    >
                                                          <Box display="flex" alignItems="center">
                                                                
                                                                          <Box as="h1" fontSize="xl" fontWeight="bold" ml="2">
                                                                                    My Coding App
                                                                                            </Box>
                                                                                                  </Box>
                                                                                                      </Flex>
                                                                                                        )
                                                                                                        };

                                                                                                        export default Header;
