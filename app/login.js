import { useState, useRef } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {
  ScreenContainer,
  Header,
  Button,
  Column,
  Input,
  Gap,
} from '@/components';
import { useAppContext } from '@/contexts/AppContext';

const LoginScreen = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    phoneNumber,
    setPhoneNumber,
  } = useAppContext();

  const [isNew, setIsNew] = useState(false);

  const passwordRef = useRef(null);
  const onNext = () => {
    passwordRef.current.focus();
  };

  const confirmPasswordRef = useRef(null);
  const onNextConfirm = () => {
    confirmPasswordRef.current.focus();
  };

  const phoneNumberRef = useRef(null);
  const onNextPhone = () => {
    phoneNumberRef.current.focus();
  };

  const onCreate = () => {
    if (!isNew) return setIsNew(true);
  };

  const loginDisabled = !email || !password;
  const createDisabled =
    isNew && (!email || !password || !confirmPassword || !phoneNumber);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScreenContainer>
          <Header title='booth' subTitle='A catalyst for connection' />
          <Gap />
          <Column
            $width='80%'
            $justify='space-between'
            $maxWidth='400px'
            style={{ flex: 1 }}
          >
            <Column $gap='16px'>
              <Input
                label='Email address'
                value={email}
                onChangeText={(text) => setEmail(text)}
                textContentType='username'
                autoCapitalize='none'
                keyboardType='email-address'
                returnKeyType='next'
                onSubmitEditing={onNext}
              />
              <Input
                ref={passwordRef}
                label='Password'
                value={password}
                onChangeText={(text) => setPassword(text)}
                textContentType='password'
                autoCapitalize='none'
                keyboardType='default'
                returnKeyType='next'
                onSubmitEditing={onNextConfirm}
              />
              {isNew && (
                <>
                  <Input
                    ref={confirmPasswordRef}
                    label='Confirm Password'
                    value={confirmPassword}
                    onChangeText={(text) => setConfirmPassword(text)}
                    textContentType='password'
                    autoCapitalize='none'
                    keyboardType='default'
                    returnKeyType='next'
                    onSubmitEditing={onNextPhone}
                  />
                  <Input
                    ref={phoneNumberRef}
                    label='Phone number'
                    value={phoneNumber}
                    onChangeText={(text) => setPhoneNumber(text)}
                    keyboardType='phone-pad'
                    returnKeyType='go'
                    onSubmitEditing={onCreate}
                  />
                </>
              )}
            </Column>
            <Column>
              <Button disabled={loginDisabled}>Login</Button>
              <Button onPress={onCreate} disabled={createDisabled}>
                Create Account
              </Button>
            </Column>
          </Column>
        </ScreenContainer>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
