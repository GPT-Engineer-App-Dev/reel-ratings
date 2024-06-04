import { Container, Text, VStack, Heading, Box, Image, SimpleGrid } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Movie Reviews
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Discover the latest reviews of your favorite movies. Dive into the world of cinema with our comprehensive reviews and ratings.
        </Text>
        <Box w="full" bg="gray.100" p={5} borderRadius="md" boxShadow="md">
          <Heading as="h2" size="lg" mb={4}>
            Latest Reviews
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
            <Box bg="white" p={5} borderRadius="md" boxShadow="sm">
              <Image src="https://via.placeholder.com/150" alt="Movie Poster" mb={3} borderRadius="md" />
              <Heading as="h3" size="md" mb={2}>
                Movie Title 1
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Text>
            </Box>
            <Box bg="white" p={5} borderRadius="md" boxShadow="sm">
              <Image src="https://via.placeholder.com/150" alt="Movie Poster" mb={3} borderRadius="md" />
              <Heading as="h3" size="md" mb={2}>
                Movie Title 2
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Text>
            </Box>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;