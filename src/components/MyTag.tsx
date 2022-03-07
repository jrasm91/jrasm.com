import { Tag } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { useColorScheme } from '../hooks';

export const MyTag = ({ children }: PropsWithChildren<any>) => {
  return (
    <Tag variant="solid" colorScheme={useColorScheme()}>
      {children}
    </Tag>
  );
};
