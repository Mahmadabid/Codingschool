import { Box, SimpleGrid } from "@chakra-ui/react";

const AITools = () => {
  return (
      <Box p="4">
            <SimpleGrid columns={[1, 2, 3]} spacing="4">
                    <Box bg="gray.100" p="4" borderRadius="md" boxShadow="md">
                              <Box as="h2" fontSize="xl" fontWeight="bold" mb="2">
                                          ChatGPT
                                                    </Box>
                                                              <Box>
                                                                          ChatGPT is a language model that can generate human-like responses to text input. It can be used for a variety of natural language processing tasks, such as chatbots and language translation.
                                                                                    </Box>
                                                                                            </Box>
                                                                                                    <Box bg="gray.100" p="4" borderRadius="md" boxShadow="md">
                                                                                                              <Box as="h2" fontSize="xl" fontWeight="bold" mb="2">
                                                                                                                          BarDai
                                                                                                                                    </Box>
                                                                                                                                              <Box>
                                                                                                                                                          BarDai is an AI model that can generate bar and cocktail recipes based on input ingredients and preferences. It can be used to create unique and personalized drink recipes.
                                                                                                                                                                    </Box>
                                                                                                                                                                            </Box>
                                                                                                                                                                                    <Box bg="gray.100" p="4" borderRadius="md" boxShadow="md">
                                                                                                                                                                                              <Box as="h2" fontSize="xl" fontWeight="bold" mb="2">
                                                                                                                                                                                                          BingAI
                                                                                                                                                                                                                    </Box>
                                                                                                                                                                                                                              <Box>
                                                                                                                                                                                                                                          BingAI is an image recognition AI that can identify objects, people, and text in images. It can be used for a variety of applications, such as content moderation and search engine optimization.
                                                                                                                                                                                                                                                    </Box>
                                                                                                                                                                                                                                                            </Box>
                                                                                                                                                                                                                                                                  </SimpleGrid>
                                                                                                                                                                                                                                                                      </Box>
                                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                                        };

                                                                                                                                                                                                                                                                        export default AITools;
                                                                                                                                                                                                                                                                    