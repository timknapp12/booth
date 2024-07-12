import styled from 'styled-components/native';

const StyledContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.primaryBackground};
  align-items: flex-start;
  justify-content: flex-start;
`;

export const ScreenContainer = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);
