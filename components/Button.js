import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { PrimaryButtonText } from './texts';

const StyledButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, $disabled }) =>
    $disabled ? theme.disabled : theme.primaryButton};
  min-height: 40px;
  border-radius: 20px;
  width: 100%;
`;

export const Button = React.forwardRef(
  ({ children, disabled, ...props }, ref) => (
    <StyledButton
      ref={ref}
      $disabled={disabled}
      activeOpacity={disabled ? 1 : 0.2}
      {...props}
    >
      <PrimaryButtonText>{children}</PrimaryButtonText>
    </StyledButton>
  )
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
