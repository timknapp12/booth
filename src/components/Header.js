import { Text } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  background-color: ${(props) => props.theme.primary};
`;

export const Header = () => {
  return (
    <Container>
      <Text>Header</Text>
    </Container>
  );
};
