import { Box, Flex, Heading, Image, VStack } from '@chakra-ui/react';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AboutCard, Layout, ProjectsCard, SocialCard } from '../components';
import MeImage from '../me.jpg';

function Home() {
  return (
    <Layout>
      <Flex columnGap="3rem" direction={{ base: 'column', lg: 'row' }} justify="space-around">
        <VStack alignContent="flex-center" mt={{ base: '', lg: '5rem' }} maxW="md">
          <Box justify="space-around" align="center">
            <Heading size="2xl" mt="4" mb="8">
              <FontAwesomeIcon icon={faComment} style={{ marginRight: '1rem', transform: 'scaleX(-1)' }} />
              Hi, I'm Jason!
            </Heading>
            <Image m="4" src={MeImage} alt="Jason Rasmussen" borderRadius="50%" />
          </Box>
        </VStack>
        <VStack>
          <AboutCard />
          <ProjectsCard />
          <SocialCard />
        </VStack>
      </Flex>
    </Layout>
  );
}

export default Home;
