import { Box, Flex, Heading, Image, VStack } from '@chakra-ui/react';
import { AboutCard, Layout, ProjectsCard, SocialCard } from '../components';
import MeImage from '../me.jpg';

function Home() {
  return (
    <Layout>
      <Flex columnGap="3rem" direction={{ base: 'column', lg: 'row' }}>
        <VStack alignContent="flex-center" mt={{ base: '', lg: '5rem' }} width="full">
          <Box justify="space-around" align="center">
            <Heading size="2xl" mt="4" mb="8">
              👋 Hi, I'm Jason!
            </Heading>
            <Image m="4" src={MeImage} alt="Jason Rasmussen" borderRadius="50%" />
          </Box>
        </VStack>
        <VStack width="full">
          <AboutCard />
          <SocialCard />
          <ProjectsCard />
        </VStack>
      </Flex>
    </Layout>
  );
}

export default Home;
