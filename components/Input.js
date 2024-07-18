import { forwardRef, useRef, useState, useEffect } from 'react';
import { Pressable } from 'react-native';

import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { Label } from './texts';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';

const Container = styled.TouchableOpacity`
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

const ThemedTextInputContainer = styled.View`
  width: 100%;
  flex-direction: row;
`;

const ThemedInput = styled.TextInput`
  color: ${(props) => props.theme.primaryText};
  flex: 1;
  font-size: 16px;
`;

const ThemedIcon = styled(Ionicons)`
  color: ${(props) => props.theme.secondaryText};
`;

// eslint-disable-next-line react/display-name
export const Input = forwardRef(
  (
    {
      focused,
      textContentType,
      label = '',
      onFocus = () => {},
      style,
      ...props
    },
    ref
  ) => {
    const inputRef = useRef();

    const [secureTextEntry, setSecureTextEntry] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
      if (focused) {
        setIsFocused(true);
      }
      return () => {
        setIsFocused(false);
      };
    }, [focused]);

    useEffect(() => {
      if (textContentType === 'password') {
        setSecureTextEntry(true);
      }
    }, [textContentType]);

    const onLabelTouch = () => {
      if (inputRef.current) {
        return inputRef.current.focus();
      }
      if (ref.current) {
        ref.current.focus();
      }
    };

    return (
      <Container style={style} activeOpacity={1} onPress={onLabelTouch}>
        <>
          {label ? (
            <LabelContainer>
              <Label>{label}</Label>
            </LabelContainer>
          ) : null}
          <ThemedTextInputContainer focused={isFocused}>
            <ThemedInput
              ref={ref || inputRef}
              secureTextEntry={secureTextEntry}
              onBlur={() => setIsFocused(false)}
              onFocus={() => {
                setIsFocused(true);
                onFocus();
              }}
              {...props}
            />
            {textContentType === 'password' ? (
              <Pressable
                testID='show-passord-button'
                hitSlop={8}
                onPress={() => setSecureTextEntry((state) => !state)}
              >
                {secureTextEntry ? (
                  <ThemedIcon size={24} name='eye' />
                ) : (
                  <ThemedIcon size={24} name='eye-off' />
                )}
              </Pressable>
            ) : null}
          </ThemedTextInputContainer>
        </>
      </Container>
    );
  }
);

Input.propTypes = {
  focused: PropTypes.bool,
  textContentType: PropTypes.string,
  label: PropTypes.string,
  onFocus: PropTypes.func,
  style: PropTypes.object,
};
