import styled from 'styled-components/native';

export const HeaderText = styled.Text`
  font-size: 48px;
  color: ${({ theme }) => theme.primaryButton};
`;

export const HeaderTextSmall = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.primaryButton};
`;

export const PrimaryButtonText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.primaryBackground};
`;

export const Label = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.secondaryText};
`;

export const PrimaryText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.primaryText};
`;
