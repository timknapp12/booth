import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { Label } from './texts';

const Container = styled.View`
  border-color: ${(props) => props.theme.secondaryText};
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  width: 100%;
  position: relative;
  min-height: 40px;
  justify-content: center;
  padding: 4px;
`;

const LabelContainer = styled.View`
  background-color: ${(props) => props.theme.primaryBackground};
  padding: 3px;
  position: absolute;
  top: -12px;
  left: 8px;
`;

const StyledInput = styled.TextInput`
  color: ${(props) => props.theme.primaryText};
`;

export const Input = ({ label, ...props }) => {
  return (
    <Container>
      <LabelContainer>
        <Label>{label}</Label>
      </LabelContainer>
      <StyledInput {...props} />
    </Container>
  );
};

Input.propTypes = {
  label: PropTypes.string,
};
