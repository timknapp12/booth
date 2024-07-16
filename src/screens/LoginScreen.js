import { useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import {
  ScreenContainer,
  Header,
  Button,
  Column,
  Input,
  Gap,
} from '../components';
import { useAppContext } from '../contexts/AppContext';

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

  const onCreate = () => {
    if (!isNew) return setIsNew(true);
  };

  const loginDisabled = !email || !password;
  const createDisabled =
    isNew && (!email || !password || !confirmPassword || !phoneNumber);
  return (
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
            />
            <Input
              label='Password'
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            {isNew && (
              <>
                <Input
                  label='Confirm Password'
                  value={confirmPassword}
                  onChangeText={(text) => setConfirmPassword(text)}
                />
                <Input
                  label='Phone number'
                  value={phoneNumber}
                  onChangeText={(text) => setPhoneNumber(text)}
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
  );
};

export default LoginScreen;
