import { Container } from '@chakra-ui/react';
import * as React from 'react';

export function Card(props: { children?: React.ReactNode }) {
  return (
    <Container maxW="lg" p="4">
      {props.children}
    </Container>
  );
}
