import { Box, Flex, Heading, Image, VStack } from '@chakra-ui/react';
import { AboutCard, Layout, ProjectsCard, SocialCard } from '../components';
import MeImage from '../me.jpg';

function Home() {
  return (
    <Layout>
      <Flex gap="3rem" direction={{ base: 'column', lg: 'row' }}>
        <VStack justify="space-around" alignContent="center" width="full" maxHeight={{ lg: '80vh' }}>
          <Box justify="space-around" align="center">
            <Heading size="2xl" mt="4" mb="8">
              👋 Hi, I'm Jason!
            </Heading>
            <Image m="4" src={MeImage} alt="Jason Rasmussen" borderRadius="50%" />
          </Box>
        </VStack>
        <Flex mt={{ base: 0, lg: '12' }} direction="column" align={{ base: 'center', lg: 'flex-start' }} width="full">
          <VStack align="start">
            <AboutCard />
            <SocialCard />
            <ProjectsCard />
          </VStack>
        </Flex>
      </Flex>
    </Layout>
  );
}

export default Home;
