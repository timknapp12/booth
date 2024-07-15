import styled from 'styled-components/native';

const StyledContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.primaryBackground};
  justify-content: ${({ $justify }) => $justify || 'flex-start'};
  align-items: ${({ $align }) => $align || 'center'};
  padding-bottom: 30px;
`;

export const ScreenContainer = ({ children, ...props }) => (
  <StyledContainer {...props}>{children}</StyledContainer>
);

export const Column = styled.View`
  gap: ${({ $gap }) => $gap || '8px'};
  justify-content: ${({ $justify }) => $justify || 'flex-start'};
  align-items: ${({ $align }) => $align || 'flex-start'};
  width: ${({ $width }) => $width || '100%'};
  height: ${({ $height }) => $height || 'auto'};
  max-width: ${({ $maxWidth }) => $maxWidth || null};
`;

export const Gap = styled.View`
  height: ${({ $height }) => $height || '12px'};
`;
